import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const industries = [
  'Healthcare',
  'Finance',
  'Operations',
  'Enterprise Services',
  'Corporate Functions',
];

const WhoWeWorkWithSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 px-6 bg-secondary/30"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="block text-sm font-medium tracking-widest uppercase text-accent mb-8"
        >
          Who we work with
        </motion.span>
        
        <motion.p 
          className="text-xl sm:text-2xl text-primary/80 font-light leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We partner with mid-to-large organizations across regulated and operationally complex industries.
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
              whileHover={{ 
                y: -4,
                borderColor: 'hsl(241 100% 70% / 0.5)',
                boxShadow: '0 8px 20px -8px hsl(241 100% 70% / 0.2)',
              }}
              className="px-5 py-2.5 text-sm font-medium text-primary/80 bg-card border border-border/50 rounded-full cursor-default transition-colors duration-300"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
