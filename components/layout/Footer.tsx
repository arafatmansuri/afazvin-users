import { ICategory } from "@/types";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CurrentYear } from "../landingSections/CurrentYear";
import { CONTACT } from "@/constants/contact";

const QUICK_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  // { name: "FAQs", href: "/faq" },
];

export function Footer({ categories }: { categories: ICategory[] }) {
  return (
    <footer className="bg-secondary text-text-inverse">
      <div className="container-xl pt-16 md:pt-20 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="Afazvin home">
              <Image
                src="/logo-nav.png"
                alt="Afazvin"
                width={200}
                height={140}
                className="h-12 md:h-14 w-auto max-w-[200px] object-contain object-left"
              />
            </Link>
            <p className="text-sm leading-relaxed text-text-inverse/70 max-w-xs">
              Premium wholesale menswear manufacturer. Crafting blazers,
              sherwanis, Indo-western & ethnic wear for retailers across India.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="type-eyebrow text-accent mb-5">Categories</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat._id.toString()}>
                  <Link
                    href={`/clothing/${cat.slug}`}
                    className="text-sm text-text-inverse/75 hover:text-accent transition-colors duration-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="type-eyebrow text-accent mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-inverse/75 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="type-eyebrow text-accent mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT.email.href}
                  className="inline-flex items-center gap-2.5 text-sm text-text-inverse/75 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {CONTACT.email.label}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.phones[0].href}
                  className="inline-flex items-center gap-2.5 text-sm text-text-inverse/75 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  {CONTACT.phones[0].label}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-text-inverse/75 hover:text-accent transition-colors"
                >
                  <MessageCircle
                    className="h-4 w-4 shrink-0"
                    strokeWidth={1.5}
                  />
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2.5 text-sm text-text-inverse/75 hover:text-accent transition-colors">
                  <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                  Ahmedabad, India
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <a
                href={CONTACT.social.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-inverse/70 hover:text-accent transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={CONTACT.social.facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-text-inverse/70 hover:text-accent transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Suspense
            fallback={
              <span className="text-xs text-text-inverse/50">Loading...</span>
            }
          >
            <CurrentYear />
          </Suspense>
          <p className="text-xs text-text-inverse/50">
            Wholesale Menswear Manufacturer
          </p>
        </div>
      </div>
    </footer>
  );
}
