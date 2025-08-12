import type { IAuth } from "@/interfaces/auth";
import type { IUser } from "@/interfaces/user";

export type IPerm = {
  code: string;
  isFull: boolean;
  isRead: boolean;
  isWrite: boolean;
  isRemove: boolean;
  isPrint: boolean;
  isExport: boolean;
};

export interface IOtp {
  otpMethod: string | null;
  phone: string | null;
  message: string | null;
  expiresAt?: string | null;
}

export class Auth implements IAuth {
  username?: string | null;
  password?: string | null;
  accessToken: string | null;
  sessionScope: string | null;
  otp: IOtp;
  user: IUser | null;
  permissions?: [];
  perm?: IPerm[];

  constructor({
    username,
    password,
    accessToken,
    sessionScope,
    otp,
    user,
    permissions,
    perm,
  }: IAuth) {
    this.username = username;
    this.password = password;
    this.accessToken = accessToken;
    this.sessionScope = sessionScope;
    this.otp = otp;
    this.user = user;
    this.permissions = permissions;
    this.perm = perm;
  }
}
