import type { Metadata } from "next";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photo credits | ARCKS Technosoft",
  description: "Credits for the photographs used on this site.",
};

export default function CreditsPage() {
  return (
    <section className="mx-auto max-w-[760px] px-4 pb-24 pt-14 sm:px-6 lg:pt-20">
      <h1 className="headline text-[40px] sm:text-[56px]">Photo credits</h1>
      <p className="mt-4 text-muted">
        These photographs come from Wikimedia Commons and appear here under the licences shown. They
        have been resized and cropped.
      </p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {Object.values(PHOTOS).map((photo) => (
          <li key={photo.src} className="py-3.5">
            <a href={photo.sourceUrl} className="font-medium underline underline-offset-4 hover:text-brand">
              {photo.alt}
            </a>
            <p className="text-sm text-muted">
              {photo.author}, {photo.licence}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
