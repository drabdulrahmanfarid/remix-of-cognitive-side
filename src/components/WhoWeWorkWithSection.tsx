import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GlowingEffect } from './ui/glowing-effect';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

interface DetailedUseCase {
  title: string;
  description: string;
  outcomes: string[];
}

const realEstateUseCases: DetailedUseCase[] = [
  {
    title: 'AI Property Concierge (Match + Book Viewings)',
    description: 'An assistant that chats with prospects, captures requirements (budget, location, type, timeline), then recommends the best-fit listings and books a viewing automatically—handing off to the agent when needed.',
    outcomes: ['Faster replies', 'More viewings booked', 'Higher conversion', 'Less agent admin']
  },
  {
    title: 'Instant Lead Qualification (Smart Handoff)',
    description: 'Every new inquiry is followed up instantly to qualify intent and collect key details, then your team receives a structured summary so agents focus only on serious prospects.',
    outcomes: ['Higher lead quality', 'Faster response time', 'Better agent focus', 'Clearer pipeline']
  },
  {
    title: 'Tenant Repair Requests (Two-Way Tracking)',
    description: 'Tenants submit repair issues once, and managers update status over time—keeping a complete history per unit, including photos and notes, in one organized place.',
    outcomes: ['Fewer lost requests', 'Faster resolution', 'Full visibility per unit', 'Cleaner documentation']
  },
  {
    title: 'Maintenance Triage (Prioritize + Dispatch)',
    description: 'Maintenance requests are categorized and prioritized (including emergency escalation) and routed to the right vendor, while tenants receive instant acknowledgments and updates.',
    outcomes: ['Faster dispatch', 'Fewer urgent misses', 'Higher tenant satisfaction', 'Strong audit trail']
  }
];

const healthcareUseCases: DetailedUseCase[] = [
  {
    title: 'AI Symptom Pre-Screening + Doctor Recommendations',
    description: 'Patients describe symptoms in chat or a simple form. The assistant organizes the information, suggests the most relevant specialty/doctor options, and sends a clear next-step message to the patient and your team.',
    outcomes: ['Faster first response', 'Better routing', 'Less front-desk load', 'Clear patient summaries']
  },
  {
    title: 'Smart Patient Intake + Appointment Booking',
    description: 'Collects patient details and symptoms, routes to the right department, and schedules the appointment—while keeping a structured record for tracking and follow-up.',
    outcomes: ['Faster bookings', 'Fewer missed details', 'Reduced admin work', 'Cleaner intake flow']
  },
  {
    title: 'Multi-Channel Clinic Assistant (Registration + Documents)',
    description: 'A unified assistant that supports registration, scheduling, and basic document intake (text, voice notes, images, PDFs), then hands off structured summaries to the clinic team for review.',
    outcomes: ['One consistent experience', 'Faster processing', 'Better continuity', 'Stronger team visibility']
  }
];

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

const UseCaseMiniCard = ({ useCase }: { useCase: DetailedUseCase }) => (
  <div className="p-4 rounded-xl bg-secondary/40 border border-border/40 h-full">
    <h4 className="text-sm font-semibold text-primary mb-2 leading-tight">
      {useCase.title}
    </h4>
    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
      {useCase.description}
    </p>
    <p className="text-xs text-accent/80">
      <span className="font-medium">Outcomes:</span> {useCase.outcomes.join(' • ')}
    </p>
  </div>
);

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
          {industries.map((industry) => {
            const isRealEstate = industry.title === 'Real Estate';
            const isHealthcare = industry.title === 'Healthcare';
            const isExpanded = isRealEstate || isHealthcare;
            
            return (
              <motion.div
                key={industry.title}
                variants={cardVariants}
                className={`group relative ${isExpanded ? 'lg:col-span-2 lg:row-span-2' : ''}`}
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
                      
                      {isRealEstate ? (
                        <>
                          {/* Real Estate: Desktop 2x2 grid */}
                          <div className="hidden md:grid grid-cols-2 gap-4">
                            {realEstateUseCases.map((useCase) => (
                              <UseCaseMiniCard key={useCase.title} useCase={useCase} />
                            ))}
                          </div>
                          
                          {/* Real Estate: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: 'start', dragFree: true }}>
                              <CarouselContent className="-ml-3">
                                {realEstateUseCases.map((useCase) => (
                                  <CarouselItem key={useCase.title} className="basis-[85%] pl-3">
                                    <UseCaseMiniCard useCase={useCase} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </>
                      ) : isHealthcare ? (
                        <>
                          {/* Healthcare: Desktop 3-column grid */}
                          <div className="hidden md:grid grid-cols-3 gap-4">
                            {healthcareUseCases.map((useCase) => (
                              <UseCaseMiniCard key={useCase.title} useCase={useCase} />
                            ))}
                          </div>
                          
                          {/* Healthcare: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: 'start', dragFree: true }}>
                              <CarouselContent className="-ml-3">
                                {healthcareUseCases.map((useCase) => (
                                  <CarouselItem key={useCase.title} className="basis-[85%] pl-3">
                                    <UseCaseMiniCard useCase={useCase} />
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                          
                          {/* Healthcare disclaimer */}
                          <p className="text-[10px] text-muted-foreground/70 mt-4 italic">
                            This supports intake and routing and does not replace clinical judgment.
                          </p>
                        </>
                      ) : (
                        <>
                          {/* Other industries: Desktop flex wrap */}
                          <div className="hidden md:flex md:flex-wrap gap-2">
                            {industry.useCases.slice(0, 3).map((useCase) => (
                              <span
                                key={useCase}
                                className="px-3 py-1.5 text-xs font-medium text-primary/70 bg-secondary/60 rounded-full border border-border/50 transition-colors duration-200 group-hover:bg-secondary group-hover:text-primary/90"
                              >
                                {useCase}
                              </span>
                            ))}
                          </div>
                          
                          {/* Other industries: Mobile carousel */}
                          <div className="md:hidden">
                            <Carousel opts={{ align: 'start', dragFree: true }}>
                              <CarouselContent className="-ml-2">
                                {industry.useCases.slice(0, 3).map((useCase) => (
                                  <CarouselItem key={useCase} className="basis-auto pl-2">
                                    <span className="px-3 py-1.5 text-xs font-medium text-primary/70 bg-secondary/60 rounded-full border border-border/50 transition-colors duration-200 group-hover:bg-secondary group-hover:text-primary/90 inline-block">
                                      {useCase}
                                    </span>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                            </Carousel>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeWorkWithSection;
