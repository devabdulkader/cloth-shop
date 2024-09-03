import Landing from "@/pages/Landing";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);
  return (
    <main>
      <Landing />
    </main>
  );
}
