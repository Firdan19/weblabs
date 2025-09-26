"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, CONTACT_LINK } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[rgba(0,0,0,.04)] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-[22px] font-semibold tracking-wide text-[var(--navy)]">
          WEBLABS
        </Link>

        {/* NAV DESKTOP — TANPA KONTAK */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[color:var(--navy)]/80 hover:text-[var(--navy)] transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA DESKTOP — SATU-SATUNYA “Kontak Kami” */}
        <div className="hidden md:block">
          <Link
            href={CONTACT_LINK.href}
            className="rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--navy)]/90 transition"
          >
            Kontak Kami
          </Link>
        </div>

        {/* HAMBURGER MOBILE */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            aria-label="Buka menu"
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-full border border-black/10 text-[var(--navy)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* OVERLAY MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 w-screen h-dvh bg-black"
            style={{ height: "100dvh" }}
          >
            <button
              aria-label="Tutup"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <motion.nav
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 14, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="mx-auto flex h-full max-w-7xl flex-col justify-start px-6 pt-16 pb-10 overflow-y-auto"
            >
              <ul className="space-y-6">
                {[...NAV_LINKS, CONTACT_LINK].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-white text-[40px] font-semibold leading-none"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
