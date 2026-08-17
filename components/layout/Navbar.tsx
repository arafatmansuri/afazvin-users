"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavbarProps = {
  categories: { name: string; slug: string; _id: string }[];
};

export function Navbar({ categories }: NavbarProps) {
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
          "fixed top-0 inset-x-0 z-100 transition-all duration-250 ease-(--ease-in-out-standard)",
          scrolled
            ? "h-18 md:h-20 bg-secondary/95 backdrop-blur-sm shadow-xs"
            : "h-22 md:h-26 bg-transparent",
        )}
      >
        <div className="container-xl h-full flex items-center justify-between gap-6">
          <Link
            href="/"
            className="relative shrink-0 z-10 flex items-center py-1"
            aria-label="Afazvin home"
          >
            <Image
              src="/logo-nav.png"
              alt="Afazvin"
              width={220}
              height={155}
              className={cn(
                "w-auto max-w-[min(280px,45vw)] object-contain object-left transition-all duration-250",
                scrolled ? "h-11 md:h-12" : "h-12 md:h-14 lg:h-16",
              )}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              href="/clothing"
              prefetch={true}
              className="type-eyebrow text-text-inverse/90 hover:text-accent transition-colors duration-200"
            >
              Products
            </Link>
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
                  {categories.map((cat) => (
                    <Link
                      key={cat._id.toString()}
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

          {/* Mobile toggle — single close control when open */}
          <button
            type="button"
            className={`lg:hidden relative z-[110] flex h-11 w-11 items-center justify-center ${mobileOpen || scrolled ? "text-text-inverse": "text-text-primary"}
            `}
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

      {/* Mobile drawer — no second close icon */}
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
          aria-hidden
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[min(100%,320px)] bg-secondary shadow-lg transition-transform duration-300 ease-[var(--ease-out-standard)] flex flex-col pt-[72px] md:pt-20",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="px-5 pt-3 pb-4 border-b border-white/10">
            <Image
              src="/logo-nav.png"
              alt="Afazvin"
              width={180}
              height={126}
              className="h-11 w-auto max-w-[180px] object-contain object-left"
            />
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1">
            <p className="type-eyebrow text-accent mb-3 px-2">Categories</p>
            {categories.map((cat) => (
              <Link
                key={cat._id.toString()}
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
