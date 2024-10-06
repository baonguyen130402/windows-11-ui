import { useContext } from "react";

import { MsEdgeContext } from "../contexts/MsEdgeContext";
import { MzFirefoxContext } from "../contexts/MzFirefoxContext";
import { FileExplorerContext } from "../contexts/FileExplorerContext";
import { VSCodeContext } from "../contexts/VsCodeContext";

export function TriggerAppsFromTaksbar() {
  const { setVSCodeOpening, setVsCodeMinimize } = useContext(VSCodeContext);
  const { setMsEdgeOpening, setMsEdgeMinimize } = useContext(MsEdgeContext);
  const { setMzFirefoxOpening, setMzFirefoxMinimize } = useContext(
    MzFirefoxContext,
  );
  const { setFileExplorerOpening, setFileExplorerMinimize } = useContext(
    FileExplorerContext,
  );

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

    if (app === "vsCode") {
      setVSCodeOpening(true);
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

    if (app === "vsCode") {
      setVsCodeMinimize(false);
    }
  }

  return { openNewApp, openMinimizedApp };
}
