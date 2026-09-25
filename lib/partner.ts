// Profil mitra transportasi.
//
// CATATAN PENTING: halaman mitra ini adalah PRATINJAU untuk bahan proposal.
// Jangan publikasikan sebagai "mitra resmi" sebelum ada kesepakatan
// tertulis dengan pihak Kiffah.
//
// Foto asli armada: minta langsung dari pihak Kiffah, lalu simpan di
// folder /public/img/ dengan nama file sesuai daftar di bawah
// (bus-kiffah.jpg sudah ada; van.jpg dan mpv.jpg belum). Selama foto
// belum ada, website otomatis menampilkan ilustrasi pengganti.

export const PARTNER = {
  name: "Kiffah Transport Logistic",
  group: "Kiffah Group of Companies",
  since: 2000,
  base: "Kuala Lumpur",
  slogan: "Your Satisfaction Our Aspiration",
  website: "https://kiffahtransportlogistic.com/",
  description:
    "Beroperasi sejak tahun 2000, Kiffah Group telah melayani perjalanan rombongan, trip korporat, dan lawatan resmi di seluruh Malaysia. Berpusat di Kuala Lumpur dengan armada yang terawat dan pengemudi berpengalaman.",
  hero: "/img/bus-kiffah.jpg",
  fleet: [
    {
      id: "bus-44",
      name: "Bus Single Deck",
      capacity: "±44 kursi",
      photo: "/img/bus-kiffah.jpg",
      ideal: "Rombongan besar & paket 4H3M kami (30+ peserta)",
      features: ["AC & kursi recliner", "Bagasi luas", "Pengemudi berpengalaman"],
    },
    {
      id: "van",
      name: "Van",
      capacity: "±10–14 kursi",
      photo: "/img/van.jpg",
      ideal: "Rombongan kecil & antar-jemput bandara",
      features: ["Lincah di jalan kota", "Hemat untuk grup kecil", "Fleksibel"],
    },
    {
      id: "mpv",
      name: "MPV / SUV",
      capacity: "±4–6 kursi",
      photo: "/img/mpv.jpg",
      ideal: "Keluarga & perjalanan privat",
      features: ["Nyaman untuk keluarga", "Airport transfer", "Perjalanan privat"],
    },
  ],
};
