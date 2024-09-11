import { useContext } from "react";
import { Icons } from "../../../../lib/icons";
import { Tab } from "./tab";
import { FileExplorerContext } from "../../../../lib/contexts/FileExplorerContext";

export function Header() {
  const { setFileExplorerOpening } = useContext(FileExplorerContext);
  
  return (
    <div className="w-full h-10 flex justify-between px-2 pt-1.5">
      <Tab />
      <div className="self-start flex items-center justify-around w-[100px]">
        <div className="p-2 hover:bg-red-400 rounded-[0.25rem]">
          <Icons.windowMinimize className="size-4 fill-white" />
        </div>
        <div className="p-2 hover:bg-red-400 rounded-[0.25rem]">
          <Icons.windowMaximize className="size-4 fill-white" />
        </div>
        <div
          onClick={() => setFileExplorerOpening(false)}
          className="p-2 hover:bg-red-400 rounded-[0.25rem]"
        >
          <Icons.effacer className="size-4 fill-white" />
        </div>
      </div>
    </div>
  );
}
