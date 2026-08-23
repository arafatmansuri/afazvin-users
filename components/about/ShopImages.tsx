import Image from "next/image";

/**
 * Editorial shop / showroom imagery.
 * Uses curated photography consistent with the rest of the Afazvin site
 * (Unsplash sources already used across the project). Replace with approved
 * showroom assets when available — structure stays the same.
 */
const SHOP_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    alt: "Afazvin showroom — tailored menswear on display",
    primary: true,
  },
  {
    src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=900&auto=format&fit=crop",
    alt: "Premium fabric selection for wholesale menswear",
    primary: false,
  },
  {
    src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=900&auto=format&fit=crop",
    alt: "Finished blazer detailing and construction quality",
    primary: false,
  },
] as const;

export function ShopImages() {
  const primary = SHOP_IMAGES.find((img) => img.primary)!;
  const secondary = SHOP_IMAGES.filter((img) => !img.primary);

  return (
    <section className="pb-16 md:pb-24 lg:pb-28" aria-label="Shop and showroom">
      <div className="container-xl">
        {/* Primary image — strong visual anchor */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-lg bg-surface">
          <Image
            src={primary.src}
            alt={primary.alt}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Supporting images */}
        <div className="mt-4 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {secondary.map((img) => (
            <div
              key={img.src}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-surface"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 620px"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
