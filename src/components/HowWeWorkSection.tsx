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
        <span 
          className={`block text-sm font-medium tracking-widest uppercase text-accent mb-20 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          How we work
        </span>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div 
            className={`absolute top-6 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent transition-all duration-1000 ${
              isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`text-center transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Step indicator */}
                <div className="relative mb-8">
                  <div className="w-12 h-12 mx-auto rounded-full bg-card border-2 border-primary/20 flex items-center justify-center group hover:border-accent hover:scale-110 transition-all duration-300">
                    <span className="text-sm font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div 
            className={`absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border via-border to-transparent transition-all duration-1000 ${
              isInView ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex items-start gap-6 pl-2 transition-all duration-700 ${
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
