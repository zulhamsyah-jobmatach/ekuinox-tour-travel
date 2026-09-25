// Data destinasi bawaan (fallback), dipakai kalau database Supabase
// belum diisi / belum aktif.
//
// STRATEGI SAAT INI: fokus dulu ke Kuala Lumpur & Melaka (sesuai paket
// perjalanan 4 hari 3 malam). Kota lain ditampilkan sebagai "Segera Hadir"
// supaya pengunjung tahu rencana ke depannya tanpa kita perlu buru-buru
// membuat kontennya sekarang.

export type Destination = {
  id: number;
  city_slug: string;
  kind: string;
  name: string;
  description: string;
  tip: string;
};

export type City = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  active: boolean; // false = tampil sebagai "Segera Hadir", tidak bisa diklik
  photo?: string;
};

export const CITIES: City[] = [
  {
    slug: "kuala-lumpur",
    name: "Kuala Lumpur",
    tag: "Ibu Kota • Kota Metropolitan",
    description:
      "Jantung Malaysia yang memadukan gedung pencakar langit modern, kuliner kaki lima legendaris, dan warisan budaya Melayu, Tionghoa, dan India.",
    active: true,
    photo: "/img/kuala-lumpur.jpg",
  },
  {
    slug: "melaka",
    name: "Melaka",
    tag: "Kota Warisan Dunia UNESCO",
    description:
      "Kota bersejarah bekas kesultanan dan koloni Portugis, Belanda, dan Inggris. Bagian dari paket perjalanan 4 hari 3 malam kami.",
    active: true,
    photo: "/img/melaka.jpg",
  },
  {
    slug: "penang",
    name: "Penang",
    tag: "Pulau Mutiara • Surga Kuliner",
    description: "Segera hadir — menyusul setelah paket Kuala Lumpur & Melaka berjalan.",
    active: false,
  },
  {
    slug: "langkawi",
    name: "Langkawi",
    tag: "Kepulauan Tropis • Bebas Pajak",
    description: "Segera hadir — menyusul setelah paket Kuala Lumpur & Melaka berjalan.",
    active: false,
  },
  {
    slug: "cameron-highlands",
    name: "Cameron Highlands",
    tag: "Dataran Tinggi • Udara Sejuk",
    description: "Segera hadir — menyusul setelah paket Kuala Lumpur & Melaka berjalan.",
    active: false,
  },
  {
    slug: "genting-highlands",
    name: "Genting Highlands",
    tag: "Kota di Atas Awan",
    description:
      "Resor di ketinggian 1.800 mdpl, sekitar satu jam dari Kuala Lumpur. Perhentian pertama pada hari kedua perjalanan.",
    active: true,
    photo: "/img/genting.jpg",
  },
];

