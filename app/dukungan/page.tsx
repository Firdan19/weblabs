'use client';

import { motion } from 'framer-motion';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
function CopyBtn({ text }: { text: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setOk(true);
          setTimeout(() => setOk(false), 1500);
        } catch {}
      }}
      className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[var(--navy)] shadow-sm ring-1 ring-black/5 hover:bg-ivory transition"
    >
      {ok ? 'Disalin ✓' : 'Copy'}
    </button>
  );
}

function Banner({ text, onClose }: { text: string; onClose?: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      className="rounded-xl bg-emerald-50 text-emerald-800 px-4 py-3 text-sm ring-1 ring-emerald-200/70"
      role="status"
    >
      <div className="flex items-center justify-between gap-3">
        <span>{text}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="rounded-md px-2 py-1 text-xs hover:bg-emerald-100"
            aria-label="Tutup"
          >
            Tutup
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function DukunganSaranPage() {
  const router = useRouter(); 
  const [donasiLoading, setDonasiLoading] = useState(false);
  const [saranLoading, setSaranLoading] = useState(false);
  const [donasiOK, setDonasiOK] = useState(false);
  const [saranOK, setSaranOK] = useState(false);

  // submit helper
  async function submitJSON(url: string, data: any) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Gagal mengirim');
    return res.json();
  }

  async function handleDonasi(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      type: 'donasi',
      nama: (fd.get('nama') as string)?.trim(),
      email: (fd.get('email') as string)?.trim() || null,
      nominal: Number(fd.get('nominal') || 0),
      pesan: (fd.get('pesan') as string)?.trim() || null,
    };
    setDonasiLoading(true);
    try {
      await submitJSON('/api/dukungan', payload);
      setDonasiOK(true);
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      alert('Maaf, pengiriman donasi gagal. Coba lagi ya.');
    } finally {
      setDonasiLoading(false);
    }
  }

  async function handleSaran(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      type: 'saran',
      nama: (fd.get('s_nama') as string)?.trim(),
      email: (fd.get('s_email') as string)?.trim(),
      pesan: (fd.get('s_pesan') as string)?.trim(),
    };
    setSaranLoading(true);
    try {
      await submitJSON('/api/dukungan', payload);
      setSaranOK(true);
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      alert('Maaf, pengiriman saran gagal. Coba lagi ya.');
    } finally {
      setSaranLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 font-[system-ui] text-[var(--navy)]">
      {/* Header */}
      <motion.div
  initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
  className="mb-8"
>
  {/* Tombol Kembali */}
  <div className="mb-3">
    <button
      type="button"
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[var(--navy)] shadow-sm ring-1 ring-black/5 hover:bg-ivory transition"
    >
      ← Kembali
    </button>
    {/* Opsional: link langsung ke beranda */}
    {/* <Link href="/" className="ml-3 text-xs underline text-[var(--navy)]/70 hover:text-[var(--navy)]">Beranda</Link> */}
  </div>

  <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Dukungan & Saran</h1>
  <p className="mt-2 max-w-2xl text-[var(--navy)]/70">
    Terima kasih sudah mendukung perjalanan Weblabs. Donasi Anda diprioritaskan untuk{' '}
    <span className="font-medium text-[var(--navy)]">upgrade perangkat</span> (laptop/monitor/storage)
    agar kami bisa terus meningkatkan kualitas layanan pembuatan landing page. Saran Anda akan
    langsung kami baca.
  </p>
</motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* DONASI */}
        <motion.section
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Form Dukungan (Donasi)</h2>

          {/* Info Bank */}
          <div className="rounded-xl ring-1 ring-black/5 p-4 bg-white/70 mb-4">
            <p className="font-medium">Transfer Bank</p>
            <div className="mt-2 flex items-center justify-between gap-3 text-sm">
              <div>
                <p>
                  SeaBank • <span className="font-medium tracking-wide">901644371271</span>
                </p>
                <p className="text-[var(--navy)]/60">a.n. Milki Khair Alfirdaus</p>
              </div>
              <CopyBtn text="901644371271" />
            </div>
            <p className="mt-3 text-xs text-[var(--navy)]/55">
              *Dana digunakan untuk upgrade perangkat yang mendukung kualitas layanan pembuatan landing page di Weblabs.
            </p>
          </div>

          {donasiOK && (
            <div className="mb-4">
              <Banner text="Terima kasih! Data dukungan Anda sudah kami terima." onClose={() => setDonasiOK(false)} />
            </div>
          )}

          {/* Form Donasi */}
          <form onSubmit={handleDonasi} className="grid gap-3">
            <div className="grid gap-1.5">
              <label htmlFor="nama" className="text-sm font-medium">Nama</label>
              <input
                id="nama" name="nama" type="text" required placeholder="Nama Anda"
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-[var(--navy)] outline-none focus:ring-2 focus:ring-[var(--gold)]/30"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">Email (opsional)</label>
              <input
                id="email" name="email" type="email" placeholder="email@contoh.com"
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-[var(--navy)] outline-none focus:ring-2 focus:ring-[var(--gold)]/30"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="nominal" className="text-sm font-medium">Nominal (Rp)</label>
              <input
                id="nominal" name="nominal" type="number" min={1000} step={1000} required placeholder="100000"
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-[var(--navy)] outline-none focus:ring-2 focus:ring-[var(--gold)]/30"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="pesan" className="text-sm font-medium">Pesan (opsional)</label>
              <textarea
                id="pesan" name="pesan" rows={4} placeholder="Catatan dukungan Anda…"
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-[var(--navy)] outline-none focus:ring-2 focus:ring-[var(--gold)]/30"
              />
            </div>

            <div className="flex items-center justify-end pt-1">
              <button
                type="submit"
                disabled={donasiLoading}
                className="rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--navy)]/90 disabled:opacity-60 transition"
              >
                {donasiLoading ? 'Mengirim…' : 'Kirim Dukungan'}
              </button>
            </div>
          </form>
        </motion.section>

        {/* SARAN */}
        <motion.section
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Form Saran</h2>

          {saranOK && (
            <div className="mb-4">
              <Banner text="Terima kasih! Saran Anda sudah kami terima." onClose={() => setSaranOK(false)} />
            </div>
          )}

          <form onSubmit={handleSaran} className="grid gap-3">
            <div className="grid gap-1.5">
              <label htmlFor="s_nama" className="text-sm font-medium">Nama</label>
              <input
                id="s_nama" name="s_nama" type="text" required placeholder="Nama Anda"
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-[var(--navy)] outline-none focus:ring-2 focus:ring-[var(--gold)]/30"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="s_email" className="text-sm font-medium">Email</label>
              <input
                id="s_email" name="s_email" type="email" required placeholder="email@contoh.com"
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-[var(--navy)] outline-none focus:ring-2 focus:ring-[var(--gold)]/30"
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="s_pesan" className="text-sm font-medium">Pesan</label>
              <textarea
                id="s_pesan" name="s_pesan" rows={6} required placeholder="Tulis saran Anda…"
                className="rounded-xl border border-black/10 bg-white px-3 py-2 text-[var(--navy)] outline-none focus:ring-2 focus:ring-[var(--gold)]/30"
              />
            </div>

            <div className="flex items-center justify-end pt-1">
              <button
                type="submit"
                disabled={saranLoading}
                className="rounded-full bg-[var(--navy)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--navy)]/90 disabled:opacity-60 transition"
              >
                {saranLoading ? 'Mengirim…' : 'Kirim Saran'}
              </button>
            </div>
          </form>
        </motion.section>
      </div>

      {/* Footer kecil halaman */}
      <motion.div
        initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[var(--navy)]/65"
      >
          <span>
    Terima kasih sudah mendukung perjalanan Weblabs. Semua donasi digunakan untuk
    upgrade perangkat & mendukung jasa pembuatan landing page premium.  
  </span>
      </motion.div>
    </main>
  );
}
