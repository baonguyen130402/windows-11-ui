import { useContext } from "react";
import { Icons } from "../../../../lib/icons";
import { Tab } from "./tab";
import { MsEdgeContext } from "../../../../lib/contexts/MsEdgeContext";

export function Header() {
  const { setMsEdgeOpening } = useContext(MsEdgeContext);
  
  return (
    <div className="w-full h-10 flex justify-between items-center px-2 bg-neutral-900">
      <div className="flex items-center w-1/4">
        <div className="flex items-center mr-2">
          <div className="p-1 hover:bg-gray-400 rounded-[0.25rem]">
            <Icons.user className="size-5" />
          </div>
          <div className="p-1 hover:bg-gray-400 rounded-[0.25rem]">
            <Icons.home className="size-4" />
          </div>
        </div>
        <div className="w-full flex items-center gap-2">
          <Tab />
          <div className="p-1 hover:bg-gray-400 rounded-[0.25rem]">
            <Icons.plus className="size-3 fill-white" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around w-[100px]">
        <div className="p-2 hover:bg-gray-400 rounded-[0.25rem]">
          <Icons.windowMinimize className="size-4 fill-white" />
        </div>
        <div className="p-2 hover:bg-gray-400 rounded-[0.25rem]">
          <Icons.windowMaximize className="size-4 fill-white" />
        </div>
        <div
          onClick={() => setMsEdgeOpening(false)}
          className="p-2 hover:bg-red-400 rounded-[0.25rem]"
        >
          <Icons.effacer className="size-4 fill-white" />
        </div>
      </div>
    </div>
  );
}
