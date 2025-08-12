import type { ICategory } from "@/interfaces/category";

export class Category implements ICategory {
  _id: string;
  name: string;
  description: string;
  code?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    _id,
    name,
    description,
    code,
    updatedAt,
    createdAt,
  }: ICategory) {
    this._id = _id;
    this.name = name;
    this.description = description;
    this.code = code;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromJson(json: Category) {
    return new Category(json);
  }
}
