"use client";

import Link from "next/link";
import Container from "../common/container";
import { motion } from "framer-motion";
import { easeOut } from "../../lib/motion";

export default function CTABanner() {
  return (
    <section aria-label="Ajakan aksi" className="bg-[var(--navy)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="flex flex-col items-center justify-between gap-4 py-10 text-center sm:flex-row sm:text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Siap bangun website yang lebih berkelas?</h3>
            <p className="mt-1 text-sm text-white/80">Mulai dari landing page yang simpel, formal, dan cepat.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/layanan" className="btn-ghost rounded-full bg-white/10 text-white hover:text-[var(--navy)]">
              Lihat Layanan
            </Link>
            <Link href="#footer-social" className="btn-primary rounded-full bg-white text-[var(--navy)] hover:bg-[var(--gold)]">
              Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
