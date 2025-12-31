export function LightweightHeroBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
          linear-gradient(135deg, 
            hsl(30 15% 30%) 0%, 
            hsl(45 70% 45% / 0.3) 25%, 
            hsl(43 75% 55% / 0.2) 50%, 
            hsl(var(--background)) 100%
          )
        `,
      }}
    />
  );
}
export function LightweightPulsingBorderAccent() {
  return (
    <div className="relative w-[200px] h-[200px]">
      {/* Simple CSS-based pulsing border */}
      <div
        className="absolute inset-0 rounded-full border-2 border-primary/40 animate-pulse"
        style={{
          boxShadow:
            "0 0 20px hsl(var(--primary) / 0.3), inset 0 0 20px hsl(var(--primary) / 0.1)",
        }}
      />
      <div className="absolute inset-2 rounded-full border border-accent/30" />

      {/* Static text instead of rotating SVG */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60 text-center px-6">
          Cognitive Side
          <br />
          <span className="text-[8px] tracking-[0.15em]">
            Operational Clarity
          </span>
        </div>
      </div>
    </div>
  );
}
export default function LightweightHero({ showPulsingBorder = true }) {
  return (
    <>
      {/* CSS gradient background */}
      <div className="absolute inset-0">
        <LightweightHeroBackground />
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Simplified pulsing border accent */}
      {showPulsingBorder && (
        <div className="absolute bottom-20 right-20 hidden lg:block opacity-80">
          <LightweightPulsingBorderAccent />
        </div>
      )}
    </>
  );
}
