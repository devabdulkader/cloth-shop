// import Breadcrumb from "@/components/common/Breadcrumb";
// import AdditionalDetailsTab from "@/components/product-detail/AdditionalDetailsTab";
// import ImageSlider from "@/components/product-detail/ImageSlider";
// import ProductDetails from "@/components/product-detail/ProductDetails";
// import ReviewProduct from "@/components/product-detail/ReviewProduct";
// import ServiceHighlights from "@/components/product/ServiceHighlights";
// import { getAllProducts } from "@/lib/service/getAllProducts";
// import { IProduct } from "@/types/product";

// type ProductDetailPageProps = {
//   productId: string;
// };

// const ProductDetailPage = async ({ productId }: ProductDetailPageProps) => {
//   const breadcrumbItems = [
//     { name: "Home", href: "/" },
//     { name: "Accessory Boutiques", href: "#" }, // Replace href with the actual link if needed
//   ];

//   const products: IProduct[] = await getAllProducts(); // Fetching all products
//   const matchedProduct = products.find((product) => product._id === productId);

//   if (!matchedProduct) {
//     return <div>Product not found</div>; // Handle the case where the product is not found
//   }

//   return (
//     <div className="relative">
//       <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10 ">
//         <Breadcrumb items={breadcrumbItems} />
//         <section className="md:grid grid-cols-2 md:gap-10 my-10 relative">
//           <div className="relative z-50">
//             <ImageSlider productVariants={matchedProduct.productVariants} />{" "}
//             {/* Ensure this matches the prop name in ImageSlider */}
//           </div>
//           <div>
//             <ProductDetails product={matchedProduct} />
//           </div>
//         </section>
//         <AdditionalDetailsTab
//           description={matchedProduct.description}
//           deliveryPolicy={matchedProduct.deliveryPolicy}
//           shippingReturnPolicy={matchedProduct.shippingReturnPolicy}
//         />
//       </div>

//       <ServiceHighlights />

//       <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10 ">
//         <ReviewProduct />
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

// import { GetServerSideProps } from "next";
// import Breadcrumb from "@/components/common/Breadcrumb";
// import AdditionalDetailsTab from "@/components/product-detail/AdditionalDetailsTab";
// import ImageSlider from "@/components/product-detail/ImageSlider";
// import ProductDetails from "@/components/product-detail/ProductDetails";
// import ReviewProduct from "@/components/product-detail/ReviewProduct";
// import ServiceHighlights from "@/components/product/ServiceHighlights";
// import { getAllProducts } from "@/lib/service/getAllProducts";
// import { IProduct } from "@/types/product";

// type ProductDetailPageProps = {
//   product: IProduct | null;
// };

// const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
//   const breadcrumbItems = [
//     { name: "Home", href: "/" },
//     { name: "Accessory Boutiques", href: "#" }, // Replace href with the actual link if needed
//   ];

//   if (!product) {
//     return <div>Product not found</div>; // Handle the case where the product is not found
//   }

//   return (
//     <div className="relative">
//       <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10 ">
//         <Breadcrumb items={breadcrumbItems} />
//         <section className="md:grid grid-cols-2 md:gap-10 my-10 relative">
//           <div className="relative z-50">
//             <ImageSlider productVariants={product.productVariants} />
//           </div>
//           <div>
//             <ProductDetails product={product} />
//           </div>
//         </section>
//         <AdditionalDetailsTab
//           description={product.description}
//           deliveryPolicy={product.deliveryPolicy}
//           shippingReturnPolicy={product.shippingReturnPolicy}
//         />
//       </div>

//       <ServiceHighlights />

//       <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10 ">
//         <ReviewProduct />
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { productId } = context.query;
//   const products: IProduct[] = await getAllProducts();
//   const product = products.find((p) => p._id === productId) || null;

//   return {
//     props: { product },
//   };
// };

// export default ProductDetailPage;
import Breadcrumb from "@/components/common/Breadcrumb";
import AdditionalDetailsTab from "@/components/product-detail/AdditionalDetailsTab";
import ImageSlider from "@/components/product-detail/ImageSlider";
import ProductDetails from "@/components/product-detail/ProductDetails";
import ReviewProduct from "@/components/product-detail/ReviewProduct";
import ServiceHighlights from "@/components/product/ServiceHighlights";
import { IProduct } from "@/types/product";

type ProductDetailPageProps = {
  product: IProduct | null;
};

const ProductDetailPage = ({ product }: ProductDetailPageProps) => {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Accessory Boutiques", href: "#" }, // Replace href with the actual link if needed
  ];

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product is not found
  }

  return (
    <div className="relative">
      <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10 ">
        <Breadcrumb items={breadcrumbItems} />
        <section className="md:grid grid-cols-2 md:gap-10 my-10 relative">
          <div className="relative z-50">
            <ImageSlider productVariants={product.productVariants} />
          </div>
          <div>
            <ProductDetails product={product} />
          </div>
        </section>
        <AdditionalDetailsTab
          description={product.description}
          deliveryPolicy={product.deliveryPolicy}
          shippingReturnPolicy={product.shippingReturnPolicy}
        />
      </div>

      <ServiceHighlights />

      <div className="px-5 md:px-10 xl:px-0 xl:max-w-[80%] mx-auto w-full py-10 ">
        <ReviewProduct />
      </div>
    </div>
  );
};

export default ProductDetailPage;
