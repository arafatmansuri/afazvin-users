import { ProductCard } from "@/components/ui/ProductCard";
import type { IProduct } from "@/types/product";

interface YouMayAlsoLikeProps {
  products: IProduct[];
}

export function YouMayAlsoLike({ products }: YouMayAlsoLikeProps) {
  if (!products.length) return null;

  return (
    <section className="mt-20 md:mt-28 border-t border-border/60 pt-16 md:pt-20">
      <div className="mb-8 md:mb-10 text-center">
        <p className="type-eyebrow mb-3">Continue Browsing</p>
        <h2 className="type-h1 text-text-primary">You May Also Like</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
