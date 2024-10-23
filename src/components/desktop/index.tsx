import { useContext } from "react";

import { swap } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import { DesktopApp } from "./desktopApp";

import { VSCode } from "../apps/vscode";
import { MsEdge } from "../apps/ms-edge";
import { MzFirefox } from "../apps/mz-firefox";
import { FileExplorer } from "../apps/file-explorer";

import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";
import { VSCodeContext } from "../../lib/contexts/VsCodeContext";
import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";

import { appsOnDesktop } from "../../lib/data/desktop";
import { separateDesktopLayout } from "../../lib/helper";
import { DesktopContextMenu } from "../../lib/contextMenus/desktop";
import useWindowDimensions from "../../lib/hooks/useWindowDimension";

export function Desktop() {
  const apps = separateDesktopLayout(appsOnDesktop);

  const { vsCodeOpening, vsCodeMinimize, vsCodeMaximize } = useContext(
    VSCodeContext,
  );
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
    <DesktopContextMenu>
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
        <VSCode
          isOpen={vsCodeOpening}
          isMinimize={vsCodeMinimize}
          isMaximize={vsCodeMaximize}
        />
        <MzFirefox
          isOpen={mzFirefoxOpening}
          isMinimize={mzFirefoxMinimize}
          isMaximize={mzFirefoxMaximize}
        />
      </div>
    </DesktopContextMenu>
  );
}
