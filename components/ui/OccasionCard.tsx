import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface OccasionCardData {
  id: string;
  name: string;
  slug: string;
  image: string;
}

interface OccasionCardProps {
  occasion: OccasionCardData;
  className?: string;
}

export function OccasionCard({ occasion, className }: OccasionCardProps) {
  return (
    <Link
      href={`/occasions/${occasion.slug}`}
      className={cn(
        "group relative block aspect-3/2 min-w-70 md:min-w-85 overflow-hidden rounded-md bg-surface snap-start",
        className,
      )}
    >
      <Image
        src={occasion.image}
        alt={occasion.name}
        fill
        sizes="(max-width: 768px) 80vw, 340px"
        className="object-cover transition-all duration-300 ease-(--ease-in-out-standard) group-hover:scale-[1.03] group-hover:brightness-90"
      />
      <div className="absolute inset-0 bg-linear-to-t from-secondary/65 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-5 md:p-6">
        <h3 className="font-display text-xl md:text-2xl font-medium text-text-inverse tracking-wide">
          {occasion.name}
        </h3>
      </div>
    </Link>
  );
}
