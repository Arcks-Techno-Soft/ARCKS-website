"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ActionLink } from "@/components/ui/action-link";
import { PRODUCTS } from "@/lib/products";
import { SIGN_IN_URL } from "@/lib/site";

const PAGES = [
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
] as const;

/** Opens on click or Enter, so it behaves the same on a phone, laptop and keyboard. */
function ProductsMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="products-menu"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:bg-tint ${
          pathname.startsWith("/products") ? "text-brand" : "text-ink"
        }`}
      >
        Imli products
        <ChevronDown
          aria-hidden="true"
          className={`size-4 motion-safe:transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul
          id="products-menu"
          className="absolute left-0 top-full mt-3 grid w-[560px] grid-cols-2 gap-1 rounded-[24px] border border-line bg-surface p-2 shadow-lift"
        >
          {PRODUCTS.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                onClick={() => setOpen(false)}
                className="block rounded-2xl p-4 transition-colors hover:bg-tint"
              >
                <span className="block font-semibold">{product.name}</span>
                <span className="mt-0.5 block text-sm text-muted">{product.kind}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <header className="sticky top-3 z-40 px-3 sm:top-4 sm:px-6">
      <div className="mx-auto max-w-[1120px] rounded-[28px] border border-line/80 bg-surface/85 shadow-soft backdrop-blur-xl">
        <nav aria-label="Main" className="flex h-[66px] items-center justify-between gap-4 pl-4 pr-2.5">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              aria-label="ARCKS Technosoft home"
              onClick={close}
              className="flex shrink-0 items-center gap-2.5 rounded-md"
            >
              <Image
                src="/brand/arcks-logo.png"
                alt=""
                width={480}
                height={365}
                preload
                className="h-9 w-auto"
              />
              <span className="leading-none">
                <span className="block font-display text-[19px] font-semibold tracking-tight">ARCKS</span>
                <span className="mt-0.5 block text-[11px] font-medium text-muted">Technosoft</span>
              </span>
            </Link>
            <div className="hidden items-center md:flex">
              <ProductsMenu pathname={pathname} />
              {PAGES.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  aria-current={pathname === page.href ? "page" : undefined}
                  className={`rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:bg-tint ${
                    pathname === page.href ? "text-brand" : "text-ink"
                  }`}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-1.5 md:flex">
            <Link
              href={SIGN_IN_URL}
              className="rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors hover:bg-tint"
            >
              Sign in
            </Link>
            <ActionLink href="/contact-us">Book a demo</ActionLink>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full md:hidden"
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>

        {mobileOpen && (
          <div id="mobile-menu" className="border-t border-line px-4 pb-4 md:hidden">
            <ul className="divide-y divide-line">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={close}
                    className="flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <span className="font-semibold">{product.name}</span>
                    <span className="text-sm text-muted">{product.kind}</span>
                  </Link>
                </li>
              ))}
              {PAGES.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} onClick={close} className="block py-3.5 font-semibold">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <ActionLink href={SIGN_IN_URL} tone="line">
                Sign in
              </ActionLink>
              <ActionLink href="/contact-us" onClick={close}>
                Book a demo
              </ActionLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
