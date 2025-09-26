'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const WORDS = ['Bangun', 'Website', 'Bisnis', 'Premium'];

type AnimMode = 'full' | 'lite' | 'off';

export default function Hero() {
  const prefersReduce = useReducedMotion();
  const [mode, setMode] = useState<AnimMode>('full');

  // Pilih mode animasi berdasar perangkat
  useEffect(() => {
    if (prefersReduce) return setMode('off');

    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua);
    const cores = (navigator as any).hardwareConcurrency ?? 4;
    const mem = (navigator as any).deviceMemory ?? 4;
    const dpr = Math.min(window.devicePixelRatio || 1, 3);

    if (isAndroid && (mem <= 4 || cores <= 6 || dpr > 2)) setMode('lite');
    else setMode('full');
  }, [prefersReduce]);

  // Parameter animasi blob sesuai mode
  const blobDuration = mode === 'full' ? 22 : 28;
  const blobDistance = mode === 'full' ? 28 : 14;
  const blobOpacity = mode === 'full' ? 0.25 : 0.18;

  return (
    <section id="beranda" className="relative overflow-hidden bg-[rgb(238,238,236)]">
      {/* Background logos – fade in */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
      >
        <Image
          src="/images/stack-logos.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-10 brightness-0"
        />
      </motion.div>

      {/* Blobs gradient ringan */}
      {mode !== 'off' && (
        <>
          <motion.div
            aria-hidden
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full -z-10"
            style={{
              background:
                'radial-gradient(closest-side, rgba(10,26,63,0.25), rgba(10,26,63,0))',
              filter: 'blur(20px)',
            }}
            initial={{ x: 0, y: 0, opacity: blobOpacity }}
            animate={{
              x: [0, blobDistance, 0, -blobDistance, 0],
              y: [0, -blobDistance, 0, blobDistance, 0],
            }}
            transition={{ duration: blobDuration, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full -z-10"
            style={{
              background:
                'radial-gradient(closest-side, rgba(245,183,0,0.25), rgba(245,183,0,0))',
              filter: 'blur(22px)',
            }}
            initial={{ x: 0, y: 0, opacity: blobOpacity }}
            animate={{
              x: [0, -blobDistance, 0, blobDistance, 0],
              y: [0, blobDistance, 0, -blobDistance, 0],
            }}
            transition={{ duration: blobDuration + 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:flex lg:items-center lg:gap-10 lg:px-8 lg:py-28">
        {/* Headline */}
        <div className="max-w-3xl">
          <h1 className="leading-tight text-[40px] font-bold tracking-[-0.02em] text-[var(--navy)] sm:text-[56px] lg:text-[64px]">
            {WORDS.map((w, i) => (
              <motion.span
                key={w + i}
                className="inline-block mr-[10px]"
                initial={{ opacity: 0, y: 8, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: mode === 'full' ? 0.5 : 0.4,
                  ease: 'easeOut',
                  delay: 0.08 * i,
                }}
              >
                {w === 'Premium' ? <span className="text-[var(--gold)]">{w}</span> : w}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            className="mt-5 text-[17px] leading-relaxed text-[color:var(--navy)]/70 sm:text-[18px]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.45 }}
          >
            Website formal, clean, cepat, dan SEO-friendly.
          </motion.p>

          {/* Tombol ke halaman /tentang */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.6 }}
          >
            <Link
              href="/tentang"
              className="group inline-flex items-center gap-2 text-[17px] font-medium text-[var(--navy)]"
            >
              Tentang Kami
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
              <span
                aria-hidden
                className="ml-2 h-px w-16 origin-left scale-x-50 bg-[var(--navy)]/25 transition-transform group-hover:scale-x-100"
              />
            </Link>
          </motion.div>

          {/* NB Kecil */}
          <motion.p
            className="mt-8 max-w-xl text-xs leading-relaxed text-[color:var(--navy)]/60 italic"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.75 }}
          >
            NB: Untuk landing page clean, responsive, dan SEO friendly, biaya investasinya{' '}
            <span className="font-semibold text-[color:var(--navy)]">Rp 800.000</span>.
            <br />
            Saya targetkan selesai dalam <span className="font-medium">1bulan hari kerja</span>{' '}
            mengingat saya masih kuliah.
            <br />
            Harga ini saya buat terjangkau karena saya sedang membangun portofolio, tapi tetap
            menjamin hasil rapi dan profesional.
          </motion.p>
        </div>

        <div className="hidden flex-1 lg:block" />
      </div>

      {/* Wave footer – fade in */}
      <motion.svg
        className="block w-full text-white"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <path
          d="M0,64 C240,96 480,0 720,16 C960,32 1200,112 1440,64 L1440,160 L0,160 Z"
          fill="currentColor"
        />
      </motion.svg>
    </section>
  );
}
