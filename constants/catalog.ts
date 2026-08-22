import { ICategory, IOccasion } from "@/types";

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

export type CollectionEntity = {
  _id: string;
  name: string;
  slug: string;
  description?: string | null;
  image?: string;
  type: "category" | "occasion";
};

/** Sandbox stand-in for findCategoryBySlug / findOccasionBySlug */
export function resolveCollectionSlug(
  slug: string,
  categories: ICategory[],
  occasions: IOccasion[]
): CollectionEntity | null {
  const category = categories.find((c) => c.slug === slug);
  if (category) {
    return {
      _id: category.slug,
      name: category.name,
      slug: category.slug,
      description: category.description,
      image: category.image,
      type: "category",
    };
  }
  const occasion = occasions.find((o) => o.slug === slug);
  if (occasion) {
    return {
      _id: occasion.slug,
      name: occasion.name,
      slug: occasion.slug,
      description: occasion.description,
      image: occasion.image,
      type: "occasion",
    };
  }
  return null;
}

export function getContextNavItems(
  type: "category" | "occasion",
  categories: ICategory[],
  occasions: IOccasion[]
): CollectionEntity[] {
  if (type === "category") {
    return categories.filter(c=> c.slug != 'general').map((c) => ({
      _id: c.slug,
      name: c.name,
      slug: c.slug,
      description: c.description,
      image: c.image,
      type: "category" as const,
    }));
  }
  return occasions.map((o) => ({
    _id: o.slug,
    name: o.name,
    slug: o.slug,
    description: o.description,
    image: o.image,
    type: "occasion" as const,
  }));
}
