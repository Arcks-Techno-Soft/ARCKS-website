import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import {
  LEGAL_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  SIGN_IN_URL,
  SUPPORT_EMAIL,
  SUPPORT_HOURS,
} from "@/lib/site";

const LINK = "text-muted transition-colors hover:text-brand";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr]">
        <div>
          <span className="flex items-center gap-2.5">
            <Image src="/brand/arcks-logo.png" alt="" width={480} height={365} className="h-10 w-auto" />
            <span className="font-display text-xl font-semibold tracking-tight">ARCKS Technosoft</span>
          </span>
          <p className="mt-4 max-w-[280px] text-muted">
            A software company in Bengaluru, building Imli: point of sale for restaurants.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Imli products</h2>
          <ul className="mt-4 space-y-2.5">
            {PRODUCTS.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className={LINK}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Company</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/about-us" className={LINK}>
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className={LINK}>
                Contact
              </Link>
            </li>
            <li>
              <Link href={SIGN_IN_URL} className={LINK}>
                Sign in
              </Link>
            </li>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={LINK}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/credits" className={LINK}>
                Photo credits
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">Talk to us</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className={`${LINK} break-all`}>
                {SUPPORT_EMAIL}
              </a>
            </li>
            <li>
              <a href={PHONE_HREF} className={LINK}>
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="text-muted">{SUPPORT_HOURS}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-4 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {new Date().getFullYear()} ARCKS Technosoft Private Limited. Imli is a product of
            ARCKS Technosoft.
          </p>
          <Image src="/brand/imli-logo.png" alt="Imli" width={339} height={291} className="h-10 w-auto self-start sm:self-auto" />
        </div>
      </div>
    </footer>
  );
}
