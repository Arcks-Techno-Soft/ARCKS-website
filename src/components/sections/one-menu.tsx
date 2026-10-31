"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { PHOTOS } from "@/lib/photos";

const STEP = 10;
const MIN_PRICE = 80;
const MAX_PRICE = 200;

function Surface({
  name,
  place,
  soldOutText,
  price,
  soldOut,
}: {
  name: string;
  place: string;
  soldOutText: string;
  price: number;
  soldOut: boolean;
}) {
  return (
    <li className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-5 py-4 shadow-[0_1px_2px_rgb(31_20_16/0.04)]">
      <span>
        <span className="block font-semibold">{name}</span>
        <span className="block text-sm text-muted">{place}</span>
      </span>
      <span
        key={`${price}-${soldOut}`}
        className={`animate-value-flash shrink-0 rounded-lg px-2 py-1 text-[15px] font-semibold tabular-nums ${
          soldOut ? "text-brand" : "text-chutney"
        }`}
      >
        {soldOut ? soldOutText : `₹${price}`}
      </span>
    </li>
  );
}

export function OneMenu() {
  const [price, setPrice] = useState(120);
  const [soldOut, setSoldOut] = useState(false);

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-[1120px] px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="max-w-[640px]">
          <h2 className="headline text-[40px] sm:text-[56px]">
            Change a price <span className="accent text-brand">once.</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            The menu lives in Imli CMP. Edit an item there, publish it, and the bill, the kiosk and
            the board above the counter all show the same thing, in every outlet.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <figure aria-label="Demo: a menu change reaching every screen" className="mt-12 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
            <div className="overflow-hidden rounded-[28px] bg-paper ring-1 ring-line">
              <div className="relative h-[220px]">
                <Image
                  src={PHOTOS.dosa.src}
                  alt={PHOTOS.dosa.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className={`object-cover motion-safe:transition-all motion-safe:duration-500 ${soldOut ? "grayscale" : ""}`}
                />
                <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-[13px] font-medium backdrop-blur">
                  In Imli CMP
                </span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="font-display text-2xl font-semibold tracking-tight">Masala dosa</p>
                  <div className="flex items-center gap-2 rounded-full bg-surface p-1 ring-1 ring-line">
                    <button
                      type="button"
                      aria-label="Lower price by ₹10"
                      disabled={price <= MIN_PRICE}
                      onClick={() => setPrice((p) => p - STEP)}
                      className="inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-tint disabled:opacity-40"
                    >
                      <Minus aria-hidden="true" className="size-4" />
                    </button>
                    <span className="w-14 text-center text-xl font-semibold tabular-nums">₹{price}</span>
                    <button
                      type="button"
                      aria-label="Raise price by ₹10"
                      disabled={price >= MAX_PRICE}
                      onClick={() => setPrice((p) => p + STEP)}
                      className="inline-flex size-11 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-deep disabled:opacity-40"
                    >
                      <Plus aria-hidden="true" className="size-4" />
                    </button>
                  </div>
                </div>
                <label className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-3 font-medium">
                  <input
                    type="checkbox"
                    checked={soldOut}
                    onChange={(event) => setSoldOut(event.target.checked)}
                    className="size-5 accent-[#bd4a1a]"
                  />
                  Mark as sold out
                </label>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-[28px] bg-tint p-4 sm:p-6">
              <p className="px-1 text-sm font-medium text-brand-deep">Every screen follows</p>
              <ul aria-live="polite" className="mt-3 space-y-3">
                <Surface name="ImliPOS" place="At the counter" soldOutText="Marked sold out" price={price} soldOut={soldOut} />
                <Surface name="Imli Kiosk" place="In the lobby" soldOutText="Can't be ordered" price={price} soldOut={soldOut} />
                <Surface name="Imli Menu Display" place="Above the counter" soldOutText="Hidden" price={price} soldOut={soldOut} />
              </ul>
              <figcaption className="mt-3 px-1 text-sm text-brand-deep/80">
                Try it: change the price, or mark it sold out.
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
