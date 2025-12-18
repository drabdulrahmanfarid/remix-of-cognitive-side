import { useInView } from '../hooks/useInView';

const ClosingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      id="contact"
      ref={ref}
      className="py-32 md:py-48 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 leading-tight transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Work should move with clarity.
        </h2>
        <p 
          className={`text-lg sm:text-xl text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          We help organizations design that clarity.
        </p>
        <div 
          className={`transition-all duration-700 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="mailto:contact@transvyra.com"
            className="inline-flex items-center gap-2 px-10 py-4 text-base font-medium rounded-full bg-cta text-cta-foreground hover:bg-cta/90 transition-all duration-300 hover:shadow-xl hover:shadow-cta/20 hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
