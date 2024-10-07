import { useContext } from "react";

import { VSCode } from "../../components/apps/vscode";
import { MsEdge } from "../../components/apps/ms-edge";
import { MzFirefox } from "../../components/apps/mz-firefox";
import { FileExplorer } from "../../components/apps/file-explorer";

import { MsEdgeContext } from "../contexts/MsEdgeContext";
import { VSCodeContext } from "../contexts/VsCodeContext";
import { MzFirefoxContext } from "../contexts/MzFirefoxContext";
import { FileExplorerContext } from "../contexts/FileExplorerContext";

import { RenderIf } from "./renderIf";

export function MiniView(props: any) {
  const { appHover } = props;

  const { vsCodeOpening } = useContext(VSCodeContext);
  const { msEdgeOpening } = useContext(MsEdgeContext);
  const { mzFirefoxOpening } = useContext(MzFirefoxContext);
  const { fileExplorerOpening } = useContext(FileExplorerContext);

  return (
    <div className="absolute hidden w-[130px] h-[150px] bg-[#1d1d1d] bottom-[55px] rounded-[0.3em] p-[0.5em] group-hover:block group-active:invisible flex-col items-center gap-y-2">
      <RenderIf isTrue={appHover === "vsCode"}>
        <VSCode isOpen={vsCodeOpening} inMiniview={true} />
      </RenderIf>
      <RenderIf isTrue={appHover === "msEdge"}>
        <MsEdge isOpen={msEdgeOpening} inMiniview={true} />
      </RenderIf>
      <RenderIf isTrue={appHover === "firefox"}>
        <MzFirefox isOpen={mzFirefoxOpening} inMiniview={true} />
      </RenderIf>
      <RenderIf isTrue={appHover === "folder"}>
        <FileExplorer isOpen={fileExplorerOpening} inMiniview={true} />
      </RenderIf>
    </div>
  );
}
