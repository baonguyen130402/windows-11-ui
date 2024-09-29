import { useRef } from "react";
import { Container } from "./components/container";
import { Header } from "./components/header";
import Draggable from "react-draggable";
import { Navbar } from "./components/navbar";
import clsx from "clsx";

export function FileExplorer(props: any) {
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

  return (
    <>
      {isOpen && (
        <Draggable handle=".title-bar" nodeRef={explorerRef} bounds={bounds}>
          <article
            ref={explorerRef}
            className={clsx(
              "backdrop-filter backdrop-blur-lg rounded-[0.5rem] overflow-hidden",
              {
                "hidden": isMinimize,
                "w-screen h-screen top-0 left-0": isMaximize,
                "block w-[1000px] h-[600px] bg-[#1f1f1f]":
                  isMinimize === false || isMaximize === false,
                "w-[114px] h-[120px] bg-white": inMiniview,
              },
            )}
          >
            <Header />
            <Navbar />
            <Container />
          </article>
        </Draggable>
      )}
    </>
  );
}
