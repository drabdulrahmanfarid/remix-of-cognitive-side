import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
const differentiators = ['Execution over theory', 'Built for real teams, not demos', 'Structured, repeatable delivery', 'Focus on measurable outcomes', 'Designed for scale'];
const WhyTransvyraSection = () => {
  const {
    ref,
    isInView
  } = useInView({
    threshold: 0.3
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.5, 0, 0, 1] as const
      }
    }
  };
  return <section ref={ref} className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.span initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6,
        ease: [0.5, 0, 0, 1]
      }} className="block font-medium tracking-widest uppercase text-accent mb-12 text-center text-3xl">
          Why goldenfield.io
        </motion.span>

        <motion.ul className="space-y-8" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {differentiators.map((item, index) => <motion.li key={item} variants={itemVariants} className="group flex items-center gap-6">
              {/* Animated line marker */}
              <div className="relative flex items-center">
                <motion.div className="w-8 h-[1px] bg-accent/40 origin-left" initial={{
              scaleX: 0.5
            }} whileHover={{
              scaleX: 1,
              backgroundColor: 'hsl(47 70% 47%)'
            }} transition={{
              duration: 0.4,
              ease: [0.5, 0, 0, 1]
            }} />
                {/* Glowing dot at end */}
                <motion.div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-accent/60" initial={{
              scale: 0,
              opacity: 0
            }} animate={isInView ? {
              scale: 1,
              opacity: 1
            } : {
              scale: 0,
              opacity: 0
            }} transition={{
              duration: 0.3,
              delay: 0.3 + index * 0.1
            }} whileHover={{
              scale: 1.5,
              boxShadow: '0 0 10px hsl(47 70% 47% / 0.6)'
            }} />
              </div>
              
              <span className="text-lg group-hover:text-glow transition-all duration-400 text-primary font-semibold sm:text-2xl">
                {item}
              </span>
            </motion.li>)}
        </motion.ul>
      </div>
    </section>;
};
export default WhyTransvyraSection;