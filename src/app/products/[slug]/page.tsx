import { ArrowUpRight, Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PosDemo } from "@/components/mockups/pos-demo";
import { CTA } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { ProductVisual } from "@/components/sections/product-visual";
import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";
import { PRODUCTS, productBySlug } from "@/lib/products";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return { title: "Product not found | ARCKS Technosoft" };
  return {
    title: `${product.name}: ${product.kind} | ARCKS Technosoft`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const others = PRODUCTS.filter((other) => other.slug !== slug);
  const isPos = slug === "pos";

  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 lg:pb-24 lg:pt-20">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[280px] mx-auto h-[560px] max-w-[1000px] rounded-full bg-[radial-gradient(closest-side,rgb(240_179_35/0.26),rgb(189_74_26/0.1)_55%,transparent)] blur-2xl"
        />
        <div
          className={`relative mx-auto max-w-[1120px] ${
            isPos ? "" : "grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]"
          }`}
        >
          <Reveal className={isPos ? "mx-auto max-w-[820px] text-center" : ""}>
            <span className="eyebrow">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />
              {product.name} by ARCKS Technosoft
            </span>
            <h1 className="headline mt-6 text-[44px] sm:text-[60px]">{product.headline}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">{product.summary}</p>
            <p className="mt-3 text-muted">Runs on {product.runsOn}.</p>
            <div className={`mt-8 flex flex-wrap gap-3 ${isPos ? "justify-center" : ""}`}>
              <ActionLink href="/contact-us">Book a demo</ActionLink>
            </div>
          </Reveal>
          <Reveal delay={0.12} className={isPos ? "mx-auto mt-14 max-w-[1040px]" : ""}>
            {isPos ? <PosDemo /> : <ProductVisual slug={slug} />}
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <h2 className="headline text-[40px] sm:text-[56px]">
              What it <span className="accent text-brand">does.</span>
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {product.features.map((feature, index) => (
              <li key={feature.title}>
                <Reveal delay={(index % 2) * 0.07} className="h-full">
                  <div className="flex h-full gap-4 rounded-[24px] border border-line bg-paper p-6">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-tint text-brand">
                      <Check aria-hidden="true" className="size-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight">{feature.title}</h3>
                      <p className="mt-1.5 text-muted">{feature.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={product.questions} />

      <section className="mx-auto max-w-[1120px] px-4 pb-20 sm:px-6 lg:pb-28">
        <Reveal>
          <h2 className="headline text-[32px] sm:text-[40px]">Works with</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/products/${other.slug}`}
                  className="group flex h-full items-start justify-between gap-3 rounded-[24px] border border-line bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span>
                    <span className="block font-display text-xl font-semibold tracking-tight">{other.name}</span>
                    <span className="text-muted">{other.kind}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-brand" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
