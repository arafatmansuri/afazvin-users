import { cn } from "@/lib/utils";

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
