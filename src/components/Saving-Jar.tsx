"use client"

type SavingsJarProps = {
  /** Fill percentage, 0 - 100 */
  percent: number
}

export function SavingsJar({ percent }: SavingsJarProps) {
  const clamped = Math.max(0, Math.min(100, percent))

  // Inner cavity of the jar where liquid lives (in SVG user units)
  const cavityTop = 70
  const cavityBottom = 350
  const cavityHeight = cavityBottom - cavityTop

  // Liquid surface Y: 0% -> bottom, 100% -> top
  const liquidY = cavityBottom - (cavityHeight * clamped) / 100

  return (
    <svg
      viewBox="0 0 240 400"
      className="h-auto w-full max-w-[300px]"
      role="img"
      aria-label={`Pote cheio em ${Math.round(clamped)} por cento`}
    >
      <defs>
        {/* Clip so liquid stays inside the jar body */}
        <clipPath id="jar-cavity">
          <path d="M48 70 Q48 60 58 60 L182 60 Q192 60 192 70 L192 350 Q192 370 172 370 L68 370 Q48 370 48 350 Z" />
        </clipPath>

        <linearGradient id="liquid-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.72 0.18 150)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 152)" />
        </linearGradient>

        <linearGradient id="glass-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(1 0 0 / 0.5)" />
          <stop offset="45%" stopColor="oklch(1 0 0 / 0.05)" />
          <stop offset="100%" stopColor="oklch(0.85 0.02 150 / 0.25)" />
        </linearGradient>
      </defs>

      {/* Lid */}
      <rect x="44" y="28" width="152" height="30" rx="10" fill="oklch(0.55 0.16 152)" />
      <rect x="50" y="22" width="140" height="14" rx="7" fill="oklch(0.62 0.17 150)" />

      {/* Liquid (clipped to jar cavity) */}
      <g clipPath="url(#jar-cavity)">
        <g
          style={{
            transform: `translateY(${liquidY}px)`,
            transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Animated wavy surface */}
          <path fill="url(#liquid-grad)" d="M-120 12 Q-90 0 -60 12 T0 12 T60 12 T120 12 T180 12 T240 12 T300 12 T360 12 V320 H-120 Z">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="120 0"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </path>
          {/* Surface highlight */}
          <path
            fill="oklch(0.82 0.15 150 / 0.6)"
            d="M-120 12 Q-90 0 -60 12 T0 12 T60 12 T120 12 T180 12 T240 12 T300 12 T360 12 V22 H-120 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="120 0"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Bubbles */}
        <circle cx="95" cy="340" r="4" fill="oklch(1 0 0 / 0.35)">
          <animate attributeName="cy" from="350" to="90" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="340" r="3" fill="oklch(1 0 0 / 0.35)">
          <animate attributeName="cy" from="350" to="90" dur="5.5s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.5;0" dur="5.5s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="115" cy="340" r="2.5" fill="oklch(1 0 0 / 0.3)">
          <animate attributeName="cy" from="350" to="90" dur="6s" begin="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.5;0" dur="6s" begin="2.2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Glass reflection overlay inside the jar */}
      <path
        d="M48 70 Q48 60 58 60 L182 60 Q192 60 192 70 L192 350 Q192 370 172 370 L68 370 Q48 370 48 350 Z"
        fill="url(#glass-grad)"
        clipPath="url(#jar-cavity)"
      />

      {/* Jar outline */}
      <path
        d="M48 70 Q48 60 58 60 L182 60 Q192 60 192 70 L192 350 Q192 370 172 370 L68 370 Q48 370 48 350 Z"
        fill="none"
        stroke="oklch(0.45 0.08 155)"
        strokeWidth="4"
      />

      {/* Vertical glass shine */}
      <rect x="64" y="86" width="10" height="250" rx="5" fill="oklch(1 0 0 / 0.4)" />
    </svg>
  )
}
