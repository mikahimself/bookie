import { Book } from "./definitions";
import { prisma } from "./prisma";
import { getUser } from "./userData";

export async function getAllBooks() {
  const data:Book[] = await prisma.book.findMany()
  return data;
}

export async function getUserBooks() {
  const user = await getUser();
  const data = await prisma.userBook.findMany({
    where: {
      userId: user?.id
    },
    include: {
      book: {
        include: {
          author: true,
          genres: true,
          series: true
        }
      }
    }
  })

  const books = data.map((book) => book.book)

  return books;
}