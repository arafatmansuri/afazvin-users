function qrUrl(data: string, size = 200) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;
}

export const CONTACT = {
  phones: [
    {
      label: "+91 70164 16223",
      href: "tel:+917016416223",
    },
    // Add additional approved numbers here
  ],
  email: {
    label: "shahidraza373@gmail.com",
    href: "mailto:shahidraza373@gmail.com",
  },
  whatsapp: {
    label: "+91 76988 68786",
    href: "https://wa.me/917698868786",
    numberDigits: "917698868786",
    get qrSrc() {
      return qrUrl(this.href, 220);
    },
  },
  timings: [
    {
      days: "Monday – Sunday",
      hours: "10:00 AM – 9:00 PM",
    },
  ],
  social: {
    instagram: {
      label: "Instagram",
      href: "https://www.instagram.com/libas_creation7860",
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
      "Electricity House, Advance Cinema Road",
      "Ahmedabad, Gujarat – 380001",
      "India",
    ],
    /**
     * Directions / open-in-Maps link. Update query to the real location.
     */
    directionsUrl: "https://maps.app.goo.gl/VCAj6Z71AC3uHtKbA",
    /**
     * Embed src for the map iframe. Update with the real place embed URL.
     */
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.9842059664795!2d72.58105134295063!3d23.026091744928316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85d7f83497a1%3A0xe587ecdd592dda00!2sLIBAS%20FASHION!5e0!3m2!1sen!2sin!4v1788086580115!5m2!1sen!2sin",
  },
  heroImage:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
} as const;
