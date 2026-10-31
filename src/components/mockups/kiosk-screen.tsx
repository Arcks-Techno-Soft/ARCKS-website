import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

const CATEGORIES = ["Combos", "Tiffin", "Rice", "Grill", "Drinks"];

const ITEMS = [
  { name: "Masala dosa", price: 120, photo: PHOTOS.dosa },
  { name: "Ghee idli", price: 110, photo: PHOTOS.idli },
  { name: "Dum biryani", price: 260, photo: PHOTOS.biryani },
  { name: "Paneer tikka", price: 220, photo: PHOTOS.paneer },
  { name: "Medu vada", price: 70, photo: PHOTOS.vada },
  { name: "Mango lassi", price: 90, photo: PHOTOS.lassi },
];

/** The kiosk's dark, portrait order screen, drawn to match the real app's layout. */
export function KioskScreen() {
  return (
    <figure aria-label="Illustration of the Imli Kiosk ordering screen" className="mx-auto w-[280px]">
      <div className="rounded-[28px] bg-night p-2.5 shadow-lift ring-1 ring-white/10">
        <div className="flex h-[452px] flex-col overflow-hidden rounded-[20px] bg-[#1d1511] p-3 text-white">
          <div className="flex items-center justify-between text-xs">
            <span className="rounded-full bg-gold/15 px-2.5 py-1 font-semibold text-gold">Dine in</span>
            <span className="text-white/60">Cancel order</span>
          </div>
          <p className="mt-3 font-display text-lg font-semibold tracking-tight">What would you like?</p>
          <div className="mt-2.5 flex min-h-0 grow gap-2">
            <ul className="flex w-[58px] shrink-0 flex-col gap-1.5">
              {CATEGORIES.map((category, index) => (
                <li
                  key={category}
                  className={`rounded-xl px-1 py-2.5 text-center text-[10.5px] font-medium ${
                    index === 1 ? "bg-gold text-ink" : "bg-white/[0.07] text-white/75"
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
            <ul className="grid grow grid-cols-2 grid-rows-3 gap-1.5">
              {ITEMS.map(({ name, price, photo }) => (
                <li key={name} className="flex min-h-0 flex-col overflow-hidden rounded-xl bg-white/[0.07]">
                  <span className="relative block min-h-0 grow">
                    <Image src={photo.src} alt="" fill sizes="90px" className="object-cover" />
                  </span>
                  <span className="px-1.5 pb-1 pt-1">
                    <span className="block truncate text-[10px] font-medium">{name}</span>
                    <span className="block text-[10px] font-semibold text-gold">₹{price}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2.5 flex items-center justify-between rounded-xl bg-gold px-3.5 py-2.5 text-xs font-bold text-ink">
            <span>3 items · ₹300</span>
            <span>Review order</span>
          </div>
        </div>
      </div>
    </figure>
  );
}
