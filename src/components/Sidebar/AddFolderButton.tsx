import Svg from "@app/components/Svg";
import { Folder } from "@app/contracts/folderContract";
import { useFolderStore } from "@app/stores/folderStore";

interface Props {
  parentFolder?: Folder;
}

export default function AddFolderButton(props: Props) {
  const { parentFolder } = props;
  const { addFolder } = useFolderStore();

  return (
    <button
      type="button"
      className="flex justify-center items-center hover:bg-white p-1 rounded cursor-pointer h-4 w-4"
      onClick={(e) => {
        e.preventDefault();
        addFolder({ id: Date.now(), name: "New Folder" }, parentFolder);
      }}
    >
      <Svg type="plusIcon" />
    </button>
  );
}
