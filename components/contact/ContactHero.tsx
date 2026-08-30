import { CONTACT } from "@/constants/contact";
import Image from "next/image";

export function ContactHero() {
  return (
    <section
      className="relative min-h-[42svh] md:min-h-[48svh] flex items-end overflow-hidden bg-secondary"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0">
        <Image
          src={CONTACT.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-secondary/70" aria-hidden />
      </div>

      <div className="container-xl relative z-10 pt-28 pb-14 md:pt-32 md:pb-16">
        <div className="max-w-2xl">
          <h1
            id="contact-heading"
            className="type-h1 text-text-inverse mb-4 md:mb-5"
          >
            Contact Us
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-text-inverse/80 max-w-xl">
            We&apos;d love to hear from you. Connect with us for wholesale
            enquiries and business discussions.
          </p>
        </div>
      </div>
    </section>
  );
}
