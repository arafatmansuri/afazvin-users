import Category from "@/models/category.model";
import Occasion from "@/models/occasion.model";
import { ICategory, IOccasion } from "@/types";
import { connectDB } from "./mongoose";
import { cacheLife } from "next/cache";

export async function findCategoryByName(
  name: string,
): Promise<ICategory | null> {
  await connectDB();
  const category = await Category.findOne({ name }).lean();
  if (!category) {
    return null;
  }
  return { ...category, _id: category._id.toString() };
}
export async function findCategoryBySlug(
  slug: string,
): Promise<ICategory | null> {
    "use cache";
    cacheLife("days");
  await connectDB();
  const category = await Category.findOne({ slug }).lean();
  if (!category) {
    return null;
  }
  return { ...category, _id: category._id.toString() };
}
export async function findOccasionByName(
  name: string,
): Promise<IOccasion | null> {
  await connectDB();
  const occasion = await Occasion.findOne({ name }).lean();
  if (!occasion) {
    return null;
  }
  return { ...occasion, _id: occasion._id.toString() };
}
export async function findOccasionBySlug(
  slug: string,
): Promise<IOccasion | null> {
    "use cache";
    cacheLife("days");
  await connectDB();
  const occasion = await Occasion.findOne({ slug }).lean();
  if (!occasion) {
    return null;
  }
  return { ...occasion, _id: occasion._id.toString() };
}
