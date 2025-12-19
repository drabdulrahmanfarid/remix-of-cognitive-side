import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FlowOutlineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  // Transform scroll progress for different animation phases
  // Silver lines - complete faster, stay visible
  const pathProgress = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 0.85]);

  // Golden line - fade in right after convergence (always fully drawn)
  const goldenOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);

  // Convergence - stays visible
  const convergenceOpacity = useTransform(scrollYProgress, [0.22, 0.35], [0, 0.9]);
  const convergenceScale = useTransform(scrollYProgress, [0.22, 0.35], [0.5, 1]);

  // Text appears after convergence
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.35, 0.5], [30, 0]);

  // Flow path configurations - 4 silver lines representing engagement phases
  const flowPaths = [
    { id: 1, color: 'hsl(0 0% 55%)', startY: 20, chaos: 35, delay: 0 }, // Silver
    { id: 2, color: 'hsl(0 0% 65%)', startY: 40, chaos: 50, delay: 0.08 }, // Light silver
    { id: 3, color: 'hsl(0 0% 55%)', startY: 60, chaos: 45, delay: 0.16 }, // Silver
    { id: 4, color: 'hsl(0 0% 65%)', startY: 80, chaos: 55, delay: 0.24 }, // Light silver
  ];

  // Generate SVG path for each flow line - all converge to center
  const generateFlowPath = (startY: number, chaos: number) => {
    const centerY = 50;
    
    const cp1x = 20 + (chaos * 0.2);
    const cp1y = startY + (Math.sin(chaos) * 12);
    const cp2x = 35;
    const cp2y = startY + (centerY - startY) * 0.5;

    return `M -5 ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, 50 ${centerY}`;
  };

  // Golden output path from center to right
  const goldenOutputPath = "M 50 50 C 65 50, 80 50, 98 50";

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      <div className="relative w-full h-[420px] md:h-[520px] px-4">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="goldenGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="convergenceGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Silver input lines */}
          {flowPaths.map((path) => (
            <motion.path
              key={path.id}
              d={generateFlowPath(path.startY, path.chaos)}
              stroke={path.color}
              strokeWidth={0.4}
              fill="none"
              strokeLinecap="round"
              filter="url(#softGlow)"
              style={{
                pathLength: pathProgress,
                opacity: pathOpacity
              }}
            />
          ))}

          {/* Golden output line */}
          <motion.path
            d={goldenOutputPath}
            stroke="hsl(var(--accent))"
            strokeWidth={1.8}
            fill="none"
            strokeLinecap="round"
            filter="url(#goldenGlow)"
            style={{
              opacity: goldenOpacity,
            }}
          />

          {/* Convergence point - golden */}
          <motion.circle
            cx="50"
            cy="50"
            r="1.5"
            fill="transparent"
            stroke="#c9a227"
            strokeWidth={0.3}
            filter="url(#convergenceGlow)"
            style={{
              opacity: convergenceOpacity,
              scale: convergenceScale
            }}
          />
          
          <motion.circle
            cx="50"
            cy="50"
            r="0.5"
            fill="#b8860b"
            style={{
              opacity: convergenceOpacity
            }}
          />
        </svg>

        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(201,162,39,0.15) 0%, transparent 60%)',
            opacity: convergenceOpacity
          }}
        />
      </div>

      <motion.div 
        className="relative z-10 text-center mt-12 md:mt-16 px-6"
        style={{
          opacity: textOpacity,
          y: textY
        }}
      >
        <span 
          className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium"
          style={{ color: '#c9a227' }}
        >
          How work flows
        </span>
        
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-light mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#5c4a3d' }}
        >
          From fragmented effort to structured execution.
        </h2>
        
        <p 
          className="text-sm md:text-base mt-4 max-w-lg mx-auto"
          style={{ color: '#5c4a3d', opacity: 0.6 }}
        >
          We design how work converges, executes, and scales.
        </p>
      </motion.div>
    </section>
  );
};

export default FlowOutlineSection;
