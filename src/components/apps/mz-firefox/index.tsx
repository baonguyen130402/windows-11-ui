import { useRef } from "react";
import { Bookmark } from "./components/bookmark";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import Draggable from "react-draggable";

export function MzFirefox() {
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
          className="w-[72rem] h-[45rem] bg-gray-900 rounded-[0.5rem] overflow-hidden"
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
    </div>
  );
}
