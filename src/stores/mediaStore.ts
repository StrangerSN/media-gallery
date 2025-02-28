import { FolderId } from "@app/contracts/folderContract";
import {
  MediaFile,
  MediaFileId,
  MediaFileType,
} from "@app/contracts/mediaContract";
import { create } from "zustand";

export type SelectionType = "single" | "multi" | "range";

interface MediaState {
  allMediaFiles: MediaFile[];
  selectedMediaFiles: Record<FolderId, MediaFileId[]>;
  getIsSelected: (mediaFile: MediaFile) => boolean;
  setIsSelected: (mediaFile: MediaFile, type: SelectionType) => void;
  getFolderMediaFiles: (
    folderId: FolderId,
    selectedFilters: MediaFileType[]
  ) => MediaFile[];
  getSelectedMediaFilesOrderNumber: (mediaFile: MediaFile) => number;
  getSelectedMediaFilesCount: (folderId: FolderId | undefined) => number;
  unselectByMediaFileType: (mediaFileType: MediaFileType) => void;
  moveMediaFilesToFolder: (
    fromFolderId: FolderId,
    toFolderId: FolderId
  ) => void;
  updateMediaFileName: (mediaFile: MediaFile, newName: string) => void;
}

export const useMediaFileStore = create<MediaState>((set, get) => ({
  // TODO: Load from API
  allMediaFiles: [
    {
      id: "125",
      name: "File 125.mp4",
      author: "Rick Waalders",
      width: 1500,
      height: 1000,
      url: "https://unsplash.com/photos/3HlgJNdnD7I",
      download_url: "https://picsum.photos/id/125/1500/1000",
      folderId: 1,
      type: "video",
    },
    {
      id: "126",
      name: "File 126.mp4",
      author: "Zugr",
      width: 4272,
      height: 2511,
      url: "https://unsplash.com/photos/asrWX-lU3RE",
      download_url: "https://picsum.photos/id/126/4272/2511",
      folderId: 1,
      type: "video",
    },
    {
      id: "127",
      name: "File 127.mp4",
      author: "Marcin Czerwinski",
      width: 4032,
      height: 2272,
      url: "https://unsplash.com/photos/rf-0DQu5M6Y",
      download_url: "https://picsum.photos/id/127/4032/2272",
      folderId: 1,
      type: "video",
    },
    {
      id: "128",
      name: "File 128.gif",
      author: "Matteo Minelli",
      width: 3823,
      height: 2549,
      url: "https://unsplash.com/photos/hlnucYOsL-c",
      download_url: "https://picsum.photos/id/128/3823/2549",
      folderId: 1,
      type: "gif",
    },
    {
      id: "129",
      name: "File 129.gif",
      author: "Charlie Foster",
      width: 4910,
      height: 3252,
      url: "https://unsplash.com/photos/A88emaZe7d8",
      download_url: "https://picsum.photos/id/129/4910/3252",
      folderId: 1,
      type: "gif",
    },
    {
      id: "130",
      name: "File 130.gif",
      author: "Ryan Jacques",
      width: 3807,
      height: 2538,
      url: "https://unsplash.com/photos/ywiAen4L4qA",
      download_url: "https://picsum.photos/id/130/3807/2538",
      folderId: 1,
      type: "gif",
    },
    {
      id: "102",
      name: "File 102.jpeg",
      author: "Ben Moore",
      width: 4320,
      height: 3240,
      url: "https://unsplash.com/photos/pJILiyPdrXI",
      download_url: "https://picsum.photos/id/102/4320/3240",
      folderId: 1,
      type: "image",
    },
    {
      id: "103",
      name: "File 103.jpeg",
      author: "Ilham Rahmansyah",
      width: 2592,
      height: 1936,
      url: "https://unsplash.com/photos/DwTZwZYi9Ww",
      download_url: "https://picsum.photos/id/103/2592/1936",
      folderId: 1,
      type: "image",
    },
    {
      id: "104",
      name: "File 104.jpeg",
      author: "Dyaa Eldin",
      width: 3840,
      height: 2160,
      url: "https://unsplash.com/photos/2fl-ocJ5MOA",
      download_url: "https://picsum.photos/id/104/3840/2160",
      folderId: 1,
      type: "image",
    },
    {
      id: "106",
      name: "File 106.jpeg",
      author: "Arvee Marie",
      width: 2592,
      height: 1728,
      url: "https://unsplash.com/photos/YnfGtpt2gf4",
      download_url: "https://picsum.photos/id/106/2592/1728",
      folderId: 1,
      type: "image",
    },
    {
      id: "107",
      name: "File 107.jpeg",
      author: "Lukas Schweizer",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/9VWOr22LhVI",
      download_url: "https://picsum.photos/id/107/5000/3333",
      folderId: 1,
      type: "image",
    },
    {
      id: "108",
      name: "File 108.jpeg",
      author: "Florian Klauer",
      width: 2000,
      height: 1333,
      url: "https://unsplash.com/photos/t1mqA3V3-7g",
      download_url: "https://picsum.photos/id/108/2000/1333",
      folderId: 1,
      type: "image",
    },
    {
      id: "109",
      name: "File 109.jpeg",
      author: "Zwaddi",
      width: 4287,
      height: 2392,
      url: "https://unsplash.com/photos/YvYBOSiBJE8",
      download_url: "https://picsum.photos/id/109/4287/2392",
      folderId: 1,
      type: "image",
    },
    {
      id: "110",
      name: "File 110.jpeg",
      author: "Kenneth Thewissen",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/D76DklsG-5U",
      download_url: "https://picsum.photos/id/110/5000/3333",
      folderId: 1,
      type: "image",
    },
    {
      id: "111",
      name: "File 111.jpeg",
      author: "Gabe Rodriguez",
      width: 4400,
      height: 2656,
      url: "https://unsplash.com/photos/eLUegVAjN7s",
      download_url: "https://picsum.photos/id/111/4400/2656",
      folderId: 1,
      type: "image",
    },
    {
      id: "112",
      name: "File 112.jpeg",
      author: "Zugr",
      width: 4200,
      height: 2800,
      url: "https://unsplash.com/photos/kmF_Aq8gkp0",
      download_url: "https://picsum.photos/id/112/4200/2800",
      folderId: 1,
      type: "image",
    },
    {
      id: "113",
      name: "File 113.jpeg",
      author: "Zugr",
      width: 4168,
      height: 2464,
      url: "https://unsplash.com/photos/yZf1quatKCA",
      download_url: "https://picsum.photos/id/113/4168/2464",
      folderId: 1,
      type: "image",
    },
    {
      id: "114",
      name: "File 114.jpeg",
      author: "Brian Gonzalez",
      width: 3264,
      height: 2448,
      url: "https://unsplash.com/photos/llYg8Ni43fc",
      download_url: "https://picsum.photos/id/114/3264/2448",
      folderId: 1,
      type: "image",
    },
    {
      id: "115",
      name: "File 115.jpeg",
      author: "Christian Hebell",
      width: 1500,
      height: 1000,
      url: "https://unsplash.com/photos/A6S-q3D67Ss",
      download_url: "https://picsum.photos/id/115/1500/1000",
      folderId: 1,
      type: "image",
    },
    {
      id: "116",
      name: "File 116.jpeg",
      author: "Anton Sulsky",
      width: 3504,
      height: 2336,
      url: "https://unsplash.com/photos/YcfCXxo7rpc",
      download_url: "https://picsum.photos/id/116/3504/2336",
      folderId: 1,
      type: "image",
    },
    {
      id: "117",
      name: "File 117.jpeg",
      author: "Daniel Ebersole",
      width: 1544,
      height: 1024,
      url: "https://unsplash.com/photos/Q14J2k8VE3U",
      download_url: "https://picsum.photos/id/117/1544/1024",
      folderId: 1,
      type: "image",
    },
    {
      id: "118",
      name: "File 118.jpeg",
      author: "Rick Waalders",
      width: 1500,
      height: 1000,
      url: "https://unsplash.com/photos/d-Cr8MEW5Uc",
      download_url: "https://picsum.photos/id/118/1500/1000",
      folderId: 1,
      type: "image",
    },
    {
      id: "119",
      name: "File 119.jpeg",
      author: "Nadir Balcikli",
      width: 3264,
      height: 2176,
      url: "https://unsplash.com/photos/wE9nUW7tMmk",
      download_url: "https://picsum.photos/id/119/3264/2176",
      folderId: 1,
      type: "image",
    },
    {
      id: "120",
      name: "File 120.jpeg",
      author: "Guillaume",
      width: 4928,
      height: 3264,
      url: "https://unsplash.com/photos/_DA3D5P71qs",
      download_url: "https://picsum.photos/id/120/4928/3264",
      folderId: 1,
      type: "image",
    },
    {
      id: "121",
      name: "File 121.jpeg",
      author: "Radio Pink",
      width: 1600,
      height: 1067,
      url: "https://unsplash.com/photos/p-bkdO43shE",
      download_url: "https://picsum.photos/id/121/1600/1067",
      folderId: 1,
      type: "image",
    },
    {
      id: "122",
      name: "File 122.jpeg",
      author: "Vadim Sherbakov",
      width: 4147,
      height: 2756,
      url: "https://unsplash.com/photos/xS_RzdD5CFE",
      download_url: "https://picsum.photos/id/122/4147/2756",
      folderId: 1,
      type: "image",
    },
    {
      id: "123",
      name: "File 123.jpeg",
      author: "Mark Doda",
      width: 4928,
      height: 3264,
      url: "https://unsplash.com/photos/tS9hJOnmKK8",
      download_url: "https://picsum.photos/id/123/4928/3264",
      folderId: 1,
      type: "image",
    },
    {
      id: "124",
      name: "File 124.jpeg",
      author: "Anton Sulsky",
      width: 3504,
      height: 2336,
      url: "https://unsplash.com/photos/fj0tFloTPGQ",
      download_url: "https://picsum.photos/id/124/3504/2336",
      folderId: 1,
      type: "image",
    },
  ],
  selectedMediaFiles: [],
  getIsSelected: ({ id, folderId }) => {
    return get().selectedMediaFiles[folderId]?.includes(id) ?? false;
  },
  setIsSelected: ({ id, folderId }, type) => {
    set((state) => {
      const selectedMediaFiles = state.selectedMediaFiles[folderId] ?? [];
      const isSelected = selectedMediaFiles.includes(id);

      let newSelectedMediaFiles = [];

      switch (type) {
        case "single": {
          newSelectedMediaFiles = [id];
          break;
        }
        case "multi": {
          newSelectedMediaFiles = isSelected
            ? selectedMediaFiles.filter((mediaFileId) => mediaFileId !== id)
            : [...selectedMediaFiles, id];
          break;
        }
        case "range": {
          const folderMediaFiles = get().allMediaFiles.filter(
            (mediaFile) => mediaFile.folderId === folderId
          );

          const folderSelectedMediaFiles = get().selectedMediaFiles[folderId];

          const lastSelectedMediaFile =
            folderSelectedMediaFiles[folderSelectedMediaFiles.length - 1];

          const startIdx = folderMediaFiles.findIndex(
            (x) => x.id === lastSelectedMediaFile
          );

          const endIdx = folderMediaFiles.findIndex((x) => x.id === id);

          const minIndex = Math.min(startIdx, endIdx);
          const maxIndex = Math.max(startIdx, endIdx);

          newSelectedMediaFiles = [
            ...selectedMediaFiles,
            ...folderMediaFiles.slice(minIndex, maxIndex + 1).map((x) => x.id),
          ];

          break;
        }
      }

      return { selectedMediaFiles: { [folderId]: newSelectedMediaFiles } };
    });
  },
  getFolderMediaFiles: (folderId, selectedFilters) => {
    return get().allMediaFiles.filter(
      (mediaFile) =>
        mediaFile.folderId === folderId &&
        selectedFilters.includes(mediaFile.type)
    );
  },
  getSelectedMediaFilesOrderNumber: ({ id, folderId }) => {
    const selectedMediaFiles = get().selectedMediaFiles?.[folderId] ?? [];

    return selectedMediaFiles.findIndex((x) => x === id) + 1;
  },
  getSelectedMediaFilesCount: (folderId) => {
    if (!folderId) return 0;

    const selectedMediaFiles = get().selectedMediaFiles?.[folderId] ?? [];

    return selectedMediaFiles.length;
  },
  unselectByMediaFileType: (mediaFileType) => {
    const { selectedMediaFiles } = get();

    const newSelectedMediaFiles = Object.fromEntries(
      Object.entries(selectedMediaFiles).map(([folderId, mediaFileIds]) => [
        folderId,
        mediaFileIds.filter(
          (mediaFileId) =>
            !get().allMediaFiles.find(
              (mediaFile) =>
                mediaFile.id === mediaFileId && mediaFile.type === mediaFileType
            )
        ),
      ])
    );

    set({ selectedMediaFiles: newSelectedMediaFiles });
  },
  moveMediaFilesToFolder: (fromFolderId, toFolderId) => {
    const { allMediaFiles, selectedMediaFiles } = get();

    const selectedFilesFromFolder = selectedMediaFiles[fromFolderId];

    const newMediaFiles = allMediaFiles.map((x) => ({
      ...x,
      folderId: selectedFilesFromFolder.includes(x.id)
        ? toFolderId
        : x.folderId,
    }));

    set({
      allMediaFiles: newMediaFiles,
      selectedMediaFiles: { ...selectedMediaFiles, [fromFolderId]: [] },
    });
  },
  updateMediaFileName: ({ id }, newName) => {
    set((state) => {
      const allMediaFiles = [...state.allMediaFiles];

      const index = allMediaFiles.findIndex((x) => x.id === id);

      allMediaFiles[index] = { ...allMediaFiles[index], name: newName };

      return {
        allMediaFiles,
      };
    });
  },
}));
