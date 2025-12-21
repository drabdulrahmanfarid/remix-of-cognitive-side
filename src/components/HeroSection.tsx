import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ShaderHero from './ui/ShaderHero';
import logo from '@/assets/logo.png';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shader background with pulsing border accent */}
      <ShaderHero showPulsingBorder={true} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatePresence>
          {/* Animated Logo */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 1,
          delay: 0,
          ease: [0.5, 0, 0, 1]
        }} className="mb-8">
            <motion.img alt="Cognitive Side Logo" style={{
            filter: 'drop-shadow(0 0 30px hsl(47 70% 47% / 0.4)) drop-shadow(0 0 60px hsl(47 70% 47% / 0.2))'
          }} animate={{
            y: [0, -8, 0],
            filter: ['drop-shadow(0 0 30px hsl(47 70% 47% / 0.4)) drop-shadow(0 0 60px hsl(47 70% 47% / 0.2))', 'drop-shadow(0 0 40px hsl(47 70% 47% / 0.6)) drop-shadow(0 0 80px hsl(47 70% 47% / 0.3))', 'drop-shadow(0 0 30px hsl(47 70% 47% / 0.4)) drop-shadow(0 0 60px hsl(47 70% 47% / 0.2))']
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }} src="/lovable-uploads/15-removebg-preview-2.png" className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 w-auto mx-auto opacity-100 border-none border-0 object-contain shadow-none" />
          </motion.div>

          <motion.p initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.5, 0, 0, 1]
        }} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-primary mb-6 text-center whitespace-nowrap">
            Cognitive Side
          </motion.p>
          
          <motion.h1 initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.5, 0, 0, 1]
        }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary mb-8 text-center">
            Artificial Intelligence In-House
          </motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.5, 0, 0, 1]
        }} className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-6 font-semibold text-primary">
            Accelerating businesses with innovative AI solutions that transform operations and drive growth.
          </motion.p>
          
          <motion.p className="text-sm tracking-widest uppercase text-muted-foreground/70 mb-4 font-bold" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.7,
          ease: [0.5, 0, 0, 1]
        }}>
            Custom AI • Business Consulting • Autonomous Agents
          </motion.p>

          {/* Stats badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.9,
          ease: [0.5, 0, 0, 1]
        }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-accent/30 bg-card/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-primary">30+ Successful Projects Delivered</span>
          </motion.div>
          
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{
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
      </motion.div>
    </section>;
};
export default HeroSection;