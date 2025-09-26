import Link from "next/link";
import { ReactNode } from "react";

type CTAProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};
export function CtaButton({ href, variant="primary", children, className }: CTAProps) {
  const base =
    variant === "primary"
      ? "inline-flex h-11 items-center justify-center rounded-xl px-5 font-medium bg-[var(--color-gold)] text-[var(--color-navy)] shadow-[0_8px_24px_rgba(245,183,0,0.35)] transition hover:-translate-y-px"
      : "inline-flex h-11 items-center justify-center rounded-xl px-5 font-medium border border-black/10 text-[var(--color-navy)] transition hover:bg-black/5";
  return <Link href={href} className={`${base} ${className ?? ""}`}>{children}</Link>;
}
