export function generateAppsOnTaskbar(props: any) {
  const { vsCode, msEdge, mzFirefox, fileExplorer } = props;

  return [
    {
      title: "copilot",
      isOpen: false,
      isPinOn: true,
      icon: <img src="/images/apps/copilot.png" />,
    },
    {
      title: "firefox",
      isOpen: mzFirefox.isOpening,
      isPinOn: mzFirefox.isPinOn,
      icon: <img src="/images/apps/firefox.png" />,
    },
    {
      title: "msEdge",
      isOpen: msEdge.isOpening,
      isPinOn: msEdge.isPinOn,
      icon: <img src="/images/apps/edge.png" />,
    },
    {
      title: "folder",
      isOpen: fileExplorer.isOpening,
      isPinOn: fileExplorer.isPinOn,
      icon: <img src="/images/apps/folder.png" />,
    },
    {
      title: "vsCode",
      isOpen: vsCode.isOpening,
      isPinOn: vsCode.isPinOn,
      icon: <img src="/images/apps/vs-code.ico" className="size-6" />,
    },
  ];
}

export const buttonInControlSystem = [
  {
    icon: <img src="/images/system/wifi.png" className="h-6 w-6" />,
    title: "Wifi",
  },
  {
    icon: <img src="/images/system/bluetooth.png" className="h-6 w-6" />,
    title: "Bluetooth",
  },
  {
    icon: <img src="/images/system/wifi.png" className="h-6 w-6" />,
    title: "Wifi",
  },
  {
    icon: <img src="/images/system/wifi.png" className="h-6 w-6" />,
    title: "Wifi",
  },
];

export const iconsInTray = [
  {
    icon: <img src="/images/system/wifi.png" className="h-5 w-5" />,
    title: "wifi",
  },
  {
    icon: <img src="/images/system/speaker.png" className="h-5 w-5" />,
    title: "speaker",
  },
  {
    icon: <img src="/images/system/battery.png" className="h-5 w-5" />,
    title: "battery",
  },
];

export const appsInStartMenu = [
  {
    icon: (
      <img
        src="/images/startmenu/edge-icon.png"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Edge",
  },
  {
    icon: (
      <img
        src="/images/startmenu/word-icon.png"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Word",
  },
  {
    icon: (
      <img
        src="/images/startmenu/excel-icon.png"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Excel",
  },
  {
    icon: (
      <img
        src="/images/startmenu/powerpoint-icon.png"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Powerpoint",
  },
  {
    icon: (
      <img
        src="/images/startmenu/ms-office.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Office",
  },
  {
    icon: (
      <img
        src="/images/startmenu/calendar-icon.png"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Calendar",
  },
  {
    icon: (
      <img
        src="/images/startmenu/ms-store-icon.png"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Microsoft Store",
  },
  {
    icon: (
      <img
        src="/images/startmenu/ms-foto-icon.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Photos",
  },
  {
    icon: (
      <img
        src="/images/startmenu/ms-video-icon.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Film & Videos",
  },
  {
    icon: (
      <img
        src="/images/startmenu/Paint-2D.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Paint",
  },
  {
    icon: (
      <img
        src="/images/startmenu/Paint-3D.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Paint 3D",
  },
  {
    icon: (
      <img
        src="/images/startmenu/Whiteboard.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "WhiteBoard",
  },
  {
    icon: (
      <img
        src="/images/startmenu/ms-impostazioni-icon.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Settings",
  },
  {
    icon: (
      <img
        src="/images/startmenu/ms-skype.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Skype",
  },
  {
    icon: (
      <img
        src="/images/startmenu/vs-code.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "VScode",
  },
  {
    icon: (
      <img
        src="/images/startmenu/vs-normal.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "Visual Studio",
  },
  {
    icon: (
      <img
        src="/images/startmenu/ms-file-explorer.ico"
        className="w-[2.5rem] m-[0.1em]"
      />
    ),
    title: "File Explorer",
  },
  {
    icon: (
      <img
        src="/images/startmenu/terminal-icon.png"
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
        src="/images/startmenu/vs-code.ico"
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "VScode",
    state: "Recently added",
  },
  {
    icon: (
      <img
        src="/images/startmenu/vs-normal.ico"
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "Visual Studio",
    state: "Recently added",
  },
  {
    icon: (
      <img
        src="/images/startmenu/Photos-folder.ico"
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "Study Materials",
    state: "30 minutes ago",
  },
  {
    icon: (
      <img
        src="/images/startmenu/terminal-icon.png"
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "Terminal",
    state: "Thursday at 3:05 PM",
  },
  {
    icon: (
      <img
        src="/images/startmenu/Whiteboard.ico"
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "White Board",
    state: "Aug 31",
  },
  {
    icon: (
      <img
        src="/images/startmenu/word-icon.png"
        className="h-[35px] w-auto pl-[1em]"
      />
    ),
    title: "Microsoft Word",
    state: "Aug 28",
  },
];
