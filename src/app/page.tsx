import styles from "./page.module.css";
import { getAllBooks } from "./lib/bookData";
import { BookList } from "./components/BookList";

export default async function Home() {
  const bookList = await getAllBooks()

  return (
    <main>
      <div className={styles.page}>
      <main className={styles.main}>
        <BookList initialBooks={bookList} />
      </main>
    </div>
    </main>
  );
}


