import MainLayout from "@app/layouts/MainLayout";
import HomePage from "@app/pages/HomePage";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </MainLayout>
  );
}
