import { Folder } from "@app/contracts/folderContract";
import { NavLink } from "react-router";

interface Props {
  folder: Folder;
}

export default function SidebarFolder(props: Props) {
  const { folder } = props;

  return (
    <NavLink
      className="text-sm flex items-center gap-2 bg-white rounded-md px-2 py-1 hover:bg-gray-100"
      to={`/folder/${folder.id}`}
    >
      <img src="./../../../src/assets/folder.svg" alt="Folder icon" />

      <div>{folder.name}</div>
    </NavLink>
  );
}
