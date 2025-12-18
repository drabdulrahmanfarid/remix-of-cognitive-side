import { useInView } from '../hooks/useInView';

const services = [
  {
    title: 'Adoption',
    description: 'We ensure tools are used correctly inside real workflows.',
  },
  {
    title: 'Execution',
    description: 'We design and deploy operational workflows that remove friction.',
  },
  {
    title: 'Measurement',
    description: 'We track performance and continuously optimize outcomes.',
  },
];

const WhatWeDoSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        <span 
          className={`block text-sm font-medium tracking-widest uppercase text-accent mb-16 text-center transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          What we do
        </span>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group p-8 md:p-10 rounded-2xl bg-card border border-border/50 transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
