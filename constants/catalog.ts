export const CATALOG_CATEGORIES = [
  { name: "Blazers", slug: "blazers" },
  { name: "Suit Sherwani", slug: "suit-sherwani" },
  { name: "Indo Western", slug: "indo-western" },
  { name: "Jodhpuri", slug: "jodhpuri" },
  { name: "Fabrics", slug: "fabrics" },
  { name: "Readymade Garments", slug: "readymade-garments" },
  { name: "Ethnic Wear", slug: "ethnic-wear" },
  { name: "Koti Indo", slug: "koti-indo" },
  { name: "Koti Kurta", slug: "koti-kurta" },
] as const;

export const CATALOG_OCCASIONS = [
  { name: "Wedding", slug: "wedding" },
  { name: "Reception", slug: "reception" },
  { name: "Engagement", slug: "engagement" },
  { name: "Haldi", slug: "haldi" },
  { name: "Mehendi", slug: "mehendi" },
  { name: "Cocktail", slug: "cocktail" },
  { name: "Festive", slug: "festive" },
] as const;

export const PRODUCT_SORT_OPTIONS = [
  { label: "Hand-picked", value: "hand-picked" as const },
  { label: "Best Sellers", value: "best-sellers" as const },
  { label: "New", value: "new" as const },
  { label: "Popular", value: "popular" as const },
] as const;
