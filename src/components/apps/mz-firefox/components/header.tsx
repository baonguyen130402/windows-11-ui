import { Icons } from "../../../../lib/icons";
import { Tab } from "./tab";

export function Header() {
  return (
    <div className="w-full h-10 flex justify-between items-center px-2 bg-neutral-900">
      <div className="w-1/5 flex items-center gap-2 ml-8">
        <Tab />
        <Icons.plus className="size-3 fill-white" />
      </div>
      <div className="flex items-center justify-around w-[80px]">
        <Icons.windowMinimize className="size-4 fill-white" />
        <Icons.windowMaximize className="size-4 fill-white" />
        <Icons.effacer className="size-4 fill-white" />
      </div>
    </div>
  );
}
