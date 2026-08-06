import { SectionHeader } from "@/components/ui/SectionHeader";
import { CategoryCard, CategoryCardData } from "@/components/ui/CategoryCard";

const PLACEHOLDER_CATEGORIES: CategoryCardData[] = [
  {
    id: "1",
    name: "Blazers",
    slug: "blazers",
    image:
      "https://images.unsplash.com/photo-1593030761756-601896fa1278?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Suit Sherwani",
    slug: "suit-sherwani",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Indo Western",
    slug: "indo-western",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Jodhpuri",
    slug: "jodhpuri",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Fabrics",
    slug: "fabrics",
    image:
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Readymade Garments",
    slug: "readymade-garments",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Ethnic Wear",
    slug: "ethnic-wear",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Koti Indo",
    slug: "koti-indo",
    image:
      "https://images.unsplash.com/photo-1620799140408-ed5341ba2870?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "9",
    name: "Koti Kurta",
    slug: "koti-kurta",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=800&auto=format&fit=crop",
  },
];

interface CategoriesProps {
  categories?: CategoryCardData[];
}

export function Categories({
  categories = PLACEHOLDER_CATEGORIES,
}: CategoriesProps) {
  return (
    <section id="categories" className="section-padding bg-background">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Our Collections"
          title="Explore by Category"
          description="From structured blazers to ceremonial sherwanis — a complete range for the modern Indian retailer."
        />

        {/* Desktop / tablet grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>

        {/* Mobile horizontal carousel */}
        <div className="sm:hidden -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              className="min-w-[75%] snap-start"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
