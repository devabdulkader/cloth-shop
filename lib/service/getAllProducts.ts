import productData from "@/public/data/products.json";

export async function getAllProducts() {
  try {
    const data = productData;

    // Return the data
    return data;
  } catch (error) {
    throw new Error("Error in getAllProducts: " + error);
  }
}
