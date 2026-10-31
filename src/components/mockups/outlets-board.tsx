const STATS = [
  { label: "Orders today", value: "495" },
  { label: "Sales today", value: "₹1,48,200" },
];

const HOURS = [22, 38, 64, 92, 74, 40, 30, 52, 86, 100, 70, 34];

const ROWS = [
  { outlet: "Indiranagar", orders: 212, online: true },
  { outlet: "Koramangala", orders: 187, online: true },
  { outlet: "HSR Layout", orders: 96, online: false },
];

/** A compact CMP dashboard. Every figure on it is example data, and it says so. */
export function OutletsBoard() {
  return (
    <figure
      aria-label="Example Imli CMP dashboard showing orders across three outlets"
      className="mx-auto w-full max-w-[520px] rounded-[22px] border border-line bg-surface p-5 shadow-lift"
    >
      <div className="flex items-center justify-between">
        <p className="font-semibold">All outlets</p>
        <p className="rounded-full bg-tint px-2.5 py-1 text-xs font-medium text-brand-deep">Today</p>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-2.5">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-paper p-3.5">
            <dt className="text-xs text-muted">{stat.label}</dt>
            <dd className="mt-1 font-display text-2xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div aria-hidden="true" className="mt-4 flex h-20 items-end gap-1.5">
        {HOURS.map((height, index) => (
          <span
            key={index}
            style={{ height: `${height}%` }}
            className={`grow rounded-t-md ${height >= 86 ? "bg-brand" : "bg-brand/25"}`}
          />
        ))}
      </div>

      <table className="mt-4 w-full text-left text-sm">
        <caption className="sr-only">Orders by outlet</caption>
        <thead className="sr-only">
          <tr>
            <th scope="col">Outlet</th>
            <th scope="col">Orders</th>
            <th scope="col">Counter</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.outlet} className="border-t border-line">
              <td className="py-2.5 font-medium">{row.outlet}</td>
              <td className="py-2.5 text-right tabular-nums text-muted">{row.orders}</td>
              <td className={`py-2.5 text-right text-xs font-semibold ${row.online ? "text-chutney" : "text-brand"}`}>
                {row.online ? "Online" : "Syncing"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="mt-1 text-xs text-muted">Example data</figcaption>
    </figure>
  );
}
