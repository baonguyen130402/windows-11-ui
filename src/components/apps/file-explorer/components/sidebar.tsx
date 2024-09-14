import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { Icons } from "../../../../lib/icons";
import { animations } from "@formkit/drag-and-drop";

const defaultApps = [
  {
    title: "Desktop",
    icon: <Icons.desktopFolder className="size-5 mr-2" />,
  },
  {
    title: "Documents",
    icon: <Icons.documentFolder className="size-5 mr-2" />,
  },
  {
    title: "Downloads",
    icon: <Icons.downloadsFolder className="size-5 mr-2" />,
  },
  {
    title: "Music",
    icon: <Icons.musicFolder className="size-5 mr-2" />,
  },
  {
    title: "Pictures",
    icon: <Icons.picturesFolder className="size-5 mr-2" />,
  },
  {
    title: "Videos",
    icon: <Icons.videosFolder className="size-5 mr-2" />,
  },
  {
    title: "Project",
    icon: <Icons.folder className="size-5 mr-2" />,
  },
];

export function Sidebar() {
  const [parent, apps] = useDragAndDrop<HTMLUListElement, any>(defaultApps, {
    plugins: [animations()],
  });

  return (
    <div className="col-span-3 border-r border-gray-700 h-full px-2">
      <div className="flex items-center px-4 py-1 ml-2">
        <Icons.home className="size-5 mr-2" />
        <span className="text-sm font-bold">Home</span>
      </div>
      <div className="flex items-center px-1 py-1">
        <Icons.chevronRight className="size-4 mr-1.5 " />
        <Icons.cloud className="size-5 fill-blue-400 mr-1.5" />
        <span className="text-sm font-medium">Baonguyen - Personal</span>
      </div>
      <ul ref={parent} className="border-b border-t border-gray-700 my-2 py-2">
        {apps.map((app) => (
          <li key={app.title} className="flex justify-between items-center">
            <div className="flex items-center px-4 ml-2 py-1">
              {app.icon}
              <span className="text-sm font-medium">{app.title}</span>
            </div>
            <Icons.pin className="size-4 fill-gray-700" />
          </li>
        ))}
      </ul>
      <div className="flex items-center px-1 py-1">
        <Icons.chevronRight className="size-4 mr-1.5 " />
        <Icons.thisPc className="size-5 fill-blue-400 mr-1.5" />
        <span className="text-sm font-medium">This PC</span>
      </div>
    </div>
  );
}
