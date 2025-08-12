import type { IResult } from "@/interfaces/result";

class Result<T> {
  rows: T[];
  count: number;

  constructor({ rows, count }: IResult<T>) {
    this.rows = rows;
    this.count = count;
  }

  static fromJson<T>({ rows, count }: IResult<T>): IResult<T> {
    return new Result<T>({
      rows,
      count,
    });
  }
}

export { Result };
