import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  prisma.user.create({
    data: {
      id: 1,
      first_name: 'Sureah',
      last_name: 'Kamesh',
      email: 'SuKam@gmail.com',
    }
  })
  .then((res) => {
    console.log('resp: ', res);
  })
  .catch((err) => {
    console.log('error: ', err);
  })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })