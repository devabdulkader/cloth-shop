import { IProduct } from "@/types/product";
import { getAllProducts } from "@/lib/service/getAllProducts"; // Adjust import path as necessary
import ProductList from "@/components/product/ProductList";
import ServiceHighlights from "@/components/product/ServiceHighlights";
import FilterSidebar from "@/components/product/FilterSidebar";
import FilterToggler from "@/components/product/FilterToggler";
import ProductTags from "@/components/product/ProductTags";

const page = async () => {
  try {
    const products: IProduct[] = await getAllProducts();
    return (
      <section className="relative">
        <div className="flex h-auto w-full flex-col items-center justify-center bg-gray-100 py-10 md:h-64 mb-10">
          <div className="flex flex-col items-center gap-y-4 py-5">
            <h1 className="text-4xl font-bold md:text-6xl">Fashion</h1>
            <p className="text-sm text-gray-500 sm:text-base">Home | Fashion</p>
          </div>
        </div>

        <div className="mx-auto container w-full pb-10">
          <div className="lg:flex relative lg:space-x-20">
            <FilterSidebar />
            <div className="w-full relative flex flex-col border-gray-300 gap-5">
              <FilterToggler />
              <ProductList products={products} />
            </div>
          </div>
        </div>

        <ProductTags />
        <ServiceHighlights />
      </section>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error fetching products</div>;
  }
};

export default page;
