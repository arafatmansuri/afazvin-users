import Cloths from "@/components/clothing/Cloths";
import { Skeleton } from "@/components/ui/ProductSkeleton";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Clothing | Afazvin Wholesale Menswear",
  description:
    "Browse the full Afazvin wholesale collection — blazers, sherwanis, Indo-western, Jodhpuri, ethnic wear and more for retail partners.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default function ClothingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Cloths searchParams={searchParams} />
      </Suspense>
    </>
  );
}
