// Siluet cakrawala Kuala Lumpur malam hari.
// Digambar sendiri (bukan foto stok) agar identitasnya milik Ekuinox Tour & Travel.
// Menara Kembar Petronas dan Menara KL sebagai penanda kota.

export default function Skyline({ className = "" }: { className?: string }) {
  // Jendela menyala — pola deterministik agar tampilan konsisten
  const lit = (x: number, y: number) => (x * 7 + y * 13) % 5 < 2;

  return (
    <svg
      viewBox="0 0 1440 380"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="kabut" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c1a23" stopOpacity="0" />
          <stop offset="70%" stopColor="#e9b44c" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#e9b44c" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="menara" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a5568" />
          <stop offset="100%" stopColor="#16313f" />
        </linearGradient>
      </defs>

      {/* kabut cahaya kota di kaki langit */}
      <rect x="0" y="120" width="1440" height="260" fill="url(#kabut)" />

      {/* lapisan gedung terjauh */}
      <g fill="#15303d" opacity="0.75">
        {[
          [40, 232], [96, 268], [150, 210], [212, 250], [268, 226],
          [330, 272], [392, 240], [450, 262], [512, 218], [572, 254],
          [880, 244], [940, 268], [1000, 222], [1062, 258], [1124, 236],
          [1186, 270], [1248, 228], [1310, 262], [1372, 244],
        ].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width={46} height={380 - y} />
        ))}
      </g>

      {/* Menara KL — poros dengan bulatan menara pandang */}
      <g>
        <rect x="286" y="150" width="16" height="230" fill="url(#menara)" />
        <ellipse cx="294" cy="152" rx="26" ry="17" fill="#20465a" />
        <rect x="278" y="132" width="32" height="14" rx="3" fill="#2a5568" />
        <rect x="292" y="96" width="4" height="38" fill="#2a5568" />
        <circle cx="294" cy="92" r="3.5" fill="#c7522a">
          <animate
            attributeName="opacity"
            values="1;0.15;1"
            dur="2.6s"
            repeatCount="indefinite"
          />
        </circle>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={274 + i * 9}
            y={148}
            width={5}
            height={7}
            fill="#e9b44c"
            opacity="0.85"
          />
        ))}
      </g>

      {/* Menara Kembar Petronas */}
      <g>
        {[640, 760].map((bx) => (
          <g key={bx}>
            {/* badan meruncing */}
            <path
              d={`M${bx} 380 L${bx} 190 L${bx + 8} 150 L${bx + 32} 150 L${bx + 40} 190 L${bx + 40} 380 Z`}
              fill="url(#menara)"
            />
            {/* mahkota bertingkat */}
            <path d={`M${bx + 6} 150 L${bx + 12} 122 L${bx + 28} 122 L${bx + 34} 150 Z`} fill="#2a5568" />
            <path d={`M${bx + 12} 122 L${bx + 16} 104 L${bx + 24} 104 L${bx + 28} 122 Z`} fill="#31637a" />
            {/* menara puncak */}
            <rect x={bx + 19} y={62} width={2.5} height={42} fill="#3a7590" />
            <circle cx={bx + 20} cy={60} r="3" fill="#e9b44c">
              <animate
                attributeName="opacity"
                values="1;0.2;1"
                dur="3.4s"
                repeatCount="indefinite"
              />
            </circle>
            {/* jendela menyala */}
            {Array.from({ length: 13 }).map((_, r) =>
              Array.from({ length: 3 }).map((_, c) =>
                lit(bx + c, r) ? (
                  <rect
                    key={`${r}-${c}`}
                    x={bx + 7 + c * 11}
                    y={200 + r * 13}
                    width={6}
                    height={7}
                    fill="#e9b44c"
                    opacity={0.55 + ((r + c) % 3) * 0.15}
                  />
                ) : null
              )
            )}
          </g>
        ))}
        {/* jembatan langit */}
        <rect x={680} y={252} width={80} height={5} fill="#2a5568" />
        <rect x={680} y={252} width={80} height={1.5} fill="#e9b44c" opacity="0.6" />
        <path d="M700 257 L712 288 M740 257 L728 288" stroke="#2a5568" strokeWidth="3" />
      </g>

      {/* lapisan gedung terdepan */}
      <g fill="#0f2530">
        {[
          [0, 296], [72, 312], [140, 288], [206, 320], [340, 300],
          [406, 316], [470, 292], [536, 322], [820, 298], [886, 318],
          [952, 290], [1020, 314], [1086, 300], [1152, 320], [1220, 294],
          [1288, 316], [1356, 302],
        ].map(([x, y], i) => (
          <g key={i}>
            <rect x={x} y={y} width={62} height={380 - y} />
            {Array.from({ length: 4 }).map((_, c) =>
              lit(x + c, i) ? (
                <rect
                  key={c}
                  x={x + 8 + c * 14}
                  y={y + 12}
                  width={7}
                  height={8}
                  fill="#e9b44c"
                  opacity="0.45"
                />
              ) : null
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}
