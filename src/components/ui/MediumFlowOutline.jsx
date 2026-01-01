import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Medium-performance flow outline section
// Uses IntersectionObserver instead of continuous scroll tracking
// Simpler animations with CSS transitions
const MediumFlowOutline = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Use IntersectionObserver instead of scroll tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Static flow path configurations
  const flowPaths = [
    { id: 1, startY: 20, chaos: 35 },
    { id: 2, startY: 40, chaos: 50 },
    { id: 3, startY: 60, chaos: 45 },
    { id: 4, startY: 80, chaos: 55 },
  ];

  const generateFlowPath = (startY, chaos) => {
    const centerY = 50;
    const exitY = 50;
    const cp1x = 20 + chaos * 0.2;
    const cp1y = startY + Math.sin(chaos) * 12;
    const cp2x = 35;
    const cp2y = startY + (centerY - startY) * 0.5;
    const cp3x = 65;
    const cp3y = centerY;
    const cp4x = 80;
    const cp4y = exitY;
    return `M -5 ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, 50 ${centerY} C ${cp3x} ${cp3y}, ${cp4x} ${cp4y}, 105 ${exitY}`;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full h-[300px] md:h-[400px] px-4">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="silverToGoldMedium" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a8a8a8" />
              <stop offset="45%" stopColor="#c0c0c0" />
              <stop offset="50%" stopColor="#c9a227" />
              <stop offset="55%" stopColor="#b8860b" />
              <stop offset="100%" stopColor="#daa520" />
            </linearGradient>
          </defs>

          {/* Static paths that fade in */}
          {flowPaths.map((path, index) => (
            <motion.path
              key={path.id}
              d={generateFlowPath(path.startY, path.chaos)}
              stroke="url(#silverToGoldMedium)"
              strokeWidth={0.4}
              fill="none"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={isVisible ? { opacity: 0.7, pathLength: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Convergence circle - simple fade */}
          <motion.circle
            cx="50"
            cy="50"
            r="1.5"
            fill="transparent"
            stroke="#f48c8d"
            strokeWidth={0.3}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 0.5, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          <motion.circle
            cx="50"
            cy="50"
            r="0.5"
            fill="#f48c8d"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 0.5 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </svg>

        {/* Radial gradient overlay */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(244,140,141,0.12) 0%, transparent 60%)",
          }}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </div>

      {/* Text content */}
      <motion.div
        className="relative z-10 text-center mt-12 md:mt-16 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium text-accent">
          How work flows
        </span>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed text-foreground">
          From fragmented effort to structured execution.
        </h2>

        <p className="text-sm md:text-base mt-4 max-w-lg mx-auto text-muted-foreground">
          We design how work converges, executes, and scales.
        </p>
      </motion.div>
    </section>
  );
};

export default MediumFlowOutline;
