"use client";

import { useCallback, useEffect, useState, Fragment } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Container from "../common/container";
import SectionDivider from "../common/section-divider";

// ==== THEME TOKENS ====
const NAVY = "var(--navy)";     // #0A1A3F
const GOLD = "var(--gold)";     // #F5B700
const IVORY = "var(--ivory)";   // #FAF9F6

// ==== TYPES ====
type Slide = {
  id: number;
  title: string;
  desc: string;
  link?: string;
  badges?: string[];
  variant?: "grid" | "rings" | "glow";
  comingSoon?: boolean; // ← flag coming soon
};

// ==== DATA ====
const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Landing Page UMKM",
    desc: "Clean, cepat, dan SEO-ready. Fokus ke konversi & copy yang kuat.",
    link: "https://umkm-minuman.vercel.app/",
    badges: ["Next.js", "Tailwind", "SEO", "Lighthouse 95+"],
    variant: "grid",
  },
  {
    id: 2,
    title: "Weblabs Corporate",
    desc: "Identitas premium + animasi halus. Desain konsisten navy–emas.",
    link: "#",
    badges: ["Framer Motion", "Design System", "A11y", "Dark Mode"],
    variant: "rings",
    comingSoon: true, // ← COMING SOON
  },
  {
    id: 3,
    title: "Sertifikat & Penghargaan",
    desc: "Kumpulan sertifikasi & portofolio aktivitas profesional.",
    badges: ["UI/UX", "Front-End", "Project Delivery", "Docs"],
    variant: "glow",
    comingSoon: true, // ← COMING SOON
  },
];

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };

// ==== SVG BUILDING BLOCKS ====
function Badge({ label, i }: { label: string; i: number }) {
  const positions = [
    { x: 12, y: 18 }, { x: 72, y: 26 }, { x: 38, y: 70 }, { x: 82, y: 60 },
    { x: 20, y: 44 }, { x: 58, y: 14 }, { x: 88, y: 36 }, { x: 46, y: 52 },
  ];
  const p = positions[i % positions.length];
  return (
    <foreignObject x={`${p.x - 12}%`} y={`${p.y - 4}%`} width="40%" height="12%">
      <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/90 px-3 py-1 text-xs font-medium text-[color:var(--navy)] shadow-sm">
        <span className="inline-block h-2 w-2 rounded-full" style={{ background: GOLD }} />
        {label}
      </div>
    </foreignObject>
  );
}

function GridBG() {
  return (
    <Fragment>
      <defs>
        <pattern id="p-grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(10,26,63,0.08)" strokeWidth="1" />
        </pattern>
        <radialGradient id="g-soft" cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="rgba(245,183,0,0.25)" />
          <stop offset="60%" stopColor="rgba(245,183,0,0.05)" />
          <stop offset="100%" stopColor="rgba(245,183,0,0)" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-grid)" />
      <rect width="100%" height="100%" fill="url(#g-soft)" />
    </Fragment>
  );
}

function RingsBG() {
  return (
    <Fragment>
      <defs>
        <radialGradient id="g-ring" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(245,183,0,0.35)" />
          <stop offset="60%" stopColor="rgba(245,183,0,0.08)" />
          <stop offset="100%" stopColor="rgba(245,183,0,0)" />
        </radialGradient>
      </defs>
      {[80, 56, 36, 20].map((r, i) => (
        <circle key={i} cx="50%" cy="50%" r={`${r}%`} fill="none" stroke="rgba(10,26,63,0.10)" strokeWidth={i === 0 ? 2 : 1} />
      ))}
      <circle cx="50%" cy="50%" r="40%" fill="url(#g-ring)" />
    </Fragment>
  );
}

function GlowBG() {
  return (
    <Fragment>
      <defs>
        <filter id="f-blur">
          <feGaussianBlur stdDeviation="40" />
        </filter>
        <linearGradient id="g-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(245,183,0,0.5)" />
          <stop offset="100%" stopColor="rgba(10,26,63,0.4)" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#g-sheen)" opacity="0.25" />
      <g filter="url(#f-blur)" opacity={0.6}>
        <ellipse cx="25%" cy="30%" rx="22%" ry="14%" fill="rgba(245,183,0,0.9)" />
        <ellipse cx="78%" cy="68%" rx="24%" ry="16%" fill="rgba(10,26,63,0.9)" />
      </g>
    </Fragment>
  );
}

