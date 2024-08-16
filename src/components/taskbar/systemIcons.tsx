import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { Icons } from "../../lib/icons";
import { swap } from "@formkit/drag-and-drop";

export function SystemIcons() {
  const [parent, icons] = useDragAndDrop([
    <Icons.wifi />,
    <Icons.speaker />,
  ], { group: "parent", plugins: [swap()] });

  return (
    <ul ref={parent} className="flex items-center gap-x-2.5 mr-3">
      {icons.map((icon: any, id: number) => <li key={id}>{icon}</li>)}
    </ul>
  );
}
