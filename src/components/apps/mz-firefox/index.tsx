import { useRef } from "react";

import clsx from "clsx";
import Draggable from "react-draggable";

import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Bookmark } from "./components/bookmark";
import { RenderIf } from "../../../lib/utilities/renderIf";
import { usePosition } from "../../../lib/customHooks";

export function MzFirefox(props: any) {
  const { isOpen, isMinimize, isMaximize, inMiniview = false } = props;

  const homeUrl = "https://google.com/webhp?igu=1";
  const explorerRef = useRef(null);

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const bounds = {
    left: 0,
    top: 0,
    right: screenWidth - 1128,
    bottom: screenHeight - 624,
  };

  const [position, setPosition] = usePosition("MzFirefox");

  return (
    <RenderIf isTrue={isOpen}>
      <Draggable
        handle=".title-bar"
        nodeRef={explorerRef}
        bounds={bounds}
        defaultPosition={{ x: position.x, y: position.y }}
        onStop={setPosition}
      >
        <article
          ref={explorerRef}
          className={clsx(
            "rounded-[0.5rem] overflow-hidden border border-[#2c3246]",
            {
              "hidden": isMinimize,
              "w-screen h-screen rounded-none": isMaximize,
              "block w-[72rem] h-[45rem] bg-gray-900/80":
                isMinimize === false || isMaximize === false,
              "w-[114px] h-[120px] bg-white": inMiniview,
            },
          )}
        >
          <Header />
          <div className="bg-gray-700">
            <Navbar />
            <Bookmark />
          </div>
          <div className="content w-full h-full bg-[#202124]">
            <iframe
              src={homeUrl}
              className="w-full h-full flex-grow"
            />
          </div>
        </article>
      </Draggable>
    </RenderIf>
  );
}
