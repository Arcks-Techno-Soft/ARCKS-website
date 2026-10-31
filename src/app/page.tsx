import { CompanyIntro } from "@/components/sections/company-intro";
import { CTA } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { FloorDetails } from "@/components/sections/floor-details";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { OfflineTable } from "@/components/sections/offline-table";
import { OneMenu } from "@/components/sections/one-menu";
import { ProductFamily } from "@/components/sections/product-family";
import { Roadmap } from "@/components/sections/roadmap";
import { SetupSteps } from "@/components/sections/setup-steps";
import { HOME_QUESTIONS } from "@/lib/products";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <CompanyIntro />
      <ProductFamily />
      <OneMenu />
      <OfflineTable />
      <FloorDetails />
      <SetupSteps />
      <Roadmap />
      <Faq items={HOME_QUESTIONS} />
      <CTA />
    </>
  );
}
