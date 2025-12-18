import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const steps = [
  { title: 'Understand', subtitle: 'Map current state' },
  { title: 'Structure', subtitle: 'Design the flow' },
  { title: 'Deploy', subtitle: 'Implement change' },
  { title: 'Measure', subtitle: 'Track outcomes' },
];

const HowWeWorkSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="block text-sm font-medium tracking-widest uppercase text-accent mb-20 text-center"
        >
          How we work
        </motion.span>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Animated connecting line */}
          <motion.div 
            className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          />
          
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
              >
                {/* Step indicator */}
                <div className="relative mb-8">
                  <motion.div 
                    className="w-12 h-12 mx-auto rounded-full bg-card border-2 border-primary/20 flex items-center justify-center cursor-default"
                    whileHover={{ 
                      scale: 1.15,
                      borderColor: 'hsl(241 100% 70%)',
                      boxShadow: '0 0 20px hsl(241 100% 70% / 0.3)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-sm font-semibold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <motion.div 
            className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-border to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative flex items-start gap-6 pl-2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.15,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
              >
                {/* Step indicator */}
                <div className="w-8 h-8 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-xs font-semibold text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
