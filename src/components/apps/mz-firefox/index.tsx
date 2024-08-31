import { Input } from "../../../lib/components/ui/input";
import { Icons } from "../../../lib/icons";
import { Bookmark } from "./components/bookmark";
import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import youtube from "../../../assets/logo/youtube.png";

export function MzFirefox() {
  return (
    <article className="w-[1000px] h-[600px] bg-gray-900 fixed top-[50px] left-1/3 rounded-[0.5rem] overflow-hidden">
      <Header />
      <div className="bg-gray-700">
        <Navbar />
        <Bookmark />
      </div>
      <div className="flex flex-col items-center justify-center p-2 w-full gap-12">
        <div className="flex items-center gap-4">
          <Icons.firefox className="size-[8rem]" />
          <span className="text-4xl font-bold">Firefox</span>
        </div>
        <div className="col-span-3 border border-gray-700 flex items-center px-2 w-3/5 bg-gray-700 shadow-black shadow-lg">
          <Icons.google className="size-3 fill-white" />
          <Input
            placeholder="Search with Google or enter address"
            className="px-2 border-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center p-2 bg-[#333] rounded-[0.225rem] shadow-lg shadow-black">
              <img src={youtube} className="h-14 w-14" />
            </div>
            <span className="size-sm">Youtube</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center p-2 bg-[#333] rounded-[0.225rem] shadow-lg shadow-black">
              <img src={youtube} className="h-14 w-14" />
            </div>
            <span className="size-sm">Youtube</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center p-2 bg-[#333] rounded-[0.225rem] shadow-lg shadow-black">
              <img src={youtube} className="h-14 w-14" />
            </div>
            <span className="size-sm">Youtube</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center p-2 bg-[#333] rounded-[0.225rem] shadow-lg shadow-black">
              <img src={youtube} className="h-14 w-14" />
            </div>
            <span className="size-sm">Youtube</span>
          </div>
        </div>
      </div>
    </article>
  );
}
