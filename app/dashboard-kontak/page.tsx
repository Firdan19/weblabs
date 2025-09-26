// app/hubungi-kami/page.tsx
import Contact from "@/components/sections/contact";
import Link from "next/link";

export const metadata = {
  title: "Hubungi Kami — WEBLABS",
  description: "Konsultasi dan permintaan penawaran untuk landing page premium.",
};

export default function HubungiKamiPage() {
  return (
    <main className="min-h-dvh">
      {/* Hero tipis */}
      <section className="border-b border-black/5 bg-[#FAFAF8]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <nav className="text-sm text-black/50">
            <Link href="/" className="hover:text-black/70">Beranda</Link>
            <span className="mx-2">/</span>
            <span className="text-black/70">Hubungi Kami</span>
          </nav>
          <h1 className="mt-4 text-[28px] sm:text-[34px] font-semibold tracking-tight text-[var(--navy)]">
            Hubungi Kami
          </h1>
          <p className="mt-2 text-[15px] text-[color:var(--navy)]/70">
            Konsultasi gratis—ceritakan kebutuhan Anda. Kami balas secepatnya.
          </p>
        </div>
      </section>

      {/* Form kontak */}
      <Contact />

      {/* (Opsional) FAQ ringkas */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-black/5 p-6">
            <h3 className="font-semibold text-[var(--navy)]">Waktu Respons</h3>
            <p className="mt-2 text-sm text-black/70">Umumnya &lt; 24 jam di hari kerja.</p>
          </div>
          <div className="rounded-2xl border border-black/5 p-6">
            <h3 className="font-semibold text-[var(--navy)]">Channel</h3>
            <p className="mt-2 text-sm text-black/70">Email / WhatsApp sesuai preferensi Anda.</p>
          </div>
          <div className="rounded-2xl border border-black/5 p-6">
            <h3 className="font-semibold text-[var(--navy)]">Privasi</h3>
            <p className="mt-2 text-sm text-black/70">
              Data hanya digunakan untuk menindaklanjuti konsultasi.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
