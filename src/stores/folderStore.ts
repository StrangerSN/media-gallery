import { Folder } from "@app/contracts/folderContract";
import { create } from "zustand";

interface FolderState {
  folders: Folder[];
  selectedFolderId?: number;
  setSelectedFolder: (folderId: number) => void;
  addFolder: (folder: Folder, parentFolder?: Folder) => void;
}

export const useFolderStore = create<FolderState>((set) => ({
  // TODO: Load from API
  folders: [
    { id: 1, name: "Folder 1" },
    { id: 2, name: "Folder 2" },
    { id: 3, name: "Folder 3", children: [{ id: 4, name: "Subfolder 3.1" }] },
  ],
  selectedFolderId: 1,
  setSelectedFolder: (folderId) => set({ selectedFolderId: folderId }),
  addFolder: (folder, parentFolder) => {
    set((state) => {
      if (parentFolder) {
        parentFolder.children = parentFolder.children || [];
        parentFolder.children.push(folder);
        return { folders: [...state.folders] };
      }

      return { folders: [...state.folders, folder] };
    });
  },
}));
