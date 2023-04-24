import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({ data: { name: "Alice" } });
  // await prisma.user.deleteMany();
  const users = await prisma.user.findUnique({
    where: {
      email: "alice@gmail.com",
    },
  });
  console.log(users);
}

export default function Home() {
  main()
    .catch((e) => {
      console.error(e.message);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return (
    <div>
      <h1>Home</h1>
      <div>{}</div>
    </div>
  );
}
