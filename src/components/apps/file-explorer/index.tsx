import { useRef } from "react";

import clsx from "clsx";
import Draggable from "react-draggable";

import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Container } from "./components/container";
import { RenderIf } from "../../../lib/utilities/renderIf";

import { usePosition } from "../../../lib/customHooks";

export function FileExplorer(props: any) {
  const { isOpen, isMinimize, isMaximize, inMiniview = false } = props;

  const explorerRef = useRef(null);
  const [postion, setPosition] = usePosition("Folder");

  return (
    <RenderIf isTrue={isOpen}>
      <Draggable
        handle=".title-bar"
        defaultPosition={{ x: postion.x, y: postion.y }}
        onStart={setPosition}
        onStop={setPosition}
        nodeRef={explorerRef}
      >
        <article
          ref={explorerRef}
          className={clsx(
            "backdrop-filter backdrop-blur-lg rounded-[0.5em] overflow-hidden absolute border border-[#2c3246]",
            {
              "hidden": isMinimize,
              "w-screen h-screen rounded-none": isMaximize,
              "block w-[1000px] h-[600px]": isMinimize === false ||
                isMaximize === false,
              "w-[114px] h-[120px] bg-white": inMiniview,
            },
          )}
        >
          <Header />
          <Navbar />
          <Container />
        </article>
      </Draggable>
    </RenderIf>
  );
}
