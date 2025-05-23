"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
class Member {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
    returnBook(bookTitle) {
        this.borrowedBooks = this.borrowedBooks.filter((book) => book.title !== bookTitle);
    }
}
exports.Member = Member;
