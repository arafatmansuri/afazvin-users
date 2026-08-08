import Category from "@/models/category.model";
import Product from "@/models/product.model";
import Occasion from "@/models/occasion.model";
import { IOccasion, IProduct, type ICategory } from "@/types";

export interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  hoverImage: string;
  price?: string;
  views?: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: "factory" | "truck" | "shield-check" | "badge-check";
}

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  shopName: string;
  city: string;
  avatar?: string;
}

export async function getCategories(): Promise<ICategory[]> {
  return await Category.find().lean();
}

export async function getOccasions(): Promise<IOccasion[]> {
  return await Occasion.find();
}

export async function getBestSellers(limit:number): Promise<IProduct[]> {
  return await Product.find({ isBestSeller: true }).sort({ views: -1 }).limit(limit);
}

export function getWhyChooseUs(): Feature[] {
  return [
    {
      id: "feature-1",
      title: "In-House Manufacturing",
      description:
        "Every garment is cut, stitched, and finished under one roof, so quality never depends on a third party.",
      icon: "factory",
    },
    {
      id: "feature-2",
      title: "Pan-India Fulfillment",
      description:
        "Reliable dispatch to retail partners across the country, with consistent lead times you can plan around.",
      icon: "truck",
    },
    {
      id: "feature-3",
      title: "Assured Quality Control",
      description:
        "Multi-stage checks on fabric, fit, and finish before anything leaves the floor.",
      icon: "shield-check",
    },
    {
      id: "feature-4",
      title: "Trusted by Retailers",
      description:
        "Long-standing partnerships with boutiques and wholesalers who reorder season after season.",
      icon: "badge-check",
    },
  ];
}

export function getStatistics(): Stat[] {
  return [
    { id: "stat-1", value: 15, suffix: "+", label: "Years of Experience" },
    { id: "stat-2", value: 500, suffix: "+", label: "Retail Partners" },
    { id: "stat-3", value: 25000, suffix: "+", label: "Products Manufactured" },
    { id: "stat-4", value: 120, suffix: "+", label: "Cities Served" },
  ];
}

export function getTestimonials(): Testimonial[] {
  return [
    {
      id: "testimonial-1",
      quote:
        "Afazvin has been our go-to manufacturer for wedding season stock for three years running. The fit and finish never vary, and reorders are effortless.",
      name: "Rajesh Mehta",
      shopName: "Mehta Menswear",
      city: "Jaipur",
    },
    {
      id: "testimonial-2",
      quote:
        "What sets them apart is consistency — the tenth piece in a batch looks exactly like the first. That reliability is rare at this price point.",
      name: "Arvind Sharma",
      shopName: "Sharma Sherwani House",
      city: "Lucknow",
    },
    {
      id: "testimonial-3",
      quote:
        "Our customers ask specifically for the Jodhpuri sets we source from Afazvin. Fast turnaround and a partner who actually picks up the phone.",
      name: "Karan Kapoor",
      shopName: "Kapoor Ethnic Wear",
      city: "Ahmedabad",
    },
  ];
}
