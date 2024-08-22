"use server";

import prisma from "../index";

export async function getAll() {
  return await prisma.capybara.findMany();
}

export async function getSortedByAge() {
  return await prisma.capybara.findMany({
    orderBy: [
      {
        age: 'asc',
      }
    ]
  })
}

export async function getSortedByName() {
  return await prisma.capybara.findMany({
    orderBy: [
      {
        name: 'asc',
      }
    ]
  })
}

export async function getFilterByFood() {
  return await prisma.capybara.findMany({
    where: {
      email: {
        endsWith: 'prisma.io',
      },
      posts: {
        some: {
          published: true,
        },
      },
    },
    include: {
      posts: {
        where: {
          published: true,
        },
      },
    },
  })
}
