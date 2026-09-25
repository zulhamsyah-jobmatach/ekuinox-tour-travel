import Link from "next/link";
import { getCities } from "@/lib/queries";
import { ITINERARY } from "@/lib/itinerary";
import { SITE, waLink } from "@/lib/site";
import Hero from "@/components/Hero";

export default async function HomePage() {
  const cities = await getCities();
  const aktif = cities.filter((c) => c.active);
  const menyusul = cities.filter((c) => !c.active);

  return (
    <main>
      <Hero />

      {/* ---------- Kartu ringkas ---------- */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-6">
        <div className="grid divide-y divide-midnight/15 bg-paper shadow-2xl text-midnight sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {[
            ["Kode paket", ITINERARY.code],
            ["Durasi", ITINERARY.duration],
            ["Kapasitas", ITINERARY.capacity],
            ["Transportasi", "Bus Kiffah"],
          ].map(([k, v]) => (
            <div key={k} className="px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-midnight/50">
                {k}
              </p>
              <p className="mt-1.5 font-mono text-[14px] font-medium">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Rencana harian ---------- */}
      <section id="rencana" className="mx-auto mt-24 max-w-6xl scroll-mt-8 px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
          Rencana perjalanan
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-paper sm:text-5xl">
          Hari demi hari
        </h2>

        <div className="mt-12 space-y-16">
          {ITINERARY.days.map((d, idx) => (
            <div
              key={d.day}
              className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12"
            >
              {/* foto */}
              <div
                className={`relative overflow-hidden bg-dusk ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-[4/3] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={d.photo}
                    alt={d.photoAlt}
                    className={`h-full w-full ${
                      d.photo.endsWith(".png")
                        ? "bg-paper object-contain p-6"
                        : "object-cover"
                    }`}
                  />
                </div>
                <div className="absolute left-0 top-0 bg-brand px-4 py-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-midnight">
                    Hari {String(d.day).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* daftar perhentian */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-paper sm:text-3xl">
                  {d.title}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ember">
                  {d.area}
                </p>

                <ol className="mt-7 border-l border-harbour/50 pl-7">
                  {d.stops.map((s, i) => (
                    <li key={i} className="relative pb-6 last:pb-0">
                      <span
                        className="absolute -left-[33px] top-2 h-2.5 w-2.5 rounded-full bg-lamp ring-4 ring-midnight"
                        aria-hidden="true"
                      />
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">
                        {s.time}
                      </p>
                      <p className="mt-1 font-display text-lg font-bold tracking-tight text-paper sm:text-xl">
                        {s.place}
                      </p>
                      {s.detail && (
                        <p className="mt-1 max-w-md text-[14px] leading-relaxed text-mist">
                          {s.detail}
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Kota ---------- */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
          Kota yang disinggahi
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {aktif.map((city) => (
            <Link
              key={city.slug}
              href={`/kota/${city.slug}`}
              className="group relative isolate flex min-h-[19rem] flex-col justify-end overflow-hidden bg-dusk p-6"
            >
              {city.photo && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={city.photo}
                    alt={city.name}
                    className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/70 to-transparent"
                    aria-hidden="true"
                  />
                </>
              )}
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-lamp">
                {city.tag}
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-paper">
                {city.name}
              </h3>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/70 group-hover:text-brand">
                Lihat destinasi &rarr;
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Armada ---------- */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <Link href="/mitra" className="group block bg-dusk">
          <div className="livery" />
          <div className="grid gap-8 p-8 sm:grid-cols-[1fr_16rem] sm:items-center">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lamp">
                Armada
              </p>
              <h2 className="mt-3 max-w-lg font-display text-2xl font-bold leading-tight tracking-tight text-paper sm:text-3xl">
                Dijemput dan diantar bus Kiffah &mdash; operator yang mengangkut
                rombongan sejak tahun 2000
              </h2>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-mist group-hover:text-brand">
                Kenali armada &rarr;
              </p>
            </div>
            <div className="overflow-hidden bg-paper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/bus-kiffah.jpg"
                alt="Bus single deck Kiffah Group of Companies"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Link>
      </section>

      {/* ---------- Kontak ---------- */}
      <section id="daftar" className="mx-auto mt-20 max-w-6xl scroll-mt-8 px-6">
        <div className="bg-paper px-8 py-10 text-midnight sm:px-12 sm:py-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-midnight/50">
            Pendaftaran
          </p>
          <h2 className="mt-3 max-w-xl font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Satu bus, tiga puluh kursi.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-midnight/75">
            Keberangkatan dijadwalkan setelah kuota peserta terpenuhi. Hubungi
            kami untuk tanggal yang tersedia dan rincian biaya.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-midnight px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-paper transition hover:bg-harbour"
            >
              Tanya via WhatsApp
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="border border-midnight px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-midnight transition hover:bg-midnight hover:text-paper"
            >
              Kirim Email
            </a>
          </div>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-midnight/45">
            Isi nomor WhatsApp kamu di lib/site.ts
          </p>
        </div>
      </section>

      {/* ---------- Menyusul ---------- */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
          Menyusul
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
          {menyusul.map((c) => (
            <li
              key={c.slug}
              className="font-display text-xl font-bold tracking-tight text-paper/25 sm:text-2xl"
            >
              {c.name}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-md text-[13px] leading-relaxed text-mist/70">
          Dibuka setelah rute ini berjalan mantap. Kami lebih memilih satu paket
          yang matang daripada banyak paket setengah jadi.
        </p>
      </section>
    </main>
  );
}
