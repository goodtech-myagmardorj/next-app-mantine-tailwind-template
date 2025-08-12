import type { IBook } from "@/interfaces/book";

export class Book implements IBook {
  _id: string;
  title: string;
  author: string;

  constructor({ _id, title, author }: IBook) {
    this._id = _id;
    this.title = title;
    this.author = author;
  }

  static fromJson(json: Book) {
    return new Book(json);
  }
}
