import MediaFileCard from "@app/components/MediaFileCard/MediaFileCard";
import Svg from "@app/components/Svg";
import UserMessagesContainer from "@app/components/UserMessagesContainer";
import { useFilterStore } from "@app/stores/filterStore";
import { useFolderStore } from "@app/stores/folderStore";
import { useMediaFileStore } from "@app/stores/mediaStore";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function GalleryPage() {
  const { folderId } = useParams();
  const { setSelectedFolder } = useFolderStore();
  const { getFolderMediaFiles } = useMediaFileStore();
  const { selectedFilters } = useFilterStore();

  const folderMediaFiles = getFolderMediaFiles(
    Number(folderId),
    selectedFilters
  );

  useEffect(() => {
    setSelectedFolder(Number(folderId));
  }, [folderId, setSelectedFolder]);

  if (!folderMediaFiles.length) {
    return (
      <UserMessagesContainer
        Icon={<Svg type="emptyFolderIcon" />}
        title="This folder is empty"
        subtitle="Add images, videos and GIFs."
      />
    );
  }
  return (
    <div
      className="grid gap-4 justify-between"
      style={{
        gridTemplateColumns: "repeat(auto-fit, 200px)",
      }}
    >
      {folderMediaFiles.map((media) => (
        <MediaFileCard key={media.id} media={media} />
      ))}
    </div>
  );
}
