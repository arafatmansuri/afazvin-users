"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import type { CollectionEntity } from "@/constants/catalog";

interface ContextNavigationProps {
  items: CollectionEntity[];
  activeSlug: string;
}

export function ContextNavigation({
  items,
  activeSlug,
}: ContextNavigationProps) {
  const activeRef = useRef<HTMLAnchorElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = activeRef.current;
    const scroller = scrollerRef.current;
    if (!el || !scroller) return;
    const elLeft = el.offsetLeft;
    const elWidth = el.offsetWidth;
    const target =
      elLeft - scroller.clientWidth / 2 + elWidth / 2;
    scroller.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [activeSlug]);

  return (
    <div
      ref={scrollerRef}
      className="flex gap-5 md:gap-7 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-1 px-1 pb-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      role="navigation"
      aria-label="Browse collections"
    >
      {items.map((item) => {
        const active = item.slug === activeSlug;
        return (
          <Link
            key={item.slug}
            href={`/clothing/${item.slug}`}
            ref={active ? activeRef : undefined}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group flex shrink-0 snap-start flex-col items-center gap-2.5 w-[76px] md:w-[88px]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-sm",
            )}
          >
            <span
              className={cn(
                "relative block h-[72px] w-[72px] md:h-[84px] md:w-[84px] overflow-hidden rounded-full bg-surface transition-all duration-200",
                active
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "ring-1 ring-border group-hover:ring-accent/60",
              )}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="84px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <span className="absolute inset-0 bg-surface" />
              )}
            </span>
            <span
              className={cn(
                "text-center text-xs md:text-sm leading-tight transition-colors duration-200",
                active
                  ? "font-semibold text-text-primary"
                  : "font-medium text-text-secondary group-hover:text-text-primary",
              )}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
