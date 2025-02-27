import AddFolderButton from "@app/components/Sidebar/AddFolderButton";
import SidebarFolder from "@app/components/Sidebar/SidebarFolder";
import { useFolderStore } from "@app/stores/folderStore";

export default function SidebarFoldersSection() {
  const { folders } = useFolderStore();

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center  gap-2 px-2">
        <h2 className="text-sm font-medium">Folders</h2>

        <AddFolderButton />
      </div>

      <div className="flex flex-col gap-1">
        {folders.map((folder) => (
          <SidebarFolder key={folder.id} folder={folder} />
        ))}
      </div>
    </section>
  );
}
