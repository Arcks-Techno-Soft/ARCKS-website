"use client";

import { Check, Minus, Plus, Printer, Wifi, WifiOff } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PHOTOS } from "@/lib/photos";

const ITEMS = [
  { id: "dosa", name: "Masala dosa", paise: 12000, photo: PHOTOS.dosa },
  { id: "idli", name: "Ghee podi idli", paise: 11000, photo: PHOTOS.idli },
  { id: "vada", name: "Medu vada", paise: 7000, photo: PHOTOS.vada },
  { id: "biryani", name: "Dum biryani", paise: 26000, photo: PHOTOS.biryani },
  { id: "paneer", name: "Paneer tikka", paise: 22000, photo: PHOTOS.paneer },
  { id: "lassi", name: "Mango lassi", paise: 9000, photo: PHOTOS.lassi },
] as const;

const ORDER_TYPES = ["Dine-in", "Takeaway", "Delivery"];

type ItemId = (typeof ITEMS)[number]["id"];
type Cart = Partial<Record<ItemId, number>>;
interface Bill {
  no: number;
  totalPaise: number;
  synced: boolean;
}

const FIRST_BILL = 1042;
const SYNC_DELAY_MS = 900;

const rupees = (paise: number) =>
  (paise / 100).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function totals(cart: Cart) {
  const subtotal = ITEMS.reduce((sum, item) => sum + item.paise * (cart[item.id] ?? 0), 0);
  // 5% GST, split evenly into CGST and SGST.
  const halfGst = Math.round(subtotal * 0.025);
  return { subtotal, halfGst, total: subtotal + 2 * halfGst };
}

