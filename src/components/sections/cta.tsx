import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { Reveal } from "@/components/ui/reveal";
import { PHOTOS } from "@/lib/photos";
import { SIGN_IN_URL } from "@/lib/site";

export function CTA() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:pb-28">
      <Reveal className="mx-auto max-w-[1120px]">
        <div className="on-dark relative grid overflow-hidden rounded-[36px] bg-gradient-to-br from-brand to-brand-deep text-white lg:grid-cols-[1.2fr_1fr]">
          <div className="relative z-10 p-8 sm:p-12 lg:p-14">
            <h2 className="headline text-[40px] sm:text-[56px]">
              See Imli on <span className="accent text-gold">your</span> menu.
            </h2>
            <p className="mt-4 max-w-[480px] text-lg text-white/85">
              Tell us about your restaurant and we&apos;ll walk you through billing, the kiosk and
              menu boards with your own items.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href="/contact-us" tone="gold">
                Book a demo
              </ActionLink>
              <ActionLink href={SIGN_IN_URL} tone="line-dark">
                Sign in
              </ActionLink>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <Image
              src={PHOTOS.thali.src}
              alt=""
              width={1400}
              height={971}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="absolute left-1/2 top-0 w-[440px] max-w-none -translate-x-1/2 rounded-full shadow-lift lg:left-auto lg:-right-24 lg:top-1/2 lg:w-[560px] lg:translate-x-0 lg:-translate-y-1/2"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
