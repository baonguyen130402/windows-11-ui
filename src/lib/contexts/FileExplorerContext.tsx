import { createContext, useEffect, useState } from "react";
import { getStateFromLocalStorage } from "../helper";

interface Props {
  fileExplorerOpening: boolean;
  setFileExplorerOpening: (isOpening: boolean) => void;
  fileExplorerMinimizie: boolean;
  setFileExplorerMinimize: (isMinimize: boolean) => void;
  fileExplorerMaximize: boolean;
  setFileExplorerMaximize: (isMaximize: boolean) => void;
  fileExplorerPinOnTaskbar: boolean;
  setFileExplorerPinOnTaskbar: (isPinOn: boolean) => void;
}

export const FileExplorerContext = createContext<Props>({
  fileExplorerOpening: false,
  setFileExplorerOpening: () => { },
  fileExplorerMinimizie: false,
  setFileExplorerMinimize: () => { },
  fileExplorerMaximize: false,
  setFileExplorerMaximize: () => { },
  fileExplorerPinOnTaskbar: true,
  setFileExplorerPinOnTaskbar: () => { },
});

export default function FileExplorerProvider({ children }: { children: any }) {
  const fileExplorer = getStateFromLocalStorage("fileExplorer");

  const [isOpening, setIsOpen] = useState(
    fileExplorer.isOpening !== undefined ? fileExplorer.isOpening : false,
  );
  const [isMinimize, setIsMinimize] = useState(
    fileExplorer.isMinimize !== undefined ? fileExplorer.isMinimize : false,
  );
  const [isMaximize, setIsMaximize] = useState(
    fileExplorer.isMaximize !== undefined ? fileExplorer.isMaximize : false,
  );
  const [isPinOn, setIsPinOn] = useState(
    fileExplorer.isPinOn !== undefined ? fileExplorer.isPinOn : true,
  );

  useEffect(() => {
    localStorage.setItem(
      "fileExplorer",
      JSON.stringify({
        isOpening: isOpening,
        isMaximize: isMaximize,
        isMinimize: isMinimize,
        isPinOn: isPinOn,
      }),
    );
  }, [isOpening, isMinimize, isMaximize, isPinOn]);

  return (
    <FileExplorerContext.Provider
      value={{
        fileExplorerOpening: isOpening,
        setFileExplorerOpening: (value) => {
          setIsOpen(value);
        },
        fileExplorerMinimizie: isMinimize,
        setFileExplorerMinimize: (value) => {
          setIsMinimize(value);
        },
        fileExplorerMaximize: isMaximize,
        setFileExplorerMaximize: (value) => {
          setIsMaximize(value);
        },
        fileExplorerPinOnTaskbar: isPinOn,
        setFileExplorerPinOnTaskbar: (value) => {
          setIsPinOn(value);
        },
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
}
