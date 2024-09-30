import { useRef } from "react";

import clsx from "clsx";
import Draggable from "react-draggable";

import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Bookmark } from "./components/bookmark";

export function MsEdge(props: any) {
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

  return (
    <>
      {isOpen && (
        <Draggable handle=".title-bar" nodeRef={explorerRef} bounds={bounds}>
          <article
            ref={explorerRef}
            className={clsx(
              "backdrop-filter backdrop-blur-lg rounded-[0.5rem] overflow-hidden absolute border border-[#2c3246]",
              {
                "hidden": isMinimize,
                "w-screen h-screen rounded-none": isMaximize,
                "block w-[72rem] h-[45rem]": isMinimize === false ||
                  isMaximize === false,
                "w-[114px] h-[120px] bg-white": inMiniview,
              },
            )}
          >
            <Header />
            <div className="bg-[#3b3b3b]">
              <Navbar />
              <Bookmark />
            </div>
            <div className="content w-full h-full bg-[#202124]">
              <iframe
                src={homeUrl}
                className="w-full h-full"
              />
            </div>
          </article>
        </Draggable>
      )}
    </>
  );
}
