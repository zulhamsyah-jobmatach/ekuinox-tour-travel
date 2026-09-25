// Wordmark Ekuinox dengan tanda dua cincin berpotongan.
//
// CATATAN: ini versi sementara yang meniru gaya logo resmimu
// (dua cincin berpotongan, versi outline, warna #F0A04B).
// Kalau file SVG logo asli sudah siap, taruh di public/img/logo.svg
// lalu ganti komponen ini dengan <img src="/img/logo.svg" />.

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 44 28"
        aria-hidden="true"
        className="h-6 w-auto shrink-0 sm:h-7"
      >
        <circle
          cx="16"
          cy="14"
          r="11"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.4"
        />
        <circle
          cx="28"
          cy="14"
          r="11"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.4"
        />
      </svg>
      <span className="leading-[0.84]">
        <span className="block font-display text-base font-extrabold tracking-tight text-paper sm:text-lg">
          EKUINOX
        </span>
        <span className="block font-mono text-[8px] uppercase tracking-[0.22em] text-brand sm:text-[9px]">
          Tour &amp; Travel
        </span>
      </span>
    </span>
  );
}
