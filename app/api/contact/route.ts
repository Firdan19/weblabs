// app/api/contact/route.ts
import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  wa?: string;
  subject?: string;
  budget?: string;
  timeline?: string;
  message: string;
};

// Optional: kirim email via Resend (isi env di bawah)
const RESEND_API_KEY = process.env.RESEND_API_KEY;        // "re_***"
const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL;      // tujuan, mis. "firdanwebpro@gmail.com"
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;  // pengirim, mis. "no-reply@weblabs.id"

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Partial<Payload>;
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Field wajib kosong." }, { status: 400 });
    }

    // Kalau ada kredensial, kirim via Resend
    if (RESEND_API_KEY && RESEND_TO_EMAIL && RESEND_FROM_EMAIL) {
      const subject = `[WEBLABS] ${data.subject || "Konsultasi Baru"} – ${name}`;

      const html = `
        <h2>Konsultasi Baru</h2>
        <p><b>Nama:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        ${data.wa ? `<p><b>WhatsApp:</b> ${escapeHtml(data.wa || "")}</p>` : ""}
        ${data.budget ? `<p><b>Budget:</b> ${escapeHtml(data.budget || "")}</p>` : ""}
        ${data.timeline ? `<p><b>Timeline:</b> ${escapeHtml(data.timeline || "")}</p>` : ""}
        <p><b>Pesan:</b></p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Consolas,monospace;">${escapeHtml(
          data.message || ""
        )}</pre>
      `;

      const sent = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: RESEND_FROM_EMAIL,
          to: RESEND_TO_EMAIL,
          subject,
          html,
        }),
      });

      if (!sent.ok) {
        const err = await sent.json().catch(() => ({}));
        console.error("Resend error:", err);
        // tetap 200 supaya UX mulus; boleh diganti 500 kalau mau strict
      }
    } else {
      // Fallback: log ke server (development friendly)
      console.log("[CONTACT] New message:", data);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// util aman untuk HTML
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
