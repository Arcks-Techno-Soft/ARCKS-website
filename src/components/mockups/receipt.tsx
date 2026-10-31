const LINES = [
  { qty: 2, item: "Masala dosa", paise: 24000 },
  { qty: 1, item: "Ghee podi idli", paise: 11000 },
  { qty: 1, item: "Mango lassi", paise: 9000 },
];

const SUBTOTAL = LINES.reduce((sum, line) => sum + line.paise, 0);
const HALF_GST = Math.round(SUBTOTAL * 0.025);
const TOTAL = SUBTOTAL + 2 * HALF_GST;

const rupees = (paise: number) =>
  (paise / 100).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function Row({ left, right, strong }: { left: string; right: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-3 ${strong ? "text-sm font-bold" : ""}`}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

/** A printer feeding out a GST bill. The feed is CSS, so this stays a Server Component. */
export function Receipt() {
  return (
    <figure aria-label="Example of a printed Imli bill" className="mx-auto w-full max-w-[300px]">
      <div className="relative z-10 flex h-14 items-center justify-between rounded-[18px] bg-ink px-5 shadow-lift">
        <span className="text-sm font-semibold text-white/80">ImliPOS</span>
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#3ecf8e]" />
      </div>
      <div className="relative mx-5 -mt-2 drop-shadow-xl">
        <div className="animate-print-feed">
          <div className="receipt-edge space-y-2.5 bg-white px-4 pt-6 font-receipt text-[11px] leading-relaxed text-ink">
            <div className="text-center">
              <p className="font-bold">IMLI CAFE, INDIRANAGAR</p>
              <p>Bill A-1042 Table 7</p>
            </div>
            <div className="space-y-0.5 border-y border-dashed border-ink/40 py-2">
              {LINES.map((line) => (
                <Row key={line.item} left={`${line.qty} x ${line.item}`} right={rupees(line.paise)} />
              ))}
            </div>
            <div className="space-y-0.5">
              <Row left="Subtotal" right={rupees(SUBTOTAL)} />
              <Row left="CGST 2.5%" right={rupees(HALF_GST)} />
              <Row left="SGST 2.5%" right={rupees(HALF_GST)} />
            </div>
            <div className="border-t border-dashed border-ink/40 pt-2">
              <Row left="TOTAL" right={`Rs ${rupees(TOTAL)}`} strong />
              <p>Paid by UPI</p>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}
