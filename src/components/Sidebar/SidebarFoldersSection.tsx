import SidebarFolder from "@app/components/Sidebar/SidebarFolder";
import { Folder } from "@app/contracts/folderContract";

export default function SidebarFoldersSection() {
  const folders: Folder[] = [
    {
      id: 1,
      name: "Folder 1",
    },
    {
      id: 2,
      name: "Folder 2",
    },
    {
      id: 3,
      name: "Folder 3",
    },
  ];

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
