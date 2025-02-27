export type FolderId = number;

export interface Folder {
  id: FolderId;
  name: string;
  children?: Folder[];
}
