import { Folder } from "@app/contracts/folderContract";
import { create } from "zustand";

interface FolderState {
  folders: Folder[];
  selectedFolderId: number;
  setSelectedFolder: (folderId: number) => void;
}

export const useFolderStore = create<FolderState>((set) => ({
  // TODO: Load from API
  folders: [
    { id: 1, name: "Folder 1" },
    { id: 2, name: "Folder 2" },
    { id: 3, name: "Subfolder 1", children: [{ id: 1, name: "subfolder1" }] },
  ],
  selectedFolderId: 1,
  setSelectedFolder: (folderId) => set({ selectedFolderId: folderId }),
}));
