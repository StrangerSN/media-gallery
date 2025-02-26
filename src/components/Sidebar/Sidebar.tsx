import SidebarFoldersSection from "@app/components/Sidebar/SidebarFoldersSection";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <nav className="flex flex-col h-screen w-58 p-4 pr-2 gap-8">
      <NavLink className="text-base flex items-center gap-2 w-fit" to="/">
        <img src="/src/assets/logo.svg" alt="Logo image" />

        <h1>Media gallery</h1>
      </NavLink>

      <SidebarFoldersSection />
    </nav>
  );
}
