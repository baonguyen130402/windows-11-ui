import "./App.css";
import { MainLayout } from "./components/mainLayout";
import BrightnessProvider from "./lib/contexts/BrightnessContext";
import FileExplorerProvider from "./lib/contexts/FileExplorerContext";
import MsEdgeProvider from "./lib/contexts/MsEdgeContext";
import MzFirefoxProvider from "./lib/contexts/MzFirefoxContext";
import VSCodeProvider from "./lib/contexts/VsCodeContext";
import { ThemeProvider } from "./lib/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <VSCodeProvider>
        <MsEdgeProvider>
          <MzFirefoxProvider>
            <FileExplorerProvider>
              <BrightnessProvider>
                <MainLayout />
              </BrightnessProvider>
            </FileExplorerProvider>
          </MzFirefoxProvider>
        </MsEdgeProvider>
      </VSCodeProvider>
    </ThemeProvider>
  );
}

export default App;
