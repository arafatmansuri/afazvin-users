import { ProductListing } from "@/components/clothing/ProductListing";
import { InquirySection } from "@/components/landingSections/InquirySection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { ProductSkeleton } from "@/components/ui/ProductSkeleton";
import { connectDB } from "@/lib/mongoose";
import { getCategories, getOccasions } from "@/lib/placeholder-data/landing";
import { getProducts, getProductsFilter } from "@/lib/products";
import type { Metadata } from "next";
import { Suspense } from "react";
export const instant = false;

export const metadata: Metadata = {
  title: "Clothing | Afazvin Wholesale Menswear",
  description:
    "Browse the full Afazvin wholesale collection — blazers, sherwanis, Indo-western, Jodhpuri, ethnic wear and more for retail partners.",
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ClothingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  await connectDB();
  const { filters, skip, slugs } = await getProductsFilter({
    searchParams: new URLSearchParams(params as Record<string, string>),
    usedBy: "client",
  });
  const categories = await getCategories();
  const occasions = await getOccasions();
  const initialData = await getProducts(filters, skip);
  return (
    <>
      <Navbar categories={categories} />
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
      <Footer categories={categories} />
      <FloatingActions />
    </>
  );
}
