import { atom } from "../../libraries/jotai";
import { emptyFunction } from "../../helpers";

interface SidebarDrawerContext {
  onClose: () => void
}

export const sidebarDrawerAtom = atom<SidebarDrawerContext>({ onClose: emptyFunction });
