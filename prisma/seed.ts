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
