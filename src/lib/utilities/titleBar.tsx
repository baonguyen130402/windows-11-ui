import { useContext } from "react";
import { MsEdgeContext } from "../contexts/MsEdgeContext";
import { MzFirefoxContext } from "../contexts/MzFirefoxContext";
import { FileExplorerContext } from "../contexts/FileExplorerContext";
import { VSCodeContext } from "../contexts/VsCodeContext";

export function TriggerAppFormTitleBar(app: String) {
  const {
    setVSCodeOpening,
    setVsCodeMinimize,
    setVsCodeMaximize,
    vsCodeMaximize,
  } = useContext(
    VSCodeContext,
  );
  const {
    setMsEdgeOpening,
    setMsEdgeMinimize,
    setMsEdgeMaximize,
    msEdgeMaximize,
  } = useContext(
    MsEdgeContext,
  );
  const {
    setMzFirefoxOpening,
    setMzFirefoxMinimize,
    setMzFirefoxMaximize,
    mzFirefoxMaximize,
  } = useContext(
    MzFirefoxContext,
  );
  const {
    setFileExplorerOpening,
    setFileExplorerMinimize,
    setFileExplorerMaximize,
    fileExplorerMaximize,
  } = useContext(
    FileExplorerContext,
  );

  function closeApp() {
    if (app === "msEdge") {
      setMsEdgeOpening(false);

      if (msEdgeMaximize) {
        setMsEdgeMaximize(false);
      }
    }

    if (app === "mzFirefox") {
      setMzFirefoxOpening(false);

      if (mzFirefoxMaximize) {
        setMzFirefoxMaximize(false);
      }
    }

    if (app === "fileExplorer") {
      setFileExplorerOpening(false);

      if (fileExplorerMaximize) {
        setFileExplorerMaximize(false);
      }
    }

    if (app === "vsCode") {
      setVSCodeOpening(false)

      if (vsCodeMaximize) {
        setVsCodeMaximize(false)
      }
    }
  }

  function minimizeApp() {
    if (app === "msEdge") {
      setMsEdgeMinimize(true);
    }

    if (app === "mzFirefox") {
      setMzFirefoxMinimize(true);
    }

    if (app === "fileExplorer") {
      setFileExplorerMinimize(true);
    }
    
    if (app === "vsCode") {
      setVsCodeMinimize(true);
    }
  }

  function maximizeApp() {
    if (app === "msEdge") {
      setMsEdgeMaximize(!msEdgeMaximize);
    }

    if (app === "mzFirefox") {
      setMzFirefoxMaximize(!mzFirefoxMaximize);
    }

    if (app === "fileExplorer") {
      setFileExplorerMaximize(!fileExplorerMaximize);
    }
    
    if (app === "vsCode") {
      setVsCodeMaximize(!vsCodeMaximize);
    }
  }

  return { closeApp, minimizeApp, maximizeApp };
}
