"use client";

import type { ProductMediaItem } from "@/lib/product/media";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface ProductMediaGalleryProps {
  media: ProductMediaItem[];
  productName: string;
}

export function ProductMediaGallery({
  media,
  productName,
}: ProductMediaGalleryProps) {
  if (!media.length) {
    return (
      <div className="aspect-[4/5] bg-surface rounded-md flex items-center justify-center text-text-secondary text-sm">
        No media available
      </div>
    );
  }

  return (
    <>
      {/* Desktop: 2-column editorial grid — plain images, no per-tile zoom */}
      <div className="hidden md:grid grid-cols-2 gap-3 lg:gap-4">
        {media.map((item) => (
          <DesktopMediaTile key={item.id} item={item} />
        ))}
      </div>

      {/* Mobile: horizontal carousel */}
      <div className="md:hidden">
        <MobileMediaCarousel media={media} productName={productName} />
      </div>
    </>
  );
}

function DesktopMediaTile({ item }: { item: ProductMediaItem }) {
  if (item.kind === "video") {
    return (
      <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-secondary">
        <video
          src={item.src}
          className="h-full w-full object-cover"
          controls
          playsInline
          autoPlay={true}
          preload="metadata"
          aria-label={item.alt}
        />
        <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-sm bg-secondary/80 px-2 py-1 text-xs text-text-inverse">
          <Play className="h-3 w-3" strokeWidth={2} />
          Video
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 1024px) 45vw, 35vw"
        className="object-cover"
      />
    </div>
  );
}

function MobileMediaCarousel({
  media,
  productName,
}: {
  media: ProductMediaItem[];
  productName: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback(
    (i: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(i, media.length - 1));
      const child = el.children[clamped] as HTMLElement | undefined;
      if (child) {
        el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
      }
      setIndex(clamped);
    },
    [media.length],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let best = Infinity;
      children.forEach((child, i) => {
        const mid = child.offsetLeft + child.offsetWidth / 2;
        const d = Math.abs(mid - center);
        if (d < best) {
          best = d;
          closest = i;
        }
      });
      setIndex(closest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="space-y-4">
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          aria-label={`${productName} media gallery`}
        >
          {media.map((item) => (
            <div
              key={item.id}
              className="relative w-full shrink-0 snap-center aspect-[4/5] bg-surface overflow-hidden rounded-md"
            >
              {item.kind === "video" ? (
                <video
                  src={item.src}
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={item.alt}
                />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={item.id === media[0]?.id}
                />
              )}
              {item.kind === "video" && (
                <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-sm bg-secondary/80 px-2 py-1 text-xs text-text-inverse">
                  <Play className="h-3 w-3" strokeWidth={2} />
                  Video
                </span>
              )}
            </div>
          ))}
        </div>

        {media.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => scrollTo(index - 1)}
              disabled={index === 0}
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-text-primary shadow-sm transition-opacity",
                index === 0 && "opacity-0 pointer-events-none",
              )}
              aria-label="Previous media"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo(index + 1)}
              disabled={index >= media.length - 1}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-text-primary shadow-sm transition-opacity",
                index >= media.length - 1 && "opacity-0 pointer-events-none",
              )}
              aria-label="Next media"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      {media.length > 1 && (
        <div
          className="flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Media position"
        >
          {media.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Media ${i + 1} of ${media.length}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === index
                  ? "bg-primary"
                  : "bg-border hover:bg-text-secondary/40",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
