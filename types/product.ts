import { APIResponse } from "@/lib/apiResponse";

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
  products: IProduct[];
  total: number;
  totalPages: number;
  page: number;
  hasMore: boolean;
}

export type ProductListParams = {
  category?: string;
  occasion?: string;
  sort?: ProductSort;
  page?: number;
}

export type ProductListingProps = {
  initialData: APIResponse<ProductListResult>;
  filters: Omit<ProductListParams, "page">;
};