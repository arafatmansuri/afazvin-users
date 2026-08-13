"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    id: "1",
    quote:
      "Afazvin has been our go-to for sherwanis and Indo-western for three seasons. The finish quality is consistent and their wholesale timelines are reliable — exactly what a multi-store retailer needs.",
    name: "Rajesh Mehta",
    shop: "Mehta Menswear",
    city: "Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "2",
    quote:
      "We stocked their Jodhpuri and blazer range last festive season and sold through faster than expected. The packaging and presentation make it easy to put on the floor immediately.",
    name: "Priya Sharma",
    shop: "The Occasion Store",
    city: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "3",
    quote:
      "Clear communication, solid quality control, and a catalog that actually matches what our customers ask for. Afazvin feels like a manufacturing partner, not just a supplier.",
    name: "Vikram Singh",
    shop: "Singh & Sons Apparel",
    city: "Lucknow",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
  },
];

export function Testimonials() {

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => {
      setIndex(next);
      setFading(false);
    }, 280);
  }, []);

  const next = useCallback(() => {
    goTo((index + 1) % TESTIMONIALS.length);
    if (index + 1 >= TESTIMONIALS.length) {
      setIndex(0);
    }
  }, [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [paused, next]);

  const current = TESTIMONIALS[index];

  return (
    <section className="section-padding bg-background">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Trusted by Retailers"
          title="What Our Partners Say"
        />

        <div
          className="mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <blockquote
            className={cn(
              "relative rounded-lg border border-accent/30 bg-surface px-8 py-12 md:px-14 md:py-16 shadow-sm transition-opacity duration-300 ease-[var(--ease-in-out-standard)]",
              fading ? "opacity-0" : "opacity-100",
            )}
          >
            <p className="font-display text-xl md:text-2xl leading-relaxed text-text-primary text-center">
              “{current.quote}”
            </p>

            <footer className="mt-10 flex flex-col items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <cite className="not-italic font-semibold text-text-primary">
                  {current.name}
                </cite>
                <p className="text-sm text-text-secondary mt-0.5">
                  {current.shop} · {current.city}
                </p>
              </div>
            </footer>
          </blockquote>

          <div className="flex justify-center gap-2 mt-8" role="tablist">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index
                    ? "w-6 bg-primary"
                    : "w-2 bg-border hover:bg-text-secondary/40",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
