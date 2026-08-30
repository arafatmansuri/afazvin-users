import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/constants/contact";
import Link from "next/link";

export function VisitShop() {
  const { shop } = CONTACT;

  return (
    <section
      className="section-padding bg-surface"
      aria-labelledby="visit-shop-heading"
    >
      <div className="container-xl">
        <div className="mb-10 md:mb-12">
          <p className="type-eyebrow mb-3">Location</p>
          <h2 id="visit-shop-heading" className="type-h1 text-text-primary">
            Visit Our Shop
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Address — first on mobile */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
            <div>
              <h3 className="type-eyebrow text-text-secondary mb-4">
                Shop Address
              </h3>
              <address className="not-italic space-y-1 text-base md:text-lg leading-relaxed text-text-primary">
                {shop.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </address>
            </div>

            <div>
              <Link
                href={shop.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" className="uppercase tracking-wider">
                  Get Directions
                </Button>
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="order-2 lg:order-1 relative w-full min-h-[280px] md:min-h-[360px] rounded-lg overflow-hidden border border-border bg-background">
            <iframe
              title="Afazvin shop location on Google Maps"
              src={shop.mapEmbedSrc}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
