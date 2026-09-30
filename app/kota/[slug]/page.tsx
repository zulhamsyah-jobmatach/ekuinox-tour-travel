import Link from "next/link";
import { notFound } from "next/navigation";
import { getCity, getDestinations } from "@/lib/queries";

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = await getCity(slug);
  if (!city || !city.active) notFound();

  const destinations = await getDestinations(slug);

  return (
    <main>
      {/* sampul berfoto */}
      <section className="relative isolate min-h-[46vh] overflow-hidden sm:min-h-[56vh]">
        {city.photo && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={city.photo}
              alt={city.name}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/75 to-midnight/30"
              aria-hidden="true"
            />
          </>
        )}
        <div className="mx-auto flex min-h-[46vh] max-w-5xl flex-col justify-end px-6 pb-12 pt-20 sm:min-h-[56vh]">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lamp">
            {city.tag}
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-paper drop-shadow-lg sm:text-7xl">
            {city.name}
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper/85">
            {city.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-12">
      <Link
        href="/#rencana"
        className="inline-flex items-center gap-3 border border-harbour px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-mist transition hover:border-brand hover:text-brand"
      >
        Rencana perjalanan 4H3M
        <span aria-hidden="true">&rarr;</span>
      </Link>

      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        {destinations.length} destinasi
      </p>

      <div className="mt-6 border-t border-harbour/40">
        {destinations.map((spot, i) => (
          <article
            key={spot.id}
            className="grid gap-x-8 gap-y-3 border-b border-harbour/40 py-8 sm:grid-cols-[auto_1fr]"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] text-lamp">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember">
                {spot.kind}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl">
                {spot.name}
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-mist">
                {spot.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/"
        className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-mist hover:text-brand"
      >
        &larr; Kembali
      </Link>
      </div>
    </main>
  );
}
