import { Content } from "./components/content";
import { Header } from "./components/header";
import { Toolbar } from "./components/toolbar";


export function FileExplorer() {
  return (
    <article className="w-[1000px] h-[600px] bg-gray-900/80 backdrop-filter backdrop-blur-lg fixed top-[50px] left-1/3 rounded-[0.5rem] overflow-hidden">
      <Header />
      <Toolbar />
      <Content />
    </article>
  );
}
