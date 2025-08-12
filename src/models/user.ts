import type { IUser } from "@/interfaces/user";

export class User implements IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  createdAt: string;
  address: string;
  age: number;
  avatar: string | null;
  username?: string;

  constructor({
    _id,
    avatar,
    lastName,
    firstName,
    username,
    email,
    phone,
    role,
    status,
    createdAt,
    address,
    age,
  }: IUser) {
    this._id = _id;
    this.avatar = avatar;
    this.lastName = lastName;
    this.firstName = firstName;
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.role = role;
    this.status = status;
    this.createdAt = createdAt;
    this.address = address;
    this.age = age;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
