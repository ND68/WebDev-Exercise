import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const FOODS = ["🥦", "🍈", "🍠", "🥕", "🥬", "🌽"];
const STATUS =  ["😃", "😐", "😢"];

function randFood() {
  return FOODS[faker.number.int({ max: FOODS.length - 1 })];
}

function randStatus() {
  return STATUS[faker.number.int({ max: STATUS.length - 1 })];
}

async function main() {
  await prisma.capybara.deleteMany();
  for (let i = 0; i < 16; i++) {
    await prisma.capybara.create({
      data: {
        name: faker.person.firstName(),
        age: faker.number.int({ min: 1, max: 10 }),
        status: randStatus(),
        favoriteFood: randFood(),
      },
    });
  }

  await prisma.food.deleteMany();

  await Promise.all(
    FOODS.map(async (name) => {
      await prisma.food.create({
        data: {
          name,
          count: faker.number.int({ max: 8 }),
        },
      });
    })
  );
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
