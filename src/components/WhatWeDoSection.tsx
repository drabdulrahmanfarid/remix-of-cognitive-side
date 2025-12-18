import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

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
        
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              custom={index}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={cardVariants}
              className="relative min-h-[14rem] list-none"
            >
              <div className="relative h-full rounded-2xl border border-border/50 p-px">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="group relative h-full flex flex-col justify-between gap-4 overflow-hidden rounded-2xl p-6 md:p-8 bg-card/80 backdrop-blur-sm">
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 group-hover:text-glow transition-all duration-300">
                      {service.title}
                    </h3>

                    <motion.div
                      className="h-[1px] bg-accent/60 mb-4 origin-left"
                      initial={{ scaleX: 0.3 }}
                      whileInView={{ scaleX: 0.3 }}
                      style={{ width: '40px' }}
                    />

                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-accent"
                    initial={{ opacity: 0, x: -10 }}
                  >
                    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                  </motion.div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
