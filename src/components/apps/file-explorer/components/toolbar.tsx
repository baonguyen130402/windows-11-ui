import { Icons } from "../../../../lib/icons";

export function Toolbar() {
  return (
    <div className="relative bg-gray-700/40 bg-blur-lg backdrop-filter h-12 flex items-center">
      <div className="flex items-center gap-2 px-2">
        <Icons.plusCircle className="size-4 fill-[#999]" />
        <span className="text-[#999] text-sm font-semibold">New</span>
        <Icons.lineAngleUp className="rotate-180 size-2 fill-[#999]" />
      </div>
      <div className="px-2 border-r border-l border-[#999]">
        Something
      </div>
      <div className="flex items-center gap-2 px-2">
        <Icons.view className="size-4 fill-[#999]" />
        <span className="text-[#999] text-sm font-semibold">View</span>
        <Icons.lineAngleUp className="rotate-180 size-2 fill-[#999]" />
      </div>
      <div className="flex items-center gap-2 px-2">
        <Icons.filter className="size-4 fill-[#999]" />
        <span className="text-[#999] text-sm font-semibold">Filter</span>
        <Icons.lineAngleUp className="rotate-180 size-2 fill-[#999]" />
      </div>
      <div className="flex items-center gap-2 px-2">
        <Icons.threeDots className="size-4 fill-[#999]" />
      </div>
    </div>
  );
}
