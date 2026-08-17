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

          <ProductSkeleton />
        </div>
      </main>
    </>
  );
}
