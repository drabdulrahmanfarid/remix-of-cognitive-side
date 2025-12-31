import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { usePerformance } from "../hooks/usePerformance";
import { ArrowRight } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

const services = [
  {
    title: "Custom AI Software",
    description:
      "We build tailor-made AI solutions aligned with your business needs — from intelligent automation and workflow orchestration to predictive analytics and decision support.",
  },
  {
    title: "AI Enablement & Advisory",
    description:
      "We provide strategic AI consulting and hands-on workshops to help organizations identify high-impact AI opportunities and successfully execute AI-driven transformation.",
  },
  {
    title: "AI Agents Development",
    description:
      "We design and deploy autonomous AI agents capable of handling complex tasks, making context-aware decisions, and scaling operations with minimal human intervention.",
  },
];

const serviceFeatures = [
  {
    title: "Expert Configuration",
    description:
      "We design and configure AI systems tailored precisely to your workflows, ensuring seamless integration with your existing processes.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Our solutions are built to maximize ROI by reducing manual effort, operational costs, and time-to-execution.",
  },
  {
    title: "Continuous Support",
    description:
      "We provide ongoing monitoring, maintenance, and optimization to ensure long-term performance and reliability.",
  },
];

const WhatWeDoSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { performanceTier, isLowEnd, prefersReducedMotion } = usePerformance();

  // Adaptive animation settings
  const getAnimationDuration = () => {
    if (isLowEnd || prefersReducedMotion) return 0;
    if (performanceTier === "medium") return 0.4;
    return 0.6;
  };

  const getStaggerDelay = () => {
    if (isLowEnd || prefersReducedMotion) return 0;
    if (performanceTier === "medium") return 0.08;
    return 0.12;
  };

  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: getAnimationDuration(),
        delay: getStaggerDelay() * index,
        ease: [0.5, 0, 0, 1],
      },
    }),
  };

  return (
    <section
      ref={ref}
      id="services"
      className="py-32 md:py-40 px-6 bg-secondary/30 relative overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{
            duration: getAnimationDuration(),
            ease: [0.5, 0, 0, 1],
          }}
          className="block font-bold tracking-widest uppercase text-accent mb-16 text-center text-3xl"
        >
          What we do
        </motion.span>

        <ul className="grid md:grid-cols-3 gap-6 list-none p-0 m-0 mb-20">
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              custom={index}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={cardVariants}
              className="relative list-none group"
            >
              <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={isLowEnd}
                  performanceTier={performanceTier}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex flex-col gap-5 overflow-hidden rounded-xl border-[0.75px] border-border bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-glow transition-all duration-300">
                      {service.title}
                    </h3>

                    <div className="h-[1px] bg-accent/60 mb-4 w-10" />

                    <p className="text-primary font-medium leading-relaxed group-hover:text-primary transition-colors duration-300 text-base md:text-lg">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-accent mt-auto">
                    <span className="text-sm font-semibold group-hover:text-accent transition-colors duration-300">
                      Learn more
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

        {/* Service Features */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{
            duration: getAnimationDuration(),
            delay: getStaggerDelay() * 4,
            ease: [0.5, 0, 0, 1],
          }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          What Sets Us Apart
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: getAnimationDuration(),
                delay: getStaggerDelay() * (index + 5),
                ease: [0.5, 0, 0, 1],
              }}
              className="relative group"
            >
              <div className="relative rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={isLowEnd}
                  performanceTier={performanceTier}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="text-center p-8 rounded-xl bg-background border border-border/50">
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-base text-primary font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
