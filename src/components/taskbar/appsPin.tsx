import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { Icons } from "../../lib/icons";
import { swap } from "@formkit/drag-and-drop";

export function AppsPin() {
  const [parent, icons] = useDragAndDrop([
    <Icons.copilot className="size-6" />,
    <Icons.firefox className="size-6" />,
  ], { group: "parent", plugins: [swap()] });
  return (
    <section className="flex items-center gap-x-2">
      <div className="hover:bg-slate-400 hover:rounded-sm bg-transparent flex items-center justify-center hover:w-8 hover:h-8 w-8 h-8">
        <Icons.windows className="size-5" />
      </div>
      <div className="hover:bg-slate-400 hover:rounded-sm bg-transparent flex items-center justify-center hover:w-8 hover:h-8 w-8 h-8">
        <Icons.search className="size-5" />
      </div>
      <ul className="flex items-center gap-x-4" ref={parent}>
        {icons.map((icon: any, id: number) => (
          <li
            className="hover:bg-slate-400 hover:rounded-sm bg-transparent flex items-center justify-center hover:w-8 hover:h-8 w-8 h-8"
            key={id}
          >
            {icon}
          </li>
        ))}
      </ul>
    </section>
  );
}
