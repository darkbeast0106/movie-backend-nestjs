import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';


function createRandomMovie() {
  const categories = ["action", "adventure", "romance", "sci-fi", "fantasy", "horror", "romance", "comedy", "drama"]

  return {
    title: faker.lorem.sentence(),
    category: faker.helpers.arrayElements(categories).join(", "),
    duration: faker.number.int({min: 30, max: 200})
  }
}

async function main() {
  for (let i = 0; i < 10; i++) {
    const movie = createRandomMovie();
    await prisma.movie.create({data: movie});
  }
}

main();