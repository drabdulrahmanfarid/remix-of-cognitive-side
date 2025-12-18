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
  const convergenceOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0, 0.5, 0]);
  const convergenceScale = useTransform(scrollYProgress, [0.25, 0.45, 0.65], [0.5, 1, 1.3]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5], [30, 0]);

  // Flow path configurations - 4 lines representing engagement phases
  const flowPaths = [
    { id: 1, color: '#232f85', startY: 20, chaos: 35, delay: 0 },      // Understand
    { id: 2, color: '#6866ff', startY: 40, chaos: 50, delay: 0.08 },   // Structure
    { id: 3, color: '#232f85', startY: 60, chaos: 45, delay: 0.16 },   // Deploy
    { id: 4, color: '#6866ff', startY: 80, chaos: 55, delay: 0.24 },   // Measure
  ];

  // Generate SVG path for each flow line - all converge to single exit line
  const generateFlowPath = (startY: number, chaos: number) => {
    const centerY = 50;
    const exitY = 50; // ALL lines exit at the same Y position = single unified line
    
    // Control points for entry (chaotic)
    const cp1x = 20 + (chaos * 0.2);
    const cp1y = startY + (Math.sin(chaos) * 12);
    const cp2x = 35;
    const cp2y = startY + (centerY - startY) * 0.5;
    
    // Control points for exit (unified)
    const cp3x = 65;
    const cp3y = centerY;
    const cp4x = 80;
    const cp4y = exitY;

    return `M -5 ${startY} 
            C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, 50 ${centerY}
            C ${cp3x} ${cp3y}, ${cp4x} ${cp4y}, 105 ${exitY}`;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#ebeae7' }}
    >
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #232f85 1px, transparent 1px),
            linear-gradient(to bottom, #232f85 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* SVG Animation Container */}
      <div className="relative w-full h-[300px] md:h-[400px] px-4">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          style={{ overflow: 'visible' }}
        >
          {/* Subtle glow filter */}
          <defs>
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

          {/* Flow paths */}
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
                opacity: useTransform(scrollYProgress, [0.1, 0.2], [0, 0.7])
              }}
            />
          ))}

          {/* Convergence point */}
          <motion.circle
            cx="50"
            cy="50"
            r="1.5"
            fill="transparent"
            stroke="#f48c8d"
            strokeWidth={0.3}
            filter="url(#convergenceGlow)"
            style={{
              opacity: convergenceOpacity,
              scale: convergenceScale
            }}
          />
          
          {/* Inner convergence dot */}
          <motion.circle
            cx="50"
            cy="50"
            r="0.5"
            fill="#f48c8d"
            style={{
              opacity: convergenceOpacity
            }}
          />
        </svg>

        {/* Soft radial glow behind convergence */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(244,140,141,0.12) 0%, transparent 60%)',
            opacity: convergenceOpacity
          }}
        />
      </div>

      {/* Text content */}
      <motion.div 
        className="relative z-10 text-center mt-12 md:mt-16 px-6"
        style={{
          opacity: textOpacity,
          y: textY
        }}
      >
        {/* Small label */}
        <span 
          className="text-xs md:text-sm tracking-[0.25em] uppercase font-medium"
          style={{ color: '#6866ff', opacity: 0.7 }}
        >
          How work flows
        </span>
        
        {/* Main statement */}
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-light mt-4 md:mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#232f85' }}
        >
          From fragmented effort to structured execution.
        </h2>
        
        {/* Micro-line */}
        <p 
          className="text-sm md:text-base mt-4 max-w-lg mx-auto"
          style={{ color: '#232f85', opacity: 0.6 }}
        >
          We design how work converges, executes, and scales.
        </p>
      </motion.div>
    </section>
  );
};

export default FlowOutlineSection;
