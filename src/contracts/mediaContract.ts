export type MediaFileType = "image" | "video" | "gif";

export type MediaFileId = string;

export interface MediaFile {
  type: MediaFileType;
  id: MediaFileId;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  folderId: number;
}
