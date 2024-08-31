import { Icons } from "../../../../lib/icons";

export function Bookmark() {
  return (
    <div className="w-full h-8 px-2">
      <div className="flex items-center gap-2">
        <Icons.firefox className="size-5" />
        <span>Getting Started</span>
      </div>
    </div>
  );
}
