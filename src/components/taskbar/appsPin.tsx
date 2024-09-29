import { useContext, useEffect } from "react";

import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import { generateAppsPinnedOnTaskbar } from "../../lib/data/taskbar";
import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";
import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";
import { MiniView } from "../../lib/utilities/miniView";
import { TriggerAppsFromTaksbar } from "../../lib/utilities/taskbar";

export function AppsPin() {
  const appsPinned = generateAppsPinnedOnTaskbar();

  const [parent, apps, setApps] = useDragAndDrop<HTMLUListElement, any>(
    appsPinned,
    { plugins: [animations()] },
  );
  
  const { msEdgeOpening } = useContext(MsEdgeContext);
  const { mzFirefoxOpening } = useContext(MzFirefoxContext);
  const {fileExplorerOpening} = useContext(FileExplorerContext);

  const { openNewApp, openMinimizedApp } = TriggerAppsFromTaksbar();

  useEffect(() => {
    setApps(
      generateAppsPinnedOnTaskbar(
        msEdgeOpening,
        mzFirefoxOpening,
        fileExplorerOpening,
      ),
    );
  }, [msEdgeOpening, mzFirefoxOpening, fileExplorerOpening]);

  return (
    <ul className="flex items-center gap-x-1" ref={parent}>
      {apps.map((app: any) => (
        app.isOpening
          ? (
            <li
              key={app.title}
              onClick={() => openMinimizedApp(app.title)}
              className="relative p-1 bg-[rgba(255,255,255,.15)] rounded-[0.3em] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10 after:absolute after:bottom-0 after:w-2/5 after:h-[3px] after:bg-[#5bb5fc] after:rounded-full ease-in group"
            >
              <MiniView appHover={app.title} />
              {app.icon}
            </li>
          )
          : (
            <li
              key={app.title}
              onClick={() => openNewApp(app.title)}
              className="p-1 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10"
            >
              {app.icon}
            </li>
          )
      ))}
    </ul>
  );
}
