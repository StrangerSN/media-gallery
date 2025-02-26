import Header from "@app/components/Header";
import Sidebar from "@app/components/Sidebar/Sidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;

  return (
    <div className="flex h-screen" style={{ color: "#232426" }}>
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
