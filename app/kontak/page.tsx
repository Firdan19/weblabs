import type { Metadata } from "next";
import Link from "next/link";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Kontak | WEBLABS",
  description: "Form konsultasi & kontak WEBLABS.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href="/"
                className="text-[var(--navy)] hover:underline focus:underline outline-none"
              >
                Beranda
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-[var(--navy)]/70">Kontak Kami</li>
          </ol>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[var(--navy)]">Kontak Kami</h1>
          <p className="mt-2 text-[15px] text-[color:var(--navy)]/70 max-w-2xl">
            Konsultasi gratis—ceritakan kebutuhan landing page Anda. Kami balas cepat & tepat.
          </p>
        </div>

        {/* Form */}
        <ContactClient />

        {/* Email fallback */}
        <p className="mt-10 text-center text-[15px] text-[color:var(--navy)]/70">
          Atau email langsung:{" "}
          <a href="mailto:firdanwebpro@gmail.com" className="underline">
            firdanwebpro@gmail.com
          </a>
        </p>
      </section>
    </main>
  );
}
