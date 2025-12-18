import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Adoption',
    description: 'We ensure teams don\'t just learn tools — they use them correctly inside daily operations.',
  },
  {
    title: 'Workflow Design',
    description: 'We map, simplify, and structure operational workflows across departments.',
  },
  {
    title: 'Execution Enablement',
    description: 'We deploy workflows that remove friction, delays, and manual dependency.',
  },
  {
    title: 'Performance Tracking',
    description: 'We measure outcomes and continuously optimize operational performance.',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      ease: [0.5, 0, 0, 1] as const,
    },
  }),
};

const WhatWeDoSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 px-6 bg-secondary/30 relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
          className="block text-sm font-medium tracking-widest uppercase text-accent mb-16 text-center"
        >
          What we do
        </motion.span>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.4, ease: [0.5, 0, 0, 1] }
              }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 overflow-hidden cursor-default"
            >
              {/* Animated gradient border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, hsl(241 100% 70% / 0.1) 0%, transparent 50%, hsl(241 100% 70% / 0.05) 100%)',
                  boxShadow: 'inset 0 0 0 1px hsl(241 100% 70% / 0.3), 0 20px 40px -20px hsl(241 100% 70% / 0.2)',
                }}
              />

              {/* Animated top border line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.5, 0, 0, 1] }}
              />

              <div className="relative z-10">
                {/* Title with glow on hover */}
                <motion.h3 
                  className="text-xl md:text-2xl font-semibold text-primary mb-3 group-hover:text-glow transition-all duration-300"
                >
                  {service.title}
                </motion.h3>

                {/* Animated underline */}
                <motion.div
                  className="h-[1px] bg-accent/60 mb-4 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ width: '40px' }}
                  transition={{ duration: 0.4, ease: [0.5, 0, 0, 1] }}
                />

                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Arrow indicator with slide animation */}
                <motion.div
                  className="mt-5 flex items-center gap-2 text-accent"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: [0.5, 0, 0, 1] }}
                >
                  <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
