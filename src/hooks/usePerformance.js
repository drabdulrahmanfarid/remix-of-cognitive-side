import { useState, useEffect, useRef } from "react";

export function usePerformance() {
  const [performanceInfo, setPerformanceInfo] = useState(() => {
    return {
      isLowEnd: false,
      isMediumEnd: false,
      isHighEnd: true,
      performanceTier: "high", // "high" | "medium" | "low"
      prefersReducedMotion: false,
      hardwareConcurrency: 8,
      deviceMemory: null,
    };
  });

  const fpsCheckDone = useRef(false);

  useEffect(() => {
    const checkPerformance = (measuredFps = null) => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Hardware concurrency (CPU cores)
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;

      // Device memory (in GB, Chrome only)
      const deviceMemory = navigator.deviceMemory || null;

      // Connection type detection
      const connection = navigator.connection;
      const isSlowConnection =
        connection?.effectiveType === "2g" ||
        connection?.effectiveType === "slow-2g";

      // Mobile detection
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Screen size check
      const isSmallScreen = window.innerWidth < 768;

      // Calculate performance score (0-100)
      let score = 100;

      // Reduced motion = automatic low
      if (prefersReducedMotion) {
        score = 0;
      } else {
        // CPU cores scoring
        if (hardwareConcurrency <= 2) score -= 40;
        else if (hardwareConcurrency <= 4) score -= 20;
        else if (hardwareConcurrency <= 6) score -= 10;

        // Memory scoring
        if (deviceMemory !== null) {
          if (deviceMemory <= 2) score -= 30;
          else if (deviceMemory <= 4) score -= 15;
        }

        // Connection scoring
        if (isSlowConnection) score -= 20;

        // Mobile + small screen penalty
        if (isMobile && isSmallScreen) score -= 15;

        // FPS-based scoring (if measured)
        if (measuredFps !== null) {
          if (measuredFps < 30) score -= 40;
          else if (measuredFps < 45) score -= 20;
          else if (measuredFps < 55) score -= 10;
        }
      }

      // Determine tier based on score
      let performanceTier;
      if (score >= 70) {
        performanceTier = "high";
      } else if (score >= 40) {
        performanceTier = "medium";
      } else {
        performanceTier = "low";
      }

      setPerformanceInfo({
        isLowEnd: performanceTier === "low",
        isMediumEnd: performanceTier === "medium",
        isHighEnd: performanceTier === "high",
        performanceTier,
        prefersReducedMotion,
        hardwareConcurrency,
        deviceMemory,
      });
    };

    // Initial check without FPS
    checkPerformance();

    // Quick FPS check (only once)
    if (!fpsCheckDone.current) {
      fpsCheckDone.current = true;
      let frameCount = 0;
      let lastTime = performance.now();
      const framesToMeasure = 30;

      const measureFps = () => {
        frameCount++;
        if (frameCount >= framesToMeasure) {
          const elapsed = performance.now() - lastTime;
          const fps = (frameCount / elapsed) * 1000;
          checkPerformance(fps);
        } else {
          requestAnimationFrame(measureFps);
        }
      };
      requestAnimationFrame(measureFps);
    }

    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => checkPerformance();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return performanceInfo;
}

export default usePerformance;
