import Checkbox from "@app/components/Checkbox";
import { MediaFile } from "@app/contracts/mediaContract";

interface Props {
  media: MediaFile;
}

export default function MediaFileCard(props: Props) {
  const { media } = props;

  const isSelected = media.id === "4";

  return (
    <div className="relative flex items-center bg-white rounded-lg p-1 hover:bg-primary/10 border-1 border-white hover:border-primary hover:shadow-lg">
      <img
        className="object-contain border-2 border-neutral-60 rounded"
        width={media.width}
        height={media.height}
        src={media.download_url}
        alt={media.author}
      />

      {isSelected && (
        <div className="absolute flex bottom-1 left-1">
          <Checkbox />
        </div>
      )}
    </div>
  );
}
