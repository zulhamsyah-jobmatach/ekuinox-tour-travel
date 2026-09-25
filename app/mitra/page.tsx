import Link from "next/link";
import { PARTNER } from "@/lib/partner";
import BusIllustration from "@/components/BusIllustration";
import FleetImage from "@/components/FleetImage";

export default function MitraPage() {
  const tahun = new Date().getFullYear() - PARTNER.since;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-lamp">
        Mitra transportasi
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-paper sm:text-6xl">
        {PARTNER.name}
      </h1>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
        &ldquo;{PARTNER.slogan}&rdquo;
      </p>
      <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-mist">
        {PARTNER.description}
      </p>

      <div className="mt-12 bg-dusk">
        <div className="livery" />
        <div className="grid gap-8 p-8 sm:grid-cols-[1fr_1fr] sm:items-center">
          <div className="overflow-hidden bg-paper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/bus-kiffah.jpg"
              alt="Bus single deck Kiffah Group of Companies"
              className="h-full w-full object-cover"
            />
          </div>
          <BusIllustration label="Armada dengan livery Ekuinox Tour & Travel" />
        </div>
      </div>

      <dl className="mt-px grid grid-cols-1 gap-px bg-harbour/40 sm:grid-cols-3">
        {[
          [`${tahun} tahun`, `Beroperasi sejak ${PARTNER.since}`],
          [PARTNER.base, "Pangkalan operasi"],
          ["Bus / Van / MPV", "Untuk tiap ukuran rombongan"],
        ].map(([v, k]) => (
          <div key={k} className="bg-midnight px-6 py-5">
            <dt className="font-display text-xl font-bold tracking-tight text-paper">
              {v}
            </dt>
            <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist">
              {k}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-20 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        Pilihan kendaraan
      </p>
      <div className="mt-6 border-t border-harbour/40">
        {PARTNER.fleet.map((f, i) => (
          <article
            key={f.id}
            className="grid gap-x-10 gap-y-5 border-b border-harbour/40 py-9 sm:grid-cols-[auto_1fr_18rem]"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] text-lamp">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="flex items-baseline gap-4">
                <h2 className="font-display text-2xl font-bold tracking-tight text-paper">
                  {f.name}
                </h2>
                <span className="font-mono text-[11px] text-ember">
                  {f.capacity}
                </span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-mist">
                {f.ideal}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5">
                {f.features.map((fi) => (
                  <li
                    key={fi}
                    className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist/70"
                  >
                    {fi}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[7/4] overflow-hidden bg-dusk">
              <FleetImage src={f.photo} alt={`${f.name} ${PARTNER.name}`} />
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-mist/50">
        Ilustrasi sementara &mdash; foto resmi armada menyusul dari mitra
      </p>

      <div className="mt-20 bg-paper px-8 py-10 text-midnight">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-midnight/50">
          Armada ini yang membawa Anda
        </p>
        <h2 className="mt-3 max-w-xl font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          Dari penjemputan di KLIA sampai diantar kembali &mdash; satu bus,
          satu rombongan, empat hari.
        </h2>
        <Link
          href="/#rencana"
          className="mt-6 inline-flex items-center gap-3 border border-midnight px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] transition hover:bg-midnight hover:text-paper"
        >
          Lihat rencana perjalanan
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <Link
        href="/"
        className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-mist hover:text-brand"
      >
        &larr; Kembali
      </Link>
    </main>
  );
}
