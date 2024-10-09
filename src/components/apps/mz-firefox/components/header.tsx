import { Tab } from "./tab";
import { Icons } from "../../../../lib/icons";
import { TriggerAppFormTitleBar } from "../../../../lib/utilities/titleBar";

export function Header() {
  const { closeApp, maximizeApp, minimizeApp } = TriggerAppFormTitleBar(
    "mzFirefox",
  );

  return (
      <div className="w-full h-10 flex items-center px-2 bg-neutral-900">
        <div className="title-bar w-[calc(100%-100px)]">
          <div className="w-1/5 flex items-center gap-2 ml-8">
            <Tab />
            <Icons.plus className="size-3 fill-white" />
          </div>
        </div>
        <div className="flex items-center justify-around w-[100px]">
          <div
            onClick={() => minimizeApp()}
            className="p-2 hover:bg-gray-400 rounded-[0.25rem]"
          >
            <Icons.windowMinimize className="size-4 fill-white" />
          </div>
          <div
            onClick={() => maximizeApp()}
            className="p-2 hover:bg-gray-400 rounded-[0.25rem]"
          >
            <Icons.windowMaximize className="size-4 fill-white" />
          </div>
          <div
            onClick={() => closeApp()}
            className="p-2 hover:bg-red-400 rounded-[0.25rem]"
          >
            <Icons.effacer className="size-4 fill-white" />
          </div>
        </div>
      </div>
  );
}
