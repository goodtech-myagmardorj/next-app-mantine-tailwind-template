import type { IFile } from "@/interfaces/file";

export class File implements IFile {
  _id: string;
  name: string;
  url: string;
  size: number;
  mimetype: string;
  uploadedAt: Date;
  uploadedBy?: string;
  public_id?: string;

  constructor({
    name,
    url,
    size,
    mimetype,
    uploadedAt,
    uploadedBy,
    _id,
    public_id,
  }: IFile) {
    this._id = _id;
    this.name = name;
    this.url = url;
    this.size = size;
    this.mimetype = mimetype;
    this.uploadedAt = uploadedAt;
    this.uploadedBy = uploadedBy;
    this.public_id = public_id;
  }

  static fromJson(json: File) {
    return new File(json);
  }
}
