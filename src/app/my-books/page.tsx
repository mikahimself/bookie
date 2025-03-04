import Link from "next/link";
import { BookList } from "../components/BookList";
import { getUserBooks } from "../lib/bookData";

export default async function Page() {
  const books = await getUserBooks()
  
  return (
    <div>
      <BookList initialBooks={books} isUserList={true}></BookList>
      <div>
        <Link href={"/my-books/add"}>Add book</Link>
      </div>
    </div>
  )
}