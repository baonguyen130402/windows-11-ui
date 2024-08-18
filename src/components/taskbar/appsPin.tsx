import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";

import { Icons } from "../../lib/icons";
import { useState } from "react";

export function AppsPin() {
  const [parent, icons] = useDragAndDrop<HTMLUListElement, any>([
    <Icons.copilot className="size-8" />,
    <Icons.firefox className="size-7 pt-[1px]" />,
    <Icons.msEdge className="size-8" />,
    <Icons.folder className="size-8" />,
  ], { plugins: [animations()] });
  return (
    <ul className="flex items-center gap-x-1" ref={parent}>
      {icons.map((icon: any, id: number) => (
        <li
          key={id}
          className="p-1 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10"
        >
          {icon}
        </li>
      ))}
    </ul>
  );
}
