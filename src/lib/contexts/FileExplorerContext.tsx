import { createContext, useState } from "react";

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
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

  const [isPinOn, setIsPinOn] = useState(true);

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
