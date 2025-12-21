import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowUpRight, Calendar, MessageCircle } from 'lucide-react';
import { Suspense, lazy, useState } from 'react';

const NeonRaymarcher = lazy(() => import('./ui/neon-raymarcher'));

const ClosingSection = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleClick = () => {
    if (isClicked) return;
    setIsClicked(true);
    setTimeout(() => {
      setShowSuccess(true);
    }, 500);
  };

  const handleBookCall = () => {
    window.open('https://calendly.com/morfeushub', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/message', '_blank');
  };

  return (
    <section id="contact" ref={ref} className="min-h-screen py-32 md:py-48 px-6 relative overflow-hidden flex items-center justify-center">
      {/* 3D Raymarcher Background */}
      <div className="absolute inset-0 opacity-50">
        <Suspense fallback={<div className="absolute inset-0 grid-pattern opacity-30" />}>
          <NeonRaymarcher />
        </Suspense>
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Availability Status - Top Right */}
      <motion.div
        className="absolute top-8 right-8 z-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.5, 0, 0, 1] }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-sm text-muted-foreground font-medium">
          Available for projects
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Success State - "Perfect, Let's talk" */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: showSuccess ? 1 : 0,
            height: showSuccess ? 'auto' : 0
          }}
          transition={{ duration: 0.5, ease: [0.5, 0, 0, 1] }}
        >
          <span className="text-accent text-lg font-medium tracking-wide">
            Perfect
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary mt-1">
            Let's talk
          </h3>
        </motion.div>

        {/* Contact buttons - Appears after click */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showSuccess ? 1 : 0,
            y: showSuccess ? 0 : 20
          }}
          transition={{ duration: 0.5, delay: showSuccess ? 0.15 : 0, ease: [0.5, 0, 0, 1] }}
          style={{ pointerEvents: showSuccess ? 'auto' : 'none' }}
        >
          <motion.button
            onClick={handleBookCall}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-primary font-medium">Book a call</span>
            <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>

          <motion.button
            onClick={handleWhatsApp}
            className="group flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <MessageCircle className="w-4 h-4 text-accent" />
            <span className="text-primary font-medium">WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>

        {/* Main Interactive Headline */}
        <motion.button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          className="relative cursor-pointer group"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.5, 0, 0, 1] }}
          style={{ pointerEvents: isClicked ? 'none' : 'auto' }}
        >
          <div className="relative">
            {/* Main text container */}
            <div className="relative overflow-hidden pb-4">
              <motion.div
                animate={{
                  opacity: isClicked ? 0 : 1,
                  y: isClicked ? -20 : 0
                }}
                transition={{ duration: 0.5, ease: [0.5, 0, 0, 1] }}
              >
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-primary leading-none">
                  Let's work
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-primary leading-none mt-2">
                  together
                </span>
              </motion.div>
            </div>

            {/* Hover decoration - Arrow */}
            <motion.div
              className="absolute -right-8 md:-right-16 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isHovered && !isClicked ? 1 : 0,
                x: isHovered && !isClicked ? 0 : -10
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-8 h-8 md:w-12 md:h-12 text-accent" />
            </motion.div>

            {/* Underline accent */}
            <motion.div
              className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isHovered && !isClicked ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.5, 0, 0, 1] }}
            />
          </div>
        </motion.button>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.5, 0, 0, 1] }}
          className="mt-8 max-w-md text-primary text-2xl font-semibold"
        >
          {showSuccess ? "15 min discovery call" : "Have a project in mind? Let's create something exceptional together."}
        </motion.p>
      </div>

      {/* Email - Bottom */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.5, 0, 0, 1] }}
      >
        <a
          href="mailto:info@morfeushub.com"
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          info@morfeushub.com
        </a>
      </motion.div>
    </section>
  );
};

export default ClosingSection;
