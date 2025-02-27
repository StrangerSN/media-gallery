import MainLayout from "@app/layouts/MainLayout";
import GalleryPage from "@app/pages/GalleryPage";
import HomePage from "@app/pages/HomePage";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="folder">
          <Route path=":folderId" element={<GalleryPage />} />
        </Route>
      </Routes>
    </MainLayout>
  );
}