/** Billing as a visitor can feel it: pull the internet, print, plug it back in. */
export function PosDemo() {
  const [online, setOnline] = useState(false);
  const [cart, setCart] = useState<Cart>({ dosa: 2, lassi: 1 });
  const [bills, setBills] = useState<Bill[]>([]);

  const pending = bills.filter((bill) => !bill.synced).length;
  const lines = ITEMS.filter((item) => (cart[item.id] ?? 0) > 0);
  const { subtotal, halfGst, total } = totals(cart);
  const lastBill = bills.at(-1);
  const allSynced = Boolean(lastBill) && pending === 0;

  useEffect(() => {
    if (!online || pending === 0) return;
    const timer = window.setTimeout(
      () => setBills((all) => all.map((bill) => ({ ...bill, synced: true }))),
      SYNC_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [online, pending]);

  const change = (id: ItemId, by: number) =>
    setCart((current) => ({ ...current, [id]: Math.max(0, (current[id] ?? 0) + by) }));

  const printBill = () => {
    setBills((all) => [...all, { no: FIRST_BILL + all.length, totalPaise: total, synced: false }]);
    setCart({});
  };

  const noun = (count: number) => `${count} ${count === 1 ? "bill" : "bills"}`;
  const status = !lastBill
    ? online
      ? "Online. Print a bill."
      : "No internet, and billing still works. Print this bill."
    : pending > 0 && !online
      ? `${noun(pending)} saved on this counter. Turn the internet back on.`
      : pending > 0
        ? `Syncing ${noun(pending)} to Imli CMP…`
        : `${noun(bills.length)} synced to Imli CMP.`;

  return (
    <figure aria-label="Interactive ImliPOS demo with sample items">
      <div className="overflow-hidden rounded-[22px] border border-line bg-surface shadow-lift">
        <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-3">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-line" />
              <span className="size-2.5 rounded-full bg-line" />
              <span className="size-2.5 rounded-full bg-line" />
            </span>
            <span className="font-semibold">ImliPOS</span>
            <ul aria-hidden="true" className="ml-2 hidden gap-1 text-[13px] font-medium md:flex">
              {ORDER_TYPES.map((type, index) => (
                <li
                  key={type}
                  className={`rounded-full px-3 py-1 ${index === 0 ? "bg-tint text-brand-deep" : "text-muted"}`}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={online}
            aria-label="Internet connection"
            onClick={() => setOnline((v) => !v)}
            className={`inline-flex min-h-9 items-center gap-2 rounded-full py-1 pl-3 pr-1.5 text-[13px] font-semibold transition-colors ${
              online ? "bg-chutney text-white" : "bg-ink text-white"
            }`}
          >
            {online ? (
              <Wifi aria-hidden="true" className="size-4" />
            ) : (
              <WifiOff aria-hidden="true" className="size-4 text-gold" />
            )}
            {online ? "Internet on" : "Internet off"}
            <span
              aria-hidden="true"
              className={`flex h-5 w-9 rounded-full bg-white/20 p-0.5 ${online ? "justify-end" : "justify-start"}`}
            >
              <span className="size-4 rounded-full bg-white" />
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-2 content-start gap-2.5 bg-paper p-3 sm:grid-cols-3 sm:p-4">
            {ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => change(item.id, 1)}
                className="group overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-[0_1px_2px_rgb(31_20_16/0.04)] transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-soft active:scale-[0.98]"
              >
                <span className="relative block aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.photo.src}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 190px, 45vw"
                    className="object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="block p-2.5">
                  <span className="block truncate text-[13px] font-semibold">{item.name}</span>
                  <span className="text-[13px] text-muted">₹{item.paise / 100}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="flex min-h-[360px] flex-col border-t border-line p-4 md:border-l md:border-t-0">
            <p className="font-semibold">
              Bill A-{FIRST_BILL + bills.length}
              <span className="font-normal text-muted"> · Table 7</span>
            </p>
            <ul className="mt-2 grow divide-y divide-line">
              {lines.length === 0 && (
                <li className="py-3 text-sm text-muted">Tap an item to start the next bill.</li>
              )}
              {lines.map((item) => (
                <li key={item.id} className="flex items-center gap-2 py-2 text-sm">
                  <span className="grow font-medium">{item.name}</span>
                  <button
                    type="button"
                    aria-label={`Remove one ${item.name}`}
                    onClick={() => change(item.id, -1)}
                    className="inline-flex size-7 items-center justify-center rounded-full bg-paper ring-1 ring-line transition-colors hover:bg-tint"
                  >
                    <Minus aria-hidden="true" className="size-3.5" />
                  </button>
                  <span className="w-4 text-center tabular-nums">{cart[item.id]}</span>
                  <button
                    type="button"
                    aria-label={`Add one ${item.name}`}
                    onClick={() => change(item.id, 1)}
                    className="inline-flex size-7 items-center justify-center rounded-full bg-paper ring-1 ring-line transition-colors hover:bg-tint"
                  >
                    <Plus aria-hidden="true" className="size-3.5" />
                  </button>
                </li>
              ))}
            </ul>
            <dl className="space-y-1 border-t border-dashed border-ink/20 pt-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Subtotal</dt>
                <dd className="tabular-nums">{rupees(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">CGST + SGST (5%)</dt>
                <dd className="tabular-nums">{rupees(2 * halfGst)}</dd>
              </div>
              <div className="flex justify-between pt-1 text-lg font-semibold">
                <dt>Total</dt>
                <dd className="tabular-nums">₹{rupees(total)}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={printBill}
              disabled={lines.length === 0}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand font-semibold text-white transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:bg-line disabled:text-muted"
            >
              <Printer aria-hidden="true" className="size-4" /> Print bill
            </button>
          </div>
        </div>

        <p
          role="status"
          className={`flex min-h-11 items-center gap-2 px-4 py-2.5 text-sm font-medium transition-colors ${
            allSynced ? "bg-chutney text-white" : "bg-ink text-white"
          }`}
        >
          {allSynced ? (
            <Check aria-hidden="true" className="size-4 shrink-0" />
          ) : (
            <WifiOff aria-hidden="true" className="size-4 shrink-0 text-gold" />
          )}
          {status}
        </p>
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted">
        This is a live demo. Print a bill, then flip the internet back on.
      </figcaption>
    </figure>
  );
}
