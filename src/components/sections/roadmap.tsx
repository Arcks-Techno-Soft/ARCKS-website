import { Reveal } from "@/components/ui/reveal";
import { UPCOMING } from "@/lib/products";

export function Roadmap() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 pt-20 sm:px-6 lg:pt-28">
      <Reveal className="rounded-[32px] bg-tint p-7 sm:p-10">
        <h2 className="headline text-[32px] sm:text-[40px]">Coming next</h2>
        <p className="mt-2 text-brand-deep">Planned, and not available yet.</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {UPCOMING.map((item) => (
            <li key={item.title} className="rounded-full bg-surface px-4 py-2 text-sm">
              <span className="font-semibold">{item.title}</span>
              <span className="text-muted"> · {item.body}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
