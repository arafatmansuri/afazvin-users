import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { IProduct } from "@/types/product";

interface ProductCardProps {
  product: IProduct;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      prefetch={false}
      className={cn(
        "group block rounded-md overflow-hidden bg-surface transition-shadow duration-300 hover:shadow-sm",
        className,
      )}
    >
      <div className="relative aspect-4/5 overflow-hidden bg-surface">
        <Image
          src={product.thumbnailImage}
          alt={product.thumbnailImageAlt || product.name}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 25vw"
          className={cn(
            "object-cover transition-opacity duration-300 ease-(--ease-in-out-standard)",
            product.hoverImage && "group-hover:opacity-0",
          )}
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            fill
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 25vw"
            className="object-cover opacity-0 transition-opacity duration-300 ease-(--ease-in-out-standard) group-hover:opacity-100"
          />
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="type-h3 text-text-primary line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>

        <div className="flex items-center justify-between gap-3">
          {product.price != null ? (
            <p className="text-sm font-medium text-text-primary">
              ₹{product.price.toLocaleString("en-IN")}
            </p>
          ) : (
            <p className="text-sm text-text-secondary">Inquire for Pricing</p>
          )}

          {typeof product.views === "number" && product.views > 0 && (
            <span className="inline-flex items-center gap-1 text-xs text-text-secondary">
              <Eye className="h-3.5 w-3.5" strokeWidth={1.5} />
              {product.views.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        <span className="inline-flex items-center text-sm font-medium text-primary opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0">
          View Details
        </span>
      </div>
    </Link>
  );
}
