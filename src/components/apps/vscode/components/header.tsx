import { Icons } from "../../../../lib/icons";
import { TriggerAppFormTitleBar } from "../../../../lib/utilities/titleBar";

export function Header() {
  const { closeApp, maximizeApp, minimizeApp } = TriggerAppFormTitleBar(
    "vsCode",
  );

  return (
    <div className="title-bar">
      <div className="w-full h-7 grid items-end px-2 pr-0 bg-[#202020] relative">
        <div className="flex items-end justify-end justify-self-end w-[132px]">
          <div
            onClick={() => minimizeApp()}
            className="p-2 hover:bg-gray-600 duration-100"
          >
            <Icons.windowMinimize className="size-3 fill-white" />
          </div>
          <div
            onClick={() => maximizeApp()}
            className="p-2 hover:bg-gray-600 duration-100"
          >
            <Icons.windowMaximize className="size-3 fill-white" />
          </div>
          <div
            onClick={() => closeApp()}
            className="p-2 hover:bg-red-600"
          >
            <Icons.effacer className="size-3 fill-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
