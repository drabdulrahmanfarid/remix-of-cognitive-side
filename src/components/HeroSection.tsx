import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Flowing gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <motion.div 
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(231 58% 33% / 0.4) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Accent gradient blob */}
        <motion.div 
          className="absolute -bottom-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(241 100% 70% / 0.3) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        {/* CTA highlight blob */}
        <motion.div 
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(359 82% 75% / 0.3) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Subtle flowing lines */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.03]" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path 
            d="M0,400 Q300,200 600,400 T1200,400" 
            fill="none" 
            stroke="hsl(231, 58%, 33%)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          <motion.path 
            d="M0,500 Q400,300 800,500 T1200,500" 
            fill="none" 
            stroke="hsl(241, 100%, 70%)" 
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <AnimatePresence>
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-primary mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Operational clarity, delivered.
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            We help organizations structure how work flows, executes, and scales across teams.
          </motion.p>
          <motion.p
            className="text-sm tracking-widest uppercase text-muted-foreground/70 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            Adoption • Execution • Measurable outcomes
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-primary text-primary-foreground transition-all duration-300"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px -15px hsl(231 58% 33% / 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start a conversation
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
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <motion.div 
            className="w-1 h-2 bg-primary/50 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
