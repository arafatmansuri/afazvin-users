"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface ScrollCarouselProps {
  children: ReactNode;
  className?: string;
  /** Extra class on the scroll track */
  trackClassName?: string;
  /** Scroll distance as fraction of container width (default 0.75) */
  scrollRatio?: number;
}

export function ScrollCarousel({
  children,
  className,
  trackClassName,
  scrollRatio = 0.8,
}: ScrollCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft >= 5);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows, children]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * scrollRatio * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className={cn("relative group/carousel", className)}>
      {/* Prev */}
      <button
        type="button"
        aria-label="Scroll previous"
        onClick={() => scrollByDir(-1)}
        disabled={!canPrev}
        className={cn(
          `absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 md:-translate-x-3`,
          `flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full`,
          "border border-border bg-background/95 text-text-primary shadow-md backdrop-blur-sm",
          "transition-all duration-200",
          "hover:border-primary hover:text-primary",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          `disabled:opacity-0 disabled:pointer-events-none`,
          `opacity-100 md:opacity-0 ${canPrev ? "md:group-hover/carousel:opacity-100" : "md:group-hover/carousel:opacity-0"}`,
        )}
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label="Scroll next"
        onClick={() => scrollByDir(1)}
        disabled={!canNext}
        className={cn(
          "absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 md:translate-x-3",
          `${canNext ? "flex" : "hidden"} h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full`,
          "border border-border bg-background/95 text-text-primary shadow-md backdrop-blur-sm",
          "transition-all duration-200",
          "hover:border-primary hover:text-primary",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          "disabled:opacity-0 disabled:pointer-events-none",
          "opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100",
        )}
      >
        <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
      </button>

      <div
        ref={trackRef}
        className={cn(
          "flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth",
          "scrollbar-none pb-2 -mx-1 px-1",
          trackClassName,
        )}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
    </div>
  );
}
