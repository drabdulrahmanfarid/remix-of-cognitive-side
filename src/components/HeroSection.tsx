import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Animated grid lines */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1200 800" 
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Horizontal lines */}
        {[200, 400, 600].map((y, i) => (
          <motion.line
            key={`h-${y}`}
            x1="0"
            y1={y}
            x2="1200"
            y2={y}
            stroke="hsl(231, 58%, 33%)"
            strokeWidth="1"
            strokeOpacity="0.05"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: i * 0.2, ease: [0.5, 0, 0, 1] }}
          />
        ))}
        {/* Vertical lines */}
        {[300, 600, 900].map((x, i) => (
          <motion.line
            key={`v-${x}`}
            x1={x}
            y1="0"
            x2={x}
            y2="800"
            stroke="hsl(241, 100%, 70%)"
            strokeWidth="1"
            strokeOpacity="0.04"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 + i * 0.2, ease: [0.5, 0, 0, 1] }}
          />
        ))}
      </svg>

      {/* Constellation dots at intersections */}
      <div className="absolute inset-0 overflow-hidden">
        {[[300, 200], [600, 400], [900, 200], [600, 600], [300, 400]].map(([x, y], i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent/40"
            style={{ left: `${(x / 1200) * 100}%`, top: `${(y / 800) * 100}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [0.4, 0.8, 0.4] 
            }}
            transition={{
              duration: 3,
              delay: 1 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle gradient blobs - reduced opacity */}
      <motion.div 
        className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(231 58% 33% / 0.3) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute -bottom-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(241 100% 70% / 0.2) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatePresence>
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-primary mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.5, 0, 0, 1] }}
          >
            Operational clarity, delivered.
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.5, 0, 0, 1] }}
          >
            We help organizations structure how work flows, executes, and scales across teams.
          </motion.p>
          <motion.p
            className="text-sm tracking-widest uppercase text-muted-foreground/70 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.5, 0, 0, 1] }}
          >
            Adoption • Execution • Measurable outcomes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.5, 0, 0, 1] }}
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-base font-medium rounded-full border border-primary/30 text-primary overflow-hidden"
              whileHover={{ borderColor: 'hsl(241 100% 70% / 0.6)' }}
              transition={{ duration: 0.4 }}
            >
              {/* Background fill animation */}
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5, ease: [0.5, 0, 0, 1] }}
              />
              <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-400">
                Start a conversation
              </span>
              <motion.span
                className="relative z-10 group-hover:text-primary-foreground transition-colors duration-400"
              >
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
              
              {/* Luminous border glow */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: '0 0 30px hsl(241 100% 70% / 0.3)',
                }}
              />
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="w-6 h-10 rounded-full border border-primary/20 flex items-start justify-center p-2 luminous-border">
          <motion.div 
            className="w-1 h-2 bg-accent/60 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
