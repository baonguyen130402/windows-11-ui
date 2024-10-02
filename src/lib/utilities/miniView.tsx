import { useContext } from "react";

import { MsEdge } from "../../components/apps/ms-edge";
import { MsEdgeContext } from "../contexts/MsEdgeContext";
import { MzFirefox } from "../../components/apps/mz-firefox";
import { MzFirefoxContext } from "../contexts/MzFirefoxContext";
import { FileExplorer } from "../../components/apps/file-explorer";
import { FileExplorerContext } from "../contexts/FileExplorerContext";

export function MiniView(props: any) {
  const { appHover } = props;
  
  const { msEdgeOpening } = useContext(MsEdgeContext);
  const { mzFirefoxOpening } = useContext(MzFirefoxContext);
  const { fileExplorerOpening } = useContext(FileExplorerContext);

  return (
    <div className="absolute hidden w-[130px] h-[150px] bg-[#1d1d1d] bottom-[55px] rounded-[0.3em] p-[0.5em] group-hover:block group-active:invisible flex-col items-center gap-y-2">
      {appHover === "msEdge" && (
        <MsEdge isOpen={msEdgeOpening} inMiniview={true} />
      )}
      {appHover === "firefox" && (
        <MzFirefox isOpen={mzFirefoxOpening} inMiniview={true} />
      )}
      {appHover === "folder" && (
        <FileExplorer isOpen={fileExplorerOpening} inMiniview={true} />
      )}
    </div>
  );
}
