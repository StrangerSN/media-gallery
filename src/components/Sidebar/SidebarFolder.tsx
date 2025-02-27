import AddFolderButton from "@app/components/Sidebar/AddFolderButton";
import { Folder } from "@app/contracts/folderContract";
import { useFolderStore } from "@app/stores/folderStore";
import { NavLink } from "react-router";
import classNames from "classnames";

interface Props {
  folder: Folder;
  depth?: number;
}

export default function SidebarFolder(props: Props) {
  const { folder, depth = 0 } = props;

  const { selectedFolderId } = useFolderStore();

  const isSelected = selectedFolderId === folder.id;

  return (
    <>
      <NavLink
        className={classNames(
          "text-sm flex items-center gap-2 justify-between rounded-md px-2 py-1",
          {
            "bg-gray-100": isSelected,
            "hover:bg-gray-200": isSelected,
            "hover:bg-gray-100": !isSelected,
          }
        )}
        to={`/folder/${folder.id}`}
        style={{ marginLeft: `${depth * 0.5}rem` }}
      >
        <div className="flex gap-2">
          <img src="./../../../src/assets/folder.svg" alt="Folder icon" />

          {/* TODO: Add tooltip to see the whole name in case is being truncated  */}
          {/* TODO: Handle use case when depth is greater than sidebar support */}
          <div className="overflow-hidden text-ellipsis text-nowrap">
            {folder.name}
          </div>
        </div>

        <AddFolderButton parentFolder={folder} />
      </NavLink>

      {folder.children?.map((child) => (
        <SidebarFolder key={child.id} folder={child} depth={depth + 1} />
      ))}
    </>
  );
}
