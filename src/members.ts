import { Book } from "./book";

export class Member {
  public borrowedBooks: Book[] = [];

  constructor(public name: string) {}

  borrowBook(book: Book): void {
    this.borrowedBooks.push(book);
  }

  returnBook(bookTitle: string): void {
    this.borrowedBooks = this.borrowedBooks.filter(
      (book) => book.title !== bookTitle
    );
  }
}
