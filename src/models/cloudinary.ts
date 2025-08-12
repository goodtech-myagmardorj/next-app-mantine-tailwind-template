import type { ICloudinary } from "@/interfaces/cloudinary";

export class Cloudinary implements ICloudinary {
  _id: string;
  name: string;
  url: string;
  size: number;
  uploadedAt: string;
  mimetype: string;
  public_id?: string;

  constructor({
    _id,
    name,
    url,
    size,
    uploadedAt,
    mimetype,
    public_id,
  }: ICloudinary) {
    this._id = _id;
    this.name = name;
    this.url = url;
    this.size = size;
    this.uploadedAt = uploadedAt;
    this.mimetype = mimetype;
    this.public_id = public_id;
  }

  static fromJson(json: Cloudinary) {
    return new Cloudinary(json);
  }
}
