import MainLayout from "@app/layouts/MainLayout";
import MediaGridPage from "@app/pages/MediaGridPage";
import HomePage from "@app/pages/HomePage";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="folder">
          <Route path=":folderId" element={<MediaGridPage />} />
        </Route>
      </Routes>
    </MainLayout>
  );
}
