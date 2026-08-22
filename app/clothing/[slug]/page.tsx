import CollectionBody from "@/components/clothing/CollectionBody";
import { ProductSkeleton, Skeleton } from "@/components/ui/ProductSkeleton";
import { resolveCollectionSlug } from "@/constants/catalog";
import { getCategories, getOccasions } from "@/lib/placeholder-data/landing";
import type { Metadata } from "next";
import { Suspense } from "react";

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const categories = await getCategories();
  const occasions = await getOccasions();
  const entity = resolveCollectionSlug(slug, categories, occasions);
  if (!entity) {
    return {
      title: "Collection | Afazvin Wholesale Menswear",
    };
  }
  return {
    title: `${entity.name} | Afazvin Wholesale Menswear`,
    description:
      entity.description ??
      `Browse our ${entity.name} menswear collection for wholesale partners.`,
    icons: { icon: "/icon.png" },
  };
}

export default async function CollectionPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  return (
    <Suspense fallback={<Skeleton />}>
      <CollectionPageSuspense params={params} searchParams={searchParams} />
    </Suspense>
  );
}
export async function CollectionPageSuspense({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  const { slug } = await params;

  return (
    <Suspense fallback={<ProductSkeleton />}>
      <CollectionBody slug={slug} searchParams={searchParams} />
    </Suspense>
  );
}
