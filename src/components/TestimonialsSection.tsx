import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { TestimonialCarousel, Testimonial } from './ui/testimonial';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marco Rossi",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "MorfeusHub transformed our customer service operations. Their AI solution reduced response times by 70% and improved customer satisfaction significantly."
  },
  {
    id: 2,
    name: "Elena Bianchi",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "The autonomous AI agents they developed for our logistics company have streamlined our entire supply chain. Exceptional quality and professionalism."
  },
  {
    id: 3,
    name: "Alessandro Conti",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    description: "Their business consulting helped us identify AI opportunities we never knew existed. The ROI on our AI investment has exceeded all expectations."
  },
  {
    id: 4,
    name: "Giulia Marino",
    avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    description: "Working with MorfeusHub was a game-changer. Their custom AI software has given us a significant competitive advantage in our market."
  }
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full border border-accent/20 text-3xl">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-primary font-semibold">
            Hear from the businesses we've helped transform through innovative AI solutions and dedicated partnership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TestimonialCarousel testimonials={testimonials} className="max-w-2xl mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
