"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    registerMember(member) {
        this.members.push(member);
    }
    borrowBook(memberName, bookTitle) {
        const member = this.members.find((m) => m.name === memberName);
        const book = this.books.find((b) => b.title === bookTitle && !b.isBorrowed);
        if (member && book) {
            book.isBorrowed = true;
            member.borrowBook(book);
            console.log(`${memberName} borrowed "${bookTitle}"`);
        }
        else {
            console.log(`Cannot borrow "${bookTitle}".`);
        }
    }
    returnBook(memberName, bookTitle) {
        const member = this.members.find((m) => m.name === memberName);
        const book = this.books.find((b) => b.title === bookTitle && b.isBorrowed);
        if (member && book) {
            book.isBorrowed = false;
            member.returnBook(bookTitle);
            console.log(`${memberName} returned "${bookTitle}"`);
        }
        else {
            console.log(`Cannot return "${bookTitle}".`);
        }
    }
    listAvailableBooks() {
        console.log("Available Books:");
        this.books
            .filter((book) => !book.isBorrowed)
            .forEach((book) => console.log(`- ${book.title} by ${book.author}`));
    }
    listBorrowedBooks() {
        console.log("Borrowed Books:");
        this.books
            .filter((book) => book.isBorrowed)
            .forEach((book) => console.log(`- ${book.title} by ${book.author}`));
    }
}
exports.Library = Library;
