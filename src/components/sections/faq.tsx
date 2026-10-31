import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { Question } from "@/lib/products";

export interface FaqProps {
  items: readonly Question[];
}

export function Faq({ items }: FaqProps) {
  return (
    <section className="mx-auto grid max-w-[1120px] gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_2fr] lg:py-28">
      <Reveal>
        <h2 className="headline text-[40px] sm:text-[48px]">
          Good <span className="accent text-brand">questions.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.08} className="space-y-2.5">
        {items.map((item) => (
          <details key={item.q} className="group rounded-[20px] border border-line bg-surface px-5 transition-shadow open:shadow-soft">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-[17px] font-semibold">
              {item.q}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-tint text-brand motion-safe:transition-transform group-open:rotate-45">
                <Plus aria-hidden="true" className="size-4" />
              </span>
            </summary>
            <p className="max-w-[640px] pb-5 text-muted">{item.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
