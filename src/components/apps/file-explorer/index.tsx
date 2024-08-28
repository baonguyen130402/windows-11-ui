import { Header } from "./components/header";
import { Navbar } from "./components/navbar";

export function FileExplorer() {
  return (
    <article className="w-[1000px] h-[600px] bg-gray-800/80 backdrop-filter backdrop-blur-lg fixed top-[50px] left-1/3 rounded-[0.5rem]">
      <Header />
      <Navbar />
    </article>
  );
}
