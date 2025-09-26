'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 font-[system-ui] text-[var(--navy)]">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mb-6 text-sm text-[var(--navy)]/55"
      >
        <nav>
          <Link href="/" className="hover:text-[var(--navy)]">Beranda</Link>
          <span className="mx-1">/</span>
          <span>Terms of Service</span>
        </nav>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight mb-2"
      >
        Terms of Service
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
        className="mb-8 text-[var(--navy)]/70"
      >
        Syarat dan ketentuan ini (“Ketentuan”) mengatur penggunaan layanan Weblabs. Dengan mengakses atau
        menggunakan layanan kami, Anda setuju untuk terikat dengan Ketentuan ini.
      </motion.p>

      {/* Card */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
        className="rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
      >
        <div className="p-6 space-y-6 leading-relaxed text-[var(--navy)]/85">
          <div>
            <h2 className="text-xl font-semibold mb-2">1) Penerimaan Ketentuan</h2>
            <p>
              Dengan mengakses atau menggunakan layanan kami, Anda menyatakan bahwa Anda telah membaca, memahami, 
              dan menyetujui untuk terikat dengan Ketentuan ini. Jika Anda tidak setuju, harap jangan gunakan layanan kami.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2) Perubahan</h2>
            <p>
              Kami dapat memperbarui Ketentuan ini dari waktu ke waktu. Perubahan material akan diinformasikan
              melalui situs kami. Tanggal “Terakhir Diperbarui” akan diperbarui di bagian bawah dokumen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3) Layanan</h2>
            <p>
              Weblabs menyediakan layanan pembuatan dan pengelolaan website. Detail spesifik layanan, fitur, dan biaya 
              akan dijelaskan dalam proposal atau kontrak terpisah untuk setiap proyek.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4) Akun & Kewajiban Pengguna</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Anda bertanggung jawab atas informasi yang diberikan kepada kami.</li>
              <li>Anda wajib menjaga kerahasiaan kredensial/akses yang diberikan.</li>
              <li>Dilarang menggunakan layanan untuk aktivitas ilegal, menipu, atau merusak pihak lain.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5) Biaya & Pembayaran</h2>
            <p>
              Semua biaya layanan akan diinformasikan secara tertulis. Pembayaran wajib dilakukan sesuai jadwal
              yang telah disepakati. Keterlambatan pembayaran dapat memengaruhi jadwal proyek atau penghentian layanan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6) Hak Kekayaan Intelektual</h2>
            <p>
              Selama proyek berlangsung, aset yang dibuat tetap menjadi milik Weblabs hingga pembayaran lunas.
              Setelah itu, hak penggunaan akan dialihkan kepada klien sesuai perjanjian. Logo “Weblabs” dan aset brand 
              internal tetap menjadi milik kami.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7) Pembatasan Tanggung Jawab</h2>
            <p>
              Kami akan berusaha semaksimal mungkin memberikan layanan terbaik, namun kami tidak menjamin bahwa
              layanan bebas dari kesalahan, downtime, atau gangguan teknis. Kami tidak bertanggung jawab atas
              kerugian tidak langsung, kehilangan data, atau kerugian akibat penggunaan layanan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8) Penghentian</h2>
            <p>
              Kami berhak menghentikan atau menangguhkan layanan apabila Anda melanggar Ketentuan ini atau peraturan hukum
              yang berlaku. Anda juga dapat menghentikan layanan kapan saja sesuai prosedur kontrak.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9) Hukum yang Berlaku</h2>
            <p>
              Ketentuan ini diatur oleh hukum Republik Indonesia. Perselisihan yang timbul akan diselesaikan terlebih dahulu 
              melalui musyawarah, dan bila tidak tercapai, akan dibawa ke yurisdiksi hukum yang berlaku di Indonesia.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10) Kontak</h2>
            <p>
              Pertanyaan tentang Ketentuan ini dapat dikirimkan ke:{' '}
              <a href="mailto:firdanwebpro@gmail.com" className="underline">
                firdanwebpro@gmail.com
              </a>
              .
            </p>
          </div>

          <p className="text-xs text-[var(--navy)]/55">
            <span className="font-medium">Terakhir Diperbarui:</span> {new Date().toLocaleDateString()}
            <br />
            Dokumen ini disediakan untuk kejelasan informasi dan bukan merupakan nasihat hukum.
          </p>
        </div>
      </motion.section>

      {/* Back link */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
        className="mt-8"
      >
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--navy)] shadow-sm ring-1 ring-black/5 hover:bg-ivory transition"
        >
          ← Kembali ke Beranda
        </Link>
      </motion.div>
    </main>
  );
}
