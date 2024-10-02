import { useContext } from "react";

import { swap } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import {
  ContextMenu,
  ContextMenuTrigger,
} from "../../lib/components/ui/context-menu";
import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";
import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";

import { DesktopApp } from "./desktopApp";

import { MsEdge } from "../apps/ms-edge";
import { MzFirefox } from "../apps/mz-firefox";
import { ContextContent } from "./contextMenu";
import { FileExplorer } from "../apps/file-explorer";

import { appsOnDesktop } from "../../lib/data/desktop";
import { separateDesktopLayout } from "../../lib/helper";

export function Desktop() {
  const apps = separateDesktopLayout(appsOnDesktop);

  const { msEdgeOpening, msEdgeMinimize, msEdgeMaximize } = useContext(
    MsEdgeContext,
  );
  const { mzFirefoxOpening, mzFirefoxMinimize, mzFirefoxMaximize } = useContext(
    MzFirefoxContext,
  );
  const { fileExplorerOpening, fileExplorerMinimizie, fileExplorerMaximize } =
    useContext(FileExplorerContext);

  const [parent, desktopApps] = useDragAndDrop<HTMLUListElement, any>(
    apps,
    {
      group: "parent",
      plugins: [swap()],
    },
  );

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div className="w-full h-full absolute">
          <ul
            className="w-screen h-[calc(100%-3rem)] bg-transparent p-2.5 grid grid-rows-9 grid-cols-18 gap-y-8 gap-x-2.5 absolute"
            ref={parent}
          >
            {desktopApps.map((apps: any) => (
              apps.map((app: any) => (
                <DesktopApp
                  key={app.title}
                  title={app.title}
                  icon={app.icon}
                />
              ))
            ))}
          </ul>
          <MsEdge
            isOpen={msEdgeOpening}
            isMinimize={msEdgeMinimize}
            isMaximize={msEdgeMaximize}
          />
          <FileExplorer
            isOpen={fileExplorerOpening}
            isMinimize={fileExplorerMinimizie}
            isMaximize={fileExplorerMaximize}
          />
          <MzFirefox
            isOpen={mzFirefoxOpening}
            isMinimize={mzFirefoxMinimize}
            isMaximize={mzFirefoxMaximize}
          />
        </div>
      </ContextMenuTrigger>
      <ContextContent />
    </ContextMenu>
  );
}
