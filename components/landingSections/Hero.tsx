"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-secondary overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop"
          alt="Premium menswear tailored blazer"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-secondary/30" />
      </div>

      <div className="container-xl relative z-10 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="type-eyebrow text-accent mb-5 animate-[fadeUp_0.5s_var(--ease-out-standard)_both]">
            Wholesale Menswear Manufacturer
          </p>

          <h1 className="type-hero text-text-inverse mb-6 animate-[fadeUp_0.5s_var(--ease-out-standard)_0.1s_both]">
            Crafted for retailers who demand distinction
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-text-inverse/80 mb-10 max-w-lg animate-[fadeUp_0.5s_var(--ease-out-standard)_0.18s_both]">
            Premium blazers, sherwanis, Indo-western & ethnic wear —
            manufactured in-house for shops and boutiques across India.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-[fadeUp_0.5s_var(--ease-out-standard)_0.26s_both]">
            <Link href="#inquiry">
              <Button
                variant="primary"
                className="uppercase tracking-wider px-8"
              >
                Get Wholesale Pricing
              </Button>
            </Link>
            <Link href="#categories">
              <Button
                variant="secondary"
                className="border-text-inverse/40 text-text-inverse hover:bg-text-inverse/10 uppercase tracking-wider px-8"
              >
                Explore Collection
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-inverse/60">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
