import { useEffect, useState } from "react";

export function usePosition(app: string) {
  const [latestPosition, setLatestPosition] = useState({
    x: 0,
    y: 0,
  });

  const getPositionFromLocalStorage = () => {
    try {
      return JSON.parse(localStorage.getItem(`latestPosition${app}`) || "");
    } catch (error) {
      return latestPosition;
    }
  };

  const position = getPositionFromLocalStorage();
  const setPosition = (dragElement: any) => {
    const { x: coordX, y: coordY } = dragElement;

    if (coordX >= 0 && coordY >= 0) {
      return setLatestPosition({
        x: coordX,
        y: coordY,
      });
    } else return setLatestPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (latestPosition.x !== 0 || latestPosition.y !== 0) {
      localStorage.setItem(
        `latestPosition${app}`,
        JSON.stringify(latestPosition),
      );
    }
  }, [latestPosition.x, latestPosition.y]);

  return [
    position,
    setPosition,
  ] as const;
}
