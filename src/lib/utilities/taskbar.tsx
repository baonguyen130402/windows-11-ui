import { useContext } from "react";

import { MsEdgeContext } from "../contexts/MsEdgeContext";
import { MzFirefoxContext } from "../contexts/MzFirefoxContext";
import { FileExplorerContext } from "../contexts/FileExplorerContext";
import { VSCodeContext } from "../contexts/VsCodeContext";

export function TriggerAppsFromTaksbar() {
  const {
    setVSCodeOpening,
    setVsCodeMinimize,
    setVSCodePinOnTaskbar,
    vsCodePinOnTaskbar,
    vsCodeMinimize,
  } = useContext(
    VSCodeContext,
  );
  const {
    setMsEdgeOpening,
    setMsEdgeMinimize,
    setMsEdgePinOnTaskbar,
    msEdgePinOnTaskbar,
    msEdgeMinimize,
  } = useContext(
    MsEdgeContext,
  );
  const {
    setMzFirefoxOpening,
    setMzFirefoxMinimize,
    setMzFirefoxPinOnTaskbar,
    mzFirefoxPinOnTaskbar,
    mzFirefoxMinimize,
  } = useContext(
    MzFirefoxContext,
  );
  const {
    setFileExplorerOpening,
    setFileExplorerMinimize,
    setFileExplorerPinOnTaskbar,
    fileExplorerPinOnTaskbar,
    fileExplorerMinimizie,
  } = useContext(
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
      setMsEdgeMinimize(!msEdgeMinimize);
    }

    if (app === "firefox") {
      setMzFirefoxMinimize(!mzFirefoxMinimize);
    }

    if (app === "folder") {
      setFileExplorerMinimize(!fileExplorerMinimizie);
    }

    if (app === "vsCode") {
      setVsCodeMinimize(!vsCodeMinimize);
    }
  }

  function unpinAndPinApp(app: String) {
    if (app === "msEdge") {
      setMsEdgePinOnTaskbar(!msEdgePinOnTaskbar);
    }

    if (app === "firefox") {
      setMzFirefoxPinOnTaskbar(!mzFirefoxPinOnTaskbar);
    }

    if (app === "folder") {
      setFileExplorerPinOnTaskbar(!fileExplorerPinOnTaskbar);
    }
    if (app === "vsCode") {
      setVSCodePinOnTaskbar(!vsCodePinOnTaskbar);
    }
  }

  return { openNewApp, openMinimizedApp, unpinAndPinApp };
}
