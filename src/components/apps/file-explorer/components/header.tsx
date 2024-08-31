import { Icons } from "../../../../lib/icons";
import { Tab } from "./tab";

export function Header() {
  return (
    <div className="w-full h-10 flex justify-between px-2 pt-1.5">
      <Tab />
      <div className="self-start flex items-center justify-around w-[80px]">
        <Icons.windowMinimize className="size-4 fill-white" />
        <Icons.windowMaximize className="size-4 fill-white" />
        <Icons.effacer className="size-4 fill-white" />
      </div>
    </div>
  );
}
