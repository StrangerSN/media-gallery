import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  children: ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;

  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1">{children}</main>
    </div>
  );
}
