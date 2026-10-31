import { Check, ChefHat, Receipt } from "lucide-react";
import Image from "next/image";
import { PosDemo } from "@/components/mockups/pos-demo";
import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 lg:pb-24 lg:pt-20">
      {/* A warm glow behind the product, like light over a counter. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[500px] mx-auto h-[640px] max-w-[1100px] rounded-full bg-[radial-gradient(closest-side,rgb(240_179_35/0.3),rgb(189_74_26/0.12)_55%,transparent)] blur-2xl"
      />

      <div className="relative mx-auto max-w-[900px] text-center">
        <Reveal>
          <span className="eyebrow">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
            ARCKS Technosoft presents
          </span>
          <Image
            src="/brand/imli-logo.png"
            alt="Imli"
            width={339}
            height={291}
            preload
            className="mx-auto mt-4 h-[84px] w-auto"
          />
          <h1 className="headline mt-4 text-[46px] sm:text-[68px] lg:text-[84px]">
            The counter never <span className="accent text-brand">waits</span> for the internet.
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-muted sm:text-xl">
            Imli is the restaurant point of sale we&apos;re building at ARCKS Technosoft. It runs
            billing, self-order kiosks and menu boards from one menu, and keeps every bill safe on
            the counter until the connection comes back.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ActionLink href="/contact-us">Book a demo</ActionLink>
            <ActionLink href="/products/pos" tone="line">
              See ImliPOS
            </ActionLink>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="relative mx-auto mt-14 max-w-[1040px]">
        <PosDemo />

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden min-[1400px]:block">
          <p className="animate-drift absolute -left-44 top-24 flex items-center gap-2.5 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-medium shadow-soft">
            <span className="flex size-8 items-center justify-center rounded-full bg-tint text-brand">
              <ChefHat className="size-4" />
            </span>
            KOT sent to tandoor
          </p>
          <p className="animate-drift absolute -right-32 top-52 flex items-center gap-2.5 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-medium shadow-soft [animation-delay:-2s]">
            <span className="flex size-8 items-center justify-center rounded-full bg-tint text-brand">
              <Receipt className="size-4" />
            </span>
            GST worked out
          </p>
          <p className="animate-drift absolute -left-48 bottom-32 flex items-center gap-2.5 rounded-2xl border border-line bg-surface px-4 py-3 text-sm font-medium shadow-soft [animation-delay:-4s]">
            <span className="flex size-8 items-center justify-center rounded-full bg-chutney/10 text-chutney">
              <Check className="size-4" />
            </span>
            Saved on this counter
          </p>
        </div>
      </Reveal>
    </section>
  );
}
