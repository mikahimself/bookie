export type Author = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  books: Book[];
}

export type Book = {
  id: string;
  title: string;
  originalTitle?: string;
  author: Author;
  translator?: Translator;
  type: string;
  synopsis: string;
  isbn: string;
  score: number;
  releaseYear: number;
  genres: Genre[];
  series?: Series;
  seriesPosition?: number;
}

export type Genre = {
  id: string;
  name: string;
}

export type Series = {
  name: string;
  description?: string;
  books: Book[]

}

export type Translator = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  books: Book[];
}

export type User = {
  name: string;
  email: string;
  books: Book[]
  wishlists: Wishlist[]
}

export type Wishlist = {
  id: string;
  name: string;
  createdAt: Date;
  books: Book[]
}