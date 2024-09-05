import Breadcrumb from "@/components/common/Breadcrumb";
import AdditionalDetailsTab from "@/components/product-detail/AdditionalDetailsTab";
import ImageSlider from "@/components/product-detail/ImageSlider";
import ProductDetails from "@/components/product-detail/ProductDetails";
import ServiceHighlights from "@/components/product/ServiceHighlights";
import { getAllProducts } from "@/lib/service/getAllProducts";
import { IProduct } from "@/types/product";
import { Description } from "@headlessui/react";

type ProductDetailPageProps = {
  productId: string;
};

const ProductDetailPage = async ({ productId }: ProductDetailPageProps) => {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Accessory Boutiques", href: "#" }, // Replace href with the actual link if needed
  ];

  const products: IProduct[] = await getAllProducts(); // Fetching all products
  const matchedProduct = products.find((product) => product._id === productId);

  if (!matchedProduct) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  return (
    <div className="relative">
      <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10">
        <Breadcrumb items={breadcrumbItems} />
        <section className="md:grid grid-cols-2 md:gap-10 mt-4">
          <ImageSlider productImgs={matchedProduct.productImgs} />
          <div>
            <ProductDetails
              title={matchedProduct.title}
              description={matchedProduct.description}
              basePrice={matchedProduct.basePrice}
              buyPrice={matchedProduct.buyPrice}
              otherCost={matchedProduct.otherCost}
              discountPrice={matchedProduct.discountPrice}
              sku={matchedProduct.sku}
              totalQuantity={matchedProduct.totalQuantity}
              lowStockQuantity={matchedProduct.lowStockQuantity}
              displayImage={matchedProduct.displayImage}
              productCategory={matchedProduct.productCategory}
              productAttributes={matchedProduct.productAttributes}
              productSEO={matchedProduct.productSEO}
              productVariants={matchedProduct.productVariants}
              productBrand={matchedProduct.productBrand}
            />
          </div>
        </section>
        <AdditionalDetailsTab
          description={matchedProduct.description}
          deliveryPolicy={matchedProduct.deliveryPolicy}
          shippingReturnPolicy={matchedProduct.shippingReturnPolicy}
        />
      </div>
      <ServiceHighlights />
    </div>
  );
};

export default ProductDetailPage;
