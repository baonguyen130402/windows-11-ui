import { useRef } from "react";
import { Container } from "./components/container";
import { Header } from "./components/header";
import { Toolbar } from "./components/toolbar";
import Draggable from "react-draggable";
import { Navbar } from "./components/navbar";

export function FileExplorer() {
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
          className="w-[1000px] h-[600px] bg-[#1f1f1f] backdrop-filter backdrop-blur-lg rounded-[0.5rem] overflow-hidden"
        >
          <Header />
          <Navbar />
          <Container />
        </article>
      </Draggable>
    </div>
  );
}
