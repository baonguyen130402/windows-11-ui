import { useRef } from "react";

import clsx from "clsx";
import Draggable from "react-draggable";

import { Content } from "./components/content";
import { RenderIf } from "../../../lib/utilities/renderIf";
import { Header } from "./components/header";

import { usePosition } from "../../../lib/customHooks";

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
