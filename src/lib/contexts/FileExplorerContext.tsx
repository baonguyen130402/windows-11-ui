import { createContext, useState } from "react";

interface Props {
  fileExplorerOpening: boolean;
  setFileExplorerOpening: (isOpening: boolean) => void;
  fileExplorerMinimizie: boolean;
  setFileExplorerMinimize: (isOpening: boolean) => void;
  fileExplorerMaximize: boolean;
  setFileExplorerMaximize: (isOpening: boolean) => void;
}

export const FileExplorerContext = createContext<Props>({
  fileExplorerOpening: false,
  setFileExplorerOpening: () => { },
  fileExplorerMinimizie: false,
  setFileExplorerMinimize: () => { },
  fileExplorerMaximize: false,
  setFileExplorerMaximize: () => { },
});

export default function FileExplorerProvider({ children }) {
  const [isOpening, setIsOpen] = useState(false);
  const [isMinimize, setIsMinimize] = useState(false);
  const [isMaximize, setIsMaximize] = useState(false);

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
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
}
