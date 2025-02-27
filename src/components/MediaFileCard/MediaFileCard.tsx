import Checkbox from "@app/components/Checkbox";
import { MediaFile } from "@app/contracts/mediaContract";
import { useMemo } from "react";

interface Props {
  media: MediaFile;
}

export default function MediaFileCard(props: Props) {
  const { media } = props;

  const isSelected = media.id === "4";

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
    <div className="relative flex items-center bg-white rounded-lg p-1 hover:bg-primary/10 border-1 border-white hover:border-primary hover:shadow-lg">
      <img
        className="object-contain border-2 border-neutral-60 rounded"
        src={thumbnail.url}
        alt={media.author}
        width={thumbnail.width}
        height={thumbnail.height}
      />

      {isSelected && (
        <div className="absolute flex bottom-1 left-1">
          <Checkbox />
        </div>
      )}
    </div>
  );
}
