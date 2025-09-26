// components/sections/services.tsx
"use client";

import Container from "../common/container";

const STEPS = [
  {
    no: "01",
    title: "Landing Page Premium",
    desc: "Desain formal & mewah dengan tipografi rapi dan warna brand konsisten.",
  },
  {
    no: "02",
    title: "Performa & Kecepatan",
    desc: "Optimasi Core Web Vitals, image & font optimization, best practice Next.js.",
  },
  {
    no: "03",
    title: "Responsif Semua Perangkat",
    desc: "Android, iOS, tablet, dan desktop — tampil mulus di berbagai resolusi.",
  },
  {
    no: "04",
    title: "SEO & Struktur Konten",
    desc: "Metadata, aksesibilitas, heading hierarchy, siap indeks mesin pencari.",
  },
];

export default function ServicesHorizontalTimeline() {
  return (
    <section
      id="layanan"
      className="relative scroll-mt-24 bg-[#F3F2EF] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-[var(--navy)]">
            Layanan & Keunggulan
          </h2>
          <p className="mt-3 text-[15px] text-[color:var(--navy)]/70">
            Fokus pada landing page bisnis premium—clean, cepat, responsif, dan siap konversi.
          </p>
        </div>

        {/* Timeline horizontal */}
        <div className="mt-14 relative">
          {/* Garis penghubung */}
          <div className="hidden sm:block absolute top-6 left-0 w-full h-px bg-black/10" />

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-8">
            {STEPS.map((s, i) => (
              <div key={s.no} className="relative text-center sm:text-left">
                {/* Titik (node) */}
                <div className="relative z-10 mx-auto sm:mx-0 flex items-center justify-center h-12 w-12 rounded-full bg-white/80 border border-black/[0.08] shadow-sm">
                  <span className="text-[15px] font-semibold text-[var(--navy)]">
                    {s.no}
                  </span>
                </div>

                {/* Konten */}
                <div className="mt-5 sm:mt-6">
                  <h3 className="text-[16px] sm:text-[17px] font-semibold text-[var(--navy)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--navy)]/70">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
