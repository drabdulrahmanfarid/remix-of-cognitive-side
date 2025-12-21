import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Suspense, lazy, useEffect } from 'react';

const NeonRaymarcher = lazy(() => import('./ui/neon-raymarcher'));

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const ClosingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const initCalendly = () => {
      const calendlyContainer = document.getElementById('calendly-embed');
      if (window.Calendly && calendlyContainer) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/drabdulrahmanfarid/30min?background_color=f8f8f0&text_color=5c4a3d&primary_color=c8a24a',
          parentElement: calendlyContainer,
        });
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          initCalendly();
          clearInterval(checkCalendly);
        }
      }, 100);
      return () => clearInterval(checkCalendly);
    }
  }, []);

  return (
    <section id="contact" ref={ref} className="py-32 md:py-48 px-6 relative overflow-hidden">
      {/* 3D Raymarcher Background */}
      <div className="absolute inset-0 opacity-40">
        <Suspense fallback={<div className="absolute inset-0 grid-pattern opacity-30" />}>
          <NeonRaymarcher />
        </Suspense>
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Availability Status - Top Right */}
      <motion.div
        className="absolute top-8 right-8 z-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.5, 0, 0, 1] }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-sm text-muted-foreground font-medium">
          Available for projects
        </span>
      </motion.div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
          className="block font-medium tracking-widest uppercase text-accent mb-4 text-center text-3xl"
        >
          Contact Us
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.5, 0, 0, 1] }}
          className="text-4xl md:text-5xl font-bold text-primary text-center mb-6"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.5, 0, 0, 1] }}
          className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16"
        >
          Have a project in mind? Let's create something exceptional together.
        </motion.p>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.5, 0, 0, 1] }}
          className="space-y-8"
        >
          <div className="p-6 rounded-2xl bg-card/30 backdrop-blur-xl border border-border/50">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Book a Strategic Call
            </h3>
            <div 
              id="calendly-embed" 
              className="rounded-xl overflow-hidden"
              style={{ minWidth: '320px', height: '600px' }}
            />
          </div>

          <div className="p-8 rounded-2xl bg-card/30 backdrop-blur-xl border border-border/50">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Email Us
            </h3>
            <a
              href="mailto:support@cognitiveside.com"
              className="text-lg text-accent hover:text-primary transition-colors duration-300"
            >
              support@cognitiveside.com
            </a>
            
            <div className="mt-6 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
