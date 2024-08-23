"use server";

import prisma from "../index";

export async function getAll() {
  return await prisma.capybara.findMany();
}

export async function getSortedFilter(sortBy, food, currStatus) {
  return await prisma.capybara.findMany({
    orderBy: { [sortBy]: "asc", },
    where: {
      favoriteFood: { in: food },
      status: { in: currStatus }
    }
  })
}
