import { useState, useEffect } from 'react';

export type PerformanceTier = 'high' | 'medium' | 'low';

interface PerformanceInfo {
  tier: PerformanceTier;
  isLowEnd: boolean; // Backwards compatibility
  prefersReducedMotion: boolean;
  hardwareConcurrency: number;
  deviceMemory: number | null;
  gpuInfo: string | null;
}

// Check if GPU is likely software-rendered or low-powered
function detectGPUTier(): { isWeakGPU: boolean; gpuInfo: string | null } {
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl || !(gl instanceof WebGLRenderingContext)) {
      return { isWeakGPU: true, gpuInfo: null };
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) {
      return { isWeakGPU: false, gpuInfo: null };
    }

    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    const gpuInfo = renderer ? String(renderer).toLowerCase() : null;

    // Check for software rendering or known weak GPUs
    const weakGPUIndicators = [
      'swiftshader',
      'software',
      'llvmpipe',
      'microsoft basic render',
      'intel hd graphics',
      'intel uhd graphics',
      'intel(r) hd graphics',
      'intel(r) uhd graphics',
      'mali-4',
      'mali-t',
      'adreno 3',
      'adreno 4',
      'powervr sgx',
      'apple gpu', // iOS Safari - be conservative
    ];

    const isWeakGPU = gpuInfo ? weakGPUIndicators.some(indicator => gpuInfo.includes(indicator)) : false;

    // Clean up
    canvas.remove();

    return { isWeakGPU, gpuInfo };
  } catch {
    return { isWeakGPU: false, gpuInfo: null };
  }
}

// Quick frame rate test to detect actual performance
function measureFrameRate(): Promise<number> {
  return new Promise((resolve) => {
    let frameCount = 0;
    const startTime = performance.now();
    const duration = 200; // Test for 200ms

    function countFrame() {
      frameCount++;
      if (performance.now() - startTime < duration) {
        requestAnimationFrame(countFrame);
      } else {
        const elapsed = performance.now() - startTime;
        const fps = (frameCount / elapsed) * 1000;
        resolve(fps);
      }
    }

    requestAnimationFrame(countFrame);
  });
}

export function usePerformance(): PerformanceInfo {
  const [performanceInfo, setPerformanceInfo] = useState<PerformanceInfo>(() => {
    return {
      tier: 'high',
      isLowEnd: false,
      prefersReducedMotion: false,
      hardwareConcurrency: 8,
      deviceMemory: null,
      gpuInfo: null,
    };
  });

  useEffect(() => {
    const checkPerformance = async () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Hardware concurrency (CPU cores)
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      
      // Device memory (in GB, Chrome only)
      const deviceMemory = (navigator as any).deviceMemory || null;
      
      // Connection type detection
      const connection = (navigator as any).connection;
      const isSlowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '3g';
      
      // Mobile detection
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Screen size check
      const isSmallScreen = window.innerWidth < 768;
      
      // Battery saver detection (if available)
      let isBatterySaver = false;
      try {
        const battery = await (navigator as any).getBattery?.();
        if (battery) {
          isBatterySaver = battery.charging === false && battery.level < 0.2;
        }
      } catch {
        // Battery API not available
      }

      // GPU detection
      const { isWeakGPU, gpuInfo } = detectGPUTier();

      // Frame rate test (only run once on initial load)
      let fps = 60;
      try {
        fps = await measureFrameRate();
      } catch {
        fps = 60;
      }

      // Determine performance tier
      let tier: PerformanceTier = 'high';

      // LOW tier: Very weak devices or user prefers reduced motion
      if (
        prefersReducedMotion ||
        hardwareConcurrency <= 2 ||
        (deviceMemory !== null && deviceMemory <= 2) ||
        fps < 30
      ) {
        tier = 'low';
      }
      // MEDIUM tier: Weak laptop/device (catches most lagging cases)
      else if (
        hardwareConcurrency <= 4 ||
        (deviceMemory !== null && deviceMemory <= 4) ||
        isWeakGPU ||
        isSlowConnection ||
        isBatterySaver ||
        fps < 50 ||
        (isMobile && isSmallScreen)
      ) {
        tier = 'medium';
      }

      setPerformanceInfo({
        tier,
        isLowEnd: tier === 'low' || tier === 'medium', // Both use lightweight mode
        prefersReducedMotion,
        hardwareConcurrency,
        deviceMemory,
        gpuInfo,
      });
    };

    checkPerformance();

    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => checkPerformance();
    mediaQuery.addEventListener('change', handleChange);

    // Re-check on resize
    window.addEventListener('resize', checkPerformance);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', checkPerformance);
    };
  }, []);

  return performanceInfo;
}

export default usePerformance;
