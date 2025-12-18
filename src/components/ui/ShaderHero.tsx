"use client";

import { motion } from "framer-motion";

interface ShaderHeroProps {
  showPulsingBorder?: boolean;
}

export function SubtleGradientBackground() {
  return (
    <>
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle radial gradients using brand colors at very low opacity */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 30%, hsl(231 58% 33% / 0.04) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 80% 60%, hsl(241 100% 70% / 0.05) 0%, transparent 50%),
            radial-gradient(ellipse 70% 40% at 50% 80%, hsl(359 82% 75% / 0.03) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Very subtle animated gradient shift */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(ellipse 60% 40% at 30% 40%, hsl(241 100% 70% / 0.03) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 40% at 70% 60%, hsl(241 100% 70% / 0.03) 0%, transparent 50%)',
            'radial-gradient(ellipse 60% 40% at 30% 40%, hsl(241 100% 70% / 0.03) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
}

export default function ShaderHero({ showPulsingBorder = true }: ShaderHeroProps) {
  return (
    <>
      <SubtleGradientBackground />
    </>
  );
}
