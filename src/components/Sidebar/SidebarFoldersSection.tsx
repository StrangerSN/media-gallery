import SidebarFolder from "@app/components/Sidebar/SidebarFolder";
import { useFolderStore } from "@app/stores/folderStore";

export default function SidebarFoldersSection() {
  const { folders } = useFolderStore();

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-sm font-medium px-2">Folders</h2>

      <div className="flex flex-col gap-1">
        {folders.map((folder) => (
          <SidebarFolder key={folder.id} folder={folder} />
        ))}
      </div>
    </section>
  );
}
