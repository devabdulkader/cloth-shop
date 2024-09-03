import ProductList from "../product/ProductList";
const NewestProduct: React.FC = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center text-center py-10">
        <p className="uppercase mb-2">Product</p>
        <h2 className="capitalize text-3xl lg:text-5xl">
          Our newest product line
        </h2>
      </div>
      <ProductList layoutClass="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" />
    </section>
  );
};

export default NewestProduct;
