"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, isBorrowed = false) {
        this.title = title;
        this.author = author;
        this.isBorrowed = isBorrowed;
    }
}
exports.Book = Book;
