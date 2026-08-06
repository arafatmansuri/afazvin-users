import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        align === "center" && "text-center mx-auto max-w-2xl",
        className,
      )}
    >
      <p className={cn("type-eyebrow mb-3", light && "text-accent")}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "type-h1",
          light ? "text-text-inverse" : "text-text-primary",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed",
            light ? "text-text-inverse/75" : "text-text-secondary",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
