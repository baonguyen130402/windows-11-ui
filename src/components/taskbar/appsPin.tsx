import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";

import { generateAppsPinnedOnTaskbar } from "../../lib/data/taskbar";
import { useContext, useEffect } from "react";
import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";
import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";

export function AppsPin() {
  const { msEdgeOpening, setMsEdgeOpening } = useContext(MsEdgeContext);
  const { mzFirefoxOpening, setMzFirefoxOpening } = useContext(
    MzFirefoxContext,
  );
  const { fileExplorerOpening, setFileExplorerOpening } = useContext(
    FileExplorerContext,
  );

  const appsPinned = generateAppsPinnedOnTaskbar();

  const [parent, apps, setApps] = useDragAndDrop<HTMLUListElement, any>(
    appsPinned,
    { plugins: [animations()] },
  );

  function openFromTaskbar(app: String) {
    if (app === "msEdge") {
      setMsEdgeOpening(true);
    }

    if (app === "firefox") {
      setMzFirefoxOpening(true);
    }

    if (app === "folder") {
      setFileExplorerOpening(true);
    }
  }

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
              className="relative p-1 bg-[rgba(255,255,255,.15)] rounded-[0.3em] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10 after:absolute after:bottom-0 after:w-2/5 after:h-[3px] after:bg-[#5bb5fc] after:rounded-full ease-in"
            >
              {app.icon}
            </li>
          )
          : (
            <li
              key={app.title}
              onClick={() => openFromTaskbar(app.title)}
              className="p-1 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10"
            >
              {app.icon}
            </li>
          )
      ))}
    </ul>
  );
}
