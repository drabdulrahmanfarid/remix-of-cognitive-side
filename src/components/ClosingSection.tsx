import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { Suspense, lazy } from 'react';

const NeonRaymarcher = lazy(() => import('./ui/neon-raymarcher'));

const ClosingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      id="contact"
      ref={ref}
      className="py-32 md:py-48 px-6 relative overflow-hidden"
    >
      {/* 3D Raymarcher Background */}
      <div className="absolute inset-0 opacity-50">
        <Suspense fallback={<div className="absolute inset-0 grid-pattern opacity-30" />}>
          <NeonRaymarcher />
        </Suspense>
      </div>
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.5, 0, 0, 1] }}
        >
          <span className="relative inline-block">
            Work should move with
          </span>{' '}
          <span className="relative inline-block text-glow-strong">
            clarity.
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.5, 0, 0, 1] }}
            />
          </span>
        </motion.h2>
        
        <motion.p 
          className="text-lg sm:text-xl text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.5, 0, 0, 1] }}
        >
          We design the systems that make that possible.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.5, 0, 0, 1] }}
        >
          <motion.a
            href="mailto:contact@transvyra.com"
            className="group relative inline-flex items-center gap-3 px-10 py-4 text-base font-medium rounded-full border border-cta/50 text-cta-foreground overflow-hidden"
            whileHover={{ borderColor: 'hsl(359 82% 75% / 0.8)' }}
            transition={{ duration: 0.4 }}
          >
            {/* Background fill animation */}
            <motion.div
              className="absolute inset-0 bg-cta"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5, ease: [0.5, 0, 0, 1] }}
            />
            
            <span className="relative z-10 transition-colors duration-300">
              Contact
            </span>
            <motion.span className="relative z-10">
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </motion.span>
            
            {/* Luminous glow */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow: '0 0 40px hsl(359 82% 75% / 0.4)',
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
