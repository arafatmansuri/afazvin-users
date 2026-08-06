"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const CATEGORIES = [
  { name: "Blazers", slug: "blazers" },
  { name: "Suit Sherwani", slug: "suit-sherwani" },
  { name: "Indo Western", slug: "indo-western" },
  { name: "Jodhpuri", slug: "jodhpuri" },
  { name: "Fabrics", slug: "fabrics" },
  { name: "Readymade Garments", slug: "readymade-garments" },
  { name: "Ethnic Wear", slug: "ethnic-wear" },
  { name: "Koti Indo", slug: "koti-indo" },
  { name: "Koti Kurta", slug: "koti-kurta" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-[100] transition-all duration-250 ease-[var(--ease-in-out-standard)]",
          scrolled
            ? "h-16 md:h-[72px] bg-secondary/95 backdrop-blur-sm shadow-xs"
            : "h-20 md:h-24 bg-transparent",
        )}
      >
        <div className="container-xl h-full flex items-center justify-between gap-6">
          <Link href="/" className="relative shrink-0 z-10">
            <span className="font-display text-xl md:text-2xl font-semibold tracking-[0.2em] text-text-inverse uppercase">
              Afazvin
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <div
              className="relative"
              onMouseEnter={() => setCatsOpen(true)}
              onMouseLeave={() => setCatsOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 type-eyebrow text-text-inverse/90 hover:text-accent transition-colors duration-200"
                aria-expanded={catsOpen}
                aria-haspopup="true"
              >
                Categories
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    catsOpen && "rotate-180",
                  )}
                  strokeWidth={1.5}
                />
              </button>

              <div
                className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ease-[var(--ease-out-standard)]",
                  catsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1 pointer-events-none",
                )}
              >
                <div
                  role="menu"
                  className="min-w-[240px] rounded-md bg-surface shadow-md py-2 border border-border"
                >
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      role="menuitem"
                      className="block px-5 py-2.5 text-sm text-text-primary hover:bg-background hover:text-primary transition-colors"
                      onClick={() => setCatsOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/about"
              className="type-eyebrow text-text-inverse/90 hover:text-accent transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="type-eyebrow text-text-inverse/90 hover:text-accent transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link href="#inquiry">
              <Button
                variant="primary"
                className="h-11 px-6 text-sm tracking-wider uppercase"
              >
                Inquire Now
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden relative z-10 flex h-11 w-11 items-center justify-center text-text-inverse"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[90] lg:hidden transition-opacity duration-300",
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-secondary/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[min(100%,320px)] bg-secondary shadow-lg transition-transform duration-300 ease-[var(--ease-out-standard)] flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
            <span className="font-display text-lg tracking-[0.15em] text-text-inverse uppercase">
              Afazvin
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="h-10 w-10 flex items-center justify-center text-text-inverse"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
            <p className="type-eyebrow text-accent mb-3 px-2">Categories</p>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="block px-2 py-3 text-base text-text-inverse/90 hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <div className="border-t border-white/10 my-4" />
            <Link
              href="/about"
              className="block px-2 py-3 text-base text-text-inverse/90 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block px-2 py-3 text-base text-text-inverse/90 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="block px-2 py-3 text-base text-text-inverse/90 hover:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              FAQs
            </Link>
          </nav>

          <div className="p-5 border-t border-white/10">
            <Link href="#inquiry" onClick={() => setMobileOpen(false)}>
              <Button
                variant="primary"
                fullWidth
                className="uppercase tracking-wider"
              >
                Inquire Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
