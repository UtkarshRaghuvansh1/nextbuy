// import { mockProducts } from "@/lib/mockdata";
import ProductCard from "./products/ProductCard";
import { prisma } from "@/prisma/prima";
export default async function HomePage() {
  const products = await prisma.product.findMany();
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Home page</h1>
      <p>Showing {products.length} products</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
