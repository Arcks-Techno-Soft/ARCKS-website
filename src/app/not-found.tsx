import type { Metadata } from "next";
import { ActionLink } from "@/components/ui/action-link";

export const metadata: Metadata = {
  title: "Page not found | ARCKS Technosoft",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[720px] px-4 py-24 text-center sm:px-6 lg:py-36">
      <p className="font-receipt text-sm text-brand">BILL NOT FOUND · 404</p>
      <h1 className="headline mt-4 text-[46px] sm:text-[68px]">
        This page isn&apos;t on the <span className="accent text-brand">menu.</span>
      </h1>
      <div className="mt-8">
        <ActionLink href="/">Back to home</ActionLink>
      </div>
    </section>
  );
}
