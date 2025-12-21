import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GlowingEffect } from './ui/glowing-effect';
const steps = [{
  title: 'Discovery',
  description: 'We analyze your business needs and identify AI opportunities.'
}, {
  title: 'Proposal',
  description: 'We create a detailed project plan with timelines and deliverables.'
}, {
  title: 'Assessment',
  description: 'We evaluate technical requirements and data infrastructure.'
}, {
  title: 'Creation',
  description: 'We develop and test your custom AI solution iteratively.'
}, {
  title: 'Delivery',
  description: 'We deploy, integrate, and provide ongoing support.'
}];
const HowWeWorkSection = () => {
  const {
    ref,
    isInView
  } = useInView({
    threshold: 0.3
  });
  return <section ref={ref} id="how-we-work" className="py-32 md:py-40 px-6 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10">
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
      }} className="block font-medium tracking-widest uppercase text-accent mb-20 text-center text-3xl">
          How we work
        </motion.span>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Animated gradient connecting line */}
          <motion.div className="absolute top-6 left-[5%] right-[5%] h-[1px] origin-left overflow-hidden" initial={{
          scaleX: 0
        }} animate={isInView ? {
          scaleX: 1
        } : {
          scaleX: 0
        }} transition={{
          duration: 1.2,
          ease: [0.5, 0, 0, 1]
        }}>
            <div className="w-full h-full bg-gradient-to-r from-transparent via-accent/50 to-transparent animate-border-glow" />
          </motion.div>
          
          <div className="grid grid-cols-5 gap-4 border-solid">
            {steps.map((step, index) => <motion.div key={step.title} className="text-center" initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 30
          }} transition={{
            duration: 0.6,
            delay: 0.3 + index * 0.12,
            ease: [0.5, 0, 0, 1]
          }}>
                {/* Step indicator with glow */}
                <div className="relative mb-8">
                  <div className="relative w-12 h-12 mx-auto">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={2}
                    />
                    <motion.div className="relative w-full h-full rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center cursor-default" whileHover={{
                      scale: 1.15,
                      borderColor: 'hsl(241 100% 70% / 0.6)',
                      boxShadow: '0 0 30px hsl(241 100% 70% / 0.3), inset 0 0 20px hsl(241 100% 70% / 0.1)'
                    }} transition={{
                      duration: 0.4,
                      ease: [0.5, 0, 0, 1]
                    }}>
                      <span className="text-sm font-semibold text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </motion.div>
                  </div>
                  
                  {/* Pulsing glow ring */}
                  <motion.div className="absolute inset-0 w-12 h-12 mx-auto rounded-full" initial={{
                    opacity: 0
                  }} animate={isInView ? {
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.5, 1.8]
                  } : {
                    opacity: 0
                  }} transition={{
                    duration: 2,
                    delay: 1 + index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }} style={{
                    background: 'radial-gradient(circle, hsl(241 100% 70% / 0.3) 0%, transparent 70%)'
                  }} />
                </div>
                
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>)}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden relative">
          {/* Vertical gradient line */}
          <motion.div className="absolute left-6 top-0 bottom-0 w-[1px] origin-top overflow-hidden" initial={{
          scaleY: 0
        }} animate={isInView ? {
          scaleY: 1
        } : {
          scaleY: 0
        }} transition={{
          duration: 1,
          ease: [0.5, 0, 0, 1]
        }}>
            <div className="w-full h-full bg-gradient-to-b from-accent/50 via-accent/30 to-transparent" />
          </motion.div>
          
          <div className="space-y-10">
            {steps.map((step, index) => <motion.div key={step.title} className="relative flex items-start gap-6 pl-2" initial={{
            opacity: 0,
            x: -20
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: -20
          }} transition={{
            duration: 0.6,
            delay: 0.2 + index * 0.12,
            ease: [0.5, 0, 0, 1]
          }}>
                {/* Step indicator */}
                <div className="relative w-8 h-8 flex-shrink-0 z-10">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <motion.div className="relative w-full h-full rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center" whileHover={{
                    borderColor: 'hsl(241 100% 70% / 0.5)',
                    boxShadow: '0 0 20px hsl(241 100% 70% / 0.2)'
                  }}>
                    <span className="text-xs font-semibold text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HowWeWorkSection;