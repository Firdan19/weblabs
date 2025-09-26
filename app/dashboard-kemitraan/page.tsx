'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const steps = [
  { title: 'Kirim Ide', desc: 'Ceritakan usaha, komunitas, atau dukungan yang ingin diajukan.' },
  { title: 'Ngobrol Bareng', desc: 'Kita diskusi singkat untuk menyamakan tujuan & harapan.' },
  { title: 'Mulai Kolaborasi', desc: 'Proyek atau dukungan mulai dijalankan bareng-bareng.' },
  { title: 'Muncul di Globe', desc: 'Nama & lokasi Anda tampil di globe jejaring Weblabs.' },
  { title: 'Review & Lanjut', desc: 'Kita lihat hasilnya, lalu bisa lanjut ke tahap berikutnya.' },
];

const benefits = [
  'Nama & lokasi tampil di globe jejaring Weblabs',
  'Brand/komunitas makin dikenal banyak orang',
  'Akses ke tim digital kreatif Weblabs',
  'Kolaborasi fleksibel—bisa promosi, proyek bareng, atau support',
];

export default function DashboardKemitraan() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12 font-[system-ui] text-[var(--navy)]">
      {/* Background abstrak */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ivory via-white to-gold/10">
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,#0A1A3F20,transparent_0)] [background-size:20px_20px]" />
      </div>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold">Kerja Sama & Dukungan</h1>
        <p className="mt-3 text-[color:var(--navy)]/70 max-w-2xl mx-auto">
          Kami membuka ruang bagi siapa saja—usaha, komunitas, atau individu—untuk tumbuh bersama Weblabs.
          Dukungan Anda akan terlihat nyata di globe jejaring global kami.
        </p>
      </motion.header>

      {/* Benefits */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mb-14"
      >
        <h2 className="text-2xl font-semibold text-center">Kenapa Bergabung?</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="rounded-xl bg-white/70 shadow-sm backdrop-blur-md px-5 py-6 text-sm leading-relaxed"
            >
              {b}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Steps */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-center">Bagaimana Caranya?</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="rounded-xl bg-white/60 shadow-sm backdrop-blur-md p-5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--navy)] text-white text-sm mb-3">
                {i + 1}
              </div>
              <h3 className="font-medium">{s.title}</h3>
              <p className="mt-1 text-sm text-[color:var(--navy)]/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-center"
      >
        <p className="text-[color:var(--navy)]/70 mb-6">
          Siap gabung? Ajukan ide atau dukungan Anda sekarang.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:hello@weblabs.id?subject=Ajukan%20Kerja%20Sama%20-%20Weblabs"
            className="rounded-full bg-[var(--navy)] px-6 py-2.5 text-sm font-medium text-white hover:bg-[var(--navy)]/90 transition"
          >
            Ajukan via Email →
          </Link>
          <Link
            href="/"
            className="rounded-full bg-white/70 px-6 py-2.5 text-sm font-medium text-[var(--navy)] shadow-sm hover:bg-white transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
