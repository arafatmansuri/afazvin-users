import type { IProduct } from "@/types/product";

export type ProductMediaItem =
  | {
      kind: "image";
      src: string;
      alt: string;
      id: string;
    }
  | {
      kind: "video";
      src: string;
      alt: string;
      id: string;
    };

export function buildProductMediaSequence(
  product: IProduct,
): ProductMediaItem[] {
  const altBase = product.thumbnailImageAlt || product.name;
  const seen = new Set<string>();
  const items: ProductMediaItem[] = [];

  const pushImage = (src: string | null | undefined, label: string) => {
    if (!src || seen.has(src)) return;
    seen.add(src);
    items.push({
      kind: "image",
      src,
      alt: `${altBase} — ${label}`,
      id: `img-${items.length}`,
    });
  };

  // 1. Thumbnail
  pushImage(product.thumbnailImage, "primary");
  // 2. Hover image as a normal gallery image
  pushImage(product.hoverImage, "alternate");
  // 3+. Gallery images from product.images
  (product.images ?? []).forEach((src: string, i: number) => {
    pushImage(src, `view ${i + 1}`);
  });

  if (product.video) {
    const videoItem: ProductMediaItem = {
      kind: "video",
      src: product.video,
      alt: `${altBase} — video`,
      id: "video",
    };
    const insertAt = Math.min(3, items.length);
    items.splice(insertAt, 0, videoItem);
  }

  return items;
}
