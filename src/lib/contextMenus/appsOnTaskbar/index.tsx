import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "../../../lib/components/ui/context-menu";
import { Icons } from "../../../lib/icons";

import { RenderIf } from "../../utilities/renderIf";
import { TriggerAppsFromTaskbar } from "../../utilities/taskbar";

export function AppOnTaskbarContextMenu(
  { children, appName, isPinOn }: {
    children: any;
    appName: string;
    isPinOn: boolean;
  },
) {
  const { unpinAndPinApp } = TriggerAppsFromTaskbar();

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
            onClick={() => unpinAndPinApp(appName)}
          >
            <img src="/images/options/unpin.png" className="size-5" />
            <span>Unpin from taskbar</span>
          </ContextMenuItem>
        </RenderIf>
        <RenderIf isTrue={!isPinOn}>
          <ContextMenuItem
            className="flex items-center gap-4"
            onClick={() => unpinAndPinApp(appName)}
          >
            <img src="/images/options/pin.png" className="size-5" />
            <span>Pin on taskbar</span>
          </ContextMenuItem>
        </RenderIf>
      </ContextMenuContent>
    </ContextMenu>
  );
}
