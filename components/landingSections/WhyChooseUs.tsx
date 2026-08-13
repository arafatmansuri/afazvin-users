import { Factory, MapPin, ShieldCheck, Truck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cacheLife } from "next/cache";

const FEATURES = [
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description:
      "Every piece is cut, stitched and finished under one roof — giving you consistent quality and reliable lead times.",
  },
  {
    icon: ShieldCheck,
    title: "Assured Quality Control",
    description:
      "Multi-stage inspection on fabric, construction and finishing so what your customers wear reflects well on your shop.",
  },
  {
    icon: Truck,
    title: "Pan-India Fulfillment",
    description:
      "Organised dispatch to retailers across major cities, with clear communication from order to delivery.",
  },
  {
    icon: MapPin,
    title: "Retailer Partnership Focus",
    description:
      "Built for shops and boutiques — volume pricing, seasonal collections and support tailored to wholesale buyers.",
  },
];

export async function WhyChooseUs() {
  "use cache";
  cacheLife("days");
  return (
    <section className="section-padding bg-surface">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built for Wholesale Partners"
          description="The operational backbone that lets you stock with confidence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center sm:text-left"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center mb-4 text-text-secondary group-hover:text-primary transition-colors duration-200">
                  <Icon className="h-10 w-10" strokeWidth={1.5} />
                </div>
                <h3 className="type-h3 text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
