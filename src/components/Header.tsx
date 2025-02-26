import Checkbox from "@app/components/Checkbox";

export default function Header() {
  return (
    <header className="mx-2 my-4 mb-0 pb-4 border-b-1 flex gap-2 items-center border-[#E1E3E6]">
      <Checkbox />

      <div className="text-sm">0 selected</div>
    </header>
  );
}
