export type ProductSort = "hand-picked" | "best-sellers" | "new" | "popular";

export interface IProduct {
  _id: string;
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
  video?: string | null;
  category: string;
  occasion?: string | null;
  isHandPicked: boolean;
}
export interface ProductListResult {
  items: IProduct[];
  total?: number;
  nextCursor: string | null;
  hasMore: boolean;
}