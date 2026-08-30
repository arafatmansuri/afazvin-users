function qrUrl(data: string, size = 200) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
}

export const CONTACT = {
  phones: [
    {
      label: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    // Add additional approved numbers here
  ],
  email: {
    label: "hello@afazvin.com",
    href: "mailto:hello@afazvin.com",
  },
  whatsapp: {
    label: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    numberDigits: "919876543210",
    get qrSrc() {
      return qrUrl(this.href, 220);
    },
  },
  timings: [
    {
      days: "Monday – Saturday",
      hours: "10:00 AM – 7:00 PM",
    },
    {
      days: "Sunday",
      hours: "Closed",
    },
  ],
  social: {
    instagram: {
      label: "Instagram",
      href: "https://instagram.com",
      cta: "Visit Profile",
      get qrSrc() {
        return qrUrl(this.href, 200);
      },
    },
    facebook: {
      label: "Facebook",
      href: "https://facebook.com",
      cta: "Visit Page",
      get qrSrc() {
        return qrUrl(this.href, 200);
      },
    },
  },
  shop: {
    /**
     * Placeholder address — replace with the approved shop address.
     */
    lines: [
      "Afazvin Wholesale Menswear",
      "Showroom Address Line 1",
      "City, State – PIN",
      "India",
    ],
    /**
     * Directions / open-in-Maps link. Update query to the real location.
     */
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Afazvin+Wholesale+Menswear",
    /**
     * Embed src for the map iframe. Update with the real place embed URL.
     */
    mapEmbedSrc:
      "https://www.google.com/maps?q=Afazvin+Wholesale+Menswear&output=embed",
  },
  heroImage:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
} as const;
