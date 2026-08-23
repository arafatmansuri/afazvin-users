import { AboutHero } from "@/components/about/AboutHero";
import { BrandStory } from "@/components/about/BrandStory";
import { ShopImages } from "@/components/about/ShopImages";
import { InquirySection } from "@/components/landingSections/InquirySection";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getCategories } from "@/lib/placeholder-data/landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Afazvin Wholesale Menswear",
  description:
    "Learn about Afazvin — a wholesale menswear manufacturer of blazers, sherwanis, Indo-western, Jodhpuri and ethnic wear for retail partners across India.",
};

export default async function AboutPage() {
  const categories = await getCategories();
  return (
    <main className="bg-background min-h-screen">
      {/* 1. Hero — page identity first */}
      <AboutHero />

      {/* 2. Breadcrumb — orientation after hero */}
      <div className="container-xl pb-10 md:pb-14">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />
      </div>

      {/* 3. Shop / showroom photography */}
      <ShopImages />

      {/* 4. Long brand description */}
      <BrandStory />

      {/* 5. Inquiry — general (no product) */}
      <InquirySection categories={categories} inquiryType="generalInquiry" />
    </main>
  );
}
