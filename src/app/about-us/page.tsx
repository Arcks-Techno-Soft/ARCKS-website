import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/ui/reveal";
import { PHOTOS } from "@/lib/photos";
import { ADDRESS, PHONE_DISPLAY, PHONE_HREF, SUPPORT_EMAIL, SUPPORT_HOURS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | ARCKS Technosoft",
  description:
    "ARCKS Technosoft Private Limited is a software company in Bengaluru, building Imli, point of sale software for restaurants.",
};

const BELIEFS = [
  {
    title: "The counter comes first",
    body: "A bill should never wait for the network. ImliPOS saves its work on the counter and syncs when it can.",
  },
  {
    title: "One menu, everywhere",
    body: "Restaurants should edit a price once. The POS, the kiosk and the menu boards all read the same menu.",
  },
  {
    title: "Money is exact",
    body: "Totals and taxes are worked out the same way on every device, down to the paisa.",
  },
];

const DETAILS: readonly { label: string; value: string; href?: string }[] = [
  { label: "Business name", value: "ARCKS Technosoft Private Limited" },
  { label: "Founder & CEO", value: "Amith B V" },
  { label: "Line of business", value: "Restaurant software, sold as subscription licences" },
  { label: "Registered address", value: ADDRESS },
  { label: "Support email", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
  { label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
  { label: "Support hours", value: SUPPORT_HOURS },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1120px] px-4 pb-16 pt-14 sm:px-6 lg:pt-20">
        <Reveal className="mx-auto max-w-[860px] text-center">
          <span className="eyebrow">ARCKS Technosoft Private Limited</span>
          <h1 className="headline mt-6 text-[46px] sm:text-[68px] lg:text-[80px]">
            We build Imli for the restaurant <span className="accent text-brand">counter.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative mt-12 h-[320px] overflow-hidden rounded-[32px] sm:h-[460px]">
            <Image
              src={PHOTOS.kitchen.src}
              alt={PHOTOS.kitchen.alt}
              fill
              preload
              sizes="(min-width: 1120px) 1120px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <p className="text-xl leading-relaxed text-muted">
            We are ARCKS Technosoft, and Imli is what we build: the software a restaurant runs on
            during service, from the billing counter and self-order kiosk to the menu boards and the
            cloud HQ that ties them together.
          </p>
          <p className="text-xl leading-relaxed text-muted">
            Imli is the Hindi word for tamarind: sharp, everyday, and found in almost every Indian
            kitchen. That is the kind of tool we want to make.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-[1120px] px-4 py-20 sm:px-6 lg:py-28">
          <Reveal>
            <h2 className="headline text-[40px] sm:text-[56px]">
              What we hold <span className="accent text-brand">to.</span>
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {BELIEFS.map((belief, index) => (
              <li key={belief.title}>
                <Reveal delay={index * 0.08} className="h-full">
                  <div className="h-full rounded-[24px] bg-tint p-6">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{belief.title}</h3>
                    <p className="mt-2 text-ink/75">{belief.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1120px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_2fr] lg:py-28">
        <Reveal>
          <h2 className="headline text-[40px] sm:text-[48px]">The business</h2>
          <p className="mt-4 max-w-[340px] text-lg text-muted">
            We sell software, not goods. Every Imli product is a yearly licence, bought in Imli CMP
            and delivered online.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <dl className="divide-y divide-line rounded-[24px] border border-line bg-surface px-6">
            {DETAILS.map(({ label, value, href }) => (
              <div key={label} className="grid gap-1 py-4 sm:grid-cols-[170px_1fr] sm:gap-6">
                <dt className="text-muted">{label}</dt>
                <dd className="break-words font-medium">
                  {href ? (
                    <a href={href} className="underline underline-offset-4 hover:text-brand">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
