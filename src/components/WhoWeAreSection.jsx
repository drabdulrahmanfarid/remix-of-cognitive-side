import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
const WhoWeAreSection = () => {
  const {
    ref,
    isInView
  } = useInView({
    threshold: 0.3
  });
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };
  return <section ref={ref} id="about" className="py-32 md:py-40 px-6">
      <motion.div className="max-w-3xl mx-auto text-center" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        <motion.span variants={itemVariants} className="inline-block font-medium tracking-widest uppercase text-accent mb-8 text-3xl">
          Who we are
        </motion.span>
        <div className="space-y-6">
          <motion.p variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary leading-relaxed">We design and build intelligent AI systems that streamline business operations, enhance decision-making, and unlock new growth opportunities</motion.p>
          <motion.p variants={itemVariants} className="text-xl sm:text-2xl leading-relaxed text-primary font-semibold">Our focus goes beyond tools — we create custom AI solutions that deliver real, measurable business impact</motion.p>
          
        </div>
      </motion.div>
    </section>;
};
export default WhoWeAreSection;