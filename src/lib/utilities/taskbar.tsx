import { useContext } from "react";

import { MsEdgeContext } from "../contexts/MsEdgeContext";
import { MzFirefoxContext } from "../contexts/MzFirefoxContext";
import { FileExplorerContext } from "../contexts/FileExplorerContext";
import { VSCodeContext } from "../contexts/VsCodeContext";

export function TriggerAppsFromTaskbar() {
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
    fileExplorerMinimize,
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
      setFileExplorerMinimize(!fileExplorerMinimize);
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
