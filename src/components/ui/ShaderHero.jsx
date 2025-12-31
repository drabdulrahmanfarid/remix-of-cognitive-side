"use client";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
export function ShaderHeroBackground() {
  return (
    <MeshGradient
      colors={["#5c4a3d", "#c9a227", "#b8860b", "#faf7f2"]}
      speed={0.15}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    />
  );
}
export function PulsingBorderAccent() {
  return (
    <div className="relative w-[200px] h-[200px]">
      <PulsingBorder
        colors={["#c9a227", "#b8860b", "#5c4a3d"]}
        colorBack="#faf7f2"
        roundness={1}
        thickness={0.15}
        softness={0.5}
        scale={0.7}
        speed={0.5}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
        }}
      />

      {/* Rotating text around the border */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
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
      </motion.div>
    </div>
  );
}
export default function ShaderHero({ showPulsingBorder = true }) {
  return (
    <>
      {/* Shader background */}
      <div className="absolute inset-0">
        <ShaderHeroBackground />
      </div>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />

      {/* Pulsing border accent */}
      {showPulsingBorder && (
        <motion.div
          className="absolute bottom-20 right-20 hidden lg:block"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          <PulsingBorderAccent />
        </motion.div>
      )}
    </>
  );
}
