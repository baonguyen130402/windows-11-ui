import { useContext } from "react";

import clsx from "clsx";

import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";
import { VSCodeContext } from "../../lib/contexts/VsCodeContext";
import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";

export function DesktopApp(props: any) {
  const {
    title,
    icon,
    isActive,
    rowId,
    colId = 1,
  } = props;

  const { setVSCodeOpening } = useContext(VSCodeContext);
  const { setMsEdgeOpening } = useContext(MsEdgeContext);
  const { setMzFirefoxOpening } = useContext(MzFirefoxContext);
  const { setFileExplorerOpening } = useContext(FileExplorerContext);

  const myClassName = clsx(
    "grid text-center",
    {
      "hover:rounded-[0.25rem] hover:bg-[rgba(255,255,255,.15)] p-1":
        title !== "",
    },
  );

  function handleDoubleClick(icon: string) {
    if (icon === "Firefox") {
      setMzFirefoxOpening(true);
    }

    if (icon === "Edge") {
      setMsEdgeOpening(true);
    }

    if (icon === "Folder") {
      setFileExplorerOpening(true);
    }

    if (icon === "VSCode") {
      setVSCodeOpening(true);
    }
  }

  return (
    <li
      className={myClassName}
      onDoubleClick={() => handleDoubleClick(title)}
    >
      {icon}
      <span className="text-sm select-none">{title}</span>
    </li>
  );
}
