import { swap } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import { Icon } from "./icon";
import { Icons } from "../../lib/icons";
import { separateDesktopLayout } from "../../lib/helper";
import { FileExplorer } from "../apps/file-explorer";
import { MzFirefox } from "../apps/mz-firefox";

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

  const [parent, rows] = useDragAndDrop<HTMLUListElement, any>(
    array,
    {
      group: "parent",
      plugins: [swap()],
    },
  );

  return (
    <ul
      className="relative w-screen h-[calc(100%-3rem)] bg-transparent p-2.5 grid grid-rows-9 grid-cols-18 gap-y-8 gap-x-2.5"
      ref={parent}
    >
      {rows.map((row: any) => (
        row.map((item: any) => (
          <Icon key={item.title} title={item.title} icon={item.icon} />
        ))
      ))}
      <MzFirefox />
    </ul>
  );
}
