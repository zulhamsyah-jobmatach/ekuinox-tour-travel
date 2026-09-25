"use client";

// Hero satu layar penuh bergaya agen travel.
//
// FOTO: taruh foto KLCC / Menara Petronas di public/img/hero-klcc.jpg
// dan hero ini otomatis memakainya. Selama file itu belum ada,
// foto KLIA dipakai sebagai cadangan supaya website tetap rapi.

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE, waLink } from "@/lib/site";
import { ITINERARY } from "@/lib/itinerary";

const UTAMA = "/img/hero-klcc.jpg";
const CADANGAN = "/img/hero-fallback.jpg";

export default function Hero() {
  const [bg, setBg] = useState(CADANGAN);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setBg(UTAMA);
    img.src = UTAMA;
  }, []);

  return (
    <section className="relative isolate flex min-h-[calc(100vh-73px)] items-center overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={bg}
        alt="Pemandangan Kuala Lumpur"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-midnight/75 via-midnight/55 to-midnight"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-4xl px-6 py-20 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brand">
          {ITINERARY.code} &nbsp;&middot;&nbsp; {ITINERARY.duration}
        </p>

        <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[0.95] tracking-tight text-paper drop-shadow-lg sm:text-7xl lg:text-8xl">
          {SITE.brand}
        </h1>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.34em] text-brand sm:text-[13px]">
          Tour &amp; Travel
        </p>

        <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-paper/85 sm:text-lg">
          {SITE.tagline}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[13px] leading-relaxed text-brand sm:text-[15px]">
          {SITE.pitch}
        </p>

        {/* rute */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] sm:text-[11px]">
          {ITINERARY.route.map((r, i) => (
            <span key={r + i} className="flex items-center gap-3">
              <span
                className={
                  i === 0 || i === ITINERARY.route.length - 1
                    ? "text-paper/60"
                    : "text-paper"
                }
              >
                {r}
              </span>
              {i < ITINERARY.route.length - 1 && (
                <span className="text-brand" aria-hidden="true">
                  &rarr;
                </span>
              )}
            </span>
          ))}
        </div>

        {/* tiga tombol */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/tentang"
            className="border border-paper/40 px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-paper transition hover:border-brand hover:text-brand"
          >
            Tentang Kami
          </Link>
          <a
            href="#rencana"
            className="bg-paper px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-midnight transition hover:bg-brand"
          >
            Lihat Paket Tour
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-midnight transition hover:bg-paper"
          >
            Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
