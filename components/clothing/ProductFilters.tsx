"use client";

import { Button } from "@/components/ui/Button";
import { PRODUCT_SORT_OPTIONS } from "@/constants/catalog";
import { cn } from "@/lib/utils";
import { ICategory, IOccasion } from "@/types";
import type { ProductSort } from "@/types/product";
import { Check, ChevronDown, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type ClothingFilters = {
  category?: string;
  occasion?: string;
  sort?: ProductSort;
};

interface ProductFiltersProps {
  value: ClothingFilters;
  onChange: (next: ClothingFilters) => void;
  categories: ICategory[];
  occasions: IOccasion[];
}

function FilterSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string | undefined) => void;
}) {
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

  const selected = options.find((o) => o.value === value);
  const display = selected?.label ?? placeholder;
  const isActive = Boolean(value);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-[48px] md:h-[52px] min-w-[140px] items-center justify-between gap-2 rounded-sm border bg-surface px-4 text-sm transition-colors duration-200",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          isActive
            ? "border-accent text-text-primary"
            : "border-border text-text-secondary hover:border-text-secondary/50",
        )}
      >
        <span className="truncate">
          <span className="sr-only">{label}: </span>
          {display}
        </span>
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
          aria-label={label}
          className="absolute left-0 top-full z-20 mt-2 min-w-full w-max max-w-[280px] rounded-md border border-border bg-surface py-2 shadow-md"
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
              All
            </button>
          </li>
          {options.map((opt) => {
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
  );
}

export function ProductFilters({
  value,
  onChange,
  categories,
  occasions,
}: ProductFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [draft, setDraft] = useState<ClothingFilters>(value);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (mobileOpen) setDraft(value);
  }, [mobileOpen, value]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const categoryOptions = categories.map((c) => ({
    label: c.name,
    value: c.slug,
  }));
  const occasionOptions = occasions.map((o) => ({
    label: o.name,
    value: o.slug,
  }));
  const sortOptions = PRODUCT_SORT_OPTIONS.map((s) => ({
    label: s.label,
    value: s.value,
  }));

  const activeSummary = [
    categoryOptions.find((c) => c.value === value.category)?.label,
    occasionOptions.find((o) => o.value === value.occasion)?.label,
    sortOptions.find((s) => s.value === value.sort)?.label,
  ]
    .filter(Boolean)
    .join(" · ");

  const hasAny = Boolean(value.category || value.occasion || value.sort);

  const clearAll = () => {
    onChange({});
    setDraft({});
    setMobileOpen(false);
  };

  return (
    <div>
      {/* Desktop / tablet row */}
      <div className="hidden md:flex flex-wrap items-center gap-4">
        <FilterSelect
          label="Category"
          placeholder="Category"
          options={categoryOptions}
          value={value.category}
          onChange={(category) => onChange({ ...value, category })}
        />
        <FilterSelect
          label="Occasion"
          placeholder="Occasion"
          options={occasionOptions}
          value={value.occasion}
          onChange={(occasion) => onChange({ ...value, occasion })}
        />
        <FilterSelect
          label="Discovery"
          placeholder="Discovery"
          options={sortOptions}
          value={value.sort}
          onChange={(sort) =>
            onChange({
              ...value,
              sort: sort as ProductSort | undefined,
            })
          }
        />
        {hasAny && (
          <button
            type="button"
            onClick={clearAll}
            className="text-sm text-text-secondary hover:text-primary underline-offset-4 hover:underline transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Mobile combined trigger */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className={cn(
            "inline-flex h-12 items-center gap-2 rounded-sm border bg-surface px-4 text-sm transition-colors",
            hasAny
              ? "border-accent text-text-primary"
              : "border-border text-text-secondary",
          )}
          aria-haspopup="dialog"
          aria-expanded={mobileOpen}
        >
          {activeSummary || "Filter & Sort"}
          <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[400] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-secondary/50"
            aria-label="Close filters"
            onClick={() => setMobileOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filter and sort"
            className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-lg bg-background shadow-lg"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-border bg-background px-5 py-4">
              <h2 className="text-base font-semibold text-text-primary">
                Filter & Sort
              </h2>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-10 w-10 items-center justify-center text-text-secondary"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="space-y-8 px-5 py-6">
              <MobileGroup
                title="Category"
                options={categoryOptions}
                value={draft.category}
                onChange={(category) => setDraft((d) => ({ ...d, category }))}
              />
              <MobileGroup
                title="Occasion"
                options={occasionOptions}
                value={draft.occasion}
                onChange={(occasion) => setDraft((d) => ({ ...d, occasion }))}
              />
              <MobileGroup
                title="Discovery"
                options={sortOptions}
                value={draft.sort}
                onChange={(sort) =>
                  setDraft((d) => ({
                    ...d,
                    sort: sort as ProductSort | undefined,
                  }))
                }
              />
            </div>

            <div className="sticky bottom-0 flex gap-3 border-t border-border bg-background px-5 py-4">
              <Button
                type="button"
                variant="secondary"
                className="flex-1"
                onClick={() => {
                  setDraft({});
                  onChange({});
                  setMobileOpen(false);
                }}
              >
                Clear
              </Button>
              <Button
                type="button"
                variant="primary"
                className="flex-1"
                onClick={() => {
                  onChange(draft);
                  setMobileOpen(false);
                }}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileGroup({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string | undefined) => void;
}) {
  return (
    <fieldset>
      <legend className="type-eyebrow mb-3 text-text-secondary">{title}</legend>
      <ul className="space-y-1">
        <li>
          <button
            type="button"
            className={cn(
              "flex w-full items-center gap-3 rounded-sm px-2 py-3 text-left text-sm",
              !value ? "text-primary" : "text-text-primary",
            )}
            onClick={() => onChange(undefined)}
          >
            <span className="flex h-5 w-5 items-center justify-center">
              {!value && <Check className="h-4 w-4" strokeWidth={2} />}
            </span>
            All
          </button>
        </li>
        {options.map((opt) => {
          const active = opt.value === value;
          return (
            <li key={opt.value}>
              <button
                type="button"
                className={cn(
                  "flex w-full items-center gap-3 rounded-sm px-2 py-3 text-left text-sm",
                  active ? "text-primary" : "text-text-primary",
                )}
                onClick={() => onChange(opt.value)}
              >
                <span className="flex h-5 w-5 items-center justify-center">
                  {active && <Check className="h-4 w-4" strokeWidth={2} />}
                </span>
                {opt.label}
              </button>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}
