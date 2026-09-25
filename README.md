# Ekuinox Tour & Travel

Website paket tour **4 Hari 3 Malam Kuala Lumpur, Genting Highlands & Melaka**
(kode paket EKX-4D3N) — Next.js, TypeScript, Tailwind CSS, Supabase.

Dioperasikan oleh PT Ekuinox Media Pariwisata.

## Menjalankan di komputer

```
npm install
npm run dev
```

Buka http://localhost:3000

## Yang perlu kamu isi

### 1. Nomor WhatsApp
Buka `lib/site.ts`, ganti nilai `whatsapp` dengan nomormu.
Format: kode negara tanpa tanda plus, contoh `60123456789`.

### 2. Foto KLCC untuk halaman depan
Taruh foto lanskap di `public/img/hero-klcc.jpg` — otomatis terpakai.
Petunjuk lengkap ada di `public/img/GANTI-FOTO-HERO.txt`.

### 3. Logo resmi Ekuinox
Komponen `components/Logo.tsx` saat ini memakai gambar sementara
(dua cincin berpotongan, gaya outline, warna #F0A04B) yang meniru
logo resmimu. Kalau file SVG asli sudah siap:

1. Simpan di `public/img/logo.svg`
2. Ganti isi `components/Logo.tsx` dengan `<img src="/img/logo.svg" />`

## Struktur

- `lib/site.ts` — nama brand, tagline, kontak, menu navigasi
- `lib/itinerary.ts` — rencana perjalanan 4 hari
- `lib/data.ts` — daftar kota dan destinasi
- `app/page.tsx` — halaman depan
- `app/kota/[slug]/page.tsx` — halaman per kota
- `app/mitra/page.tsx` — halaman armada mitra

## Deploy ke Vercel

1. Push ke GitHub
2. Vercel -> Add New Project -> pilih repo -> Deploy
