import { getAllProducts } from "@/lib/service/getAllProducts";
import Landing from "@/pages/Landing";
import { IProduct } from "@/types/product";

export default async function Home() {
  let products: IProduct[] = []; // Ensure the type is IProduct[]

  try {
    products = await getAllProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <main>
      <Landing products={products} />
    </main>
  );
}
