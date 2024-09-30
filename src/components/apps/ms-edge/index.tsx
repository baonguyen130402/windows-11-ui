import { useRef } from "react";

import Draggable from "react-draggable";

import { Bookmark } from "./components/bookmark";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";

export function MsEdge() {
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
    <div className="w-full h-screen absolute">
      <Draggable handle=".title-bar" nodeRef={explorerRef} bounds={bounds}>
        <article
          ref={explorerRef}
          className="w-[72rem] h-[45rem] backdrop-filter backdrop-blur-lg rounded-[0.5rem] overflow-hidden border border-[#2c3246]"
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
    </div>
  );
}
