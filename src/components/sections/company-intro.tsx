import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

export function CompanyIntro() {
  return (
    <section className="mx-auto max-w-[1120px] px-4 pt-20 sm:px-6 lg:pt-28">
      <Reveal className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col rounded-[32px] border border-line bg-surface p-7 sm:p-10">
          <Image src="/brand/arcks-logo.png" alt="" width={480} height={365} className="h-11 w-auto self-start" />
          <h2 className="headline mt-6 text-[34px] sm:text-[44px]">
            We&apos;re ARCKS Technosoft. We&apos;re building <span className="accent text-brand">Imli.</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-lg text-muted">
            ARCKS Technosoft Private Limited is a software company in Bengaluru. Imli is our product:
            point of sale software that runs a restaurant&apos;s counter, kiosks and menu boards.
          </p>
          <Link
            href="/about-us"
            className="group mt-6 inline-flex items-center gap-1.5 self-start font-medium text-brand"
          >
            More about the company
            <ArrowRight
              aria-hidden="true"
              className="size-4 motion-safe:transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="flex min-h-[240px] flex-col items-center justify-center rounded-[32px] bg-tint p-8 text-center">
          <p className="text-sm font-medium text-brand-deep">Our product</p>
          <Image src="/brand/imli-logo.png" alt="Imli" width={339} height={291} className="mt-3 h-[132px] w-auto" />
          <p className="mt-3 text-ink/75">Point of sale for restaurants</p>
        </div>
      </Reveal>
    </section>
  );
}
