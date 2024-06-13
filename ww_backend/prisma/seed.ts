// Seed script to populate the database with Hogwarts students' data
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const students = [
    {
      firstName: 'Harry',
      lastName: 'Potter',
      age: 17,
      house: 'Gryffindor',
      level: '7th year',
    },
    {
      firstName: 'Hermione',
      lastName: 'Granger',
      age: 17,
      house: 'Gryffindor',
      level: '7th year',
    },
    // Add more students as needed
  ];

  for (const student of students) {
    await prisma.studentOfHogwarts.create({
      data: student,
    });
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
