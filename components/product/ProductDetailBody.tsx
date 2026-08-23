import { YouMayAlsoLike } from "@/components/clothing/YouMayAlsoLike";
import { InquirySection } from "@/components/landingSections/InquirySection";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductMediaGallery } from "@/components/product/ProductMediaGallery";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getCategories } from "@/lib/placeholder-data/landing";
import { buildProductMediaSequence } from "@/lib/product/media";
import { getProductDetails, getProducts,getProductsFilter } from "@/lib/products";
import { notFound } from "next/navigation";

interface ProductDetailBodyProps {
  slug: string;
}

export default async function ProductDetailBody({
  slug,
}: ProductDetailBodyProps) {
  const details = await getProductDetails(slug);
  if (!details) notFound();

  const { product, category, occasion } = details;
  const media = buildProductMediaSequence(product);

  // Related: same category when possible, exclude current product
  const relatedParams = new URLSearchParams();
  if (category?.slug) relatedParams.set("category", category.slug);
  relatedParams.set("sort", "popular");

  const relatedFilter = await getProductsFilter({
    searchParams: relatedParams,
    usedBy: "client",
  });
  const relatedRes = await getProducts(relatedFilter.filters, 0, "client", 1);
  const recommendations = (relatedRes.data?.products ?? [])
    .filter((p) => p._id !== product._id)
    .slice(0, 4);

  // Fallback if same-category yields too few
  let related = recommendations;
  if (related.length < 4) {
    const fallback = await getProducts({ sort: "popular" }, 0, "client", 1);
    const extra = (fallback.data?.products ?? [])
      .filter(
        (p) => p._id !== product._id && !related.some((r) => r._id === p._id),
      )
      .slice(0, 4 - related.length);
    related = [...related, ...extra];
  }

  const categories = await getCategories();

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Clothing", href: "/clothing" },
    ...(category
      ? [{ label: category.name, href: `/clothing/${category.slug}` }]
      : []),
    ...(occasion
      ? [{ label: occasion.name, href: `/clothing/${occasion.slug}` }]
      : []),
    { label: product.name },
  ];

  return (
    <main className="bg-background min-h-screen">
      <div className="container-xl pt-28 md:pt-32 pb-10">
        <Breadcrumb items={breadcrumbItems} className="mb-6 md:mb-8" />

        {/* Product hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
          {/* Media — larger column */}
          <div className="lg:col-span-7 xl:col-span-8">
            <ProductMediaGallery media={media} productName={product.name} />
          </div>

          {/* Info — sticky on desktop */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ProductInfo
                name={product.name}
                description={product.description}
                price={product.price}
                views={product.views}
                colors={product.colors}
                category={
                  category ? { name: category.name, slug: category.slug } : null
                }
                occasion={
                  occasion ? { name: occasion.name, slug: occasion.slug } : null
                }
              />
            </div>
          </div>
        </div>

        <YouMayAlsoLike products={related} />
      </div>

      <div className="mt-8 md:mt-12">
        <InquirySection
          categories={categories}
          defaultCategory={
            typeof product.category === "string"
              ? product.category
              : category?.slug
          }
          inquiryType="productInquiry"
          productId={product._id}
        />
      </div>
    </main>
  );
}
