import { Sidebar } from "./sidebar";
import { Content } from "./content";
import { Toolbar } from "./toolbar";

export function Container() {
  return (
    <div className="bg-[#191919] h-full">
      <Toolbar />
      <div className="grid grid-cols-12 w-full h-full">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
