import { ContextMenu, ContextMenuTrigger } from "@radix-ui/react-context-menu";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
} from "../../../lib/components/ui/context-menu";
import { Icons } from "../../../lib/icons";
import { useContext } from "react";
import { VSCodeContext } from "../../contexts/VsCodeContext";
import { RenderIf } from "../../utilities/renderIf";

export function AppOnTaskbarContextMenu(
  { children, isPinOn }: { children: any; isPinOn: boolean },
) {
  const { vsCodeIsPinOnTaskbar, setVSCodeIsPinOnTaskbar } = useContext(
    VSCodeContext,
  );

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="bg-slate-900 w-[230px] rounded-[0.5rem]">
        <ContextMenuItem className="flex items-center gap-4">
          <Icons.refresh className="size-4 fill-transparent" />
          <span>New Window</span>
        </ContextMenuItem>
        <ContextMenuItem className="gap-4">
          <Icons.refresh className="size-4 fill-transparent" />
          <span>New Inprivate window</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <RenderIf isTrue={isPinOn}>
          <ContextMenuItem
            className="flex items-center gap-4"
            onClick={() => setVSCodeIsPinOnTaskbar(false)}
          >
            <img src="/images/options/unpin.png" className="size-5" />
            <span>Unpin from taskbar</span>
          </ContextMenuItem>
        </RenderIf>
        <RenderIf isTrue={!isPinOn}>
          <ContextMenuItem
            className="flex items-center gap-4"
            onClick={() => setVSCodeIsPinOnTaskbar(true)}
          >
            <img src="/images/options/pin.png" className="size-5" />
            <span>Pin on taskbar</span>
          </ContextMenuItem>
        </RenderIf>
      </ContextMenuContent>
    </ContextMenu>
  );
}
