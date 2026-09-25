import Link from "next/link";
import { SITE, waLink } from "@/lib/site";

export const metadata = {
  title: "Tentang Kami — Ekuinox Tour & Travel",
  description:
    "Kenapa Ekuinox ada, siapa mitra transportasi kami, dan apa yang kami pegang.",
};

export default function TentangPage() {
  return (
    <main>
      {/* ---------- Hero berfoto ---------- */}
      <section className="relative isolate min-h-[52vh] overflow-hidden sm:min-h-[62vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/melaka.jpg"
          alt="Dataran Merah, Melaka"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/75 to-midnight/40"
          aria-hidden="true"
        />
        <div className="mx-auto flex min-h-[52vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[62vh]">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
            Tentang Kami
          </p>
          <h1 className="mt-5 font-display text-[2.2rem] font-extrabold leading-[1.05] tracking-tight text-paper drop-shadow-lg sm:text-6xl">
            Ekuinox Tour &amp; Travel
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-paper/85">
            Penyelenggara open trip dan perjalanan rombongan ke Kuala Lumpur,
            Genting Highlands, dan Melaka &mdash; dijalankan langsung oleh
            tim yang tinggal dan bekerja di Malaysia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/#rencana"
              className="bg-paper px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-midnight transition hover:bg-brand"
            >
              Lihat Paket Tour
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-midnight transition hover:bg-paper"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Kenapa kami ada (foto + teks) ---------- */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div className="aspect-[4/3] overflow-hidden bg-dusk">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/klia.jpg"
              alt="Terminal KLIA saat matahari terbenam"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              Yang kami berikan
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-paper sm:text-3xl">
              Waktu yang Cukup, Kenangan yang Terekam
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-mist">
              Keluhan yang paling sering terdengar dari perjalanan rombongan
              adalah jadwal yang terlalu padat. Rombongan tiba di sebuah
              destinasi, baru sempat berfoto sebentar, lalu sudah harus
              kembali ke bus menuju tempat berikutnya. Banyak tempat memang
              tercentang di daftar, tetapi sedikit yang benar-benar sempat
              dinikmati.
            </p>

            <div className="mt-7 space-y-6">
              <div className="border-l-2 border-brand pl-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                  01
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-paper">
                  Jadwal yang dihitung, bukan ditumpuk
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mist">
                  Ekuinox menyusun itinerary berdasarkan waktu tempuh yang
                  sebenarnya — termasuk waktu antre, makan, dan istirahat.
                  Kami memilih memasukkan lebih sedikit destinasi dalam satu
                  hari agar setiap perhentian mendapat waktu yang layak.
                  Tujuan kami sederhana: peserta pulang dengan perasaan
                  sudah menikmati, bukan sekadar sudah mengunjungi.
                </p>
              </div>

              <div className="border-l-2 border-brand pl-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                  02
                </p>
                <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight text-paper">
                  Dokumentasi profesional untuk setiap peserta
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mist">
                  Setiap keberangkatan didampingi tim dokumentasi kami.
                  Peserta tidak perlu bergantian memegang kamera atau
                  menitipkan ponsel kepada orang asing. Seluruh hasil foto
                  perjalanan diserahkan kepada peserta setelah trip selesai
                  — sehingga yang tersisa bukan hanya ingatan, tetapi juga
                  dokumentasi yang layak disimpan dan dibagikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Yang kami pegang ---------- */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
          Yang kami pegang
        </p>
        <div className="mt-6 border-t border-harbour/40">
          {[
            {
              n: "01",
              t: "Berbasis langsung di Malaysia",
              d: "Tim kami tinggal dan bekerja di Malaysia, bukan mengatur dari kantor di negara lain. Rute yang kami tulis adalah rute yang kami kenal langsung — dan itu alasan rombongan bisa dijemput tepat waktu di KLIA, jam berapa pun pesawatnya mendarat.",
            },
            {
              n: "02",
              t: "Mitra yang jelas, bukan calo",
              d: "Kami bekerja sama langsung dengan operator transportasi dan penginapan, dengan kesepakatan tertulis — bukan sekadar janji lisan di lapangan.",
            },
            {
              n: "03",
              t: "Skala kecil dulu, baru berkembang",
              d: "Kami sengaja memulai dari satu rute dan satu bus rombongan dalam sekali jalan, supaya setiap peserta benar-benar terurus, sebelum memperluas ke kota lain.",
            },
          ].map((v) => (
            <div
              key={v.n}
              className="grid gap-x-8 gap-y-2 border-b border-harbour/40 py-7 sm:grid-cols-[3.5rem_1fr]"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-brand">
                {v.n}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-paper">
                  {v.t}
                </h3>
                <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-mist">
                  {v.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Mitra: Kiffah (teks + foto) ---------- */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div className="order-2 sm:order-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              Mitra transportasi
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-paper sm:text-3xl">
              Diantar oleh Kiffah Transport Logistic
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-mist">
              Setiap perjalanan Ekuinox menggunakan armada dari{" "}
              <span className="text-paper">Kiffah Transport Logistic</span> —
              operator yang sudah beroperasi lebih dari{" "}
              <span className="text-brand">20 tahun</span>, sejak tahun 2000,
              melayani perjalanan rombongan, trip korporat, hingga lawatan
              resmi di seluruh Malaysia.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-mist">
              Bagi kami, usia operasional sepanjang itu bukan sekadar angka
              di atas kertas. Itu berarti rute yang sudah dikenal luar
              kepala, pengemudi yang terbiasa membawa rombongan besar tepat
              waktu, dan armada yang dirawat dengan standar yang sudah
              teruji bertahun-tahun — bukan operator baru yang masih belajar
              dari kesalahan.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-mist">
              Kami memilih mitra berdasarkan rekam jejak, bukan harga
              termurah.
            </p>
            <Link
              href="/mitra"
              className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-brand hover:underline"
            >
              Lihat armada lengkap
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="order-1 aspect-[4/3] overflow-hidden bg-dusk sm:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/bus-kiffah.jpg"
              alt="Bus Kiffah Transport Logistic"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------- Tujuan lebih besar ---------- */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="bg-dusk p-8 sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-brand">
            Lebih dari sekadar tour
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-paper/85">
            Ekuinox dibangun dengan pandangan jangka panjang. Sebagian dari
            hasil setiap perjalanan yang kami jalankan diputar kembali untuk
            mengembangkan rute dan layanan berikutnya — dan sebagian lagi
            disisihkan untuk tujuan sosial yang lebih besar dari bisnis itu
            sendiri. Kami percaya sebuah usaha kecil pun bisa punya arah yang
            jauh melampaui untung-rugi tahun berjalan.
          </p>
        </div>
      </section>

      {/* ---------- Hubungi kami ---------- */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex flex-col items-start gap-5 bg-paper p-8 text-midnight sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-midnight/50">
              Hubungi Kami
            </p>
            <h2 className="mt-2 font-display text-xl font-extrabold tracking-tight sm:text-2xl">
              Lihat paket tour kami, atau tanya langsung.
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link
              href="/#rencana"
              className="bg-midnight px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-paper transition hover:bg-harbour"
            >
              Lihat Paket Tour
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-midnight px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-midnight transition hover:bg-midnight hover:text-paper"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
