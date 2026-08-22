import { CollectionListing } from "@/components/clothing/CollectionListing";
import { ContextNavigation } from "@/components/clothing/ContextNavigation";
import { YouMayAlsoLike } from "@/components/clothing/YouMayAlsoLike";
import { InquirySection } from "@/components/landingSections/InquirySection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCardsSkeleton, ProductSkeleton } from "@/components/ui/ProductSkeleton";
import { getContextNavItems, resolveCollectionSlug } from "@/constants/catalog";
import { getCategories, getOccasions } from "@/lib/placeholder-data/landing";
import { getProducts, getProductsFilter } from "@/lib/products";
import type { ProductSort } from "@/types/product";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

interface CollectionBodyProps {
  slug: string;
  searchParams: SearchParams;
}

export default async function CollectionBody({
  slug,
  searchParams,
}: CollectionBodyProps) {
  const categories = await getCategories();
  const occasions = await getOccasions();
  const entity = resolveCollectionSlug(slug, categories, occasions);
  if (!entity) notFound();

  const params = await searchParams;
  const flat: Record<string, string> = {};
  for (const [k, v] of Object.entries(params)) {
    if (typeof v === "string") flat[k] = v;
  }

  // Scope listing to this collection via query params the product service understands
  if (entity.type === "category") flat.category = entity.slug;
  else flat.occasion = entity.slug;

  const { filters, skip, page, sort } = await getProductsFilter({
    searchParams: new URLSearchParams(flat),
    usedBy: "client",
  });

  const initialData = await getProducts(filters, skip, "client", page);

  // You May Also Like: simple finite set from a different collection slice
  const relatedParams = new URLSearchParams();
  if (entity.type === "category") {
    // related: popular across catalog
    relatedParams.set("sort", "popular");
  } else {
    relatedParams.set("sort", "best-sellers");
  }
  const relatedFilter = await getProductsFilter({
    searchParams: relatedParams,
    usedBy: "client",
  });
  const relatedRes = await getProducts(relatedFilter.filters, 0, "client", 1);
  const primaryIds = new Set(
    (initialData.data?.products ?? []).map((p) => p._id),
  );
  const recommendations = (relatedRes.data?.products ?? [])
    .filter((p) => !primaryIds.has(p._id))
    .slice(0, 4);

  const navItems = getContextNavItems(entity.type, categories, occasions);
  const validSorts: ProductSort[] = [
    "hand-picked",
    "best-sellers",
    "new",
    "popular",
  ];
  const initialSort = sort && validSorts.includes(sort) ? sort : undefined;

  return (
    <main className="bg-background min-h-screen">
      <div className="container-xl pt-28 md:pt-32 pb-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Clothing", href: "/clothing" },
            { label: entity.name },
          ]}
          className="mb-6"
        />
        <div className="mb-8 md:mb-6">
          <ContextNavigation items={navItems} activeSlug={entity.slug} />
        </div>

        <Suspense fallback={<ProductCardsSkeleton />}>
          <CollectionListing
            context={{
              type: entity.type,
              slug: entity.slug,
              name: entity.name,
              description: entity.description,
            }}
            initialData={initialData}
            initialSort={initialSort}
          />
        </Suspense>

        <YouMayAlsoLike products={recommendations} />
      </div>

      <div className="mt-16 md:mt-24">
        <InquirySection categories={categories} />
      </div>
    </main>
  );
}
