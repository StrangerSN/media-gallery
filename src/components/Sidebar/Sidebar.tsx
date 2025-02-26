import SidebarFoldersSection from "@app/components/Sidebar/SidebarFoldersSection";

export default function Sidebar() {
  return (
    <nav className="flex flex-col h-screen w-58 bg-white p-4 pr-2 gap-8">
      <a className="text-base flex items-center gap-2 w-fit" href="/">
        <img src="./../../../src/assets/logo.svg" alt="Logo image" />

        <h1>Media gallery</h1>
      </a>

      <SidebarFoldersSection />
    </nav>
  );
}
