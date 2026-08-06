import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InquiryForm } from "@/components/forms/InquiryForm";

export function InquirySection() {
  return (
    <section id="inquiry" className="section-padding bg-surface">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2 space-y-6">
            <SectionHeader
              eyebrow="Partner With Us"
              title="Request Wholesale Pricing"
              description="Tell us about your shop and the categories you’re interested in. We typically respond within one business day."
              align="left"
              className="mb-0"
            />

            <div className="hidden lg:block relative aspect-[4/5] rounded-lg overflow-hidden mt-8">
              <Image
                src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop"
                alt="Afazvin wholesale menswear craftsmanship"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-lg bg-background p-6 md:p-10 shadow-md border border-border/60">
              <InquiryForm defaultCategory="General" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
