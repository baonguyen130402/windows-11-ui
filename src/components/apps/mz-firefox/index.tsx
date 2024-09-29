import { useRef } from "react";
import { Bookmark } from "./components/bookmark";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import Draggable from "react-draggable";
import clsx from "clsx";

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

  return (
    <>
      {isOpen && (
        <Draggable handle=".title-bar" nodeRef={explorerRef} bounds={bounds}>
          <article
            ref={explorerRef}
            className={clsx(
              "rounded-[0.5rem] overflow-hidden",
              {
                "hidden": isMinimize,
                "w-screen h-screen top-0 left-0": isMaximize,
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
      )}
    </>
  );
}
