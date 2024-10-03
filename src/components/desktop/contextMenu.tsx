import {
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "../../lib/components/ui/context-menu";
import { Icons } from "../../lib/icons";
import { DesktopApp } from "./icon";

export function ContextContent() {
  return (
    <ContextMenuContent className="bg-slate-900 w-48 rounded-[0.5rem]">
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-4">
            <Icons.home className="size-4" />
            <span>View</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-80">
          <ContextMenuRadioGroup value="large">
            <ContextMenuRadioItem
              value="large"
              className="flex items-center gap-2"
            >
              <Icons.home className="size-5" />
              <span>Large icons</span>
              <ContextMenuShortcut className="tracking-tight">
                Ctrl+Shift+2
              </ContextMenuShortcut>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem
              value="medium"
              className="flex items-center gap-2"
            >
              <Icons.home className="size-5" />

              <span>Medium icons</span>
              <ContextMenuShortcut className="tracking-tight">
                Ctrl+Shift+3
              </ContextMenuShortcut>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem
              value="small"
              className="flex items-center gap-2"
            >
              <Icons.home className="size-5" />
              <span>Small icons</span>
              <ContextMenuShortcut className="tracking-tight">
                Ctrl+Shift+4
              </ContextMenuShortcut>
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked className="flex items-center gap-2">
            <Icons.home className="size-5" />
            <span>Show desktop icons</span>
          </ContextMenuCheckboxItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-4">
            <Icons.home className="size-4" />
            <span>Sort by</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-32">
          <ContextMenuItem>Name</ContextMenuItem>
          <ContextMenuItem>Size</ContextMenuItem>
          <ContextMenuItem>Date modified</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuItem>
        <div className="flex items-center gap-4">
          <Icons.refresh className="size-4" />
          <span>Refresh</span>
        </div>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-4">
            <Icons.plusCircle className="size-4 fill-white" />
            <span>New</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem className="flex items-center gap-2">
            <Icons.folder className="size-5" />
            <span>Folder</span>
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center gap-2">
            <Icons.textIcon className="size-5 fill-white" />
            <span>Shorcut</span>
          </ContextMenuItem>
          <ContextMenuItem className="flex items-center gap-2">
            <Icons.textIcon className="size-5 fill-white" />
            <span>Text Document</span>
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem className="flex items-center gap-2">
        <Icons.home className="size-5" />
        <span>
          Display settings
        </span>
      </ContextMenuItem>
      <ContextMenuItem className="flex items-center gap-2">
        <Icons.home className="size-5" />
        <span>Personalize</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem className="flex items-center gap-2">
        <Icons.home className="size-5" />
        <span>
          Open in terminal
        </span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem className="flex items-center gap-2">
        <Icons.home className="size-5" />
        <span>
          Show more options
        </span>
      </ContextMenuItem>
    </ContextMenuContent>
  );
}
