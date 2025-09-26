"use client";
import { useState } from "react";

export default function ContactClient() {
  const [form, setForm] = useState({
    nama: "",
    subjek: "Konsultasi pembuatan landing page",
    email: "",
    whatsapp: "",
    budget: "",
    waktu: "",
    pesan: "",
  });

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-md">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Nama */}
        <div>
          <label className="block text-sm font-medium text-[var(--navy)] mb-1">Nama*</label>
          <input
            type="text"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            placeholder="Nama lengkap"
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-[15px] outline-none focus:border-[var(--navy)]"
          />
        </div>

        {/* Subjek */}
        <div>
          <label className="block text-sm font-medium text-[var(--navy)] mb-1">Subjek</label>
          <input
            type="text"
            value={form.subjek}
            onChange={(e) => setForm({ ...form, subjek: e.target.value })}
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-[15px] outline-none focus:border-[var(--navy)]"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[var(--navy)] mb-1">Email*</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="email@domain.com"
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-[15px] outline-none focus:border-[var(--navy)]"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-sm font-medium text-[var(--navy)] mb-1">WhatsApp</label>
          <input
            type="tel"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            placeholder="+62 8xx xxxx xxxx"
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-[15px] outline-none focus:border-[var(--navy)]"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-[var(--navy)] mb-1">Perkiraan Budget</label>
          <select
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-[15px] outline-none focus:border-[var(--navy)]"
          >
            <option value="">Pilih...</option>
            <option value="5-10">5–10 jt</option>
            <option value="10-20">10–20 jt</option>
            <option value="20+">20 jt+</option>
          </select>
        </div>

        {/* Target waktu */}
        <div>
          <label className="block text-sm font-medium text-[var(--navy)] mb-1">Target Waktu</label>
          <select
            value={form.waktu}
            onChange={(e) => setForm({ ...form, waktu: e.target.value })}
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-[15px] outline-none focus:border-[var(--navy)]"
          >
            <option value="">Pilih...</option>
            <option value="2-3">2–3 minggu</option>
            <option value="1-2">1–2 bulan</option>
            <option value="3+">3 bulan+</option>
          </select>
        </div>

        {/* Pesan (full width) */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[var(--navy)] mb-1">Pesan*</label>
          <textarea
            rows={5}
            value={form.pesan}
            onChange={(e) => setForm({ ...form, pesan: e.target.value })}
            placeholder="Ceritakan bisnis & kebutuhan Anda..."
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-[15px] outline-none focus:border-[var(--navy)]"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-5 flex items-center justify-end">
        <button
          type="button"
          className="rounded-full bg-[var(--navy)] px-6 py-2.5 text-sm font-medium text-white hover:bg-[var(--navy)]/90 transition"
        >
          Kirim Pesan
        </button>
      </div>
    </div>
  );
}
