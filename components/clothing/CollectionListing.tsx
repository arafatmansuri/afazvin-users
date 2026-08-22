"use client";

import { DiscoveryControls } from "@/components/clothing/DiscoveryControls";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductSkeleton } from "@/components/ui/ProductSkeleton";
import { APIResponse } from "@/lib/apiResponse";
import { useFetchProductsInfinite } from "@/lib/react-query/mutations";
import { IProduct, ProductListResult, ProductSort } from "@/types/product";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";

export type CollectionContext = {
  type: "category" | "occasion";
  slug: string;
  name: string;
};

interface CollectionListingProps {
  context: CollectionContext;
  initialData: APIResponse<ProductListResult>;
  initialSort?: ProductSort;
}

function parseSort(params: URLSearchParams): ProductSort | undefined {
  const sortRaw = params.get("sort");
  const valid: ProductSort[] = [
    "hand-picked",
    "best-sellers",
    "new",
    "popular",
  ];
  return sortRaw && valid.includes(sortRaw as ProductSort)
    ? (sortRaw as ProductSort)
    : undefined;
}

export function CollectionListing({
  context,
  initialData,
  initialSort,
}: CollectionListingProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sort = useMemo(
    () => parseSort(searchParams) ?? initialSort,
    [searchParams, initialSort],
  );

  const filters = useMemo(() => {
    const base: {
      category?: string;
      occasion?: string;
      sort?: ProductSort;
    } = {};
    if (context.type === "category") base.category = context.slug;
    else base.occasion = context.slug;
    if (sort) base.sort = sort;
    return base;
  }, [context, sort]);

  const sortMatchesInitial = sort === initialSort;

  const query = useFetchProductsInfinite(
    filters,
    sortMatchesInitial ? initialData : undefined,
  );

  const products =
    query.data?.pages.flatMap((page) => page.data?.products ?? []) ?? [];
  const total =
    query.data?.pages[0]?.data?.total ?? initialData.data?.total ?? 0;

  const loadMoreRef = useRef<HTMLDivElement>(null);

  const fetchNext = useCallback(() => {
    if (query.hasNextPage && !query.isFetchingNextPage) {
      void query.fetchNextPage();
    }
  }, [query]);

  useEffect(() => {
    const el = loadMoreRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) fetchNext();
      },
      { rootMargin: "400px 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNext, products.length, query.hasNextPage]);

  const setSort = (next: ProductSort | undefined) => {
    const q = new URLSearchParams();
    if (next) q.set("sort", next);
    const s = q.toString();
    router.push(s ? `${pathname}?${s}` : pathname, { scroll: false });
  };

  return (
    <div>
      <DiscoveryControls value={sort} onChange={setSort} resultCount={total} />

      {products.length === 0 && !query.isLoading ? (
        <div className="flex min-h-[320px] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
          <p className="text-lg md:text-xl text-text-primary">
            No products found.
          </p>
          <p className="text-sm text-text-secondary max-w-sm">
            Try another discovery option or browse a different collection.
          </p>
          <Link
            href="/clothing"
            className="text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            Browse all clothing
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

            {query.isFetchingNextPage &&
              Array.from({ length: 4 }).map((_, i) => (
                <ProductSkeleton
                  key={`sk-${i}`}
                  className={
                    i >= 2 ? "max-md:hidden" : i >= 3 ? "md:max-lg:hidden" : ""
                  }
                />
              ))}
          </div>

          <div ref={loadMoreRef} className="h-4" aria-hidden />

          <div className="mt-8 flex flex-col items-center justify-center gap-3 py-6">
            {query.isFetchingNextPage && (
              <p className="text-sm text-text-secondary" role="status">
                Loading more products…
              </p>
            )}

            {query.isFetchNextPageError && (
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-text-secondary">
                  Couldn&apos;t load more products.
                </p>
                <button
                  type="button"
                  onClick={() => void query.fetchNextPage()}
                  className="text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  Try again
                </button>
              </div>
            )}

            {!query.hasNextPage &&
              products.length > 0 &&
              !query.isFetchingNextPage && (
                <p className="text-sm text-text-secondary py-4">
                  You&apos;ve reached the end of the collection.
                </p>
              )}
          </div>
        </>
      )}
    </div>
  );
}
