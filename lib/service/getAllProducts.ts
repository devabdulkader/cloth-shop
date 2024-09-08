export async function getAllProducts() {
  try {
    const res = await fetch(
      "https://clothing-ecommerce-ecru.vercel.app/data/products.json"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log("Data fetched in getAllProducts:", data); // Log the data
    return data;
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    throw error;
  }
}
