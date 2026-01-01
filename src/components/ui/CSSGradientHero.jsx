import { motion } from "framer-motion";

// CSS-only animated gradient that matches MeshGradient colors
// Much lighter than WebGL shader - uses CSS animations only
export function CSSGradientHeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 30% 40%, hsl(30 15% 30% / 0.8) 0%, transparent 60%),
          radial-gradient(ellipse 70% 50% at 70% 30%, hsl(47 70% 47% / 0.6) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 50% 80%, hsl(43 75% 42% / 0.5) 0%, transparent 50%),
          linear-gradient(135deg, 
            hsl(30 15% 30%) 0%, 
            hsl(45 70% 45% / 0.4) 30%, 
            hsl(43 75% 55% / 0.3) 60%, 
            hsl(42 50% 97%) 100%
          )
        `,
      }}
    >
      {/* Animated color shift overlay using CSS animations */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 60% 50%, hsl(47 70% 50% / 0.3) 0%, transparent 70%)
          `,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}

// CSS-only pulsing border that matches PulsingBorder shader
export function CSSPulsingBorderAccent() {
  return (
    <div className="relative w-[200px] h-[200px]">
      {/* Outer pulsing ring */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-slow"
        style={{
          background: `
            radial-gradient(circle, 
              transparent 45%, 
              hsl(47 70% 47% / 0.3) 50%, 
              hsl(43 75% 42% / 0.2) 55%, 
              transparent 60%
            )
          `,
        }}
      />

      {/* Inner glow */}
      <div
        className="absolute inset-4 rounded-full animate-pulse-glow"
        style={{
          boxShadow: `
            0 0 30px hsl(47 70% 47% / 0.4),
            inset 0 0 20px hsl(47 70% 47% / 0.1)
          `,
          border: "1px solid hsl(47 70% 47% / 0.3)",
        }}
      />

      {/* Rotating text around the border - uses CSS animation instead of framer-motion */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full mx-0 px-[11px]">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text className="fill-primary/80 text-[12px] font-semibold uppercase tracking-[0.25em]">
            <textPath href="#circlePath" startOffset="25%">
              Cognitive Side • Operational Clarity • Delivered •
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default function CSSGradientHero({ showPulsingBorder = true }) {
  return (
    <>
      {/* CSS gradient background */}
      <div className="absolute inset-0">
        <CSSGradientHeroBackground />
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Pulsing border accent */}
      {showPulsingBorder && (
        <motion.div
          className="absolute bottom-20 right-20 hidden lg:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <CSSPulsingBorderAccent />
        </motion.div>
      )}
    </>
  );
}
