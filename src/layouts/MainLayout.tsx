import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;

  return <div className="flex h-screen">{children}</div>;
}
