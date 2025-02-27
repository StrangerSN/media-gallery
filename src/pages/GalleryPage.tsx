import MediaFileCard from "@app/components/MediaFileCard/MediaFileCard";
import Svg from "@app/components/Svg";
import UserMessagesContainer from "@app/components/UserMessagesContainer";
import { useFilterStore } from "@app/stores/filterStore";
import { useFolderStore } from "@app/stores/folderStore";
import { useMediaFileStore } from "@app/stores/mediaStore";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router";

export default function GalleryPage() {
  const { folderId } = useParams();
  const { setSelectedFolder } = useFolderStore();
  const { getFolderMediaFiles } = useMediaFileStore();
  const { selectedFilters } = useFilterStore();

  const folderMediaFiles = useMemo(
    () => getFolderMediaFiles(Number(folderId), selectedFilters),
    [folderId, getFolderMediaFiles, selectedFilters]
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
      className="grid gap-4"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gridAutoRows: "minmax(180px, 1fr)",
      }}
    >
      {folderMediaFiles.map((media) => (
        <MediaFileCard key={media.id} media={media} />
      ))}
    </div>
  );
}
