import { Book } from "../lib/definitions";

export function BookList({ books, userList = false }: { books: Book[], userList: boolean }) {
  const noBooksNote = userList ? "User has not added any books yet" : "No books have been added to library yet."
  return (
    <>

    {books.length ? (
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
          )
        )
        }
      </ul>
    )
  :
    <div>{noBooksNote}</div>
  }
    </>
  )
}