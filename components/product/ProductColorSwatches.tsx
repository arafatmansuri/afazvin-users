import { cn } from "@/lib/utils";

interface ProductColorSwatchesProps {
  colors: string[];
  className?: string;
}

export function ProductColorSwatches({
  colors,
  className,
}: ProductColorSwatchesProps) {
  if (!colors.length) return null;

  return (
    <div className={cn("space-y-3", className)}>
      <p className="type-eyebrow text-text-secondary">Colours</p>
      <ul className="flex flex-wrap items-center gap-3" aria-label="Available colours">
        {colors.map((color, i) => (
          <li key={`${color}-${i}`}>
            <span
              className="block h-7 w-7 rounded-full border border-border shadow-xs"
              style={{ backgroundColor: color }}
              title={color}
              aria-label={`Colour ${color}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
