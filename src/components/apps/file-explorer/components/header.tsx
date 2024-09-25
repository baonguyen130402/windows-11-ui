import { useContext } from "react";
import { Icons } from "../../../../lib/icons";
import { Tab } from "./tab";
import { FileExplorerContext } from "../../../../lib/contexts/FileExplorerContext";

export function Header() {
  const { setFileExplorerOpening } = useContext(FileExplorerContext);

  return (
    <div className="title-bar">
      <div className="w-full h-9 flex justify-between pl-2 relative">
        <Tab />
        <div className="flex items-center w-[132px]">
          <div className="px-4 py-3 hover:bg-gray-600">
            <Icons.windowMinimize className="size-3 fill-white" />
          </div>
          <div className="px-4 py-3 hover:bg-gray-600">
            <Icons.windowMaximize className="size-3 fill-white" />
          </div>
          <div
            onClick={() => setFileExplorerOpening(false)}
            className="px-4 py-3 hover:bg-red-600"
          >
            <Icons.effacer className="size-3 fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
