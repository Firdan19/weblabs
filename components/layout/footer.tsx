import Link from "next/link";
import Container from "../common/container";
import { NAV_LINKS, SOCIALS } from "../../lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F9FAFB] text-[13px] text-[color:var(--navy)]/75">
      {/* garis atas tipis */}
      <div className="border-t border-black/5" />

      <Container className="py-10">
        {/* GRID ATAS: 4 kolom ala Apple */}
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {/* Brand + deskripsi singkat */}
          <div className="space-y-3">
            <Link
              href="/"
              className="text-[color:var(--navy)] font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              WEBLABS
            </Link>
            <p className="leading-relaxed">
              Jasa pembuatan landing page bisnis premium: formal, clean, cepat,
              dan SEO-friendly.
            </p>
          </div>

          {/* Navigasi utama */}
          <div>
            <h4 className="mb-2 font-semibold text-[color:var(--navy)]/80">
              Navigasi
            </h4>
            <ul className="space-y-1.5">
              {NAV_LINKS
                // kalau masih ada “Kontak” di constants, kita sembunyikan
                .filter((n) => n.label.toLowerCase() !== "kontak")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-[color:var(--gold)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="mb-2 font-semibold text-[color:var(--navy)]/80">
              Layanan
            </h4>
            <ul className="space-y-1.5">
              <li>Landing Page Premium</li>
              <li>Optimasi Performa</li>
              <li>SEO & Struktur Konten</li>
            </ul>
          </div>

          {/* Ikuti Kami */}
          {/* Ikuti Kami */}
          {/* Ikuti Kami */}
          <div>
            <h4 className="mb-2 font-semibold text-[color:var(--navy)]/80">
              Ikuti Kami
            </h4>
            <ul className="space-y-1.5">
              {Object.entries(SOCIALS)
                .filter(([_, url]) => url !== "#") // cuma tampil kalau ada link
                .map(([key, url]) => (
                  <li key={key}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[color:var(--gold)] transition-colors"
                    >
                      {toTitle(key)}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* garis pemisah */}
        <div className="my-8 border-t border-black/10" />

        {/* BARIS BAWAH */}
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-[12px] text-[color:var(--navy)]/60">
            © {year} WEBLABS. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12px]">
            <Link
              href="/privacy"
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[color:var(--navy)]/30">|</span>
            <Link
              href="/terms"
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              Terms of Service
            </Link>
            {/* ⬇️ Tambahan: Dukungan & Saran */}
            <span className="text-[color:var(--navy)]/30">|</span>
            <Link
              href="/dukungan"
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              Dukungan &amp; Saran
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/** Ubah 'linkedin' -> 'LinkedIn', 'x' -> 'X' */
function toTitle(key: string) {
  const map: Record<string, string> = {
    tiktok: "TikTok",
    instagram: "Instagram",
    github: "GitHub",
    linkedin: "LinkedIn",
    x: "X",
    telegram: "Telegram",
  };
  return map[key] ?? key.replace(/(^|\s)\S/g, (s) => s.toUpperCase());
}
