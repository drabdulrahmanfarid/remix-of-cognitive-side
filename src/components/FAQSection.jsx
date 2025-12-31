import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
const faqs = [
  {
    question: "What types of AI solutions do you develop?",
    answer:
      "We develop custom AI software, including machine learning models, natural language processing systems, computer vision applications, and autonomous AI agents tailored to your specific business needs.",
  },
  {
    question: "How long does a typical AI project take?",
    answer:
      "Project timelines vary based on complexity. A simple AI integration might take 4-6 weeks, while comprehensive enterprise solutions typically require 3-6 months. We provide detailed timelines during our initial assessment.",
  },
  {
    question: "Do you offer ongoing support after deployment?",
    answer:
      "Yes, we provide comprehensive post-deployment support including monitoring, maintenance, updates, and continuous optimization to ensure your AI systems perform at their best.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across multiple sectors including finance, healthcare, e-commerce, manufacturing, logistics, insurance, real estate, and retail. Our AI solutions are adaptable to various industry-specific requirements.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement enterprise-grade security measures including encryption, access controls, and compliance with GDPR and other regulations. Data privacy is a top priority in all our AI implementations.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing based on project scope and requirements. This includes fixed-price projects, time-and-materials, and retainer arrangements. We provide detailed proposals after our initial discovery session.",
  },
];
const FAQSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  return (
    <section
      ref={ref}
      id="faq"
      className="py-32 md:py-40 px-6 bg-secondary/30 relative overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.5, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block font-medium tracking-widest uppercase text-accent mb-6 text-3xl">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-primary font-semibold">
            Get answers to common questions about our AI solutions and services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.5, 0, 0, 1] }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <AccordionTrigger className="text-left text-primary font-semibold hover:text-accent transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
export default FAQSection;
