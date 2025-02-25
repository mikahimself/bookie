import styles from "./page.module.css";
import { NavMenu } from "./components/NavMenu";
import { getAllBooks, getUserBooks } from "./lib/bookData";
import { BookList } from "./components/BookList";

export default async function Home() {
  const bookList = await getAllBooks()
  const userBookList = await getUserBooks()

  return (
    <main>
      <NavMenu />
      <div className={styles.page}>
      <main className={styles.main}>
        <BookList books={bookList} userList={false} />
        <BookList books={userBookList} userList={true} />
      </main>
    </div>
    </main>
  );
}


