import { ContactHero } from "@/components/contact/ContactHero";
import { FollowUs } from "@/components/contact/FollowUs";
import { GetInTouch } from "@/components/contact/GetInTouch";
import { SendMessage } from "@/components/contact/SendMessage";
import { VisitShop } from "@/components/contact/VisitShop";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Afazvin Wholesale Menswear",
  description:
    "Contact Afazvin for wholesale menswear enquiries — phone, email, WhatsApp, or visit our showroom.",
};

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* 1. Hero */}
      <ContactHero />

      {/* 2. Breadcrumb */}
      <div className="container-xl py-8 md:py-10">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />
      </div>

      {/* 3. Get In Touch */}
      <GetInTouch />

      {/* 4. Send a Message */}
      <SendMessage />

      {/* 5. Follow Us */}
      <FollowUs />

      {/* 6. Visit Our Shop */}
      <VisitShop />
    </main>
  );
}
