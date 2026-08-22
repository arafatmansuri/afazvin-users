"use client";

import { PRODUCT_SORT_OPTIONS } from "@/constants/catalog";
import { cn } from "@/lib/utils";
import type { ProductSort } from "@/types/product";
import { Check, ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

interface DiscoveryControlsProps {
  value?: ProductSort;
  onChange: (sort: ProductSort | undefined) => void;
  resultCount: number;
}

export function DiscoveryControls({
  value,
  onChange,
  resultCount,
}: DiscoveryControlsProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const selected = PRODUCT_SORT_OPTIONS.find((o) => o.value === value);
  const display = selected?.label ?? "Discovery";
  const isActive = Boolean(value);

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div ref={rootRef} className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-11 md:h-12 min-w-[150px] items-center justify-between gap-2 rounded-sm border bg-surface px-4 text-sm transition-colors duration-200",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
            isActive
              ? "border-accent text-text-primary"
              : "border-border text-text-secondary hover:border-text-secondary/50",
          )}
        >
          <span className="truncate">{display}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 transition-transform duration-200",
              open && "rotate-180",
            )}
            strokeWidth={1.5}
          />
        </button>

        {open && (
          <ul
            id={listId}
            role="listbox"
            aria-label="Sort products"
            className="absolute left-0 top-full z-20 mt-2 min-w-full w-max max-w-[240px] rounded-md border border-border bg-surface py-2 shadow-md"
          >
            <li role="option" aria-selected={!value}>
              <button
                type="button"
                className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-text-secondary hover:bg-background"
                onClick={() => {
                  onChange(undefined);
                  setOpen(false);
                }}
              >
                <span className="w-4" />
                Default
              </button>
            </li>
            {PRODUCT_SORT_OPTIONS.map((opt) => {
              const active = opt.value === value;
              return (
                <li key={opt.value} role="option" aria-selected={active}>
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm hover:bg-background transition-colors",
                      active ? "text-primary" : "text-text-primary",
                    )}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                  >
                    <span className="w-4 flex justify-center">
                      {active && (
                        <Check className="h-3.5 w-3.5" strokeWidth={2} />
                      )}
                    </span>
                    {opt.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <p className="text-sm text-text-secondary">
        <span className="text-text-primary tabular-nums">{resultCount}</span>
        {resultCount === 1 ? " Result" : " Results"}
      </p>
    </div>
  );
}
