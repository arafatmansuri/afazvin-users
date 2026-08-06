import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/landingSections/Hero";
import { Categories } from "@/components/landingSections/Categories";
import { Occasions } from "@/components/landingSections/Occasions";
import { BestSellers } from "@/components/landingSections/BestSellers";
import { WhyChooseUs } from "@/components/landingSections/WhyChooseUs";
import { Statistics } from "@/components/landingSections/Statistics";
import { Testimonials } from "@/components/landingSections/Testimonials";
import { InquirySection } from "@/components/landingSections/InquirySection";
import { FloatingActions } from "@/components/ui/FloatingActions";

export default function LandingPage() {
  // Server-rendered. Categories, Occasions, and Best Sellers use
  // placeholder data here. Replace with server fetches when models are wired:
  // const categories = await getCategories();
  // const occasions = await getOccasions();
  // const bestSellers = await getBestSellers(10);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Occasions />
        <BestSellers />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
        <InquirySection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
