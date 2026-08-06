import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard, ProductCardData } from "@/components/ui/ProductCard";

const PLACEHOLDER_PRODUCTS: ProductCardData[] = [
  {
    id: "1",
    name: "Champagne Silk Open Sherwani with Intricate Embroidery",
    slug: "champagne-silk-open-sherwani",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=700&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=700&auto=format&fit=crop",
    views: 1240,
  },
  {
    id: "2",
    name: "Midnight Navy Structured Blazer",
    slug: "midnight-navy-structured-blazer",
    image:
      "https://images.unsplash.com/photo-1593030761756-601896fa1278?q=80&w=700&auto=format&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=700&auto=format&fit=crop",
    views: 980,
  },
  {
    id: "3",
    name: "Ivory Jodhpuri with Gold Buttons",
    slug: "ivory-jodhpuri-gold-buttons",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=700&auto=format&fit=crop",
    views: 856,
  },
  {
    id: "4",
    name: "Emerald Indo-Western Bandhgala",
    slug: "emerald-indo-western-bandhgala",
    image:
      "https://images.unsplash.com/photo-1620799140408-ed5341ba2870?q=80&w=700&auto=format&fit=crop",
    views: 742,
  },
  {
    id: "5",
    name: "Classic Black Velvet Koti",
    slug: "classic-black-velvet-koti",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=700&auto=format&fit=crop",
    views: 691,
  },
  {
    id: "6",
    name: "Rose Gold Embroidered Kurta Set",
    slug: "rose-gold-embroidered-kurta",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=700&auto=format&fit=crop",
    views: 623,
  },
  {
    id: "7",
    name: "Charcoal Slim Fit Suit",
    slug: "charcoal-slim-fit-suit",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=700&auto=format&fit=crop",
    views: 580,
  },
  {
    id: "8",
    name: "Mustard Festive Bandi",
    slug: "mustard-festive-bandi",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=700&auto=format&fit=crop",
    views: 512,
  },
];

interface BestSellersProps {
  products?: ProductCardData[];
}

export function BestSellers({
  products = PLACEHOLDER_PRODUCTS.slice(0, 10),
}: BestSellersProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-xl">
        <SectionHeader
          eyebrow="Most Loved"
          title="Best Sellers"
          description="The pieces retailers reorder season after season."
        />

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="sm:hidden -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="min-w-[78%] snap-start"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
