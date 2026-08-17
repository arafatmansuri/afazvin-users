import { ProductListing } from "@/components/clothing/ProductListing";
import { InquirySection } from "@/components/landingSections/InquirySection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductSkeleton } from "@/components/ui/ProductSkeleton";
import { connectDB } from "@/lib/mongoose";
import { getCategories, getOccasions } from "@/lib/placeholder-data/landing";
import { getProducts, getProductsFilter } from "@/lib/products";
import { Suspense } from "react";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function Cloths({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  await connectDB();
  const { filters, skip, slugs, page } = await getProductsFilter({
    searchParams: new URLSearchParams(params as Record<string, string>),
    usedBy: "client",
  });
  const categories = await getCategories();
  const occasions = await getOccasions();
  const initialData = await getProducts(filters, skip, "client", page);
  return (
    <>
      <main className="bg-background min-h-screen">
        <div className="container-xl pt-28 md:pt-32 pb-6">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Clothing" }]}
            className="mb-6"
          />

          <header className="mb-10 md:mb-16">
            <h1 className="type-h1 text-text-primary">Clothing</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
              The full manufacturing range for retail partners — tailored
              menswear across categories, crafted for shops that value finish
              and consistency.
            </p>
          </header>

          <Suspense fallback={<ProductSkeleton />}>
            <ProductListing
              initialData={initialData}
              initialFilters={{
                category: slugs.category,
                occasion: slugs.occasion,
                sort: filters.sort,
              }}
              categories={categories.filter((cat) => cat.slug !== "general")}
              occasions={occasions}
            />
          </Suspense>
        </div>

        <div className="mt-16 md:mt-24">
          <InquirySection categories={categories} />
        </div>
      </main>
    </>
  );
}
