import { useInView } from '../hooks/useInView';

const WhoWeAreSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="py-32 md:py-40 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <span 
          className={`inline-block text-sm font-medium tracking-widest uppercase text-accent mb-8 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Who we are
        </span>
        <div className="space-y-6">
          <p 
            className={`text-2xl sm:text-3xl md:text-4xl font-medium text-primary leading-relaxed transition-all duration-700 delay-100 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Transvyra is an operations enablement firm.
          </p>
          <p 
            className={`text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We work with teams to structure how work flows, executes, and scales.
          </p>
          <p 
            className={`text-lg text-primary/70 font-medium transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            No theory. Only implementation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
