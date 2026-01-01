import { motion, AnimatePresence } from "framer-motion";
import ShaderHero from "./ui/ShaderHero";
import LightweightHero from "./ui/LightweightHero";
import { usePerformance } from "@/hooks/usePerformance";

const HeroSection = () => {
  const { isLowEnd } = usePerformance();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gpu-accelerated">
      {/* Conditional background based on device performance */}
      {isLowEnd ? <LightweightHero showPulsingBorder={false} /> : <ShaderHero showPulsingBorder={true} />}

      {/* Content - ensure proper mobile padding */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-16 sm:pt-0">
        <AnimatePresence>
          {/* Animated Logo - simplified for low-end devices */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: isLowEnd ? 0.5 : 1,
          delay: 0,
          ease: [0.5, 0, 0, 1]
        }} className="mb-8">
            <motion.img alt="Cognitive Side Logo" style={{
            filter: "drop-shadow(0 0 30px hsl(47 70% 47% / 0.4)) drop-shadow(0 0 60px hsl(47 70% 47% / 0.2))"
          }} animate={isLowEnd ? {} : {
            y: [0, -8, 0],
            filter: ["drop-shadow(0 0 30px hsl(47 70% 47% / 0.4)) drop-shadow(0 0 60px hsl(47 70% 47% / 0.2))", "drop-shadow(0 0 40px hsl(47 70% 47% / 0.6)) drop-shadow(0 0 80px hsl(47 70% 47% / 0.3))", "drop-shadow(0 0 30px hsl(47 70% 47% / 0.4)) drop-shadow(0 0 60px hsl(47 70% 47% / 0.2))"]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 w-auto mx-auto opacity-100 border-none border-0 object-contain shadow-none" src="/lovable-uploads/69512f6b-c7ed-4b9e-9881-e6f6e3fb5f22.png" />
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          y: isLowEnd ? 20 : 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: isLowEnd ? 0.4 : 0.8,
          delay: 0.1,
          ease: [0.5, 0, 0, 1]
        }} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-primary mb-6 text-center whitespace-nowrap drop-shadow-[0_2px_4px_rgba(92,74,61,0.3)]">
            Cognitive Side
          </motion.p>

          <motion.h1 initial={{
          opacity: 0,
          y: isLowEnd ? 20 : 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: isLowEnd ? 0.4 : 0.8,
          delay: 0.3,
          ease: [0.5, 0, 0, 1]
        }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-primary mb-8 text-center text-balance leading-tight drop-shadow-[0_1px_3px_rgba(92,74,61,0.25)]">In-House Artificial Intelligence & Automation</motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: isLowEnd ? 15 : 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: isLowEnd ? 0.4 : 0.8,
          delay: 0.5,
          ease: [0.5, 0, 0, 1]
        }} className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-6 font-bold text-primary drop-shadow-[0_1px_2px_rgba(92,74,61,0.2)]">We help businesses scale faster by building custom AI systems that automate operations, reduce costs, and unlock growth</motion.p>

          <motion.p className="text-base tracking-widest uppercase text-primary mb-4 font-bold drop-shadow-[0_1px_2px_rgba(92,74,61,0.15)]" initial={{
          opacity: 0,
          y: isLowEnd ? 10 : 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: isLowEnd ? 0.4 : 0.8,
          delay: 0.7,
          ease: [0.5, 0, 0, 1]
        }}>• CUSTOM AI • BUSINESS AUTOMATION • AUTONOMOUS AI AGENTS</motion.p>

          {/* Stats badge - simplified ping animation for low-end */}
          <motion.div initial={{
          opacity: 0,
          y: isLowEnd ? 10 : 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: isLowEnd ? 0.3 : 0.6,
          delay: 0.9,
          ease: [0.5, 0, 0, 1]
        }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent/30 bg-card/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              {!isLowEnd && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>}
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-primary">20+ Successful Projects Delivered</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator - disabled on low-end */}
      {!isLowEnd && <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 0.6
    }}>
          <div className="w-6 h-10 rounded-full border border-primary/20 flex items-start justify-center p-2 luminous-border">
            <motion.div className="w-1 h-2 bg-accent/60 rounded-full" animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          </div>
        </motion.div>}
    </section>
  );
};
export default HeroSection;