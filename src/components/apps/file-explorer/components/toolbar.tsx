import {
  optionsArrangeInToolbar,
  optionsWithFileInToolbar,
} from "../../../../lib/data/fileExplorer";
import { Icons } from "../../../../lib/icons";

export function Toolbar() {
  return (
    <div className="relative bg-[#191919] bg-blur-lg backdrop-filter h-14 flex items-center border-t border-b border-t-gray-700 border-b-gray-700">
      <div className="flex items-center gap-2 px-4">
        <Icons.plusCircle className="size-4 fill-[#999]" />
        <span className="text-[#999] text-sm font-semibold">New</span>
        <Icons.lineAngleUp className="rotate-180 size-2 fill-[#999]" />
      </div>
      <ul className="px-4 border-r border-l border-[#999] flex items-center justify-between gap-4">
        {optionsWithFileInToolbar.map((option, key) => (
          <li
            key={key}
            className="hover:bg-[#626262] p-2 hover:rounded-[0.25rem]"
          >
            {option.icon}
          </li>
        ))}
      </ul>
      <ul className="flex items-center px-4 gap-2 border-r border-[#999]">
        {optionsArrangeInToolbar.map((option, key) => (
          <li
            key={key}
            className="flex items-center gap-2 px-2 hover:bg-[#626262] p-2 hover:rounded-[0.25rem]"
          >
            {option.icon}
            <span className="text-[#999] text-sm font-semibold">
              {option.title}
            </span>
            <Icons.lineAngleUp className="rotate-180 size-2 fill-[#999]" />
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4 px-4 hover:bg-[#626262] p-2 hover:rounded-[0.25rem] ml-4">
        <img src="/images/options/dots.png" className="size-5 fill-[#999]" />
      </div>
    </div>
  );
}
