"use client";

import { useState } from "react";

type FormState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export default function Contact() {
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // basic client validation
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setState({ status: "error", message: "Nama, Email, dan Pesan wajib diisi." });
      return;
    }

    setState({ status: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          wa: String(formData.get("wa") || ""),
          subject: String(formData.get("subject") || "Konsultasi"),
          budget: String(formData.get("budget") || ""),
          timeline: String(formData.get("timeline") || ""),
          message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Gagal mengirim pesan.");
      }

      form.reset();
      setState({ status: "success", message: "Terima kasih! Pesan Anda sudah terkirim." });
    } catch (err: any) {
      setState({ status: "error", message: err?.message || "Terjadi kesalahan." });
    }
  }

  // Tailwind helpers
  const labelCls = "block text-sm text-[color:var(--navy)]/70 mb-2";
  const inputCls =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] text-[var(--navy)] " +
    "placeholder:text-black/40 outline-none focus:ring-2 focus:ring-[var(--navy)]/20 focus:border-black/20 transition";
  const col = "flex flex-col gap-6";

  return (
    <section id="kontak" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-tight text-[var(--navy)]">
            Hubungi Kami
          </h2>
          <p className="mt-3 text-[15px] text-[color:var(--navy)]/70">
            Konsultasi gratis—ceritakan kebutuhan landing page Anda.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-black/5 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className={col}>
              <div>
                <label className={labelCls} htmlFor="name">Nama*</label>
                <input id="name" name="name" className={inputCls} placeholder="Nama lengkap" />
              </div>

              <div>
                <label className={labelCls} htmlFor="email">Email*</label>
                <input id="email" name="email" type="email" className={inputCls} placeholder="email@domain.com" />
              </div>

              <div>
                <label className={labelCls} htmlFor="wa">WhatsApp</label>
                <input id="wa" name="wa" className={inputCls} placeholder="+62 8xx xxxx xxxx" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls} htmlFor="budget">Perkiraan Budget</label>
                  <select id="budget" name="budget" className={inputCls}>
                    <option value="">Pilih…</option>
                    <option value="<5jt">&lt; Rp 5 juta</option>
                    <option value="5-10jt">Rp 5–10 juta</option>
                    <option value="10-20jt">Rp 10–20 juta</option>
                    <option value=">20jt">&gt; Rp 20 juta</option>
                    <option value="belum-tahu">Belum tahu</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="timeline">Target Waktu</label>
                  <select id="timeline" name="timeline" className={inputCls}>
                    <option value="">Pilih…</option>
                    <option value="1-2w">1–2 minggu</option>
                    <option value="3-4w">3–4 minggu</option>
                    <option value=">1m">&gt; 1 bulan</option>
                    <option value="fleksibel">Fleksibel</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className={col}>
              <div>
                <label className={labelCls} htmlFor="subject">Subjek</label>
                <input id="subject" name="subject" className={inputCls} placeholder="Konsultasi pembuatan landing page" />
              </div>

              <div className="flex-1">
                <label className={labelCls} htmlFor="message">Pesan*</label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  className={inputCls + " resize-none"}
                  placeholder="Ceritakan bisnis & kebutuhan Anda…"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <p
                  className={
                    state.status === "error"
                      ? "text-[13px] text-red-600"
                      : state.status === "success"
                      ? "text-[13px] text-emerald-600"
                      : "text-[13px] text-[color:var(--navy)]/60"
                  }
                  role="status"
                  aria-live="polite"
                >
                  {state.status === "loading"
                    ? "Mengirim…"
                    : state.status === "success"
                    ? state.message
                    : state.status === "error"
                    ? state.message
                    : "Kami balas via email/WA secepatnya."}
                </p>

                <button
                  type="submit"
                  disabled={state.status === "loading"}
                  className="inline-flex items-center rounded-full bg-[var(--navy)] px-5 py-3 text-white text-[15px] font-medium disabled:opacity-60 hover:bg-[var(--navy)]/90 transition"
                >
                  {state.status === "loading" ? "Mengirim…" : "Kirim Pesan"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Info alternatif */}
        <div className="mt-6 text-center text-[14px] text-[color:var(--navy)]/60">
          Atau email langsung: <a className="underline hover:text-[var(--navy)]" href="mailto:firdanwebpro@gmail.com">firdanwebpro@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
