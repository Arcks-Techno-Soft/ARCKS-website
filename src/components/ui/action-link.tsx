import Link from "next/link";
import type { ReactNode } from "react";

export interface ActionLinkProps {
  href: string;
  tone?: "brand" | "ink" | "line" | "gold" | "line-dark";
  onClick?: () => void;
  children: ReactNode;
}

const TONES = {
  brand: "bg-brand text-white shadow-[0_10px_24px_-10px_rgb(189_74_26/0.7)] hover:bg-brand-deep",
  ink: "bg-ink text-white hover:bg-brand-deep",
  line: "border border-ink/15 bg-surface text-ink hover:border-ink/40",
  gold: "bg-gold text-ink hover:bg-white",
  "line-dark": "border border-white/30 text-white hover:border-white hover:bg-white/10",
} as const;

/** The label rolls up on hover: the same small touch the site has always had. */
export function ActionLink({ href, tone = "brand", onClick, children }: ActionLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex h-[50px] items-center justify-center overflow-hidden rounded-full px-6 text-[15px] font-medium transition-colors duration-200 active:scale-[0.98] ${TONES[tone]}`}
    >
      <span className="block h-[22px] overflow-hidden leading-[22px]">
        <span className="block motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out group-hover:motion-safe:-translate-y-1/2">
          <span className="block">{children}</span>
          <span aria-hidden="true" className="block">
            {children}
          </span>
        </span>
      </span>
    </Link>
  );
}
