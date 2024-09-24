import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";

import { appsPinnedOnTaskbar } from "../../lib/data/taskbar";

export function AppsPin() {
  const [parent, icons] = useDragAndDrop<HTMLUListElement, any>(
    appsPinnedOnTaskbar,
    { plugins: [animations()] },
  );

  return (
    <ul className="flex items-center gap-x-1" ref={parent}>
      {icons.map((icon: any) => (
        <li
          key={icon.id}
          data-label={icon}
          className="p-1 hover:bg-[rgba(255,255,255,.15)] hover:rounded-[0.25rem] flex items-center justify-center hover:w-10 hover:h-10 w-10 h-10"
        >
          {icon.icon}
        </li>
      ))}
    </ul>
  );
}
