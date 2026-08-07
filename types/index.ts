import { Types } from "mongoose";

export interface ICategory {
  _id: Types.ObjectId;
  name: string;
  slug: string;
  image: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOccasion {
  _id: Types.ObjectId;
  name: string;
  slug: string;
  image: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProduct {
  _id: Types.ObjectId;
  name: string;
  slug: string;
  description?: string | null;
  thumbnailImage: string;
  thumbnailImageAlt?: string | null;
  hoverImage?: string | null;
  images: string[];
  price?: number | null;
  views: number;
  colors?: string[];
  isBestSeller: boolean;
  video?:string | null;
  category: Types.ObjectId;
  occasion?: Types.ObjectId | null;
}