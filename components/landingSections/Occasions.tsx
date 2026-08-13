import { SectionHeader } from "@/components/ui/SectionHeader";
import { OccasionCard } from "@/components/ui/OccasionCard";
import { IOccasion } from "@/types";
import { cacheLife } from "next/cache";

// const PLACEHOLDER_OCCASIONS: IOccasion[] = [
//   {
//     id: "1",
//     name: "Wedding",
//     slug: "wedding",
//     image:
//       "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=900&auto=format&fit=crop",
//   },
//   {
//     id: "2",
//     name: "Reception",
//     slug: "reception",
//     image:
//       "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
//   },
//   {
//     id: "3",
//     name: "Engagement",
//     slug: "engagement",
//     image:
//       "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=900&auto=format&fit=crop",
//   },
//   {
//     id: "4",
//     name: "Haldi",
//     slug: "haldi",
//     image:
//       "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=900&auto=format&fit=crop",
//   },
//   // {
//   //   id: "5",
//   //   name: "Mehendi",
//   //   slug: "mehendi",
//   //   image:
//   //     "https://images.unsplash.com/photo-1591604466107-ec95fb30405f?q=80&w=900&auto=format&fit=crop",
//   // },
//   {
//     id: "6",
//     name: "Cocktail",
//     slug: "cocktail",
//     image:
//       "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop",
//   },
//   {
//     id: "7",
//     name: "Festive",
//     slug: "festive",
//     image:
//       "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=900&auto=format&fit=crop",
//   },
// ];

interface OccasionsProps {
  occasions: IOccasion[];
}

export async function Occasions({
  occasions,
}: OccasionsProps) {
  "use cache";
  cacheLife("days");
  return (
    <section className="section-padding bg-surface">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Shop by Occasion"
          title="Dressed for Every Moment"
          description="Help your customers find the right silhouette for every celebration on their calendar."
        />
      </div>

      <div className="relative">
        <div className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 lg:px-[max(2rem,calc((100vw-1280px)/2+2.5rem))] pb-4 scrollbar-none">
          {occasions.map((occ) => (
            <OccasionCard key={occ._id.toString()} occasion={occ} />
          ))}
        </div>
      </div>
    </section>
  );
}
