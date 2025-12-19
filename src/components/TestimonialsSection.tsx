import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { TestimonialCarousel, Testimonial } from './ui/testimonial';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Amazing experience working with this team! The results exceeded my expectations. Their attention to detail and commitment to quality is unmatched."
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Highly recommended! Great service and professional approach. They delivered exactly what we needed, on time and within budget."
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "Exceptional quality and professionalism. Would definitely work with them again. The team truly understands how to bring visions to life."
  },
  {
    id: 4,
    name: "Sarah Williams",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "goldenfield.io transformed our business operations. Their solutions are innovative and perfectly tailored to our needs."
  }
];

const TestimonialsSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full border border-accent/20">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the businesses we've helped transform through innovative solutions and dedicated partnership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TestimonialCarousel
            testimonials={testimonials}
            className="max-w-2xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
