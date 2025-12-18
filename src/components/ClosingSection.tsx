import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const ClosingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      id="contact"
      ref={ref}
      className="py-32 md:py-48 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          Work should move with clarity.
        </motion.h2>
        <motion.p 
          className="text-lg sm:text-xl text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          We design the systems that make that possible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.a
            href="mailto:contact@transvyra.com"
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-medium rounded-full bg-cta text-cta-foreground transition-colors duration-300"
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 40px -15px hsl(359 82% 75% / 0.4)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
