import { Folder } from "@app/contracts/folderContract";

interface Props {
  folder: Folder;
}

export default function SidebarFolder(props: Props) {
  const { folder } = props;

  return (
    <a
      className="text-sm flex items-center gap-2 bg-white rounded-md px-2 py-1 hover:bg-gray-100"
      href={`/folder/${folder.id}`}
    >
      <img src="./../../../src/assets/folder.svg" alt="Folder icon" />

      <div>{folder.name}</div>
    </a>
  );
}
