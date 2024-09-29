import { useContext } from "react";

import { swap } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import {
  ContextMenu,
  ContextMenuTrigger,
} from "../../lib/components/ui/context-menu";
import { Icon } from "./icon";
import { Icons } from "../../lib/icons";
import { separateDesktopLayout } from "../../lib/helper";
import { MzFirefox } from "../apps/mz-firefox";
import { ContextContent } from "./contextMenu";
import { FileExplorer } from "../apps/file-explorer";
import { MsEdge } from "../apps/ms-edge";

import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";
import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";

const IconsArr = [
  {
    title: "Folder",
    icon: <Icons.folder className="size-12 justify-self-center" />,
  },
  {
    title: "Firefox",
    icon: <Icons.firefox className="size-11 justify-self-center" />,
  },
  {
    title: "Edge",
    icon: <Icons.msEdge className="size-12 justify-self-center" />,
  },
];

export function Desktop() {
  const array = separateDesktopLayout(IconsArr);

  const { msEdgeOpening, msEdgeMinimize, msEdgeMaximize } = useContext(
    MsEdgeContext,
  );
  const { mzFirefoxOpening } = useContext(MzFirefoxContext);
  const { fileExplorerOpening } = useContext(FileExplorerContext);

  const [parent, rows] = useDragAndDrop<HTMLUListElement, any>(
    array,
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
            {rows.map((row: any) => (
              row.map((item: any) => (
                <Icon
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                />
              ))
            ))}
          </ul>
          <MsEdge
            isOpen={msEdgeOpening}
            isMinimize={msEdgeMinimize}
            isMaximize={msEdgeMaximize}
          />
        </div>
      </ContextMenuTrigger>
      <ContextContent />
    </ContextMenu>
  );
}
