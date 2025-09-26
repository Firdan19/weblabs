import { NextResponse } from 'next/server';

// Penyimpanan sederhana di memori (reset saat server restart).
// Untuk produksi, ganti ke DB/Sheets/Notion sesuai kebutuhan.
const _store: any[] = [];

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validasi dasar
    if (data?.type === 'donasi') {
      if (!data.nama || typeof data.nominal !== 'number') {
        return NextResponse.json({ ok: false, error: 'Data donasi tidak valid' }, { status: 400 });
      }
    } else if (data?.type === 'saran') {
      if (!data.nama || !data.email || !data.pesan) {
        return NextResponse.json({ ok: false, error: 'Data saran tidak valid' }, { status: 400 });
      }
    } else {
      return NextResponse.json({ ok: false, error: 'Tipe tidak dikenali' }, { status: 400 });
    }

    _store.push({ ...data, ts: Date.now() });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}
