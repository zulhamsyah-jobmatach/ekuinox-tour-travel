// Rencana perjalanan resmi — Ekuinox Tour & Travel 4H3M.
// Inilah produk utama; ditampilkan di halaman depan.

export type Stop = {
  time: string;
  place: string;
  detail?: string;
};

export type Day = {
  day: number;
  title: string;
  area: string;
  photo: string;
  photoAlt: string;
  stops: Stop[];
};

export const ITINERARY = {
  code: "EKX-4D3N",
  title: "Kuala Lumpur, Genting & Melaka",
  duration: "4 Hari 3 Malam",
  route: ["KLIA", "Kuala Lumpur", "Genting", "Melaka", "KLIA"],
  capacity: "30+ Peserta / 1 Bus",
  intro:
    "Empat hari menyusuri Kuala Lumpur, naik ke Genting Highlands, dan menyeberang ke kota tua Melaka. Dijemput sejak turun dari pesawat, diantar sampai kembali ke bandara.",
  days: [
    {
      day: 1,
      title: "Tiba & Malam Pertama",
      area: "Kuala Lumpur",
      photo: "/img/hop-on-hop-off.jpg",
      photoAlt: "Bus KL Hop-On Hop-Off beratap terbuka",
      stops: [
        {
          time: "Siang",
          place: "Tiba di KLIA",
          detail: "Dijemput langsung oleh bus Kiffah di terminal kedatangan.",
        },
        { time: "Sore", place: "Check-in hotel & istirahat" },
        {
          time: "Malam",
          place: "Hop-On Hop-Off Bus KL",
          detail:
            "Keliling kota beratap terbuka menikmati suasana malam Kuala Lumpur.",
        },
      ],
    },
    {
      day: 2,
      title: "Dataran Tinggi & Jantung Kota",
      area: "Genting — Kuala Lumpur",
      photo: "/img/genting.jpg",
      photoAlt: "Kereta gantung Awana SkyWay di atas awan Genting Highlands",
      stops: [
        {
          time: "Pagi",
          place: "Genting Highlands",
          detail:
            "Berangkat awal. Udara sejuk 1.800 mdpl dan pemandangan di atas awan.",
        },
        { time: "Siang", place: "Batu Caves", detail: "Searah saat turun dari Genting." },
        { time: "Siang", place: "KLCC & Menara Petronas" },
        { time: "Sore", place: "Dataran Merdeka" },
        { time: "Sore", place: "Pavilion Bukit Bintang" },
        {
          time: "Malam",
          place: "Jalan Alor",
          detail: "Wisata kuliner malam — sate, seafood, hingga durian.",
        },
      ],
    },
    {
      day: 3,
      title: "Kota Tua & Oleh-Oleh",
      area: "Melaka — Kuala Lumpur",
      photo: "/img/melaka.jpg",
      photoAlt: "Dataran Merah Melaka dengan becak hias",
      stops: [
        {
          time: "Pagi",
          place: "Berangkat ke Melaka",
          detail: "Sekitar 2 jam perjalanan dari Kuala Lumpur.",
        },
        {
          time: "Siang",
          place: "Jelajah Melaka",
          detail: "Jonker Street, Stadthuys, A Famosa, dan Masjid Selat Melaka.",
        },
        {
          time: "18.00",
          place: "Kembali di Kuala Lumpur",
          detail: "Dijadwalkan sudah tiba kembali sore hari.",
        },
        {
          time: "Malam",
          place: "Haniffa — belanja oleh-oleh",
          detail: "Setelahnya acara bebas.",
        },
      ],
    },
    {
      day: 4,
      title: "Kepulangan",
      area: "Kuala Lumpur — KLIA",
      photo: "/img/klia.jpg",
      photoAlt: "Terminal KLIA saat matahari terbenam",
      stops: [
        { time: "Pagi", place: "Sarapan & checkout hotel" },
        {
          time: "Siang",
          place: "Diantar ke KLIA",
          detail: "Untuk penerbangan pulang.",
        },
      ],
    },
  ] as Day[],
};
