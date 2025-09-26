'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
          <span>Privacy Policy</span>
        </nav>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight mb-2"
      >
        Privacy Policy
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
        className="mb-8 text-[var(--navy)]/70"
      >
        Berlaku untuk layanan Weblabs (“kami”). Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
        menyimpan, dan melindungi data pribadi Anda.
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
            <h2 className="text-xl font-semibold mb-2">1) Data yang Kami Kumpulkan</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Data kontak</span> — nama, email, nomor telepon, nama instansi.</li>
              <li><span className="font-medium">Data proyek</span> — kebutuhan, brief, aset yang Anda kirim.</li>
              <li><span className="font-medium">Data teknis</span> — cookie, alamat IP, tipe/perangkat, halaman yang diakses, waktu kunjungan.</li>
              <li><span className="font-medium">Komunikasi</span> — korespondensi email/WhatsApp dan catatan diskusi.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2) Cara Kami Mengumpulkan</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Langsung dari Anda melalui formulir, email, atau pertemuan.</li>
              <li>Otomatis saat Anda mengakses situs (mis. cookie/analytics).</li>
              <li>Dari pihak ketiga yang Anda izinkan (mis. penyedia domain/hosting saat onboarding).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3) Tujuan Penggunaan Data</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Menanggapi pertanyaan, menyiapkan proposal, dan menjalankan proyek.</li>
              <li>Pemeliharaan layanan, dukungan purna jual, dan komunikasi terkait layanan.</li>
              <li>Peningkatan kualitas layanan, keamanan, dan pengalaman pengguna.</li>
              <li>Keperluan legal, audit, dan pencegahan penyalahgunaan.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4) Dasar Pemrosesan</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-medium">Persetujuan</span> — saat Anda mengirim data kepada kami.</li>
              <li><span className="font-medium">Perjanjian</span> — untuk menyiapkan/menjalankan kontrak layanan.</li>
              <li><span className="font-medium">Kepentingan yang sah</span> — peningkatan layanan & keamanan.</li>
              <li><span className="font-medium">Kepatuhan hukum</span> — bila diwajibkan peraturan perundang-undangan.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5) Cookie & Analytics</h2>
            <p>
              Situs dapat menggunakan cookie/teknologi serupa untuk fungsi dasar dan analitik agregat (misalnya
              Google Analytics). Anda dapat mengatur browser untuk menolak cookie; beberapa fitur mungkin tidak
              berfungsi optimal tanpa cookie.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6) Berbagi Data dengan Pihak Ketiga</h2>
            <p className="mb-2">
              Kami tidak memperjualbelikan data pribadi Anda. Data hanya dibagikan bila diperlukan dan terbatas pada:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Penyedia infrastruktur (hosting, email, CDN) untuk mengoperasikan layanan.</li>
              <li>Mitra/kontraktor yang terikat kerahasiaan untuk membantu pengerjaan proyek.</li>
              <li>Permintaan sah dari penegak hukum/regulator sesuai ketentuan yang berlaku.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7) Penyimpanan & Keamanan</h2>
            <p>
              Kami menerapkan langkah-langkah keamanan yang wajar (kontrol akses, enkripsi saat transit, praktik
              minimasi data). Meski demikian, tidak ada metode transmisi/penyimpanan yang 100% aman.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8) Retensi Data</h2>
            <p>
              Data disimpan selama diperlukan untuk tujuan pengolahan di atas, kewajiban hukum, dan penyelesaian
              sengketa. Setelahnya, data akan dihapus atau dianonimkan secara aman.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9) Hak Anda</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mengakses, mengoreksi, memperbarui, atau menghapus data pribadi Anda.</li>
              <li>Menarik persetujuan (tidak mempengaruhi pemrosesan yang telah berlangsung sah).</li>
              <li>Membatasi atau menolak pemrosesan tertentu sesuai hukum yang berlaku.</li>
              <li>Mengeluhkan praktik privasi kami kepada otoritas yang berwenang.</li>
            </ul>
            <p className="mt-2">
              Untuk menggunakan hak-hak tersebut, hubungi kami di{' '}
              <a href="mailto:firdanwebpro@gmail.com" className="underline">
                firdanwebpro@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10) Transfer Internasional</h2>
            <p>
              Layanan kami mungkin menggunakan infrastruktur global. Dengan menggunakan layanan kami, Anda memahami
              bahwa data dapat diproses di luar negara Anda dengan perlindungan yang sepadan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">11) Anak di Bawah Umur</h2>
            <p>
              Layanan kami tidak ditujukan untuk anak di bawah 13 tahun. Jika Anda orang tua/wali dan yakin anak
              Anda memberikan data kepada kami, mohon hubungi kami untuk penghapusan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">12) Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Perubahan material akan diinformasikan di
              situs ini. Tanggal “Terakhir Diperbarui” akan disesuaikan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">13) Kontak</h2>
            <p>
              Pertanyaan terkait privasi? Hubungi:{' '}
              <a href="mailto:firdanwebpro@gmail.com" className="underline">
                firdanwebpro@gmail.com
              </a>
              .
            </p>
          </div>

          <p className="text-xs text-[var(--navy)]/55">
            <span className="font-medium">Terakhir Diperbarui:</span> {new Date().toLocaleDateString()}
            <br />
            Dokumen ini disediakan untuk kejelasan informasi dan bukan merupakan nasihat hukum. Untuk kebutuhan
            kepatuhan tertentu, mohon konsultasikan dengan penasihat hukum Anda.
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
