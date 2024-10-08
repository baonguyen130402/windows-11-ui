import { useEffect, useState } from "react";

export function usePosition() {
  const [latestPosition, setLatestPosition] = useState({
    x: 0,
    y: 0,
  });

  const getPositionFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem("latestPosition") || "");
    } catch (error) {
      return latestPosition;
    }
  };

  const position = getPositionFromLocalStorage();
  const setPosition = (dragElement: any) =>
    setLatestPosition({
      x: dragElement.x,
      y: dragElement.y,
    });

  useEffect(() => {
    if (latestPosition.x !== 0 || latestPosition.y !== 0) {
      localStorage.setItem("latestPosition", JSON.stringify(latestPosition));
    }
  }, [latestPosition.x, latestPosition.y]);

  return [
    position,
    setPosition,
  ] as const;
}
