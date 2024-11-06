import { useDragAndDrop } from "@formkit/drag-and-drop/react";

import { Icons } from "../../../../lib/icons";
import { animations } from "@formkit/drag-and-drop";
import { defaultAppsInSideBar, other } from "../../../../lib/data/fileExplorer";

export function Sidebar() {
  const [parent, apps] = useDragAndDrop<HTMLUListElement, any>(
    defaultAppsInSideBar,
    {
      plugins: [animations()],
    },
  );

  return (
    <div className="col-span-3 border-r border-gray-700 h-full px-2 pt-3">
      <div className="flex items-center px-4 py-1 ml-2">
        <Icons.home className="size-5 mr-2" />
        <span className="text-sm font-bold">Home</span>
      </div>
      <div className="flex items-center px-1 py-1">
        {other.galleryIcon}
        <span className="text-sm font-medium">Gallery</span>
      </div>
      <ul ref={parent} className="border-b border-t border-gray-700 my-2 py-2">
        {apps.map((app, index) => (
          <li key={app.title} className="flex justify-between items-center">
            <div className="flex items-center px-4 ml-2 py-1">
              {app.icon}
              <span className="text-sm font-medium">{app.title}</span>
            </div>
            {index !== apps.length - 1
              ? <Icons.pin className="size-4 fill-gray-700" />
              : ""}
          </li>
        ))}
      </ul>
      <div>
        <div className="flex items-center px-1 py-1">
          <Icons.chevronRight className="size-[12px] mr-1.5 " />
          {other.thisPcIcon}
          <span className="text-sm font-medium">This PC</span>
        </div>
        <div className="flex items-center px-1 py-1">
          <Icons.chevronRight className="size-[12px] mr-1.5 " />
          {other.networkIcon}
          <span className="text-sm font-medium">Network</span>
        </div>
      </div>
    </div>
  );
}
