import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";

import { Icons } from "../../lib/icons";
import plugin from "tailwindcss-animate";

export function AppsPin() {
  const [parent, icons] = useDragAndDrop<HTMLUListElement, any>([
    {
      icon: <Icons.copilot className="size-8" />,
      title: "copilot",
    },
    {
      icon: <Icons.firefox className="size-7 pt-[1px]" />,
      title: "firefox",
    },
    {
      icon: <Icons.msEdge className="size-8" />,
      title: "msEdge",
    },
    {
      icon: <Icons.folder className="size-8" />,
      title: "folder",
    },
  ], { plugins: [animations()] });

  return (
    <ul className="flex items-center gap-x-1" ref={parent}>
      {icons.map((icon: any) => (
        <li
          key={icon.title}
          data-label={icon}
          className="p-1 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10"
        >
          {icon.icon}
        </li>
      ))}
    </ul>
  );
}
