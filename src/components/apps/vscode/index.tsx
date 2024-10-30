import { useRef } from "react";

import clsx from "clsx";
import Draggable from "react-draggable";

import { Header } from "./components/header";
import { Content } from "./components/content";
import { RenderIf } from "../../../lib/utilities/renderIf";

import { usePosition } from "../../../lib/hooks/usePosion";

export function VSCode(props: any) {
  const { isOpen, isMinimize, isMaximize, inMiniview = false } = props;

  const explorerRef = useRef(null);

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const bounds = {
    left: 0,
    top: 0,
    right: screenWidth - 1128,
    bottom: screenHeight - 624,
  };

  const [position, setPosition] = usePosition("VSCode");

  let currentSide;

  if (position.x <= 5 && position.y <= 5) {
    currentSide = "topleft";
  } else if (position.x <= 20 && position.y > 10) {
    currentSide = "left";
  } else if (position.y <= 20 && position.x > 10) {
    currentSide = "top";
  }

  return (
    <>
      <RenderIf isTrue={isOpen}>
        <Draggable
          handle=".title-bar"
          nodeRef={explorerRef}
          bounds={bounds}
          defaultPosition={inMiniview
            ? { x: 0, y: 0 }
            : { x: position.x, y: position.y }}
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
                  isMinimize === false ||
                  isMaximize === false,
                "w-[114px] h-[120px]": inMiniview,
                "block w-[calc(50%)] h-[calc(100%-3rem)] rounded-none":
                  currentSide === "left",
                "block h-[calc(100%-3rem)] w-screen rounded-none top-0 let-0 right-0 bottom-0":
                  currentSide === "top",
                "block h-[calc(50%)] w-[calc(50%)]":
                  position.y <= 10 && position.x <= 10,
              },
            )}
          >
            <Header />
            <Content />
          </article>
        </Draggable>
      </RenderIf>
    </>
  );
}
