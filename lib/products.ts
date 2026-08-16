import { APIResponse, successResponse } from "@/lib/apiResponse";
import Product from "@/models/product.model";
import {
  ProductListParams,
  ProductListResult,
  ProductSort,
} from "@/types/product";
import { connection } from "next/server";
import { AppError } from "./appError";
import { findCategoryBySlug, findOccasionBySlug } from "./getters";

const LIMIT = 20;

const validSorts = ["hand-picked", "best-sellers", "new", "popular"] as const;

export async function getProducts(
  filters: ProductListParams = {},
  skip: number = 0,
  usedBy: "route" | "client" = "route",
  page: number = 1,
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
  const hasMore = (page || 1) * LIMIT < total;
  const refinedProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
    category: product.category.toString(),
    occasion: product.occasion?.toString() || null,
  }));
  return successResponse("Products fetched", {
    products: usedBy == "client" ? refinedProducts : products,
    total,
    totalPages,
    page: page || 1,
    hasMore: total === 0 ? false : hasMore,
  });
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
  if (sort === "hand-picked") filter.isHandPicked = true;
  if (sort === "best-sellers") filter.isBestSeller = true;
  const slugs: Record<string, string> = {};
  if (category) {
    const categoryObj = await findCategoryBySlug(category);
    if (categoryObj && categoryObj.slug) {
      filter.category = categoryObj._id;
      slugs.category = categoryObj.slug;
    }
    if (categoryObj === null && usedBy === "route") {
      throw AppError.badRequest("Invalid category");
    }
  }

  if (occasion) {
    const occasionObj = await findOccasionBySlug(occasion);
    if (occasionObj && occasionObj.slug) {
      filter.occasion = occasionObj._id;
      slugs.occasion = occasionObj.slug;
    }
    if (occasionObj === null && usedBy === "route") {
      throw AppError.badRequest("Invalid occasion");
    }
  }
  const skip = (page - 1) * LIMIT;
  return { filters: filter, sort: sort as ProductSort, page, skip, slugs };
}
