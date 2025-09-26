'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TentangKami() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 font-[system-ui] text-[var(--navy)]">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="mb-6 text-sm text-[var(--navy)]/55"
      >
        <nav>
          <Link href="/" className="hover:text-[var(--navy)]">Beranda</Link>
          <span className="mx-1">/</span>
          <span>Tentang Kami</span>
        </nav>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Tentang Kami</h1>
        <p className="mt-3 max-w-3xl text-[var(--navy)]/75 leading-relaxed">
          WEBLABS lahir dari keyakinan bahwa setiap brand, usaha, dan komunitas berhak punya wajah digital
          yang meyakinkan, rapi, dan berkelas. Kami tidak hanya membuat tampilan; kami membangun pengalaman
          yang membantu Anda dipercaya dan dipilih audiens.
        </p>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="mb-8"
      >
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6">
          <div className="h-1 w-12 rounded-full bg-[var(--gold)] mb-3"></div>
          <blockquote className="italic text-[var(--navy)]/85 leading-relaxed">
            “Menjadi partner digital tepercaya untuk membangun identitas online yang elegan, efektif, dan berdampak.”
          </blockquote>
        </div>
      </motion.div>

      {/* Cerita Weblabs */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Cerita Singkat Weblabs</h2>
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6 leading-relaxed text-[var(--navy)]/80">
          <p className="mb-3">
            Weblabs berawal dari desa di Madura. Di tahun-tahun awal, laptop pun masih pinjaman—namun semangat
            untuk berkecimpung di dunia digital mengalahkan serba-keterbatasan. Kami pernah diremehkan dan
            ditinggalkan; bukan untuk dibalas, tetapi menjadi bahan bakar untuk terus belajar, membuktikan diri,
            dan berkarya lebih baik.
          </p>
          <p className="mb-3">
            Kami tumbuh dalam lingkungan yang nilai-nilai agamanya kuat. Itu membentuk cara kami bekerja: jujur,
            amanah, dan menghargai setiap orang. Karena itu pula, kami tidak “menjual kesedihan”. Kami percaya
            kualitas kerja, konsistensi, dan sikap adalah cara yang paling layak untuk didengar.
          </p>
          <p>
            Weblabs hadir bukan hanya untuk klien-klien kota, tetapi juga untuk teman-teman di desa:
            membantu UMKM, komunitas, sekolah, dan perangkat desa untuk tetap merawat digitalisasi—meski berada di
            daerah terpencil sekalipun. Internet memperpendek jarak; tugas kami adalah menjadikannya lebih mudah,
            lebih rapi, dan lebih berdampak.
          </p>
        </div>
      </motion.div>

      {/* Visi Misi */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        className="mb-10 grid gap-6 md:grid-cols-2"
      >
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6">
          <h3 className="text-lg font-semibold mb-2">Visi</h3>
          <p className="text-[var(--navy)]/80 leading-relaxed">
            Menjadi partner digital tepercaya dari desa hingga kota dalam membangun identitas online yang elegan,
            efektif, dan berdampak.
          </p>
        </div>
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6">
          <h3 className="text-lg font-semibold mb-2">Misi</h3>
          <ul className="list-disc pl-5 space-y-1 text-[var(--navy)]/80">
            <li>Menyediakan landing page dan website yang rapi, cepat, dan premium.</li>
            <li>Mengutamakan performa, responsivitas, aksesibilitas, dan SEO.</li>
            <li>Mendampingi brand lokal agar percaya diri bersaing di ruang digital.</li>
            <li>Memberdayakan talenta muda desa melalui kolaborasi dan pelatihan.</li>
          </ul>
        </div>
      </motion.div>

      {/* Nilai Inti */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Nilai yang Kami Pegang</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: 'Amanah', d: 'Janji adalah komitmen. Kami menjaga kepercayaan melalui komunikasi jelas & tenggat yang ditepati.' },
            { t: 'Rapi & Minimal', d: 'Desain yang bersih membuat pesan lebih kuat. Kami menghindari kebisingan yang tidak perlu.' },
            { t: 'Kinerja Nyata', d: 'Kecepatan, aksesibilitas, dan SEO adalah standar—bukan fitur tambahan.' },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.32 + i * 0.05 }}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6"
            >
              <h3 className="font-semibold mb-1">{v.t}</h3>
              <p className="text-[var(--navy)]/80 leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Komitmen untuk Desa */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        className="mb-10"
      >
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Komitmen untuk Desa</h2>
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6 leading-relaxed text-[var(--navy)]/80">
          <p className="mb-3">
            Kami percaya digitalisasi bukan milik kota saja. Weblabs membuka ruang kolaborasi untuk desa:
            website profil desa, katalog UMKM, promosi wisata, hingga pelatihan singkat membuat konten dan
            menjaga identitas digital. Target kami sederhana: akses mudah, biaya terukur, hasil rapi.
          </p>
          <p className="mb-1">Bentuk dukungan:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Paket website ringan untuk UMKM dan komunitas desa.</li>
            <li>Pendampingan pengelolaan konten sederhana (tanpa ribet teknis).</li>
            <li>Kolaborasi beasiswa/alat untuk talenta muda yang ingin belajar web.</li>
          </ul>
        </div>
      </motion.div>

      {/* Cara Kami Bekerja */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold tracking-tight mb-3">Cara Kami Bekerja</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { n: '1', t: 'Dengar & Rancang', d: 'Pahami tujuan Anda, lalu susun struktur & referensi desain.' },
            { n: '2', t: 'Desain & Konten', d: 'UI minimal elegan, siap diisi copy & aset visual.' },
            { n: '3', t: 'Bangun & Uji', d: 'Implementasi dengan performa & aksesibilitas sebagai standar.' },
            { n: '4', t: 'Rilis & Rawat', d: 'Optimasi SEO dasar, panduan penggunaan, dan opsi maintenance.' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.42 + i * 0.06 }}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5 p-5 sm:p-6"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--navy)] text-white text-sm mb-3">
                {s.n}
              </div>
              <h3 className="font-semibold mb-1">{s.t}</h3>
              <p className="text-[var(--navy)]/80 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
