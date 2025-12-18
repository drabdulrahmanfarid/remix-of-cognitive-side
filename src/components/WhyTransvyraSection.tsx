import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const differentiators = [
  'Execution over theory',
  'Built for real teams, not demos',
  'Structured, repeatable delivery',
  'Focus on measurable outcomes',
  'Designed for scale',
];

const WhyTransvyraSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="block text-sm font-medium tracking-widest uppercase text-accent mb-12 text-center"
        >
          Why Transvyra
        </motion.span>

        <motion.ul 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {differentiators.map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              className="flex items-center gap-4 group"
            >
              <motion.span 
                className="w-2 h-2 bg-accent/60 rounded-sm flex-shrink-0"
                whileHover={{ scale: 1.5, backgroundColor: 'hsl(241 100% 70%)' }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-lg sm:text-xl text-primary/80 font-light group-hover:text-primary transition-colors duration-300">
                {item}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default WhyTransvyraSection;
