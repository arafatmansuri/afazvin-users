import { BestSellers } from "@/components/landingSections/BestSellers";
import { Categories } from "@/components/landingSections/Categories";
import { Hero } from "@/components/landingSections/Hero";
import { InquirySection } from "@/components/landingSections/InquirySection";
import { Occasions } from "@/components/landingSections/Occasions";
import { Statistics } from "@/components/landingSections/Statistics";
import { Testimonials } from "@/components/landingSections/Testimonials";
import { WhyChooseUs } from "@/components/landingSections/WhyChooseUs";
import {
  getBestSellers,
  getCategories,
  getOccasions,
} from "@/lib/placeholder-data/landing";

export default async function LandingPage() {
  const categoriesWithGeneral = await getCategories();
  const categories = categoriesWithGeneral.filter(
    (cat) => cat.slug !== "general",
  );
  const occasions = await getOccasions();
  const bestSellers = await getBestSellers(10);
  return (
    <>
      <main>
        <Hero />
        <Categories categories={categories} />
        <Occasions occasions={occasions} />
        <BestSellers {...{ products: bestSellers, bestSellers }} />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
        <InquirySection categories={categoriesWithGeneral} />
      </main>
    </>
  );
}
