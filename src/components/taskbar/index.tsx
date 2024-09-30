import { useContext } from "react";

import clsx from "clsx";

import { AppsPin } from "./appsPin";
import { HomeBtn } from "./homeBtn";
import { Weather } from "./weather";
import { DateTime } from "./dateTime";
import { SearchBtn } from "./searchBtn";
import { ControlCenter } from "./controlCenter";
import { SystemIconTray } from "./systemIconTray";
import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";
import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";

export function Taskbar() {
  const { msEdgeMaximize, msEdgeMinimize } = useContext(MsEdgeContext);
  const { mzFirefoxMaximize, mzFirefoxMinimize } = useContext(MzFirefoxContext);
  const { fileExplorerMaximize, fileExplorerMinimizie } = useContext(
    FileExplorerContext,
  );

  return (
    <section
      className={clsx(
        "grid grid-cols-4 gap-x-2 items-center fixed bottom-0 left-0 right-0 py-0.5 px-2.5 backdrop-blur-2xl bg-[rgba(0,0,0,.45)] w-screen h-12 border-t border-slate-600",
        {
          "hidden": (msEdgeMaximize && msEdgeMinimize === false) ||
            (mzFirefoxMaximize && mzFirefoxMinimize === false) ||
            (fileExplorerMaximize && fileExplorerMinimizie === false),
          "block": msEdgeMaximize === false || mzFirefoxMaximize === false ||
            fileExplorerMaximize === false ||
            (msEdgeMaximize && msEdgeMinimize) ||
            (mzFirefoxMaximize && mzFirefoxMinimize) ||
            (fileExplorerMaximize && fileExplorerMinimizie),
        },
      )}
    >
      <div className="col-start-1 w-[270px] flex">
        <Weather />
      </div>
      <div className="flex items-center justify-self-center col-start-2 col-span-2 gap-x-1">
        <HomeBtn />
        <SearchBtn />
        <AppsPin />
      </div>
      <div className="flex items-center justify-self-end col-start-4">
        <SystemIconTray />
        <ControlCenter />
        <DateTime />
      </div>
    </section>
  );
}
