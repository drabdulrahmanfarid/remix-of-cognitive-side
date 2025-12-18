import { motion, AnimatePresence } from 'framer-motion';
import ShaderHero from './ui/ShaderHero';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <ShaderHero showPulsingBorder={false} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatePresence>
          {/* Brand Label */}
          <motion.p
            className="text-sm font-medium tracking-[0.3em] uppercase text-primary/60 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0, ease: [0.5, 0, 0, 1] }}
          >
            Transvyra
          </motion.p>

          {/* Main Headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.02em] text-primary mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.5, 0, 0, 1] }}
          >
            Operational clarity, delivered.
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.5, 0, 0, 1] }}
          >
            We help organizations structure how work flows, executes, and scales across teams.
          </motion.p>

          {/* Secondary Hook Line */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground/80 font-light italic max-w-xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.5, 0, 0, 1] }}
          >
            Most organizations don't fail from lack of strategy — they fail at execution.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.5, 0, 0, 1] }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center px-10 py-4 text-base font-medium rounded-full border border-primary/30 text-primary overflow-hidden transition-colors duration-500"
              whileHover={{ borderColor: 'hsl(241 100% 70% / 0.5)' }}
            >
              {/* Background fill animation */}
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5, ease: [0.5, 0, 0, 1] }}
              />
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-500">
                Start a conversation
              </span>
            </motion.a>
          </motion.div>

          {/* Micro Truth Statement */}
          <motion.p
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.5, 0, 0, 1] }}
          >
            Efficiency is designed, not installed.
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="w-6 h-10 rounded-full border border-primary/15 flex items-start justify-center p-2">
          <motion.div 
            className="w-1 h-2 bg-primary/30 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
