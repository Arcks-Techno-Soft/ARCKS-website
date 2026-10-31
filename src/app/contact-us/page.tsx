import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";
import { PHOTOS } from "@/lib/photos";
import {
  ADDRESS,
  DEMO_MAILTO,
  PHONE_DISPLAY,
  PHONE_HREF,
  SIGN_IN_URL,
  SUPPORT_EMAIL,
  SUPPORT_HOURS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | ARCKS Technosoft",
  description: "Book a demo of Imli, or talk to the team at ARCKS Technosoft.",
};

const CHANNELS = [
  { Icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: PHONE_HREF },
  { Icon: Mail, label: "Email", value: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
  { Icon: Clock, label: "Support hours", value: SUPPORT_HOURS },
  { Icon: MapPin, label: "Office", value: ADDRESS },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 pb-20 pt-14 sm:px-6 lg:pb-28 lg:pt-20">
      <Reveal className="mx-auto max-w-[720px] text-center">
        <h1 className="headline text-[46px] sm:text-[68px] lg:text-[80px]">
          Let&apos;s <span className="accent text-brand">talk.</span>
        </h1>
        <p className="mt-4 text-lg text-muted sm:text-xl">
          Tell us about your restaurant and how many outlets you run.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
        <div className="on-dark relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[32px] text-white">
          <Image
            src={PHOTOS.dosa.src}
            alt=""
            fill
            preload
            sizes="(min-width: 1024px) 620px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
          <div className="relative p-7 sm:p-9">
            <h2 className="headline text-[32px] sm:text-[40px]">See Imli on your menu</h2>
            <p className="mt-2 max-w-[440px] text-white/85">
              We&apos;ll walk you through billing, the kiosk and menu boards with your own items.
            </p>
            <div className="mt-5">
              <ActionLink href={DEMO_MAILTO} tone="gold">
                Email us for a demo
              </ActionLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-[32px] bg-tint p-7 sm:p-9">
          <h2 className="headline text-[32px]">Already using Imli?</h2>
          <p className="mt-2 text-ink/75">
            Sign in to Imli CMP to manage your menu, devices and staff. New restaurants can create an
            account from the same screen.
          </p>
          <div className="mt-auto pt-6">
            <ActionLink href={SIGN_IN_URL} tone="ink">
              Sign in
            </ActionLink>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <dl className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr_1fr_1.4fr]">
          {CHANNELS.map(({ Icon, label, value, href }) => (
            <div key={label} className="rounded-[24px] border border-line bg-surface p-5">
              <dt className="flex items-center gap-2 text-sm text-muted">
                <Icon aria-hidden="true" className="size-4 text-brand" />
                {label}
              </dt>
              <dd className="mt-2 break-words text-[15px] font-medium">
                {href ? (
                  <a href={href} className="hover:text-brand">
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
  );
}
