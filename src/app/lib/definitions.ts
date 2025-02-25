export type Author = {
  id: string;
  firstName: string;
  middleName: string | null;
  lastName: string;
  books?: Book[];
}

export type Book = {
  id: string;
  title: string;
  originalTitle?: string;
  authorId: string;
  author?: Author;
  translator?: Translator;
  type: string;
  synopsis: string | null;
  isbn: string | null;
  score: number | null;
  releaseYear: number;
  genres?: Genre[];
  series?: Series | null;
  seriesPosition?: number | null;
}

export type Genre = {
  id: string;
  name: string;
}

export type Series = {
  name: string;
  description: string | null;
  books?: Book[]

}

export type Translator = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  books: Book[];
}

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date
}

export type Wishlist = {
  id: string;
  name: string;
  createdAt: Date;
  books: Book[]
}