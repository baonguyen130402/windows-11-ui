import clsx from "clsx";
import { useContext } from "react";
import { MzFirefoxContext } from "../../lib/contexts/MzFirefoxContext";
import { FileExplorerContext } from "../../lib/contexts/FileExplorerContext";
import { MsEdgeContext } from "../../lib/contexts/MsEdgeContext";

export function DesktopApp(props: any) {
  const {
    title,
    icon,
    isActive,
    rowId,
    colId = 1,
  } = props;

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
    console.log(icon);
    if (icon === "firefox") {
      setMzFirefoxOpening(true);
    }

    if (icon === "msEdge") {
      setMsEdgeOpening(true);
    }

    if (icon === "folder") {
      setFileExplorerOpening(true);
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
