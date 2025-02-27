import Checkbox from "@app/components/Checkbox";
import Svg from "@app/components/Svg";
import {
  MediaFileType,
  MediaFileTypesDisplayName,
} from "@app/contracts/mediaContract";

export default function SidebarFiltersSection() {
  return (
    <section className="flex flex-col gap-4 ">
      <h2 className="text-sm font-medium px-2">Filters</h2>

      <div className="flex flex-col gap-1 text-sm">
        {Object.entries(MediaFileTypesDisplayName).map(([key, name]) => (
          <label
            key={key}
            className="text-sm flex items-center gap-2 justify-between rounded-md px-2 py-1 hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Svg type={`${key as MediaFileType}MediaType`} />

              {name}
            </div>

            <Checkbox />
          </label>
        ))}
      </div>
    </section>
  );
}
