import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

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
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const WhatWeDoSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
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
                transition: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }
              }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 overflow-hidden cursor-default"
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, hsl(241 100% 70% / 0.03) 0%, hsl(359 82% 75% / 0.03) 100%)',
                }}
              />
              
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: 'inset 0 0 0 1px hsl(241 100% 70% / 0.2), 0 20px 40px -20px hsl(231 58% 33% / 0.15)',
                }}
              />

              {/* Floating accent line */}
              <motion.div
                className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              />

              <div className="relative z-10">
                {/* Title with animated underline */}
                <div className="relative inline-block mb-3">
                  <motion.h3 
                    className="text-xl md:text-2xl font-semibold text-primary"
                  >
                    <motion.span
                      className="inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.title}
                    </motion.span>
                  </motion.h3>
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-[2px] bg-accent"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                </div>

                {/* Description with subtle fade-up on card hover */}
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Subtle arrow indicator on hover */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-xs font-medium">Learn more</span>
                  <motion.svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
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
