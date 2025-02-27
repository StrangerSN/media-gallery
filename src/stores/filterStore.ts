import { MediaFileType } from "@app/contracts/mediaContract";
import { create } from "zustand";

interface FilterState {
  mediaFileTypes: Record<MediaFileType, string>;
  selectedFilters: MediaFileType[];
  toggleFilter: (filter: MediaFileType) => void;
  isChecked: (filter: MediaFileType) => boolean;
}

export const useFilterStore = create<FilterState>((set, get) => ({
  mediaFileTypes: {
    image: "Images",
    video: "Videos",
    gif: "GIFs",
  },
  selectedFilters: ["image", "video", "gif"],
  isChecked: (filter) => get().selectedFilters.includes(filter),
  toggleFilter: (filter: MediaFileType) => {
    set((state) => {
      if (state.selectedFilters.includes(filter)) {
        return {
          selectedFilters: state.selectedFilters.filter((f) => f !== filter),
        };
      }

      return {
        selectedFilters: [...state.selectedFilters, filter],
      };
    });
  },
}));
