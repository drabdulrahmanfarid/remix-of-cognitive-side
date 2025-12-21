import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const industries = [
  'Finance',
  'Healthcare',
  'E-commerce',
  'Manufacturing',
  'Logistics',
  'Insurance',
  'Real Estate',
  'Retail'
];

const WhoWeWorkWithSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.5, 0, 0, 1] as const
      }
    }
  };

  return (
    <section ref={ref} className="py-32 md:py-40 px-6 bg-secondary/40 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
          className="block font-medium tracking-widest uppercase text-primary mb-8 text-3xl"
        >
          Industries we serve
        </motion.span>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.5, 0, 0, 1] }}
          className="text-xl sm:text-2xl leading-relaxed mb-12 text-foreground font-semibold"
        >
          We partner with forward-thinking organizations across diverse industries to implement AI-driven solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={chipVariants}
              className="group relative px-6 py-3 text-sm font-medium text-foreground/80 bg-card backdrop-blur-sm rounded-full cursor-default overflow-hidden"
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: [0.5, 0, 0, 1] }
              }}
            >
              {/* Animated border stroke */}
              <motion.div
                className="absolute inset-0 rounded-full border border-transparent"
                initial={{ borderColor: 'hsl(218 35% 22% / 0.5)' }}
                whileHover={{
                  borderColor: 'hsl(43 52% 54% / 0.6)',
                  boxShadow: '0 0 20px hsl(43 52% 54% / 0.15), inset 0 0 20px hsl(43 52% 54% / 0.05)'
                }}
                transition={{ duration: 0.4, ease: [0.5, 0, 0, 1] }}
              />
              
              {/* Background glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              <span className="relative z-10 group-hover:text-foreground transition-colors duration-300">
                {industry}
              </span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
