import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FlowOutlineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress for different animation phases
  const pathProgress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 0.7]);
  const convergenceOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0, 0.5, 0]);
  const convergenceScale = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0.5, 1, 1.3]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [30, 0]);

  // Flow path configurations - 4 lines representing engagement phases
  const flowPaths = [
    { id: 1, startY: 20, chaos: 35, delay: 0 },
    { id: 2, startY: 40, chaos: 50, delay: 0.08 },
    { id: 3, startY: 60, chaos: 45, delay: 0.16 },
    { id: 4, startY: 80, chaos: 55, delay: 0.24 },
  ];

  // Generate SVG path for each flow line - all converge to single exit line
  const generateFlowPath = (startY: number, chaos: number) => {
    const centerY = 50;
    const exitY = 50;
    
    const cp1x = 20 + (chaos * 0.2);
    const cp1y = startY + (Math.sin(chaos) * 12);
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
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative w-full h-[300px] md:h-[400px] px-4">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ overflow: 'visible' }}
        >
          <defs>
            {/* Gradient from muted to gold - convergence at center */}
            <linearGradient id="navyToGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A9B4C7" />
              <stop offset="45%" stopColor="#A9B4C7" />
              <stop offset="50%" stopColor="#C8A24A" />
              <stop offset="55%" stopColor="#B8923F" />
              <stop offset="100%" stopColor="#C8A24A" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
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

          {flowPaths.map((path) => (
            <motion.path
              key={path.id}
              d={generateFlowPath(path.startY, path.chaos)}
              stroke="url(#navyToGold)"
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

          <motion.circle
            cx="50"
            cy="50"
            r="1.5"
            fill="transparent"
            stroke="#22D3EE"
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
            fill="#22D3EE"
            style={{
              opacity: convergenceOpacity
            }}
          />
        </svg>

        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 60%)',
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
          className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium text-primary"
        >
          How work flows
        </span>
        
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-light mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed text-foreground"
        >
          From fragmented effort to structured execution.
        </h2>
        
        <p 
          className="text-sm md:text-base mt-4 max-w-lg mx-auto text-muted-foreground"
        >
          We design how work converges, executes, and scales.
        </p>
      </motion.div>
    </section>
  );
};

export default FlowOutlineSection;
