import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GlowingEffect } from './ui/glowing-effect';

const industries = [
  {
    title: 'Real Estate',
    subtitle: 'Smart property insights and automated valuations',
    useCases: ['Property Valuation', 'Lead Scoring', 'Market Analysis']
  },
  {
    title: 'Finance',
    subtitle: 'Intelligent risk assessment and fraud detection',
    useCases: ['Risk Analysis', 'Fraud Detection', 'Portfolio Optimization']
  },
  {
    title: 'Healthcare',
    subtitle: 'AI-powered diagnostics and patient care optimization',
    useCases: ['Diagnostics', 'Patient Flow', 'Resource Planning']
  },
  {
    title: 'E-commerce',
    subtitle: 'Personalized shopping and inventory intelligence',
    useCases: ['Recommendations', 'Demand Forecasting', 'Price Optimization']
  },
  {
    title: 'Manufacturing',
    subtitle: 'Predictive maintenance and quality control',
    useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain']
  },
  {
    title: 'Logistics',
    subtitle: 'Route optimization and delivery prediction',
    useCases: ['Route Planning', 'Delivery ETAs', 'Fleet Management']
  },
  {
    title: 'Insurance',
    subtitle: 'Automated underwriting and claims processing',
    useCases: ['Claims Processing', 'Risk Assessment', 'Fraud Detection']
  },
  {
    title: 'Retail',
    subtitle: 'Customer analytics and inventory management',
    useCases: ['Customer Insights', 'Stock Optimization', 'Sales Forecasting']
  }
];

const WhoWeWorkWithSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.5, 0, 0, 1] as const
      }
    }
  };

  return (
    <section ref={ref} className="py-32 md:py-40 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
            className="block font-medium tracking-widest uppercase text-accent mb-8 text-3xl"
          >
            Industries we serve
          </motion.span>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.5, 0, 0, 1] }}
            className="text-xl sm:text-2xl leading-relaxed text-primary font-semibold max-w-3xl mx-auto"
          >
            We partner with forward-thinking organizations across diverse industries to implement AI-driven solutions.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={cardVariants}
              className="group relative"
              whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.5, 0, 0, 1] } }}
            >
              <div className="relative h-full rounded-2xl border border-border bg-background p-6 overflow-hidden">
                <GlowingEffect
                  spread={60}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {industry.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {industry.subtitle}
                  </p>
                  
                  {/* Divider */}
                  <div className="h-px bg-accent/30 mb-4" />
                  
                  {/* Use Cases Section */}
                  <div>
                    <span className="text-xs font-medium tracking-wider uppercase text-accent/80 mb-3 block">
                      Use Cases
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {industry.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-3 py-1.5 text-xs font-medium text-primary/70 bg-secondary/60 rounded-full border border-border/50 transition-colors duration-200 group-hover:bg-secondary group-hover:text-primary/90"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
