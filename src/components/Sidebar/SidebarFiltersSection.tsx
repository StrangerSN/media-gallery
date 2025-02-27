import Checkbox from "@app/components/Checkbox";
import Svg from "@app/components/Svg";
import { MediaFileType } from "@app/contracts/mediaContract";
import { useFilterStore } from "@app/stores/filterStore";
import { useMediaFileStore } from "@app/stores/mediaStore";

export default function SidebarFiltersSection() {
  const { mediaFileTypes, isChecked, toggleFilter } = useFilterStore();
  const { unselectByMediaFileType } = useMediaFileStore();

  const toggleFilterHandler = (mediaFileType: MediaFileType) => {
    toggleFilter(mediaFileType);
    unselectByMediaFileType(mediaFileType);
  };

  return (
    <section className="flex flex-col gap-4 ">
      <h2 className="text-sm font-medium px-2">Filters</h2>

      <div className="flex flex-col gap-1 text-sm">
        {Object.entries(mediaFileTypes).map(([key, name]) => (
          <label
            key={key}
            className="text-sm flex items-center gap-2 justify-between rounded-md px-2 py-1 hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Svg type={`${key as MediaFileType}MediaType`} />

              {name}
            </div>

            <Checkbox
              defaultChecked={isChecked(key as MediaFileType)}
              onChange={() => toggleFilterHandler(key as MediaFileType)}
            />
          </label>
        ))}
      </div>
    </section>
  );
}
