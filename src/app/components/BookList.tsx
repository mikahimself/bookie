import { Book } from "../lib/definitions";

export function BookList({ initialBooks, isUserList = false }: { initialBooks: Book[], isUserList?: boolean }) {
  const noBooksNote = isUserList ? "You have not added any books yet" : "No books added to library yet"
  return (
    <>

    {initialBooks.length ? (
      <ul>
        {initialBooks.map((book) => (
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