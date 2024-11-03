import desktopFolder from "/images/file-explorer/Desktop.ico"
import documentFolder from "/images/file-explorer/Documents.ico"
import downloadFolder from "/images/file-explorer/Downloads.ico"
import musicFolder from "/images/file-explorer/Music.ico"
import pictureFolder from "/images/file-explorer/Photos.ico"
import videoFolder from "/images/file-explorer/Videos.ico"
import projectFolder from "/images/file-explorer/projects.png"

import cutIcon from "/images/options/cut.png"
import copyIcon from "/images/options/copy.png"
import pasteIcon from "/images/options/paste.png"
import renameIcon from "/images/options/rename.png"
import shareIcon from "/images/options/share.png"
import deleteIcon from "/images/options/delete.png"
import sortIcon from "/images/options/sort.png"
import viewIcon from "/images/options/view.png"
import dotIcon from "/images/options/dots.png"

import galleryIcon from "/images/file-explorer/gallery.png"
import thisPcIcon from "/images/file-explorer/Computer.ico"
import networkIcon from "/images/file-explorer/Network.ico"

export const defaultAppsInSideBar = [
  {
    title: "Desktop",
    icon: (
      <img src={desktopFolder} className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Documents",
    icon: (
      <img src={documentFolder} className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Downloads",
    icon: (
      <img src={downloadFolder} className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Music",
    icon: (
      <img
        src={musicFolder}
        className="h-5 w-5 mr-2"
      />
    ),
  },
  {
    title: "Pictures",
    icon: (
      <img src={pictureFolder} className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Videos",
    icon: (
      <img src={videoFolder} className="h-5 w-5 mr-2" />
    ),
  },
  {
    title: "Project",
    icon: (
      <img src={projectFolder} className="h-5 w-5 mr-2" />
    ),
  },
];

export const optionsWithFileInToolbar = [
  {
    icon: <img src={cutIcon} className="size-5" />,
  },
  {
    icon: <img src={copyIcon} className="size-5" />,
  },
  {
    icon: <img src={pasteIcon} className="size-5 scale-150" />,
  },
  {
    icon: <img src={renameIcon} className="size-5" />,
  },
  {
    icon: <img src={shareIcon} className="size-5" />,
  },
  {
    icon: <img src={deleteIcon} className="size-5" />,
  },
];

export const optionsArrangeInToolbar = [
  {
    icon: <img src={sortIcon} className="size-5" />,
    title: "Sort",
  },
  {
    icon: <img src={viewIcon} className="size-5" />,
    title: "View",
  },
];

export const other = {
  dotIcon: <img src={dotIcon} className="size-5" />,
  galleryIcon: <img src={galleryIcon} className="size-5 fill-blue-400 ml-5 mr-1.5" />,
  networkIcon: <img src={networkIcon} className="size-5 fill-blue-400 mr-1.5" />,
  thisPcIcon: <img src={thisPcIcon} className="size-5 fill-blue-400 mr-1.5" />,
}
