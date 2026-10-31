import Image from "next/image";
import { PHOTOS } from "@/lib/photos";

const ITEMS = [
  ["Masala dosa", 120],
  ["Ghee podi idli", 110],
  ["Medu vada", 70],
  ["Dum biryani", 260],
  ["Paneer tikka", 220],
  ["Mango lassi", 90],
] as const;

/** A board as it hangs above a counter, with a hero dish beside the list. */
export function MenuBoard() {
  return (
    <figure aria-label="Illustration of a digital menu board" className="mx-auto w-full max-w-[520px]">
      <div className="rounded-2xl bg-night p-2 shadow-lift ring-1 ring-black/10">
        <div className="grid aspect-video grid-cols-[1fr_1.1fr] overflow-hidden rounded-[10px] bg-[#1d1511] text-white">
          <div className="relative">
            <Image
              src={PHOTOS.biryani.src}
              alt=""
              fill
              sizes="(min-width: 640px) 250px, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <p className="absolute bottom-3 left-3 font-accent text-2xl italic text-gold sm:text-3xl">
              Today&apos;s special
            </p>
          </div>
          <div className="flex flex-col justify-center px-4 py-3 sm:px-5">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-gold">Menu</p>
            <ul className="mt-1.5 space-y-0.5 sm:mt-2.5 sm:space-y-1.5">
              {ITEMS.map(([name, price]) => (
                <li key={name} className="flex justify-between gap-2 text-[11px] sm:text-[13px]">
                  <span>{name}</span>
                  <span className="tabular-nums text-gold">₹{price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </figure>
  );
}
