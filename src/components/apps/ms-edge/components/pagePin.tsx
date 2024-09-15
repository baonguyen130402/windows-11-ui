import { animations } from "@formkit/drag-and-drop";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import { Icons } from "../../../../lib/icons";
import github from "../../../../assets/logo/github.png";
import youtube from "../../../../assets/logo/youtube.png";
import facebook from "../../../../assets/logo/facebook.png";
import instagram from "../../../../assets/logo/instagram.png";

const listPage = [
  {
    title: "Youtube",
    image: youtube,
  },
  {
    title: "Facebook",
    image: facebook,
  },
  {
    title: "Instagram",
    image: instagram,
  },
  {
    title: "Github",
    image: github,
  },
];

export function PagePin() {
  const [parent, pages] = useDragAndDrop<HTMLUListElement, any>(listPage, {
    plugins: [animations()],
  });

  return (
    <ul ref={parent} className="flex items-center gap-4">
      {pages.map((page) => (
        <li key={page.title} className="flex flex-col items-center relative">
          <div className="flex items-center p-2 bg-[#333] rounded-[0.225rem] shadow-lg shadow-black hover:bg-[#444]">
            <img src={page.image} className="h-14 w-14" />
          </div>
          <span className="size-sm">{page.title}</span>
          <div className="absolute -right-2 -top-2 border-[0.5px] border-gray-400 w-4 h-4 rounded-full bg-[#333] flex items-center justify-center hover:bg-[#444]">
            <Icons.effacer className="size-2 fill-white"/>
          </div>
        </li>
      ))}
    </ul>
  );
}
