import { title } from "process";
import { Icons } from "../../icons";

export const defaultAppsInSideBar = [
  {
    title: "Desktop",
    icon: (
      <img src="/images/file-explorer/Desktop.ico" className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Documents",
    icon: (
      <img src="/images/file-explorer/Documents.ico" className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Downloads",
    icon: (
      <img src="/images/file-explorer/Downloads.ico" className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Music",
    icon: (
      <img
        src="/images/file-explorer/Music.ico"
        className="h-5 w-5 mr-2"
      />
    ),
  },
  {
    title: "Pictures",
    icon: (
      <img src="/images/file-explorer/Photos.ico" className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Videos",
    icon: (
      <img src="/images/file-explorer/Videos.ico" className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Project",
    icon: (
      <img src="/images/file-explorer/projects.png" className="h-5 w-5 mr-2" />
    ),
  },

  {
    title: "Downloads",
    icon: <img src="/images/apps/folder.png" className="h-5 w-5 mr-2" />,
  },
];

export const optionsWithFileInToolbar = [
  {
    icon: <img src="/images/options/cut.png" className="size-5" />,
  },
  {
    icon: <img src="/images/options/copy.png" className="size-5" />,
  },
  {
    icon: <img src="/images/options/paste.png" className="size-5 scale-150" />,
  },
  {
    icon: <img src="/images/options/rename.png" className="size-5" />,
  },
  {
    icon: <img src="/images/options/share.png" className="size-5" />,
  },
  {
    icon: <img src="/images/options/delete.png" className="size-5" />,
  },
];

export const optionsArrangeInToolbar = [
  {
    icon: <img src="/images/options/sort.png" className="size-5" />,
    title: "Sort",
  },
  {
    icon: <img src="/images/options/view.png" className="size-5" />,
    title: "View",
  },
];
