export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOccasion {
  _id: string;
  name: string;
  slug: string;
  image: string;
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;
}