export const MediaFileTypes = ["image", "video", "gif"] as const;

export const MediaFileTypesDisplayName: Record<MediaFileType, string> = {
  image: "Images",
  video: "Videos",
  gif: "GIFs",
};

export type MediaFileType = (typeof MediaFileTypes)[number];
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
