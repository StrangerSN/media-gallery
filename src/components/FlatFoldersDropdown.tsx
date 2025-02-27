import { FolderId } from "@app/contracts/folderContract";
import { useFolderStore } from "@app/stores/folderStore";
import { useState } from "react";

interface Props {
  onClick: (folderId: FolderId) => void;
}

export default function FlatFolderDropdown(props: Props) {
  const { onClick } = props;

  const { selectedFolderId, getFlatFolderStructure, getSelectedFolder } =
    useFolderStore();

  const clickHandler = (folderId: FolderId) => {
    setIsOpen(false);
    onClick(folderId);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {getSelectedFolder()?.name ?? "No folder selected"}
        <svg
          className="-mr-1 size-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fill-rule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {getFlatFolderStructure().map((x) => (
              <button
                key={x.id}
                className="block px-4 py-2 text-sm text-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed cursor-pointer "
                role="menuitem"
                id="menu-item-0"
                disabled={x.id === selectedFolderId}
                onClick={() => clickHandler(x.id)}
              >
                {x.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
