"use client";

import {
  ProductFilters,
  type ClothingFilters,
} from "@/components/clothing/ProductFilters";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductSkeleton } from "@/components/ui/ProductSkeleton";
import { APIResponse } from "@/lib/apiResponse";
import { useFetchProductsInfinite } from "@/lib/react-query/mutations";
import { ICategory, IOccasion } from "@/types";
import { ProductListResult, ProductSort } from "@/types/product";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef } from "react";

interface ProductListingProps {
  initialData: APIResponse<ProductListResult>;
  initialFilters: ClothingFilters;
  categories: ICategory[];
  occasions: IOccasion[];
}

function filtersFromSearchParams(params: URLSearchParams): ClothingFilters {
  const category = params.get("category") || undefined;
  const occasion = params.get("occasion") || undefined;
  const sortRaw = params.get("sort");
  const valid: ProductSort[] = [
    "hand-picked",
    "best-sellers",
    "new",
    "popular",
  ];
  const sort =
    sortRaw && valid.includes(sortRaw as ProductSort)
      ? (sortRaw as ProductSort)
      : undefined;
  return { category, occasion, sort };
}

function buildQueryString(filters: ClothingFilters) {
  const q = new URLSearchParams();
  if (filters.category) q.set("category", filters.category);
  if (filters.occasion && filters.occasion !== "All")
    q.set("occasion", filters.occasion);
  if (filters.sort) q.set("sort", filters.sort);
  const s = q.toString();
  return s ? `?${s}` : "";
}

export function ProductListing({
  initialData,
  initialFilters,
  categories,
  occasions,
}: ProductListingProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const filters = useMemo(
    () => filtersFromSearchParams(searchParams) ?? initialFilters,
    [searchParams, initialFilters],
  );

  const filtersMatchInitial =
    filters.category === initialFilters.category &&
    filters.occasion === initialFilters.occasion &&
    filters.sort === initialFilters.sort;

  const query = useFetchProductsInfinite(
    filters,
    filtersMatchInitial ? initialData : undefined,
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
        if (entries[0]?.isIntersecting) {
          fetchNext();
        }
      },
      { rootMargin: "400px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNext, products.length, query.hasNextPage]);

  const setFilters = (next: ClothingFilters) => {
    router.push(`${pathname}${buildQueryString(next)}`, { scroll: false });
  };

  const clearFilters = () => setFilters({});

  return (
    <div>
      <ProductFilters
        value={filters}
        onChange={setFilters}
        categories={categories}
        occasions={occasions}
      />

      <p className="mt-6 text-sm text-text-secondary">
        <span className="text-text-primary tabular-nums">{total}</span>
        {total === 1 ? " Product" : " Products"}
      </p>

      {products.length === 0 && !query.isLoading ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-6 px-4 py-16 text-center">
          <p className="text-lg md:text-xl text-text-primary">
            No products found.
          </p>
          <Button variant="secondary" onClick={clearFilters}>
            Clear filters
          </Button>
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
