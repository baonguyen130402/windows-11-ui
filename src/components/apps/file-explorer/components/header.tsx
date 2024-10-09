import { Icons } from "../../../../lib/icons";
import { Tab } from "./tab";
import { TriggerAppFormTitleBar } from "../../../../lib/utilities/titleBar";

export function Header() {
  const { closeApp, maximizeApp, minimizeApp } = TriggerAppFormTitleBar(
    "fileExplorer",
  );

  return (
    <div className="w-full h-9 flex justify-between items-end pl-2 bg-[#020d1d] relative">
      <div className="title-bar w-[calc(100%-132px)]">
        <Tab />
      </div>
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
  );
}
