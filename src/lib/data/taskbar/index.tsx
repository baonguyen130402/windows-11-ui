import copilotIcon from "/images/apps/copilot.png"
import firefoxIcon from "/images/apps/firefox.png"
import edgeIcon from "/images/apps/edge.png"
import folderIcon from "/images/apps/folder.png"
import vscodeIcon from "/images/apps/vs-code.ico"

import wifiIcon from "/images/system/wifi.png"
import bluetoothIcon from "/images/system/bluetooth.png"
import speakerIcon from "/images/system/speaker.png"
import batteryIcon from "/images/system/battery.png"

import edgeIconInStartMenu from "/images/startmenu/edge-icon.png"
import wordIcon from "/images/startmenu/word-icon.png"
import excelIcon from "/images/startmenu/excel-icon.png"
import powerpointIcon from "/images/startmenu/powerpoint-icon.png"
import msOfficeIcon from "/images/startmenu/ms-office.ico"
import calendarIcon from "/images/startmenu/calendar-icon.png"
import msStoreIcon from "/images/startmenu/ms-store-icon.png"
import msPhotoIcon from "/images/startmenu/ms-foto-icon.ico"
import msVideoIcon from "/images/startmenu/ms-video-icon.ico"
import paint2dIcon from "/images/startmenu/Paint-2D.ico"
import paint3dIcon from "/images/startmenu/Paint-3D.ico"
import whiteboardIcon from "/images/startmenu/Whiteboard.ico"
import settingIcon from "/images/startmenu/ms-impostazioni-icon.ico"
import msSkypeIcon from "/images/startmenu/ms-skype.ico"
import vscodeIconInStartMenu from "/images/startmenu/vs-code.ico"
import vsIcon from "/images/startmenu/vs-normal.ico"
import msFolder from "/images/startmenu/ms-file-explorer.ico"
import terminalIcon from "/images/startmenu/terminal-icon.png"
import photoFolderIcon from "/images/startmenu/Photos-folder.ico"

export function generateAppsOnTaskbar(props: any) {
  const { vsCode, msEdge, mzFirefox, fileExplorer } = props;

  return [
    {
      title: "copilot",
      isOpen: false,
      isPinOn: true,
      icon: <img src={copilotIcon} />,
    },
    {
      title: "firefox",
      isOpen: mzFirefox.isOpening,
      isPinOn: mzFirefox.isPinOn,
      icon: <img src={firefoxIcon} />,
    },
    {
      title: "msEdge",
      isOpen: msEdge.isOpening,
      isPinOn: msEdge.isPinOn,
      icon: <img src={edgeIcon} />,
    },
    {
      title: "folder",
      isOpen: fileExplorer.isOpening,
      isPinOn: fileExplorer.isPinOn,
      icon: <img src={folderIcon} />,
    },
    {
      title: "vsCode",
      isOpen: vsCode.isOpening,
      isPinOn: vsCode.isPinOn,
      icon: <img src={vscodeIcon} className="size-6" />,
    },
  ];
}

export const buttonInControlSystem = [
  {
    icon: <img src={wifiIcon} className="h-6 w-6" />,
    title: "Wifi",
  },
  {
    icon: <img src={bluetoothIcon} className="h-6 w-6" />,
    title: "Bluetooth",
  },
  {
    icon: <img src={wifiIcon} className="h-6 w-6" />,
    title: "Wifi",
  },
  {
    icon: <img src={bluetoothIcon} className="h-6 w-6" />,
    title: "Wifi",
  },
];

export const iconsInTray = [
  {
    icon: <img src={wifiIcon} className="h-5 w-5" />,
    title: "wifi",
  },
  {
    icon: <img src={speakerIcon} className="h-5 w-5" />,
    title: "speaker",
  },
  {
    icon: <img src={batteryIcon} className="h-5 w-5" />,
    title: "battery",
  },
];

export const appsInStartMenu = [
  {
    icon: (
      <img
        src={edgeIconInStartMenu}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Edge",
  },
  {
    icon: (
      <img
        src={wordIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Word",
  },
  {
    icon: (
      <img
        src={excelIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Excel",
  },
  {
    icon: (
      <img
        src={powerpointIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Powerpoint",
  },
  {
    icon: (
      <img
        src={msOfficeIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Office",
  },
  {
    icon: (
      <img
        src={calendarIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Calendar",
  },
  {
    icon: (
      <img
        src={msStoreIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Microsoft Store",
  },
  {
    icon: (
      <img
        src={msPhotoIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Photos",
  },
  {
    icon: (
      <img
        src={msVideoIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Film & Videos",
  },
  {
    icon: (
      <img
        src={paint2dIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Paint",
  },
  {
    icon: (
      <img
        src={paint3dIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Paint 3D",
  },
  {
    icon: (
      <img
        src={whiteboardIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "WhiteBoard",
  },
  {
    icon: (
      <img
        src={settingIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Settings",
  },
  {
    icon: (
      <img
        src={msSkypeIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Skype",
  },
  {
    icon: (
      <img
        src={vscodeIconInStartMenu}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "VScode",
  },
  {
    icon: (
      <img
        src={vsIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Visual Studio",
  },
  {
    icon: (
      <img
        src={msFolder}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "File Explorer",
  },
  {
    icon: (
      <img
        src={terminalIcon}
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Terminal",
  },
];

export const appsRecentOpennedInStartMenu = [
  {
    icon: (
      <img
        src={vscodeIconInStartMenu}
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "VScode",
    state: "Recently added",
  },
  {
    icon: (
      <img
        src={vsIcon}
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "Visual Studio",
    state: "Recently added",
  },
  {
    icon: (
      <img
        src={photoFolderIcon}
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "Study Materials",
    state: "30 minutes ago",
  },
  {
    icon: (
      <img
        src={terminalIcon}
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "Terminal",
    state: "Thursday at 3:05 PM",
  },
  {
    icon: (
      <img
        src={whiteboardIcon}
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "White Board",
    state: "Aug 31",
  },
  {
    icon: (
      <img
        src={wordIcon}
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "Microsoft Word",
    state: "Aug 28",
  },
];
