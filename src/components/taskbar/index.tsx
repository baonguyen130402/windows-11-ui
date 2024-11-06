import { useContext, useState } from "react";

import clsx from "clsx";

import { AppsPin } from "./components/appsPin";
import { Weather } from "./components/weather";
import { HomeBtn } from "./components/homeBtn";
import { DateTime } from "./components/dateTime";
import { StartMenu } from "./components/startMenu";
import { SearchBtn } from "./components/searchBtn";
import { ControlCenter } from "./components/controlCenter";
import { SystemIconTray } from "./components/systemIconTray";

import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";
import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";
import { VSCodeContext } from "../../lib/contexts/VsCodeContext";

export function Taskbar() {
  const { vsCodeMaximize, vsCodeMinimize } = useContext(VSCodeContext);
  const { msEdgeMaximize, msEdgeMinimize } = useContext(MsEdgeContext);
  const { mzFirefoxMaximize, mzFirefoxMinimize } = useContext(MzFirefoxContext);
  const { fileExplorerMaximize, fileExplorerMinimize } = useContext(
    FileExplorerContext,
  );

  const [state, setState] = useState(false);

  const setStateFromChild = (value: boolean) => setState(value);

  return (
    <section
      className={clsx(
        "grid grid-cols-4 gap-x-2 items-center fixed bottom-0 left-0 right-0 py-0.5 px-2.5 backdrop-blur-2xl bg-[rgba(0,0,0,.45)] w-screen h-12 border-t border-slate-600",
        {
          "hidden": (msEdgeMaximize && msEdgeMinimize === false) ||
            (vsCodeMaximize && vsCodeMinimize === false) ||
            (mzFirefoxMaximize && mzFirefoxMinimize === false) ||
            (fileExplorerMaximize && fileExplorerMinimize === false),
          "block": msEdgeMaximize === false || mzFirefoxMaximize === false ||
            fileExplorerMaximize === false ||
            (vsCodeMaximize && vsCodeMinimize) ||
            (msEdgeMaximize && msEdgeMinimize) ||
            (mzFirefoxMaximize && mzFirefoxMinimize) ||
            (fileExplorerMaximize && fileExplorerMinimize),
        },
      )}
    >
      <div className="col-start-1 w-[270px] flex">
        {false && <Weather />}
      </div>
      <div className="flex items-center justify-self-center col-start-2 col-span-2 gap-x-1 relative">
        <HomeBtn openStartMenu={state} setOpenStartMenu={setStateFromChild} />
        <SearchBtn />
        <AppsPin />
        <StartMenu isOpen={state} />
      </div>
      <div className="flex items-center justify-self-end col-start-4">
        <SystemIconTray />
        <ControlCenter />
        <DateTime />
      </div>
    </section>
  );
}
