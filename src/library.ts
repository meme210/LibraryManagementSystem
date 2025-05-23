import { Book } from "../src/book";
import { Member } from "../src/members";

export class Library {
  private books: Book[] = [];
  private members: Member[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  registerMember(member: Member): void {
    this.members.push(member);
  }

  borrowBook(memberName: string, bookTitle: string): void {
    const member = this.members.find((m) => m.name === memberName);
    const book = this.books.find((b) => b.title === bookTitle && !b.isBorrowed);

    if (member && book) {
      book.isBorrowed = true;
      member.borrowBook(book);
      console.log(`${memberName} borrowed "${bookTitle}"`);
    } else {
      console.log(`Cannot borrow "${bookTitle}".`);
    }
  }

  returnBook(memberName: string, bookTitle: string): void {
    const member = this.members.find((m) => m.name === memberName);
    const book = this.books.find((b) => b.title === bookTitle && b.isBorrowed);

    if (member && book) {
      book.isBorrowed = false;
      member.returnBook(bookTitle);
      console.log(`${memberName} returned "${bookTitle}"`);
    } else {
      console.log(`Cannot return "${bookTitle}".`);
    }
  }

  listAvailableBooks(): void {
    console.log("Available Books:");
    this.books
      .filter((book) => !book.isBorrowed)
      .forEach((book) => console.log(`- ${book.title} by ${book.author}`));
  }

  listBorrowedBooks(): void {
    console.log("Borrowed Books:");
    this.books
      .filter((book) => book.isBorrowed)
      .forEach((book) => console.log(`- ${book.title} by ${book.author}`));
  }
}