function Artwork({ variant = "grid", badges = [] as string[] }) {
  return (
    <div className="relative w-full aspect-[16/9] rounded-2xl bg-[color:var(--ivory)] ring-1 ring-black/5 overflow-hidden">
      <svg viewBox="0 0 1280 720" className="h-full w-full">
        {/* base bg */}
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="rgba(250,249,246,1)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg)" />
        {variant === "grid" && <GridBG />}
        {variant === "rings" && <RingsBG />}
        {variant === "glow" && <GlowBG />}

        {/* browser frame mock */}
        <g transform="translate(64,56)">
          <rect width="1152" height="576" rx="16" fill="white" stroke="rgba(0,0,0,0.06)" />
          <rect width="1152" height="44" rx="16" fill="rgba(10,26,63,0.04)" />
          <g transform="translate(16,16)">
            <circle r="6" cx="0" cy="6" fill="#ff5f56" />
            <circle r="6" cx="20" cy="6" fill="#ffbd2e" />
            <circle r="6" cx="40" cy="6" fill="#27c93f" />
          </g>
          <rect x="84" y="14" width="260" height="16" rx="8" fill="rgba(10,26,63,0.12)" />
          <rect x="48" y="92" width="512" height="48" rx="10" fill="rgba(10,26,63,0.1)" />
          <rect x="48" y="152" width="420" height="14" rx="7" fill="rgba(10,26,63,0.12)" />
          <rect x="48" y="176" width="360" height="14" rx="7" fill="rgba(10,26,63,0.10)" />
          <rect x="48" y="208" width="140" height="36" rx="18" fill="rgba(245,183,0,0.85)" />
          <rect x="620" y="92" width="484" height="300" rx="14" fill="rgba(10,26,63,0.06)" />
          {[0, 1, 2].map((c) => (
            <rect key={c} x={48 + c * 192} y={272} width="172" height="120" rx="12" fill="rgba(10,26,63,0.05)" />
          ))}
        </g>

        {/* floating badges */}
        {badges.slice(0, 8).map((b, i) => <Badge key={i} label={b} i={i} />)}
      </svg>
    </div>
  );
}

// ==== COMING SOON OVERLAY ====
function ComingSoonOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      <div className="absolute inset-0 bg-[color:var(--navy)]/6 backdrop-blur-[1px]" />
      <div className="absolute -right-12 top-6 rotate-45">
        <div className="animate-pulse rounded-full bg-[color:var(--gold)] px-6 py-2 ring-1 ring-black/10 shadow-sm">
          <span className="text-xs font-semibold tracking-wider text-[color:var(--navy)]">
            COMING&nbsp;SOON
          </span>
        </div>
      </div>
    </div>
  );
}

// ==== MAIN ====
export default function Portfolio() {
  const [emblaRef, embla] = useEmblaCarousel(OPTIONS, [
    Autoplay({ delay: 3200, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <section
      id="portofolio"
      className="relative bg-gradient-to-b from-white to-[color:var(--ivory)]"
    >
      {/* PADAT: kurangi padding supaya nempel ke Karir */}
      <Container className="pt-12 md:pt-14 pb-8 md:pb-8">
        <div className="max-w-3xl">
          <h2 className="h2 text-[color:var(--navy)]">Portofolio</h2>
          <p className="subtle mt-3">
            Kumpulan proyek, sertifikat, dan kolaborasi — divisualkan tanpa foto, selalu tajam di semua layar.
          </p>
        </div>

        <div className="relative mt-6">
          {/* fade mask kiri-kanan */}
          <div className="pointer-events-none absolute inset-0 z-10 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {SLIDES.map((s, i) => (
                <div key={s.id} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] lg:flex-[0_0_70%]">
                  <div
                    className={`group relative mx-auto overflow-hidden rounded-2xl border border-[color:var(--navy)]/10 transition-all duration-500
                    ${selected === i ? "scale-100 opacity-100" : "scale-[0.99] opacity-95"}`}
                  >
                    <div className={s.comingSoon ? "opacity-90" : ""}>
                      <Artwork variant={s.variant} badges={s.badges ?? []} />
                    </div>

                    {s.comingSoon && <ComingSoonOverlay />}

                    {/* overlay desktop */}
                    <div className="pointer-events-none absolute inset-0 hidden items-end md:flex">
                      <div className="m-6 w-full max-w-xl rounded-2xl bg-white/70 p-5 backdrop-blur-md opacity-0 translate-y-2 transition group-hover:opacity-100 group-hover:translate-y-0 ring-1 ring-black/5">
                        <h3 className="text-xl md:text-2xl font-semibold text-[color:var(--navy)]">{s.title}</h3>
                        <p className="mt-1.5 text-[color:var(--navy)]/80 text-sm leading-relaxed">{s.desc}</p>

                        {s.link && !s.comingSoon && (
                          <Link
                            href={s.link}
                            target="_blank"
                            className="pointer-events-auto mt-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-[color:var(--navy)] hover:text-[color:var(--gold)]"
                          >
                            Lihat →
                          </Link>
                        )}
                        {s.comingSoon && (
                          <span
                            aria-disabled
                            className="mt-3 inline-flex cursor-not-allowed rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[color:var(--navy)]/60 ring-1 ring-black/5"
                          >
                            Segera hadir
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* caption mobile */}
                  <div className="mt-3 block md:hidden text-center">
                    <h3 className="text-lg font-semibold text-[color:var(--navy)]">{s.title}</h3>
                    <p className="text-sm text-[color:var(--navy)]/70">{s.desc}</p>
                    {s.link && !s.comingSoon && (
                      <Link
                        href={s.link}
                        target="_blank"
                        className="mt-2 inline-block text-sm font-medium text-[color:var(--navy)] hover:text-[color:var(--gold)]"
                      >
                        Lihat →
                      </Link>
                    )}
                    {s.comingSoon && (
                      <span className="mt-2 inline-block text-sm font-medium text-[color:var(--navy)]/60">
                        Segera hadir
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* dots */}
          <div className="mt-5 flex justify-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => embla?.scrollTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  selected === i ? "w-6 bg-[color:var(--navy)]" : "w-3 bg-[color:var(--navy)]/30"
                }`}
              />
            ))}
          </div>

          {/* PADAT: divider lebih pendek */}
          <div className="mt-6">
            <SectionDivider color="#F9FAFB" height={24} />
          </div>
        </div>
      </Container>
    </section>
  );
}
