import type { IReference } from "@/interfaces/reference";

export class Reference implements IReference {
  code: string;
  name: string;
  color?: string;

  constructor({ code, name, color }: IReference) {
    this.code = code;
    this.name = name;
    this.color = color;
  }

  static fromJson(json: Reference) {
    return new Reference(json);
  }
}
