"use client"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

interface ShaderHeroProps {
  showPulsingBorder?: boolean;
}

export function ShaderHeroBackground() {
  return (
    <MeshGradient
      colors={["#232f85", "#6866ff", "#f48c8d", "#ebeae7"]}
      speed={0.15}
      style={{ 
        position: 'absolute', 
        width: '100%', 
        height: '100%',
        top: 0,
        left: 0,
      }}
    />
  )
}

export function PulsingBorderAccent() {
  return (
    <div className="relative w-[200px] h-[200px]">
      <PulsingBorder
        colors={["#6866ff", "#f48c8d", "#232f85"]}
        colorBack="#ebeae7"
        roundness={1}
        thickness={0.15}
        softness={0.5}
        scale={0.7}
        speed={0.5}
        style={{ 
          width: '100%', 
          height: '100%',
          borderRadius: '50%',
        }}
      />
      
      {/* Rotating text around the border */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
            />
          </defs>
          <text className="fill-primary/80 text-[12px] font-semibold uppercase tracking-[0.25em]">
            <textPath href="#circlePath">
              Transvyra • Operational Clarity • Delivered •
            </textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  )
}

export default function ShaderHero({ showPulsingBorder = true }: ShaderHeroProps) {
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <PulsingBorderAccent />
        </motion.div>
      )}
    </>
  )
}
