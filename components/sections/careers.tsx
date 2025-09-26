'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import GlobeClient, { GlobeRef } from '@/components/GlobeClient';

// Dynamic import yang tetap dukung ref
const Globe = dynamic(
  () => import('@/components/GlobeClient').then((m) => m.default),
  { ssr: false }
) as unknown as React.ForwardRefExoticComponent<
  React.ComponentProps<typeof GlobeClient> & React.RefAttributes<GlobeRef>
>;

type Partner = { name: string; lat: number; lng: number };

// HUB: Sera Barat, Bluto – Sumenep (Madura)
const HUB: Partner = { name: 'Sera Barat, Bluto (Madura)', lat: -7.0900511, lng: 113.7647606 };

// Data dummy tujuan (boleh kamu tambah/ubah)
const PARTNERS: Partner[] = [
  HUB,
  { name: 'Surabaya (Dummy)', lat: -7.2575, lng: 112.7521 },
  { name: 'Jakarta (Dummy)', lat: -6.2, lng: 106.8 },
  { name: 'Singapore (Dummy)', lat: 1.35, lng: 103.82 },
  { name: 'Tokyo (Dummy)', lat: 35.6762, lng: 139.6503 },
  { name: 'Sydney (Dummy)', lat: -33.8688, lng: 151.2093 },
  { name: 'Dubai (Dummy)', lat: 25.2048, lng: 55.2708 },
  { name: 'Berlin (Dummy)', lat: 52.52, lng: 13.405 },
  { name: 'London (Dummy)', lat: 51.5072, lng: -0.1276 },
  { name: 'Kuala Lumpur (Dummy)', lat: 3.139, lng: 101.6869 },
];

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true }) ||
      canvas.getContext('experimental-webgl');
    return !!gl;
  } catch {
    return false;
  }
}

type Mode = 'FULL' | 'LITE' | 'FALLBACK';
function pickMode(webglOK: boolean): Mode {
  if (!webglOK) return 'FALLBACK';
  const ua = navigator.userAgent || '';
  const isAndroid = /Android/i.test(ua);
  const cores = (navigator as any).hardwareConcurrency || 4;
  const mem = (navigator as any).deviceMemory || 4;
  const dpr = Math.min(window.devicePixelRatio || 1, 3);
  if (isAndroid && (mem <= 4 || cores <= 6 || dpr > 2)) return 'LITE';
  return 'FULL';
}

