// Bus pariwisata di jalanan malam, dengan livery motif ubin Peranakan.
// Digambar sendiri agar identitasnya milik Ekuinox Tour & Travel.

export default function BusIllustration({ label }: { label?: string }) {
  const tile = ["#f0a04b", "#c7522a", "#1b4254", "#c7522a"];

  return (
    <svg
      viewBox="0 0 560 220"
      role="img"
      aria-label={label ?? "Bus pariwisata di jalan malam"}
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="bodi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#20465a" />
          <stop offset="100%" stopColor="#122c39" />
        </linearGradient>
        <radialGradient id="sorot" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#e9b44c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e9b44c" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="560" height="220" fill="#0c1a23" />

      {/* lampu jalan */}
      <ellipse cx="120" cy="176" rx="120" ry="34" fill="url(#sorot)" />
      <ellipse cx="440" cy="176" rx="120" ry="34" fill="url(#sorot)" />
      <rect y="176" width="560" height="44" fill="#0f2530" />
      <rect y="176" width="560" height="1.5" fill="#1b4254" />

      {/* bayangan */}
      <ellipse cx="280" cy="186" rx="210" ry="7" fill="#000" opacity="0.35" />

      {/* bodi */}
      <rect x="62" y="56" width="436" height="120" fill="url(#bodi)" />
      <rect x="62" y="56" width="436" height="2" fill="#3a7590" opacity="0.6" />

      {/* kaca depan */}
      <path d="M474 64 h10 a14 14 0 0 1 14 14 v30 h-24 Z" fill="#0c1a23" />
      <path d="M478 66 l14 0 -14 40 Z" fill="#3a7590" opacity="0.45" />

      {/* pintu */}
      <rect x="426" y="84" width="32" height="92" fill="#0f2530" />
      <rect x="430" y="90" width="24" height="40" fill="#1b4254" />

      {/* jendela penumpang, sebagian menyala */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={84 + i * 66} y={72} width={52} height={40} fill="#0c1a23" />
          <rect
            x={84 + i * 66}
            y={72}
            width={52}
            height={40}
            fill="#e9b44c"
            opacity={i % 2 === 0 ? 0.28 : 0.1}
          />
          <path
            d={`M${90 + i * 66} 112 l16 -40 h7 l-16 40 Z`}
            fill="#9fb8bd"
            opacity="0.2"
          />
        </g>
      ))}

      {/* nama di bodi */}
      <text
        x="90"
        y="140"
        fontFamily="Bricolage Grotesque, sans-serif"
        fontWeight="800"
        fontSize="21"
        fill="#f2ede4"
        letterSpacing="-0.3"
      >
        EKUINOX
      </text>
      <text
        x="90"
        y="157"
        fontFamily="JetBrains Mono, monospace"
        fontWeight="700"
        fontSize="9"
        fill="#f0a04b"
        letterSpacing="2.2"
      >
        T O U R   &#38;   T R A V E L
      </text>


      {/* livery ubin Peranakan */}
      {Array.from({ length: 30 }).map((_, i) => (
        <rect
          key={i}
          x={62 + i * 14.6}
          y={164}
          width={14.6}
          height={12}
          fill={tile[i % 4]}
        />
      ))}

      {/* roda */}
      {[152, 392].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="176" r="21" fill="#0c1a23" />
          <circle cx={cx} cy="176" r="9" fill="#1b4254" />
        </g>
      ))}

      {/* lampu */}
      <rect x="492" y="148" width="8" height="10" fill="#e9b44c" />
      <rect x="60" y="148" width="8" height="10" fill="#c7522a" />
    </svg>
  );
}
