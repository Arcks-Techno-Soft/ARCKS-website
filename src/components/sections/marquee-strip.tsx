const CAPABILITIES = [
  "Offline-first billing",
  "CGST and SGST on every bill",
  "KOTs by kitchen station",
  "Dine-in, takeaway and delivery",
  "Table merge, split and transfer",
  "UPI QR at the kiosk",
  "Shifts and day-end",
  "Live orders across outlets",
  "One menu for every screen",
  "Audit trail",
];

export function MarqueeStrip() {
  return (
    <section aria-label="What Imli handles" className="overflow-hidden border-y border-line bg-surface py-5">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
            {CAPABILITIES.map((item) => (
              <li key={item} className="flex items-center whitespace-nowrap text-[15px] font-medium text-muted">
                <span aria-hidden="true" className="mx-7 size-1.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
