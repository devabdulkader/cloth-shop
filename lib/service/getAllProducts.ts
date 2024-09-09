export async function getAllProducts() {
  try {
    // "https://clothing-ecommerce-ecru.vercel.app/data/products.json"

    const res = await fetch("http://localhost:3000/data/products.json");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    // console.log("Data fetched in getAllProducts:", data); // Log the data
    return data;
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    throw error;
  }
}
