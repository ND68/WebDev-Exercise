"use server";

import prisma from "../index";

export async function getAll() {
  return await prisma.capybara.findMany();
}
