import { ClipboardList, Flame, LayoutGrid, QrCode, ReceiptIndianRupee, Wallet } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { PHOTOS } from "@/lib/photos";

const DETAILS = [
  {
    Icon: ReceiptIndianRupee,
    title: "GST, worked out",
    body: "CGST and SGST on every bill, with gap-free bill numbers and a tax summary for the day.",
  },
  {
    Icon: Flame,
    title: "Tickets that find their station",
    body: "Each KOT prints where the dish is cooked, whether the order came from the counter or a kiosk.",
  },
  {
    Icon: LayoutGrid,
    title: "Tables that change their minds",
    body: "Transfer, merge and split tables as the floor moves, without starting the bill again.",
  },
  {
    Icon: Wallet,
    title: "Shifts that add up",
    body: "Open and close cash drawers by shift, and close the day with a printed summary.",
  },
  {
    Icon: QrCode,
    title: "UPI at the kiosk",
    body: "Guests scan and pay through Razorpay, PhonePe or Paytm, or pay at the counter instead.",
  },
  {
    Icon: ClipboardList,
    title: "A record of every change",
    body: "Voids, refunds and staff activity stay on record, with reports for each and an audit trail.",
  },
];

export function FloorDetails() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 py-20 sm:px-6 lg:py-28">
      <Reveal>
        <div className="relative h-[340px] overflow-hidden rounded-[32px] sm:h-[420px]">
          <Image
            src={PHOTOS.kitchen.src}
            alt={PHOTOS.kitchen.alt}
            fill
            sizes="(min-width: 1120px) 1120px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          <h2 className="headline absolute inset-x-6 bottom-6 max-w-[640px] text-[40px] text-white sm:inset-x-10 sm:bottom-9 sm:text-[56px]">
            Made for the <span className="accent text-gold">rush.</span>
          </h2>
        </div>
      </Reveal>

      <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {DETAILS.map(({ Icon, title, body }, index) => (
          <li key={title}>
            <Reveal delay={(index % 3) * 0.07} className="h-full">
              <div className="h-full rounded-[24px] border border-line bg-surface p-6 transition-shadow hover:shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-tint text-brand">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-1.5 text-muted">{body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
