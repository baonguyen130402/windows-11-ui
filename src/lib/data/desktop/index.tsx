import firefoxLogo from "/images/apps/firefox.png"
import msEdgeLogo from "/images/apps/edge.png"
import vsCodeLogo from "/images/apps/vs-code.ico"
import folderLogo from "/images/apps/folder.png"

export const appsOnDesktop = [
  {
    icon: (
      <img
        src={firefoxLogo}
        className="size-12 justify-self-center"
      />
    ),
    title: "Firefox",
  },
  {
    icon: (
      <img
        src={msEdgeLogo}
        className="size-12 justify-self-center"
      />
    ),
    title: "Edge",
  },
  {
    icon: (
      <img
        src={folderLogo}
        className="size-12 justify-self-center"
      />
    ),
    title: "Folder",
  },
  {
    icon: (
      <img
        src={vsCodeLogo}
        className="size-12 justify-self-center"
      />
    ),
    title: "VSCode",
  },
];
