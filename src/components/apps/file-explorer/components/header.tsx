import { Icons } from "../../../../lib/icons";
import { Tab } from "./tab";
import { TriggerAppFormTitleBar } from "../../../../lib/utilities/titleBar";

export function Header() {
  const { closeApp, maximizeApp, minimizeApp } = TriggerAppFormTitleBar(
    "fileExplorer",
  );

  return (
    <div className="title-bar">
      <div className="w-full h-9 flex justify-between pl-2 relative">
        <Tab />
        <div className="flex items-center w-[132px]">
          <div
            onClick={() => minimizeApp()}
            className="px-4 py-3 hover:bg-gray-600"
          >
            <Icons.windowMinimize className="size-3 fill-white" />
          </div>
          <div
            onClick={() => maximizeApp()}
            className="px-4 py-3 hover:bg-gray-600"
          >
            <Icons.windowMaximize className="size-3 fill-white" />
          </div>
          <div
            onClick={() => closeApp()}
            className="px-4 py-3 hover:bg-red-600"
          >
            <Icons.effacer className="size-3 fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
