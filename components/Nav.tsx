"use client";

// Bilah navigasi bergaya agen travel: logo di kiri, menu horizontal,
// dan menu lipat untuk layar ponsel.

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";
import Logo from "@/components/Logo";

export default function Nav() {
  const [buka, setBuka] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-harbour/50 bg-midnight/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        {/* Logo */}
        <Link href="/" onClick={() => setBuka(false)} className="shrink-0">
          <Logo />
        </Link>

        {/* Menu layar lebar */}
        <nav className="hidden items-center gap-x-6 font-mono text-[11px] uppercase tracking-[0.12em] text-mist lg:flex">
          {SITE.nav.map((n) => (
            <Link key={n.href + n.label} href={n.href} className="hover:text-brand">
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Tombol menu ponsel */}
        <button
          type="button"
          onClick={() => setBuka((v) => !v)}
          aria-expanded={buka}
          aria-label="Buka menu"
          className="lg:hidden"
        >
          <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-brand">
            {buka ? "Tutup" : "Menu"}
          </span>
        </button>
      </div>

      {/* Menu lipat ponsel */}
      {buka && (
        <nav className="border-t border-harbour/40 bg-midnight lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {SITE.nav.map((n) => (
              <Link
                key={n.href + n.label}
                href={n.href}
                onClick={() => setBuka(false)}
                className="border-b border-harbour/25 py-3 font-mono text-[12px] uppercase tracking-[0.12em] text-mist last:border-b-0 hover:text-brand"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
