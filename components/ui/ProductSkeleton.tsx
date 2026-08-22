import { cn } from "@/lib/utils";
import { Breadcrumb } from "./Breadcrumb";

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

          {Array.from({ length: 4 }).map((_, i) => (
            <ProductSkeleton
              key={`sk-${i}`}
              className={
                i >= 2 ? "max-md:hidden" : i >= 3 ? "md:max-lg:hidden" : ""
              }
            />
          ))}
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