export const DESTINATIONS: Destination[] = [
  // ---------- Kuala Lumpur ----------
  { id: 1, city_slug: "kuala-lumpur", kind: "Ikon Kota", name: "Menara Kembar Petronas", description: "Menara kembar tertinggi di dunia dan simbol Malaysia. Naik ke Skybridge di lantai 41 atau dek observasi lantai 86.", tip: "Beli tiket online jauh-jauh hari — sering habis. Foto terbaik dari KLCC Park saat malam." },
  { id: 2, city_slug: "kuala-lumpur", kind: "Wisata Religi", name: "Batu Caves", description: "Gua kapur dengan kuil Hindu dan patung Dewa Murugan setinggi 42 meter, plus 272 anak tangga warna-warni.", tip: "Datang pagi sebelum jam 9 supaya tidak panas dan ramai. Hati-hati dengan monyet!" },
  { id: 3, city_slug: "kuala-lumpur", kind: "Pemandangan", name: "Menara KL (KL Tower)", description: "Dek observasi Sky Deck dan Sky Box berlantai kaca — pemandangan 360 derajat kota.", tip: "Datang menjelang sunset untuk melihat kota berubah dari siang ke malam." },
  { id: 4, city_slug: "kuala-lumpur", kind: "Sejarah", name: "Dataran Merdeka", description: "Lapangan bersejarah tempat kemerdekaan Malaysia diproklamasikan tahun 1957.", tip: "Gabungkan dengan kunjungan ke Masjid Jamek dan River of Life saat malam." },
  { id: 5, city_slug: "kuala-lumpur", kind: "Kuliner", name: "Jalan Alor", description: "Surga kuliner malam di Bukit Bintang: sate, char kway teow, seafood, hingga durian.", tip: "Buka mulai sore. Coba ayam sate Wong Ah Wah yang legendaris." },
  { id: 6, city_slug: "kuala-lumpur", kind: "Belanja & Budaya", name: "Petaling Street (Chinatown)", description: "Pasar jalanan ikonik untuk oleh-oleh, kuil tua, dan kafe hipster.", tip: "Mampir ke Kwai Chai Hong — lorong mural yang instagramable." },
  { id: 7, city_slug: "kuala-lumpur", kind: "Wisata Religi", name: "Thean Hou Temple", description: "Salah satu kuil Tionghoa terbesar di Asia Tenggara dengan ratusan lampion merah.", tip: "Paling cantik saat Tahun Baru Imlek — seluruh kuil dihiasi lampion." },
  { id: 8, city_slug: "kuala-lumpur", kind: "Keluarga", name: "KLCC Park & Aquaria", description: "Taman kota 50 hektar dengan air mancur menari, plus akuarium raksasa Aquaria KLCC.", tip: "Pertunjukan air mancur Lake Symphony gratis setiap malam mulai jam 8." },
  { id: 9, city_slug: "kuala-lumpur", kind: "Aktivitas Malam", name: "Bus Atap Terbuka (Hop-On Hop-Off)", description: "Keliling kota malam hari dengan bus tingkat beratap terbuka, melewati Petronas, KL Tower, dan Dataran Merdeka yang bermandikan lampu.", tip: "Cocok untuk malam pertama tiba di KL — cara santai berkenalan dengan kota tanpa harus jalan kaki jauh." },

  // ---------- Melaka ----------
  { id: 10, city_slug: "melaka", kind: "Ikon Kota", name: "Jonker Street", description: "Jalan utama pecinan Melaka, penuh toko antik, kafe, dan galeri. Pasar malam meriah tiap akhir pekan.", tip: "Datang Jumat–Minggu malam untuk pasar malamnya. Coba cendol durian!" },
  { id: 11, city_slug: "melaka", kind: "Sejarah", name: "Stadthuys & Red Square", description: "Bangunan merah bekas kantor gubernur Belanda dari tahun 1650, kini museum sejarah.", tip: "Naik becak hias (trishaw) warna-warni dari sini untuk keliling kota tua." },
  { id: 12, city_slug: "melaka", kind: "Sejarah", name: "A Famosa", description: "Reruntuhan benteng Portugis dari tahun 1511 — sisa bangunan Eropa tertua di Asia.", tip: "Lanjutkan naik ke Bukit St. Paul di belakangnya, hanya 5 menit jalan kaki." },
  { id: 13, city_slug: "melaka", kind: "Wisata Religi", name: "Masjid Selat Melaka", description: "Masjid terapung yang seolah mengambang di atas Selat Melaka.", tip: "Datang saat maghrib — siluet masjid dengan langit oranye luar biasa indah." },
  { id: 14, city_slug: "melaka", kind: "Aktivitas", name: "Melaka River Cruise", description: "Naik perahu menyusuri Sungai Melaka melewati mural warna-warni dan bangunan tua.", tip: "Pilih cruise malam hari — tepi sungai dihiasi lampu warna-warni." },
  { id: 15, city_slug: "melaka", kind: "Kuliner", name: "Kuliner Nyonya & Chicken Rice Ball", description: "Masakan Peranakan: ayam pongteh, laksa nyonya, dan nasi ayam berbentuk bola.", tip: "Antri di Hoe Kee atau Chung Wah untuk chicken rice ball paling terkenal." },

  { id: 16, city_slug: "kuala-lumpur", kind: "Belanja", name: "Pavilion Bukit Bintang", description: "Pusat perbelanjaan utama Kuala Lumpur dengan deretan gerai internasional dan area kuliner.", tip: "Terhubung jalan kaki ke Jalan Alor — cocok digabung dalam satu malam." },
  { id: 17, city_slug: "kuala-lumpur", kind: "Oleh-Oleh", name: "Haniffa", description: "Tujuan belanja oleh-oleh favorit wisatawan Indonesia, berdiri sejak 1962: kain, busana, dan pernak-pernik khas.", tip: "Sisakan tenaga dan ruang koper — biasanya belanja di sini paling banyak." },

  // ---------- Genting Highlands ----------
  { id: 18, city_slug: "genting-highlands", kind: "Ikon", name: "Awana SkyWay", description: "Kereta gantung sepanjang 5,6 km menembus awan menuju puncak Genting.", tip: "Pilih gondola berlantai kaca untuk sensasi melayang di atas hutan." },
  { id: 19, city_slug: "genting-highlands", kind: "Belanja", name: "SkyAvenue", description: "Mal besar di puncak dengan restoran, gerai kopi, dan pusat hiburan.", tip: "Tempat berlindung paling nyaman kalau kabut turun atau hujan." },
  { id: 20, city_slug: "genting-highlands", kind: "Wisata Religi", name: "Chin Swee Caves Temple", description: "Kuil Tionghoa di lereng gunung dengan pagoda sembilan lantai, kerap diselimuti kabut.", tip: "Berada tepat di stasiun tengah SkyWay — bisa mampir tanpa memutar." },
  { id: 21, city_slug: "genting-highlands", kind: "Keluarga", name: "Genting SkyWorlds", description: "Taman hiburan bertema film dengan wahana kelas dunia di udara terbuka.", tip: "Perlu tiket terpisah dan waktu setengah hari — pertimbangkan sebagai pilihan tambahan." },
];
