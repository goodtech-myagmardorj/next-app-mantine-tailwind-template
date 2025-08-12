import type { IManga } from "@/interfaces/manga";

export class Manga implements IManga {
  _id: string;
  title: string;
  altTitles: string[];
  authors: string[];
  status: string;
  thumbnailUrl: string;
  posterUrl: string;
  rating: number;
  description: string;
  demographic: string;
  genres: string[];
  categories: string[];
  volumes: number;
  characters: {
    _id: string;
    name: string;
    thumbnailUrl: string;
  }[];
  author: string;
  genre: string;
  chapters: string[];
  coverImage: string;
  views: number;
  likes: number;
  ratings: number;
  ratingCount: number;
  tags: string[];
  lastUpdated: Date;
  lastChapter: string;
  lastChapterNumber: number;
  lastChapterDate: Date;
  coverImageUrl: string;
  coverImageThumbnail: string;
  coverImageLarge: string;
  coverImageSmall: string;
  coverImageMedium: string;
  coverImageOriginal: string;
  coverImageBlurHash: string;
  createdAt: Date;
  updatedAt: Date;

  constructor({
    title,
    description,
    chapters,
    genres,
    status,
    _id,
    altTitles,
    authors,
    thumbnailUrl,
    posterUrl,
    rating,
    demographic,
    categories,
    volumes,
    characters,
    author,
    genre,
    coverImage,
    views,
    likes,
    ratings,
    ratingCount,
    tags,
    lastUpdated,
    lastChapter,
    lastChapterNumber,
    lastChapterDate,
    coverImageUrl,
    coverImageThumbnail,
    coverImageLarge,
    coverImageSmall,
    coverImageMedium,
    coverImageOriginal,
    coverImageBlurHash,
    createdAt,
    updatedAt,
  }: IManga) {
    this._id = _id;
    this.title = title;
    this.altTitles = altTitles || [];
    this.authors = authors || [];
    this.status = status || "unknown";
    this.thumbnailUrl = thumbnailUrl || "";
    this.posterUrl = posterUrl || "";
    this.rating = rating || 0;
    this.description = description || "";
    this.demographic = demographic || "unknown";
    this.genres = genres || [];
    this.categories = categories || [];
    this.volumes = volumes || 0;
    this.chapters = chapters || 0;
    this.characters = characters || [];

    this.author = author;
    this.genre = genre;
    this.coverImage = coverImage;
    this.views = views;
    this.likes = likes;
    this.ratings = ratings;
    this.ratingCount = ratingCount;
    this.tags = tags;
    this.lastUpdated = lastUpdated;
    this.lastChapter = lastChapter;
    this.lastChapterNumber = lastChapterNumber;
    this.lastChapterDate = lastChapterDate;
    this.coverImageUrl = coverImageUrl;
    this.coverImageThumbnail = coverImageThumbnail;
    this.coverImageLarge = coverImageLarge;
    this.coverImageSmall = coverImageSmall;
    this.coverImageMedium = coverImageMedium;
    this.coverImageOriginal = coverImageOriginal;
    this.coverImageBlurHash = coverImageBlurHash;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromJson(json: Manga) {
    return new Manga(json);
  }
}
