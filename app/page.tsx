import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Link href="/users">Users Page</Link>
      <ProductCard />
    </main>
  );
}
