import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ShaderHero from './ui/ShaderHero';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Shader background with pulsing border accent */}
      <ShaderHero showPulsingBorder={true} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatePresence>
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
        }} className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-primary mb-6 text-center px-[18px] lg:text-9xl">Goldenfield</motion.p>
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
            Adoption. Structure. Results
          </motion.h1>
          <motion.p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-6" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.5, 0, 0, 1]
        }}>
            We help organizations structure how work flows, executes, and scales across teams.
          </motion.p>
          <motion.p className="text-sm tracking-widest uppercase text-muted-foreground/70 mb-12" initial={{
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
            Adoption • Execution • Measurable outcomes
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.9,
          ease: [0.5, 0, 0, 1]
        }}>
            <motion.a href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-medium rounded-full border border-primary/30 text-primary overflow-hidden" whileHover={{
            borderColor: 'hsl(47 70% 47% / 0.6)'
          }} transition={{
            duration: 0.4
          }}>
              {/* Background fill animation */}
              <motion.div className="absolute inset-0 bg-primary" initial={{
              x: '-100%'
            }} whileHover={{
              x: 0
            }} transition={{
              duration: 0.5,
              ease: [0.5, 0, 0, 1]
            }} />
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-400">
                Start a conversation
              </span>
              <motion.span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-400">
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
              
              {/* Luminous border glow */}
              <motion.div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              boxShadow: '0 0 30px hsl(47 70% 47% / 0.3)'
            }} />
            </motion.a>
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