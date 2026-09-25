// Identitas dan kontak website — ubah di sini saja,
// otomatis berubah di seluruh halaman.

export const SITE = {
  brand: "EKUINOX",
  brandFull: "Ekuinox Tour & Travel",
  legal: "PT Ekuinox Karya Bersama",
  tagline:
    "Penyelenggara Open Trip & Perjalanan Rombongan ke Kuala Lumpur, Genting Highlands, dan Melaka",
  // Keunggulan utama: tim berada langsung di Malaysia
  pitch:
    "Tim kami berada langsung di Malaysia — bukan mengatur dari jauh.",
  // Isi nomor WhatsApp dengan kode negara, tanpa tanda + atau spasi.
  // Contoh Malaysia: "60123456789" — contoh Indonesia: "6281234567890"
  whatsapp: "6282145023630",
  email: "ekuinox26@gmail.com",
  nav: [
    { href: "/", label: "Home" },
    { href: "/tentang", label: "Tentang Kami" },
    { href: "/#rencana", label: "Paket Tour" },
    { href: "/kota/kuala-lumpur", label: "Kuala Lumpur" },
    { href: "/kota/genting-highlands", label: "Genting" },
    { href: "/kota/melaka", label: "Melaka" },
    { href: "/mitra", label: "Armada" },
    { href: "/#daftar", label: "Kontak" },
  ],
};

export function waLink(pesan?: string) {
  const teks = encodeURIComponent(
    pesan ?? "Halo Ekuinox, saya ingin bertanya tentang paket tour 4H3M."
  );
  return `https://wa.me/${SITE.whatsapp}?text=${teks}`;
}
