export class Book {
  constructor(
    public title: string,
    public author: string,
    public isBorrowed: boolean = false
  ) {}
}
