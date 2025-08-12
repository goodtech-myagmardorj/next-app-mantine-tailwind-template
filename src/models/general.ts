import type { IGeneral } from "@/interfaces/general";

export class General implements IGeneral {
  categories: {
    id: number;
    name: string;
  }[];
  statuses: {
    label: string;
    value: string;
  }[];
  roles: {
    label: string;
    value: string;
  }[];

  constructor({ categories, statuses, roles }: IGeneral) {
    this.categories = categories;
    this.statuses = statuses;
    this.roles = roles;
  }

  static fromJson(json: IGeneral) {
    return new General(json);
  }
}
