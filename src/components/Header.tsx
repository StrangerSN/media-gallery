import Checkbox from "@app/components/Checkbox";
import FlatFolderDropdown from "@app/components/FlatFoldersDropdown";
import { useFolderStore } from "@app/stores/folderStore";
import { useMediaFileStore } from "@app/stores/mediaStore";

export default function Header() {
  const { selectedFolderId } = useFolderStore();
  const { getSelectedMediaFilesCount, moveMediaFilesToFolder } =
    useMediaFileStore();

  const moveSelectedFilesHandler = (toFolderId: number) => {
    if (!selectedFolderId) return;

    moveMediaFilesToFolder(selectedFolderId, toFolderId);
  };

  return (
    <header className="mx-2 my-4 mb-0 pb-4 border-b-1 flex gap-2 items-center border-[#E1E3E6]">
      <Checkbox />

      <div className="text-sm">
        {getSelectedMediaFilesCount(selectedFolderId)} selected
      </div>

      <FlatFolderDropdown
        onClick={(folderId) => moveSelectedFilesHandler(folderId)}
      />
    </header>
  );
}
