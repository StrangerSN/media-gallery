import MediaFileCardCheckbox from "@app/components/MediaFileCard/MediaFileCardCheckbox";
import Svg from "@app/components/Svg";
import { MediaFile } from "@app/contracts/mediaContract";
import { useMediaFileStore } from "@app/stores/mediaStore";
import { useMemo } from "react";

interface Props {
  media: MediaFile;
}

export default function MediaFileCard(props: Props) {
  const { media } = props;

  const { getIsSelected, setIsSelected, getOrderNumber } = useMediaFileStore();

  const isSelected = getIsSelected(media);
  const orderNumber = getOrderNumber(media);

  const thumbnail = useMemo(() => {
    const aspectRatio = media.width / media.height;
    let width = 200;
    let height = Math.ceil((200 * media.height) / media.width);

    if (aspectRatio < 1) {
      height = 200;
      width = Math.ceil((200 * media.width) / media.height);
    }

    return {
      url: `http://picsum.photos/id/${media.id}/${width}/${height}`,
      width,
      height,
    };
  }, [media.height, media.id, media.width]);

  return (
    <div
      className="group relative flex items-center bg-white rounded-lg p-1 hover:bg-primary/10 border-1 border-white hover:border-primary hover:shadow-lg"
      onClick={() => setIsSelected(media)}
    >
      <img
        className="object-contain border-2 border-neutral-60 rounded"
        src={thumbnail.url}
        alt={media.author}
        width={thumbnail.width}
        height={thumbnail.height}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {media.type !== "image" && <Svg type={`${media.type}Icon`} />}
      </div>

      <MediaFileCardCheckbox
        isSelected={isSelected}
        orderNumber={orderNumber}
      />
    </div>
  );
}
