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

export function SplitViewMenu() {
  return (
    <div className="w-[500px] h-24 bg-[rgba(255,255,255,.15)] backdrop-blur-xl py-2 px-1 mt-12 rounded-xl z-[1000]">
      <div className="w-full h-full flex justify-around">
        <div className="h-20 w-28 rounded-[0.35rem] flex justify-between gap-1 overflow-hidden">
          <div className="w-14 bg-red-50 hover:bg-blue-400 ease-linear transition duration-100"></div>
          <div className="w-14 bg-red-50 hover:bg-blue-400 ease-linear transition duration-100"></div>
        </div>

        <div className="h-20 w-28 rounded-[0.35rem] flex justify-between gap-1 overflow-hidden">
          <div className="w-[60%] bg-red-50 hover:bg-blue-400 ease-linear transition duration-100"></div>
          <div className="w-[40%] bg-red-50 hover:bg-blue-400 ease-linear transition duration-100"></div>
        </div>
        <div className="h-20 w-28 rounded-[0.35rem] flex justify-between gap-1 overflow-hidden">
          <div className="w-[50%] bg-red-50 hover:bg-blue-400 ease-linear transition duration-100"></div>
          <div className="w-[50%] flex flex-col gap-1">
            <div className="bg-red-50 h-[50%] hover:bg-blue-400 ease-linear transition duration-100"></div>
            <div className="bg-red-50 h-[50%] hover:bg-blue-400 ease-linear transition duration-100"></div>
          </div>
        </div>
        <div className="h-20 w-28 rounded-[0.35rem] flex justify-between gap-1 overflow-hidden">
          <div className="w-[50%] flex flex-col gap-1">
            <div className="bg-red-50 h-[50%] hover:bg-blue-400 ease-linear transition duration-100"></div>
            <div className="bg-red-50 h-[50%] hover:bg-blue-400 ease-linear transition duration-100"></div>
          </div>
          <div className="w-[50%] flex flex-col gap-1">
            <div className="bg-red-50 h-[50%] hover:bg-blue-400 ease-linear transition duration-100"></div>
            <div className="bg-red-50 h-[50%] hover:bg-blue-400 ease-linear transition duration-100"></div>
          </div>


        </div>
      </div>
    </div>
  )
}

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
  const { fileExplorerOpening, fileExplorerMinimize, fileExplorerMaximize } =
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
      <div className="w-full h-full relative flex justify-center items-start">
        <SplitViewMenu />
        <ul
          className="w-screen p-2.5 h-[calc(100%-3rem)] bg-transparent grid grid-rows-11 grid-cols-24 gap-y-6 absolute"
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
          isMinimize={fileExplorerMinimize}
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
