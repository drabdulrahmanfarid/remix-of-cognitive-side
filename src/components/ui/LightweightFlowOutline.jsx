import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const LightweightFlowOutline = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Simplified transforms - fewer calculations
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [20, 0]);
  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Simplified grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Static SVG instead of animated paths */}
      <div className="relative w-full h-[300px] md:h-[400px] px-4">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient
              id="silverToGoldStatic"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#a8a8a8" />
              <stop offset="45%" stopColor="#c0c0c0" />
              <stop offset="50%" stopColor="#c9a227" />
              <stop offset="55%" stopColor="#b8860b" />
              <stop offset="100%" stopColor="#daa520" />
            </linearGradient>
          </defs>

          {/* Static flow lines */}
          <path
            d="M -5 20 C 20 20, 35 35, 50 50 C 65 50, 80 50, 105 50"
            stroke="url(#silverToGoldStatic)"
            strokeWidth={0.4}
            fill="none"
            strokeLinecap="round"
            opacity={0.5}
          />
          <path
            d="M -5 40 C 25 45, 35 45, 50 50 C 65 50, 80 50, 105 50"
            stroke="url(#silverToGoldStatic)"
            strokeWidth={0.4}
            fill="none"
            strokeLinecap="round"
            opacity={0.5}
          />
          <path
            d="M -5 60 C 20 55, 35 55, 50 50 C 65 50, 80 50, 105 50"
            stroke="url(#silverToGoldStatic)"
            strokeWidth={0.4}
            fill="none"
            strokeLinecap="round"
            opacity={0.5}
          />
          <path
            d="M -5 80 C 25 75, 35 65, 50 50 C 65 50, 80 50, 105 50"
            stroke="url(#silverToGoldStatic)"
            strokeWidth={0.4}
            fill="none"
            strokeLinecap="round"
            opacity={0.5}
          />

          {/* Static convergence point */}
          <circle
            cx="50"
            cy="50"
            r="1.5"
            fill="transparent"
            stroke="#f48c8d"
            strokeWidth={0.3}
            opacity={0.4}
          />
          <circle cx="50" cy="50" r="0.5" fill="#f48c8d" opacity={0.4} />
        </svg>

        {/* Static gradient overlay */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(244,140,141,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center mt-12 md:mt-16 px-6"
        style={{
          opacity: textOpacity,
          y: textY,
        }}
      >
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium text-accent">
          How work flows
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed text-foreground">
          From fragmented effort to structured execution.
        </h2>

        <p className="text-sm md:text-base mt-4 max-w-lg mx-auto text-muted-foreground">
          We design how work converges, executes, and scales.
        </p>
      </motion.div>
    </section>
  );
};
export default LightweightFlowOutline;