export default function Careers() {
  const globeRef = useRef<GlobeRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [webgl, setWebgl] = useState(true);
  const [mode, setMode] = useState<Mode>('FULL');
  const [size, setSize] = useState({ width: 0, height: 0 });

  // responsive container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      setSize({ width: Math.round(r.width), height: Math.round(r.height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const ok = hasWebGL();
    setWebgl(ok);
    setMode(pickMode(ok));
  }, []);

  // Titik kecil (opsional visual anchor hub & tujuan)
  const points = useMemo(
    () =>
      PARTNERS.map((p, i) => ({
        lat: p.lat,
        lng: p.lng,
        size: i === 0 ? 0.9 : 0.4, // hub sedikit lebih besar
        color: i === 0 ? '#0A1A3F' : '#F5B700',
        name: p.name,
      })),
    []
  );

  // Garis dari HUB ke daftar partner (jelas)
  const partnerArcs = useMemo(() => {
    const hub = PARTNERS[0];
    return PARTNERS.slice(1).map((p) => ({
      startLat: hub.lat,
      startLng: hub.lng,
      endLat: p.lat,
      endLng: p.lng,
      color: ['rgba(245,183,0,0.95)', 'rgba(245,183,0,0.2)'], // kuning → memudar
    }));
  }, []);

  // Fan-out: banyak garis menyebar ke berbagai arah (jejaring ke mana-mana)
  const fanArcs = useMemo(() => {
    const hub = PARTNERS[0];
    const n = mode === 'FULL' ? 28 : 12; // fewer on LITE
    const arr: any[] = [];
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2;
      // sebar latitude -45..45 pakai sinus, longitude 0..360 searah sudut
      const endLat = Math.sin(t) * 45;
      const endLng = -180 + (360 / n) * i;
      arr.push({
        startLat: hub.lat,
        startLng: hub.lng,
        endLat,
        endLng,
        color: ['rgba(245,183,0,0.9)', 'rgba(245,183,0,0.15)'],
      });
    }
    return arr;
  }, [mode]);

  // POV & controls: auto-rotate ON, zoom/pan OFF
  useEffect(() => {
    const g = globeRef.current;
    if (!g) return;
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    g.pointOfView({ lat: -6.8, lng: 115, altitude: isMobile ? 2.7 : 2.3 }, 0);

    const controls = g.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = isMobile ? 0.25 : 0.35;
    controls.enableZoom = false;
    controls.enablePan = false;
  }, [mode]);

  const rendererConfig =
    mode === 'LITE'
      ? { antialias: false, powerPreference: 'low-power' as const, alpha: true }
      : { antialias: true, powerPreference: 'high-performance' as const, alpha: true };

  const globeImageUrl =
    mode === 'LITE'
      ? 'https://unpkg.com/three-globe/example/img/earth-night.jpg'
      : 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg';

  const bumpImageUrl = mode === 'FULL' ? 'https://unpkg.com/three-globe/example/img/earth-topology.png' : undefined;
  const showAtmosphere = mode === 'FULL';

  return (
    <section id="karir-kemitraan" className="relative bg-white/60 backdrop-blur-sm py-14 sm:py-18 -mt-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[var(--navy)]">
            Karir & Kemitraan
          </h2>
          <p className="mt-2 text-[color:var(--navy)]/70">
            Nama instansi yang berkolaborasi akan tampil di globe. Garis kuning menunjukkan jejaring ke berbagai arah.
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Kiri */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow">
              <div className="mb-2">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--navy)]">Peluang Karir</h3>
              <p className="mt-1 text-[color:var(--navy)]/70">
                Rekrutmen belum dibuka. Pantau update di website & Instagram @weblabs.id.
              </p>
              <button
                type="button"
                disabled
                className="mt-5 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-500"
                title="Coming Soon"
              >
                Coming Soon
              </button>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow">
              <div className="mb-2">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  Terbuka
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--navy)]">Kerja Sama & Dukungan</h3>
              <p className="mt-1 text-[color:var(--navy)]/70">
                Setiap kolaborasi baru menampilkan <strong>nama instansi</strong> pada lokasi di globe. Garis kuning
                memperlihatkan jangkauan jejaring kami.
              </p>
              <div className="mt-5">
                <Link
                  href="/dashboard-kemitraan"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--navy)] ring-1 ring-[var(--navy)]/12 hover:bg-[var(--navy)]/5"
                >
                  Lihat Penjelasan Lengkap →
                </Link>
              </div>
            </div>
          </div>

          {/* Kanan: Globe */}
          <div className="relative">
            <div
              ref={containerRef}
              className="relative h-[360px] sm:h-[420px] overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-b from-white to-[var(--ivory)] shadow"
            >
              {!webgl ? (
                <img
                  src="/images/fallback-map.png"
                  alt="Global network"
                  className="h-full w-full object-cover opacity-90"
                />
              ) : (
                <Globe
                  ref={globeRef}
                  width={size.width || undefined}
                  height={size.height || undefined}
                  backgroundColor="rgba(0,0,0,0)"
                  rendererConfig={rendererConfig}
                  globeImageUrl={globeImageUrl}
                  bumpImageUrl={bumpImageUrl as any}
                  showAtmosphere={showAtmosphere}
                  atmosphereColor="#9bb7ff"
                  atmosphereAltitude={0.13}

                  // Titik kecil (opsional)
                  pointsData={points as any}
                  pointAltitude={0.02}
                  pointColor={(d: any) => d.color}
                  pointLabel={() => ''} // tidak tampilkan tooltip nama

                  // Garis: partner jelas + fan-out banyak arah
                  arcsData={[...partnerArcs, ...fanArcs] as any}
                  arcColor={(a: any) => a.color}
                  arcAltitude={mode === 'FULL' ? 0.35 : 0.28}
                  arcStroke={mode === 'FULL' ? 0.8 : 0.6}
                  arcDashLength={0.3}
                  arcDashGap={0.7}
                  arcDashAnimateTime={mode === 'FULL' ? 3600 : 5200}
                />
              )}

              {/* Teks kecil pojok kiri dalam kartu */}
              <div className="absolute left-3 bottom-3">
                <Link
                  href="/kolaborator"
                  className="text-xs font-medium text-[var(--navy)]/70 hover:text-[var(--navy)] underline underline-offset-2"
                >
                  Lihat selengkapnya
                </Link>
              </div>
            </div>

            <p className="mt-3 text-xs text-[color:var(--navy)]/55">
              *Label nama tidak ditampilkan di globe untuk menghindari tumpang tindih. Daftar nama & status ada di
              halaman <em>Lihat selengkapnya</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
