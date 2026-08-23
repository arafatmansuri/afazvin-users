"use client";

import { ProductColorSwatches } from "@/components/product/ProductColorSwatches";
import { Button } from "@/components/ui/Button";
import { Eye } from "lucide-react";
import Link from "next/link";

interface ProductInfoProps {
  name: string;
  description?: string | null;
  price?: number | null;
  views: number;
  colors?: string[];
  category?: { name: string; slug: string } | null;
  occasion?: { name: string; slug: string } | null;
}

export function ProductInfo({
  name,
  description,
  price,
  views,
  colors,
  category,
  occasion,
}: ProductInfoProps) {
  const scrollToInquiry = () => {
    const el = document.getElementById("inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-2">
        {category && (
          <Link
            href={`/clothing/${category.slug}`}
            className="type-eyebrow text-text-secondary hover:text-primary transition-colors"
          >
            {category.name}
          </Link>
        )}
        {occasion && (
          <div>
            <Link
              href={`/clothing/${occasion.slug}`}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
            >
              {occasion.name}
            </Link>
          </div>
        )}
      </div>

      <h1 className="type-h1 text-text-primary leading-tight">{name}</h1>

      {description ? (
        <p className="text-base leading-relaxed text-text-secondary max-w-md">
          {description}
        </p>
      ) : null}

      {price != null ? (
        <p className="text-xl font-medium text-text-primary">
          ₹{price.toLocaleString("en-IN")}
        </p>
      ) : null}

      {views > 0 && (
        <p className="inline-flex items-center gap-1.5 text-sm text-text-secondary">
          <Eye className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          <span className="tabular-nums">{views.toLocaleString("en-IN")}</span>
          <span>views</span>
        </p>
      )}

      {colors && colors.length > 0 && (
        <ProductColorSwatches colors={colors} />
      )}

      <Button
        type="button"
        variant="primary"
        fullWidth
        onClick={scrollToInquiry}
        className="uppercase tracking-wider mt-2"
        aria-label="Enquire about this product"
      >
        Enquire About This Product
      </Button>
    </div>
  );
}
