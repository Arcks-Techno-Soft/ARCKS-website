import { KioskScreen } from "@/components/mockups/kiosk-screen";
import { MenuBoard } from "@/components/mockups/menu-board";
import { OutletsBoard } from "@/components/mockups/outlets-board";
import { Receipt } from "@/components/mockups/receipt";

export function ProductVisual({ slug }: { slug: string }) {
  if (slug === "kiosk") return <KioskScreen />;
  if (slug === "menu-display") return <MenuBoard />;
  if (slug === "cmp") return <OutletsBoard />;
  return <Receipt />;
}
