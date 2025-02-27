export type MediaFileId = string;

export interface MediaFile {
  id: MediaFileId;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  folderId: number;
}
