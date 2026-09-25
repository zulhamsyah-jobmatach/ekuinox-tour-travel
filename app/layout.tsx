import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Logo from "@/components/Logo";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ekuinox Tour & Travel — Paket Tour 4 Hari 3 Malam Kuala Lumpur",
  description:
    "Paket tour 4 hari 3 malam Kuala Lumpur, Genting Highlands, dan Melaka untuk rombongan 30 peserta atau lebih. Dijemput di KLIA, transportasi bus, dan hotel diurus.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-midnight">
        <Nav />
        {children}
        <WhatsAppFloat />

        <footer className="mt-24 border-t border-harbour/40">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-3">
            <div>
              <Logo className="origin-left scale-[1.2]" />
              <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-mist">
                Open trip dan perjalanan rombongan ke Kuala Lumpur, Genting
                Highlands, dan Melaka.
              </p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-mist/45">
                ({SITE.legal} &mdash; segera hadir)
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                Menu
              </p>
              <ul className="mt-3 space-y-1.5">
                {SITE.nav.slice(1).map((n) => (
                  <li key={n.href + n.label}>
                    <a
                      href={n.href}
                      className="font-mono text-[11px] uppercase tracking-[0.12em] text-mist hover:text-brand"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
                Kontak
              </p>
              <p className="mt-3 font-mono text-[11px] text-mist">
                WhatsApp: [nomor kamu]
              </p>
              <p className="mt-1 font-mono text-[11px] text-mist">
                {SITE.email}
              </p>
            </div>
          </div>

          <div className="border-t border-harbour/30">
            <p className="mx-auto max-w-6xl px-6 py-5 font-mono text-[10px] uppercase tracking-[0.14em] text-mist/60">
              &copy; {new Date().getFullYear()} {SITE.brandFull}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
