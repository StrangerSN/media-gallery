import { FolderId } from "@app/contracts/folderContract";
import {
  MediaFile,
  MediaFileId,
  MediaFileType,
} from "@app/contracts/mediaContract";
import { create } from "zustand";

interface MediaState {
  allMediaFiles: MediaFile[];
  selectedMediaFiles: Record<FolderId, MediaFileId[]>;
  getIsSelected: (mediaFile: MediaFile) => boolean;
  setIsSelected: (mediaFile: MediaFile) => void;
  getFolderMediaFiles: (
    folderId: FolderId,
    selectedFilters: MediaFileType[]
  ) => MediaFile[];
  getOrderNumber: (mediaFile: MediaFile) => number;
  unselectByMediaFileType: (mediaFileType: MediaFileType) => void;
}

export const useMediaFileStore = create<MediaState>((set, get) => ({
  // TODO: Load from API
  allMediaFiles: [
    {
      id: "125",
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
  setIsSelected: ({ id, folderId }) => {
    set((state) => {
      const selectedMediaFiles = state.selectedMediaFiles[folderId] ?? [];
      const isSelected = selectedMediaFiles.includes(id);

      const newSelectedMediaFiles = isSelected
        ? selectedMediaFiles.filter((mediaFileId) => mediaFileId !== id)
        : [...selectedMediaFiles, id];

      return {
        selectedMediaFiles: {
          ...state.selectedMediaFiles,
          [folderId]: newSelectedMediaFiles,
        },
      };
    });
  },
  getFolderMediaFiles: (folderId, selectedFilters) => {
    return get().allMediaFiles.filter(
      (mediaFile) =>
        mediaFile.folderId === folderId &&
        selectedFilters.includes(mediaFile.type)
    );
  },
  getOrderNumber: ({ id, folderId }) => {
    const selectedMediaFiles = get().selectedMediaFiles?.[folderId] ?? [];

    return selectedMediaFiles.findIndex((x) => x === id) + 1;
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
}));
