import { useContext } from "react";

import { Tab } from "./tab";
import { Icons } from "../../../../lib/icons";
import { MzFirefoxContext } from "../../../../lib/contexts/MzFirefoxContext";

export function Header() {
  const {
    setMzFirefoxOpening,
    setMzFirefoxMinimize,
    setMzFirefoxMaximize,
    mzFirefoxMaximize,
  } = useContext(MzFirefoxContext);

  return (
    <div className="title-bar">
      <div className="w-full h-10 flex justify-between items-center px-2 bg-neutral-900">
        <div className="w-1/5 flex items-center gap-2 ml-8">
          <Tab />
          <Icons.plus className="size-3 fill-white" />
        </div>
        <div className="flex items-center justify-around w-[100px]">
          <div
            onClick={() => setMzFirefoxMinimize(true)}
            className="p-2 hover:bg-gray-400 rounded-[0.25rem]"
          >
            <Icons.windowMinimize className="size-4 fill-white" />
          </div>
          <div
            onClick={() => setMzFirefoxMaximize(!mzFirefoxMaximize)}
            className="p-2 hover:bg-gray-400 rounded-[0.25rem]"
          >
            <Icons.windowMaximize className="size-4 fill-white" />
          </div>
          <div
            onClick={() => setMzFirefoxOpening(false)}
            className="p-2 hover:bg-red-400 rounded-[0.25rem]"
          >
            <Icons.effacer className="size-4 fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
