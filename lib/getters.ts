import Category from "@/models/category.model";
import Occasion from "@/models/occasion.model";
import Product from "@/models/product.model";
import { ICategory, IOccasion } from "@/types";
import { IProduct } from "@/types/product";
import { Types } from "mongoose";
import { cacheLife } from "next/cache";
import { connectDB } from "./mongoose";

export async function findCategoryByName(
  name: string,
): Promise<ICategory | null> {
  await connectDB();
  const category = await Category.findOne({ name,isActive:true }).lean();
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
  const category = await Category.findOne({ slug, isActive: true }).lean();
  if (!category) {
    return null;
  }
  return { ...category, _id: category._id.toString() };
}
export async function findOccasionByName(
  name: string,
): Promise<IOccasion | null> {
  await connectDB();
  const occasion = await Occasion.findOne({ name, isActive: true }).lean();
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
  const occasion = await Occasion.findOne({ slug, isActive: true }).lean();
  if (!occasion) {
    return null;
  }
  return { ...occasion, _id: occasion._id.toString() };
}
export async function findCategoryById(id: string): Promise<ICategory | null> {
  "use cache";
  cacheLife("days");
  await connectDB();
  const category = await Category.findById(new Types.ObjectId(id)).lean();
  if (!category || !category.isActive) {
    return null;
  }
  return { ...category, _id: category._id.toString() };
}
export async function findOccasionById(id: string): Promise<IOccasion | null> {
  "use cache";
  cacheLife("days");
  await connectDB();
  const occasion = await Occasion.findById(new Types.ObjectId(id)).lean();
  if (!occasion || !occasion.isActive) {
    return null;
  }
  return { ...occasion, _id: occasion._id.toString() };
}
export async function getProductById(id: string): Promise<IProduct | null> {
  "use cache";
  cacheLife("days");
  const product = await Product.findById(new Types.ObjectId(id)).lean();
  if (!product || product.status !== "published") {
    return null;
  }
  return product;
}
export async function getProductBySlug(slug: string): Promise<IProduct | null> {
  "use cache";
  cacheLife("days");
  const product = await Product.findOne({ slug, status: "published" }).lean();
  if (!product) {
    return null;
  }
  return {
    ...product,
    _id: product._id.toString(),
    category: product.category.toString(),
    occasion: product.occasion?.toString() || null,
  };
}
