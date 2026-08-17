import { cn } from "@/lib/utils";
import { ICategory } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: ICategory;
  className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      prefetch={false}
      className={cn(
        "group relative block aspect-4/5 overflow-hidden rounded-md bg-surface",
        className,
      )}
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 25vw"
        className="object-cover transition-transform duration-300 ease-(--ease-in-out-standard) group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-secondary/70 via-secondary/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <h3 className="font-display text-lg md:text-xl font-medium text-text-inverse tracking-wide transition-transform duration-300 group-hover:-translate-y-0.5">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}
