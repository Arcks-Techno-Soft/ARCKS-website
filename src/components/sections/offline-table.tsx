import { Reveal } from "@/components/ui/reveal";

const ROWS = [
  {
    product: "ImliPOS",
    verdict: "Keeps billing",
    good: true,
    during: "Bills, KOTs and payments are saved on the counter PC.",
    after: "Everything syncs on its own.",
  },
  {
    product: "Imli Menu Display",
    verdict: "Keeps showing",
    good: true,
    during: "The last board stays on screen, even after a restart.",
    after: "Catches up with the latest menu.",
  },
  {
    product: "Imli Kiosk",
    verdict: "Pauses ordering",
    good: false,
    during: "The menu stays up through a short outage, but new orders need a connection. Guests are asked to order at the counter.",
    after: "Ordering picks up again.",
  },
  {
    product: "Imli CMP",
    verdict: "Needs internet",
    good: false,
    during: "It lives in the cloud, so it needs the internet on your side. Your counters carry on without it.",
    after: "Counter sales appear as each one syncs.",
  },
];

/** Says what stops as well as what carries on: owners ask, and deserve a straight answer. */
export function OfflineTable() {
  return (
    <section className="px-3 py-3 sm:px-4">
      <div className="on-dark relative overflow-hidden rounded-[36px] bg-night text-white">
        <div
          aria-hidden="true"
          className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(240_179_35/0.22),transparent)]"
        />
        <div className="relative mx-auto max-w-[1120px] px-4 py-20 sm:px-6 lg:py-28">
          <Reveal className="max-w-[640px]">
            <h2 className="headline text-[40px] sm:text-[56px]">
              When the internet <span className="accent text-gold">drops.</span>
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Exactly what each part of Imli does during an outage, with nothing dressed up.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-3 md:grid-cols-2">
            {ROWS.map((row, index) => (
              <li key={row.product}>
                <Reveal delay={index * 0.06} className="h-full">
                  <div className="h-full rounded-[24px] bg-white/[0.06] p-6 ring-1 ring-white/10">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold tracking-tight">{row.product}</h3>
                      <span
                        className={`inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-1 text-[13px] font-medium ${
                          row.good ? "bg-[#3ecf8e]/15 text-[#7be3b4]" : "bg-gold/15 text-gold"
                        }`}
                      >
                        <span aria-hidden="true" className={`size-1.5 rounded-full ${row.good ? "bg-[#3ecf8e]" : "bg-gold"}`} />
                        {row.verdict}
                      </span>
                    </div>
                    <p className="mt-3 text-white/70">{row.during}</p>
                    <p className="mt-3 border-t border-white/10 pt-3 text-sm text-white/70">
                      <span className="font-medium text-white">When it&apos;s back: </span>
                      {row.after}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
