import MediaFileCardCheckbox from "@app/components/MediaFileCard/MediaFileCardCheckbox";
import Svg from "@app/components/Svg";
import { MediaFile } from "@app/contracts/mediaContract";
import { useMediaFileStore } from "@app/stores/mediaStore";
import classNames from "classnames";
import { useMemo } from "react";

interface Props {
  media: MediaFile;
}

export default function MediaFileCard(props: Props) {
  const { media } = props;

  const {
    getIsSelected,
    setIsSelected,
    getSelectedMediaFilesOrderNumber,
    updateMediaFileName,
  } = useMediaFileStore();

  const isSelected = getIsSelected(media);
  const orderNumber = getSelectedMediaFilesOrderNumber(media);

  const thumbnail = useMemo(() => {
    const aspectRatio = media.width / media.height;
    const isPortrait = media.width < media.height;

    let width = 300;
    let height = Math.floor(width / aspectRatio);

    if (isPortrait) {
      width = Math.floor(height / aspectRatio);
      height = 300;
    }

    return {
      url: `http://picsum.photos/id/${media.id}/${width}/${height}.webp`,
      isPortrait,
      width,
      height,
    };
  }, [media.height, media.id, media.width]);

  return (
    <div className="flex flex-col w-fit">
      <div
        className={classNames(
          "group relative flex items-center justify-center flex-1 rounded-lg p-1 border-1 hover:shadow-lg select-none overflow-hidden cursor-pointer",
          {
            "border-primary": isSelected,
            "border-transparent hover:border-black/20": !isSelected,
          }
        )}
        onClick={() => setIsSelected(media)}
      >
        <img
          className="object-contain border-2 border-neutral-60 rounded aspect-auto"
          src={thumbnail.url}
          alt={media.name}
          width={thumbnail.width}
          height={thumbnail.height}
        />

        <div
          className={classNames(
            "absolute inset-0 flex items-center justify-center",
            {
              "bg-primary/10": isSelected,
              "group-hover:bg-black/20": !isSelected,
            }
          )}
        >
          {media.type !== "image" && <Svg type={`${media.type}Icon`} />}
        </div>

        <MediaFileCardCheckbox
          isSelected={isSelected}
          orderNumber={orderNumber}
        />
      </div>

      <div className="p-1">
        <input
          type="text"
          className={classNames(
            "outline-0 w-full text-center text-xs/5 rounded-xs hover:bg-black/5 caret-primary",
            {
              "text-primary": isSelected,
              "text-secondary-80": !isSelected,
            }
          )}
          defaultValue={media.name}
          onInput={(e) => updateMediaFileName(media, e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
