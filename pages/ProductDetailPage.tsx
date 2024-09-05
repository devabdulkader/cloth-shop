import Breadcrumb from "@/components/common/Breadcrumb";
import AdditionalDetailsTab from "@/components/product-detail/AdditionalDetailsTab";
import ImageSlider from "@/components/product-detail/ImageSlider";
import ProductDetails from "@/components/product-detail/ProductDetails";
import ReviewProduct from "@/components/product-detail/ReviewProduct";
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
        <section className="md:grid grid-cols-2 md:gap-10 mt-4 relative">
          <div className="relative z-50">
            <ImageSlider productImgs={matchedProduct.productImgs} />
          </div>
          <div>
            <ProductDetails product={matchedProduct} />
          </div>
        </section>
        <AdditionalDetailsTab
          description={matchedProduct.description}
          deliveryPolicy={matchedProduct.deliveryPolicy}
          shippingReturnPolicy={matchedProduct.shippingReturnPolicy}
        />
      </div>
      <ServiceHighlights />
      <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10">
        <ReviewProduct />
      </div>
    </div>
  );
};

export default ProductDetailPage;
