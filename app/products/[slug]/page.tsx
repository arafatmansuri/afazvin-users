import ProductDetailBody from "@/components/product/ProductDetailBody";
import { ProductDetailsSkeleton } from "@/components/ui/ProductSkeleton";
import { getProductDetails } from "@/lib/products";
import type { Metadata } from "next";
import { Suspense } from "react";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const details = await getProductDetails(slug);
  if (!details) {
    return { title: "Product | Afazvin Wholesale Menswear" };
  }
  const { product, category } = details;
  const description =
    product.description ??
    (category
      ? `Browse ${product.name} from our ${category.name} collection at Afazvin wholesale menswear.`
      : `Browse ${product.name} at Afazvin wholesale menswear.`);

  return {
    title: `${product.name} | Afazvin Wholesale Menswear`,
    description,
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductPageSuspense params={params} />
    </Suspense>
  );
}
export async function ProductPageSuspense({ params }: { params: Params }) {
  const { slug } = await params;
  return <ProductDetailBody slug={slug} />;
}
