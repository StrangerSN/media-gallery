export type MediaFileType = "image" | "video" | "gif";

export type MediaFileId = string;

export interface MediaFile {
  id: MediaFileId;
  name: string;
  type: MediaFileType;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  folderId: number;
}
