'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type Item = { name: string; city?: string; status: 'Proses' | 'Selesai' };

const DATA: Item[] = [
  { name: 'Surabaya (Dummy)', city: 'Surabaya', status: 'Selesai' },
  { name: 'Jakarta (Dummy)', city: 'Jakarta', status: 'Proses' },
  { name: 'Singapore (Dummy)', city: 'Singapore', status: 'Proses' },
  { name: 'Tokyo (Dummy)', city: 'Tokyo', status: 'Selesai' },
  { name: 'Sydney (Dummy)', city: 'Sydney', status: 'Proses' },
];

export default function KolaboratorPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 font-[system-ui] text-[var(--navy)]">
      {/* Header + tombol kembali */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-semibold">Daftar Kolaborator</h1>
          <p className="mt-2 text-[var(--navy)]/70">
            Nama-nama yang sudah bergabung bersama Weblabs beserta statusnya.
          </p>
        </div>

        {/* Kembali ke Beranda */}
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--navy)] shadow-sm ring-1 ring-black/5 hover:bg-ivory transition"
        >
          ← Kembali ke Beranda
        </Link>
      </motion.header>

      {/* Tabel daftar */}
      <section className="rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="grid grid-cols-3 gap-2 border-b border-black/5 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--navy)]/60">
          <div>Instansi</div>
          <div>Lokasi</div>
          <div>Status</div>
        </div>

        <ul className="divide-y divide-black/5">
          {DATA.map((row, i) => (
            <li key={i} className="grid grid-cols-3 items-center gap-2 px-4 py-3 text-sm">
              <div className="font-medium">{row.name}</div>
              <div className="text-[var(--navy)]/70">{row.city ?? '-'}</div>
              <div>
                {row.status === 'Selesai' ? (
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    Selesai
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                    Proses
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA bawah (opsional) */}
      <div className="mt-8 text-center">
        <Link
          href="/dashboard-kemitraan"
          className="inline-flex items-center justify-center rounded-full bg-[var(--navy)] px-6 py-2.5 text-sm font-medium text-white hover:bg-[var(--navy)]/90 transition"
        >
          Ajukan Kerja Sama →
        </Link>
      </div>
    </main>
  );
}
