import { useContext } from "react";

import { MsEdgeContext } from "../contexts/MsEdgeContext";
import { MzFirefoxContext } from "../contexts/MzFirefoxContext";
import { FileExplorerContext } from "../contexts/FileExplorerContext";

export function TriggerAppsFromTaksbar() {
  const { setMsEdgeOpening, setMsEdgeMinimize } = useContext(MsEdgeContext);
  const { setMzFirefoxOpening, setMzFirefoxMinimize } = useContext(MzFirefoxContext);
  const { setFileExplorerOpening, setFileExplorerMinimize } = useContext(FileExplorerContext);

  function openNewApp(app: String) {
    if (app === "msEdge") {
      setMsEdgeOpening(true);
    }

    if (app === "firefox") {
      setMzFirefoxOpening(true);
    }

    if (app === "folder") {
      setFileExplorerOpening(true);
    }
  }

  function openMinimizedApp(app: String) {
    if (app === "msEdge") {
      setMsEdgeMinimize(false);
    }

    if (app === "firefox") {
      setMzFirefoxMinimize(false);
    }

    if (app === "folder") {
      setFileExplorerMinimize(false);
    }
  }

  return { openNewApp, openMinimizedApp };
}
