import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { Button } from "./Button";

interface ProductSkeletonProps {
  className?: string;
}

export function ProductSkeleton({ className }: ProductSkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-md overflow-hidden bg-surface animate-pulse",
        className,
      )}
      aria-hidden
    >
      <div className="aspect-[4/5] bg-border/40" />
      <div className="p-4 space-y-3">
        <div className="h-4 w-[80%] rounded-sm bg-border/50" />
        <div className="h-3 w-[33%] rounded-sm bg-border/40" />
      </div>
    </div>
  );
}
export function Skeleton() {
  return (
    <>
      <main className="bg-background min-h-screen">
        <div className="container-xl pt-28 md:pt-32 pb-6">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Clothing" }]}
            className="mb-6"
          />

          <header className="mb-10 md:mb-16">
            <h1 className="type-h1 text-text-primary">Clothing</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
              The full manufacturing range for retail partners — tailored
              menswear across categories, crafted for shops that value finish
              and consistency.
            </p>
          </header>

          <ProductCardsSkeleton />
        </div>
      </main>
    </>
  );
}
export function ProductDetailsSkeleton() {
  return (
    <>
      <main className="bg-background min-h-screen">
        <div className="container-xl pt-28 md:pt-32 pb-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Clothing" },
              { label: "Occasion" },
              { label: "Category" },
              { label: "Product" },
            ]}
            className="mb-6"
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
            {/* Media — larger column */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="hidden md:grid grid-cols-2 gap-3 lg:gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface">
                  <div className="absolute inset-0 bg-border/40 animate-pulse" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface">
                  <div className="absolute inset-0 bg-border/40 animate-pulse" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface">
                  <div className="absolute inset-0 bg-border/40 animate-pulse" />
                </div>
              </div>

              {/* Mobile: horizontal carousel */}
              <div className="md:hidden">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-surface">
                  <div className="absolute inset-0 bg-border/40 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Info — sticky on desktop */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <div className="space-y-6 md:space-y-8">
                  <p className="inline-flex items-center gap-1.5 text-sm text-text-secondary bg-surface/40">
                    <Eye className="h-4 w-4" strokeWidth={1.5} aria-hidden />
                    <span className="tabular-nums"></span>
                    <span>views</span>
                  </p>

                  <Button
                    type="button"
                    variant="primary"
                    fullWidth
                    className="uppercase tracking-wider mt-2"
                    aria-label="Enquire about this product"
                  >
                    Enquire About This Product
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export function CategoryNavigationSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div className="mb-12 md:mb-14">
      <div
        className={cn(
          "group flex shrink-0 snap-start flex-col items-center gap-2.5 w-[76px] md:w-[88px]",
          "rounded-sm",
          className,
        )}
      >
        <span
          className={cn(
            "relative block h-[72px] w-[72px] md:h-[84px] md:w-[84px] overflow-hidden rounded-full bg-border/40",
          )}
        ></span>
      </div>
    </div>
  );
}
export function CategorySkeleton() {
  return (
    <>
      <main className="bg-background min-h-screen">
        <div className="container-xl pt-28 md:pt-32 pb-6">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Clothing" }]}
            className="mb-6"
          />
          {/* <header className="mb-10 md:mb-16">
            <h1 className="type-h1 text-text-primary">Clothing</h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
              The full manufacturing range for retail partners — tailored
              menswear across categories, crafted for shops that value finish
              and consistency.
            </p>
          </header> */}

          <div className="flex gap-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <CategoryNavigationSkeleton
                key={`sk-${i}`}
                className={
                  i >= 2 ? "max-md:hidden" : i >= 3 ? "md:max-lg:hidden" : ""
                }
              />
            ))}
          </div>

          <ProductCardsSkeleton />
        </div>
      </main>
    </>
  );
}
export function ProductCardsSkeleton() {
  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <ProductSkeleton
            key={`sk-${i}`}
            className={
              i >= 2 ? "max-md:hidden" : i >= 3 ? "md:max-lg:hidden" : ""
            }
          />
        ))}
      </div>
    </>
  );
}
