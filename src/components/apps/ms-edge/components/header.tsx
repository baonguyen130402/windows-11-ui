import { useContext } from "react";
import { Icons } from "../../../../lib/icons";
import { Tab } from "./tab";
import { MsEdgeContext } from "../../../../lib/contexts/MsEdgeContext";

export function Header() {
  const { setMsEdgeOpening } = useContext(MsEdgeContext);

  return (
    <div className="title-bar">
      <div className="w-full h-11 flex justify-between items-end px-2 pr-0 bg-neutral-900 relative">
        <div className="flex items-center w-1/4">
          <div className="flex items-center mr-2">
            <div className="p-1 hover:bg-gray-400 rounded-[0.25rem]">
              <Icons.user className="size-5" />
            </div>
            <div className="p-1 hover:bg-gray-400 rounded-[0.25rem]">
              <Icons.home className="size-4" />
            </div>
          </div>
          <div className="w-full items-center flex gap-x-2">
            <Tab />
            <div className="p-1 hover:bg-gray-400 rounded-[0.25rem]">
              <Icons.plus className="size-3 fill-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center w-[132px]">
          <div className="p-4 hover:bg-gray-600 duration-100">
            <Icons.windowMinimize className="size-3 fill-white" />
          </div>
          <div className="p-4 hover:bg-gray-600 duration-100">
            <Icons.windowMaximize className="size-3 fill-white" />
          </div>
          <div
            onClick={() => setMsEdgeOpening(false)}
            className="p-4 hover:bg-red-600 rounded-tr-[0.25rem]"
          >
            <Icons.effacer className="size-3 fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
