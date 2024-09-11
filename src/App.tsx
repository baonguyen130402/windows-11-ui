import "./App.css";
import { MainLayout } from "./components/mainLayout";
import FileExplorerProvider from "./lib/contexts/FileExplorerContext";
import ModalProvider from "./lib/contexts/ModalContext";
import MzFirefoxProvider from "./lib/contexts/MzFirefoxContext";
import { ThemeProvider } from "./lib/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModalProvider>
        <MzFirefoxProvider>
          <FileExplorerProvider>
            <MainLayout />
          </FileExplorerProvider>
        </MzFirefoxProvider>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
