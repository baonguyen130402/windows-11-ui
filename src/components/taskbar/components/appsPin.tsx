import { useContext, useEffect, useState } from "react";

import clsx from "clsx";

import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import { generateAppsOnTaskbar } from "../../../lib/data/taskbar";

import { VSCodeContext } from "../../../lib/contexts/VsCodeContext";
import { MsEdgeContext } from "../../../lib/contexts/MsEdgeContext";
import { MzFirefoxContext } from "../../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../../lib/contexts/FileExplorerContext";

import { MiniView } from "../../../lib/utilities/miniView";
import { RenderIf } from "../../../lib/utilities/renderIf";
import { TriggerAppsFromTaksbar } from "../../../lib/utilities/taskbar";
import { AppOnTaskbarContextMenu } from "../../../lib/contextMenus/appsOnTaskbar";

export function AppsPin() {
  const [name, setName] = useState("");

  const { vsCodeOpening, vsCodePinOnTaskbar } = useContext(VSCodeContext);
  const { msEdgeOpening, msEdgePinOnTaskbar } = useContext(MsEdgeContext);
  const { mzFirefoxOpening, mzFirefoxPinOnTaskbar } = useContext(
    MzFirefoxContext,
  );
  const { fileExplorerOpening, fileExplorerPinOnTaskbar } = useContext(
    FileExplorerContext,
  );

  const appsState = {
    vsCode: {
      isOpening: vsCodeOpening,
      isPinOn: vsCodePinOnTaskbar,
    },
    msEdge: {
      isOpening: msEdgeOpening,
      isPinOn: msEdgePinOnTaskbar,
    },
    mzFirefox: {
      isOpening: mzFirefoxOpening,
      isPinOn: mzFirefoxPinOnTaskbar,
    },
    fileExplorer: {
      isOpening: fileExplorerOpening,
      isPinOn: fileExplorerPinOnTaskbar,
    },
  };

  const appsPinned = generateAppsOnTaskbar(appsState);

  const [parent, apps, setApps] = useDragAndDrop<HTMLUListElement, any>(
    appsPinned,
    { plugins: [animations()] },
  );

  useEffect(() => {
    setApps(
      generateAppsOnTaskbar(appsState),
    );
  }, [JSON.stringify(appsState)]);

  const { openNewApp, openMinimizedApp } = TriggerAppsFromTaksbar();

  return (
    <ul className="flex items-center gap-x-1" ref={parent}>
      {apps.map((app: any) => (
        <AppOnTaskbarContextMenu
          isPinOn={app.isPinOn}
          appName={name}
          key={app.title}
        >
          <RenderIf isTrue={app.isOpen}>
            <li
              onClick={() => openMinimizedApp(app.title)}
              onContextMenu={() => setName(app.title)}
              className="relative p-1 bg-[rgba(255,255,255,.15)] rounded-[0.3em] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10 after:absolute after:bottom-0 after:w-2/5 after:h-[3px] after:bg-[#5bb5fc] after:rounded-full ease-in group"
            >
              <MiniView appHover={app.title} />
              {app.icon}
            </li>
          </RenderIf>
          <RenderIf isTrue={!app.isOpen}>
            <li
              onClick={() => openNewApp(app.title)}
              onContextMenu={() => setName(app.title)}
              className={clsx(
                "p-1 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10 active:bg-[rgb(255,255,255,.3)]",
                {
                  "blockk": app.isPinOn,
                  "hidden": !app.isPinOn,
                },
              )}
            >
              {app.icon}
            </li>
          </RenderIf>
        </AppOnTaskbarContextMenu>
      ))}
    </ul>
  );
}
