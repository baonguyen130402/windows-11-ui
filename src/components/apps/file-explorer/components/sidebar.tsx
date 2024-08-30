import { Icons } from "../../../../lib/icons";

const defaultApps = [
  {
    title: "Desktop",
    icon: <Icons.home className="size-5 mr-2" />,
  },
  {
    title: "Documents",
    icon: <Icons.home className="size-5 mr-2" />,
  },
  {
    title: "Downloads",
    icon: <Icons.home className="size-5 mr-2" />,
  },
  {
    title: "Music",
    icon: <Icons.home className="size-5 mr-2" />,
  },
  {
    title: "Pictures",
    icon: <Icons.home className="size-5 mr-2" />,
  },
  {
    title: "Videos",
    icon: <Icons.home className="size-5 mr-2" />,
  },
  {
    title: "Project",
    icon: <Icons.home className="size-5 mr-2" />,
  },
];

export function Sidebar() {
  return (
    <div className="col-span-3 border-r border-gray-700 h-full px-2">
      <div className="flex items-center px-4 py-1">
        <Icons.home className="size-5 mr-2" />
        <span className="text-sm font-bold">Home</span>
      </div>
      <div className="flex items-center px-4 py-1">
        <Icons.chevronRight className="size-4 mr-1.5 " />
        <Icons.cloud className="size-5 fill-blue-400 mr-1.5" />
        <span className="text-sm font-medium">Baonguyen - Personal</span>
      </div>
      <div className="border-b border-t border-gray-700 my-2 py-2">
        {defaultApps.map((app) => (
          <div className="flex justify-between items-center">
            <div className="flex items-center px-4 ml-5 py-1">
              {app.icon}
              <span className="text-sm font-medium">{app.title}</span>
            </div>
            <Icons.pin className="size-4 fill-gray-700" />
          </div>
        ))}
      </div>
      <div className="flex items-center px-4 py-1">
        <Icons.chevronRight className="size-4 mr-1.5 " />
        <Icons.cloud className="size-5 fill-blue-400 mr-1.5" />
        <span className="text-sm font-medium">This PC</span>
      </div>
    </div>
  );
}
