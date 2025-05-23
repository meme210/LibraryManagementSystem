import { Book } from "../src/book";
import { Member } from "../src/members";
import { Library } from "../src/library";

const library = new Library();

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

library.addBook(book1);
library.addBook(book2);

const member1 = new Member("Alice");
library.registerMember(member1);

library.borrowBook("Alice", "1984");
library.listAvailableBooks();
library.listBorrowedBooks();

library.returnBook("Alice", "1984");
library.listAvailableBooks();
library.listBorrowedBooks();
