import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { swap } from "@formkit/drag-and-drop";

import { Icons } from "../../lib/icons";
import { Icon } from "./icon";

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

function separateDesktopLayout(
  icons: any = [{ title: "", icon: "" }],
  row: number = 9,
  column: number = 18,
) {
  const { title, icon } = icons;

  const desktopLayout = Array
    .from(Array(row), () =>
      new Array(column)
        .fill({ icon: "", title: "" }));

  if (title !== "" && icon !== "") {
    icons.forEach((icon: any, id: number) => {
      desktopLayout[id][0] = icon
    })
  }

  return desktopLayout;
}

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
      className="w-screen h-[calc(100%-3rem)] bg-transparent p-2.5 grid grid-rows-9 grid-cols-18 gap-y-8 gap-x-2.5"
      ref={parent}
    >
      {rows.map((row: any) => (
        row.map((item: any) => (
          <Icon key={item.title} title={item.title} icon={item.icon} />
        ))
      ))}
    </ul>
  );
}
