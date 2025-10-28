import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Data...");
  await prisma.product.deleteMany();
  console.log("Deleted all rows for  Product table");
  await prisma.category.deleteMany();
  console.log("Deleted all rows for  Category table");

  //  Populate table for different categories
  const electronics = await prisma.category.create({
    data: {
      name: "Electronics",
      slug: "electronics",
    },
  });
  const clothing = await prisma.category.create({
    data: {
      name: "Clothing",
      slug: "clothing",
    },
  });
  const home = await prisma.category.create({
    data: {
      name: "Home",
      slug: "home",
    },
  });

  // Populate product table
  const products: Product[] = [
    {
      id: "1",
      name: "Wireless Headphones",
      description:
        "Premium noise-cancelling wireless headphones with long battery life.",
      price: 199.99,
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      categoryId: electronics.id,
      slug: "wireless-headphones",
    },
    {
      id: "2",
      name: "Smart Watch",
      description:
        "Fitness tracker with heart rate monitoring and sleep analysis.",
      price: 149.99,
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      categoryId: electronics.id,
      slug: "smart-watch",
    },
    {
      id: "3",
      name: "Bagpack",
      description:
        "Fitness tracker with heart rate monitoring and sleep analysis.",
      price: 149.99,
      imageUrl:
        "https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFncGFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=900",
      categoryId: clothing.id,
      slug: "bagpack",
    },
    {
      id: "4",
      name: "Shoes",
      description:
        "Fitness tracker with heart rate monitoring and sleep analysis.",
      price: 149.99,
      imageUrl:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900",
      categoryId: clothing.id,
      slug: "shoes",
    },
    {
      id: "5",
      name: "Coffee Mug",
      description:
        "Fitness tracker with heart rate monitoring and sleep analysis.",
      price: 149.99,
      imageUrl:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TXVnfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=900",
      categoryId: home.id,
      slug: "coffee-mug",
    },
  ];

  for (const prod of products) {
    await prisma.product.create({
      data: prod,
    });
  }
  console.log("Seeded Product and Category data");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
