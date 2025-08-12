import { IFile } from "@/interfaces/file";
import type { IPaginationResponse } from "@/interfaces/pagination-response";

export class PaginationResponse implements IPaginationResponse {
  success: boolean;
  count: number;
  rows: IFile[];
  next_cursor: string | null;

  constructor({ success, count, rows, next_cursor }: IPaginationResponse) {
    this.success = success;
    this.count = count;
    this.rows = rows;
    this.next_cursor = next_cursor;
  }

  static fromJson(json: PaginationResponse) {
    return new PaginationResponse(json);
  }
}
