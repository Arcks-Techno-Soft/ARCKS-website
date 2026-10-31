import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductVisual } from "@/components/sections/product-visual";
import { Reveal } from "@/components/ui/reveal";
import { PHOTOS } from "@/lib/photos";
import { PRODUCTS } from "@/lib/products";

/** Bento spans and backdrops, in the order of PRODUCTS. */
const LAYOUT: Record<string, { span: string; backdrop: string; dark?: boolean }> = {
  pos: { span: "lg:col-span-7", backdrop: "bg-tint" },
  kiosk: { span: "lg:col-span-5", backdrop: "bg-night", dark: true },
  "menu-display": { span: "lg:col-span-5", backdrop: "bg-[#f3ead9]" },
  cmp: { span: "lg:col-span-7", backdrop: "bg-[#efe7dd]" },
};

export function ProductFamily() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="mx-auto max-w-[720px] text-center">
        <h2 className="headline text-[40px] sm:text-[56px]">
          Four products. <span className="accent text-brand">One</span> menu.
        </h2>
        <p className="mt-4 text-lg text-muted">
          Use one or all of them. Whatever you change in the menu reaches every counter, kiosk and
          screen.
        </p>
      </Reveal>

      <ul className="mt-14 grid gap-4 lg:grid-cols-12">
        {PRODUCTS.map((product, index) => {
          const layout = LAYOUT[product.slug];
          return (
            <li key={product.slug} className={layout.span}>
              <Reveal delay={index % 2 === 0 ? 0 : 0.1} className="h-full">
                <Link
                  href={`/products/${product.slug}`}
                  className={`group relative flex flex-col overflow-hidden rounded-[32px] motion-safe:transition-transform motion-safe:duration-500 hover:-translate-y-1 ${
                    product.slug === "pos" || product.slug === "kiosk" ? "h-[600px]" : "h-full min-h-[600px]"
                  } ${layout.backdrop} ${
                    layout.dark ? "on-dark text-white" : ""
                  }`}
                >
                  {product.slug === "pos" && (
                    <Image
                      src={PHOTOS.thali.src}
                      alt=""
                      width={1400}
                      height={971}
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="absolute -bottom-16 -right-24 w-[520px] rounded-full opacity-90 motion-safe:transition-transform motion-safe:duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="relative p-7 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <p className={`text-sm font-medium ${layout.dark ? "text-gold" : "text-brand-deep"}`}>
                        {product.kind}
                      </p>
                      <span
                        className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                          layout.dark
                            ? "bg-white/10 group-hover:bg-gold group-hover:text-ink"
                            : "bg-surface group-hover:bg-brand group-hover:text-white"
                        }`}
                      >
                        <ArrowUpRight aria-hidden="true" className="size-5" />
                      </span>
                    </div>
                    <h3 className="headline mt-1 text-[32px]">{product.name}</h3>
                    <p className={`mt-2 max-w-[420px] ${layout.dark ? "text-white/70" : "text-muted"}`}>
                      {product.summary}
                    </p>
                  </div>
                  <div className="relative mt-auto flex justify-center px-6 pb-0">
                    <div
                      className={`w-full motion-safe:transition-transform motion-safe:duration-500 group-hover:-translate-y-2 ${
                        product.slug === "kiosk"
                          ? "-mb-[160px]"
                          : product.slug === "pos"
                            ? "-mb-10 sm:-mb-14 lg:mr-auto lg:max-w-[300px]"
                            : "mb-7"
                      }`}
                    >
                      <ProductVisual slug={product.slug} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
