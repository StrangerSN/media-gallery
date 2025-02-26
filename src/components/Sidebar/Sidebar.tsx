import SidebarFoldersSection from "./SidebarFoldersSection";

export default function Sidebar() {
  return (
    <nav className="flex flex-col h-screen w-58 bg-white p-4 pr-2 gap-8">
      <a className="flex items-center gap-2 w-fit" href="/">
        <img src="./../../../src/assets/logo.svg" alt="Logo image" />
        Media gallery
      </a>

      <SidebarFoldersSection />
    </nav>
  );
}
