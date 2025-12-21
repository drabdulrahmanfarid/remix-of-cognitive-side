import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const services = [
  {
    title: 'Custom AI Software',
    description: 'We develop tailor-made AI solutions designed specifically for your business needs, from intelligent automation to predictive analytics.'
  },
  {
    title: 'Business Consulting',
    description: 'Strategic AI consulting and workshops to help you identify opportunities and implement AI-driven transformation in your organization.'
  },
  {
    title: 'AI Agents Development',
    description: 'We create autonomous AI agents that can handle complex tasks, make decisions, and scale your operations automatically.'
  }
];

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      ease: [0.5, 0, 0, 1] as const
    }
  })
};

const WhatWeDoSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} id="services" className="py-32 md:py-40 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
          className="block font-medium tracking-widest uppercase text-accent mb-16 text-center text-3xl"
        >
          What we do
        </motion.span>
        
        <ul className="grid md:grid-cols-3 gap-6 list-none p-0 m-0">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              custom={index}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={cardVariants}
              className="relative min-h-[16rem] list-none"
            >
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
                <div className="group relative h-full flex flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-border bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
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
