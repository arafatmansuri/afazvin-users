import { APIResponse, successResponse } from "@/lib/apiResponse";
import Product from "@/models/product.model";
import {
  ProductListParams,
  ProductListResult,
  ProductSort,
} from "@/types/product";
import { findCategoryBySlug, findOccasionBySlug } from "./getters";
import { connection } from "next/server";

const LIMIT = 20;

const validSorts = ["hand-picked", "best-sellers", "new", "popular"] as const;

export async function getProducts(
  filters: ProductListParams = {},
  skip: number = 0,
): Promise<APIResponse<ProductListResult>> {
  await connection();
  const [products, total] = await Promise.all([
    Product.find(filters)
      .sort(
        filters.sort === "new"
          ? {
              createdAt: -1 as const,
              _id: -1 as const,
            }
          : filters.sort === "popular"
            ? {
                views: -1 as const,
                createdAt: -1 as const,
                _id: -1 as const,
              }
            : {
                createdAt: -1 as const,
                _id: -1 as const,
              },
      )
      .skip(skip)
      .limit(LIMIT)
      .lean(),

    Product.countDocuments(filters),
  ]);
  const totalPages = Math.ceil(total / LIMIT);
  const hasMore = (filters.page || 1) * LIMIT < total;
  const refinedProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
    category: product.category.toString(),
    occasion: product.occasion?.toString() || null,
  }));
  return successResponse("Products fetched", {
    products: refinedProducts,
    total,
    totalPages,
    page: filters.page || 1,
    hasMore: total === 0 ? false : hasMore,
  });
}

export function parseProductSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
): ProductListParams {
  const get = (key: string) => {
    const v = searchParams[key];
    return typeof v === "string" && v.length > 0 ? v : undefined;
  };

  const sortRaw = get("sort");
  const validSorts: ProductSort[] = [
    "hand-picked",
    "best-sellers",
    "new",
    "popular",
  ];
  const sort =
    sortRaw && validSorts.includes(sortRaw as ProductSort)
      ? (sortRaw as ProductSort)
      : undefined;

  return {
    category: get("category"),
    occasion: get("occasion"),
    sort,
    page: 1,
  };
}
export async function getProductsFilter({
  searchParams,
  usedBy,
}: {
  searchParams: URLSearchParams;
  usedBy: "route" | "client";
}): Promise<{
  filters: ProductListParams;
  sort: ProductSort;
  page: number;
  skip: number;
  slugs: Record<string, string>;
}> {
  const category = searchParams.get("category");
  const occasion = searchParams.get("occasion");
  const sortParam = searchParams.get("sort");
  const pageParam = searchParams.get("page");

  const page = Math.max(1, Number.parseInt(pageParam || "1", 10) || 1);

  const sort = validSorts.includes(sortParam as (typeof validSorts)[number])
    ? sortParam
    : "new";

  const filter: Record<string, unknown> = {};
  const slugs: Record<string, string> = {};
  if (category) {
    const categoryObj = await findCategoryBySlug(category);
    if (categoryObj && categoryObj.slug) {
      filter.category = categoryObj._id;
      slugs.category = categoryObj.slug;
    }
  }

  if (occasion) {
    const occasionObj = await findOccasionBySlug(occasion);
    if (occasionObj && occasionObj.slug) {
      filter.occasion = occasionObj._id;
      slugs.occasion = occasionObj.slug;
    }
  }
  if (sort === "hand-picked") filter.isHandPicked = true;
  if (sort === "best-sellers") filter.isBestSeller = true;
  const skip = (page - 1) * LIMIT;
  return { filters: filter, sort: sort as ProductSort, page, skip, slugs };
}
