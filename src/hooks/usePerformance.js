import { useState, useEffect, useRef, useCallback } from "react";

// Animation config helpers for consistent tiered settings
export const getMotionConfig = (performanceTier, prefersReducedMotion) => {
  if (prefersReducedMotion) {
    return {
      duration: 0.01,
      stagger: 0,
      spring: { type: "tween", duration: 0.01 },
      transition: { duration: 0.01 },
    };
  }

  switch (performanceTier) {
    case "low":
      return {
        duration: 0.15,
        stagger: 0,
        spring: { type: "tween", duration: 0.15 },
        transition: { duration: 0.15, ease: "easeOut" },
      };
    case "medium":
      return {
        duration: 0.3,
        stagger: 0.05,
        spring: { type: "tween", duration: 0.3 },
        transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      };
    case "high":
    default:
      return {
        duration: 0.6,
        stagger: 0.12,
        spring: { type: "spring", stiffness: 300, damping: 30 },
        transition: { duration: 0.6, ease: [0.5, 0, 0, 1] },
      };
  }
};

// Blur intensity helpers
export const getBlurConfig = (performanceTier) => {
  switch (performanceTier) {
    case "low":
      return { backdrop: "", background: "bg-card/95" };
    case "medium":
      return { backdrop: "backdrop-blur-sm", background: "bg-card/80" };
    case "high":
    default:
      return { backdrop: "backdrop-blur-2xl", background: "bg-card/60" };
  }
};

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
      isAndroid: false,
      isSafari: false,
    };
  });

  const fpsCheckDone = useRef(false);
  const fpsMonitorRef = useRef(null);

  useEffect(() => {
    const checkPerformance = (measuredFps = null, isDowngrade = false) => {
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
        connection?.effectiveType === "slow-2g" ||
        connection?.effectiveType === "3g";

      // Mobile detection
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Android detection (historically weaker GPU drivers)
      const isAndroid = /Android/i.test(navigator.userAgent);

      // Safari detection (different compositing behavior)
      const isSafari =
        /Safari/i.test(navigator.userAgent) &&
        !/Chrome/i.test(navigator.userAgent);

      // Screen size check
      const isSmallScreen = window.innerWidth < 768;

      // Screen refresh rate (if available) - lower than 60hz indicates lower-end
      const isLowRefreshRate =
        window.screen?.refreshRate && window.screen.refreshRate < 60;

      // Calculate performance score (0-100)
      let score = 100;

      // Reduced motion = automatic low
      if (prefersReducedMotion) {
        score = 0;
      } else {
        // CPU cores scoring (stricter)
        if (hardwareConcurrency <= 2) score -= 45;
        else if (hardwareConcurrency <= 4) score -= 30;
        else if (hardwareConcurrency <= 6) score -= 15;

        // Memory scoring (stricter)
        if (deviceMemory !== null) {
          if (deviceMemory <= 2) score -= 35;
          else if (deviceMemory <= 4) score -= 20;
          else if (deviceMemory <= 6) score -= 10;
        }

        // Connection scoring
        if (isSlowConnection) score -= 20;

        // Android penalty (GPU driver issues are common)
        if (isAndroid) score -= 15;

        // Mobile + small screen penalty
        if (isMobile && isSmallScreen) score -= 10;

        // Low refresh rate penalty
        if (isLowRefreshRate) score -= 15;

        // FPS-based scoring (if measured) - stricter thresholds
        if (measuredFps !== null) {
          if (measuredFps < 25) score -= 50;
          else if (measuredFps < 35) score -= 35;
          else if (measuredFps < 45) score -= 25;
          else if (measuredFps < 55) score -= 15;
        }
      }

      // Clamp score
      score = Math.max(0, Math.min(100, score));

      // Determine tier based on score - adjusted thresholds
      // High: 75+ (was 70) - only truly powerful devices
      // Medium: 45-74 (was 40-69) - catches more mid-range devices
      // Low: 0-44 (was 0-39) - more devices get optimization
      let performanceTier;
      if (score >= 75) {
        performanceTier = "high";
      } else if (score >= 45) {
        performanceTier = "medium";
      } else {
        performanceTier = "low";
      }

      // If this is a downgrade from FPS monitoring, don't go back up
      if (isDowngrade) {
        setPerformanceInfo((prev) => {
          const tierOrder = { high: 2, medium: 1, low: 0 };
          if (tierOrder[performanceTier] < tierOrder[prev.performanceTier]) {
            return {
              isLowEnd: performanceTier === "low",
              isMediumEnd: performanceTier === "medium",
              isHighEnd: performanceTier === "high",
              performanceTier,
              prefersReducedMotion,
              hardwareConcurrency,
              deviceMemory,
              isAndroid,
              isSafari,
            };
          }
          return prev;
        });
      } else {
        setPerformanceInfo({
          isLowEnd: performanceTier === "low",
          isMediumEnd: performanceTier === "medium",
          isHighEnd: performanceTier === "high",
          performanceTier,
          prefersReducedMotion,
          hardwareConcurrency,
          deviceMemory,
          isAndroid,
          isSafari,
        });
      }
    };

    // Initial check without FPS
    checkPerformance();

    // Quick FPS check (only once at startup)
    if (!fpsCheckDone.current) {
      fpsCheckDone.current = true;
      let frameCount = 0;
      let lastTime = performance.now();
      const framesToMeasure = 60; // Measure more frames for accuracy

      const measureFps = () => {
        frameCount++;
        if (frameCount >= framesToMeasure) {
          const elapsed = performance.now() - lastTime;
          const fps = (frameCount / elapsed) * 1000;
          checkPerformance(fps);

          // Start continuous FPS monitoring for mid-session downgrades
          startFpsMonitor(checkPerformance);
        } else {
          requestAnimationFrame(measureFps);
        }
      };
      // Delay initial FPS measurement to let page settle
      setTimeout(() => requestAnimationFrame(measureFps), 500);
    }

    // Continuous FPS monitoring function
    const startFpsMonitor = (callback) => {
      let frames = 0;
      let lastCheck = performance.now();
      const checkInterval = 3000; // Check every 3 seconds

      const monitor = () => {
        frames++;
        const now = performance.now();

        if (now - lastCheck >= checkInterval) {
          const fps = (frames / (now - lastCheck)) * 1000;
          frames = 0;
          lastCheck = now;

          // If FPS drops significantly, trigger a downgrade
          if (fps < 40) {
            callback(fps, true);
          }
        }

        fpsMonitorRef.current = requestAnimationFrame(monitor);
      };

      fpsMonitorRef.current = requestAnimationFrame(monitor);
    };

    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => checkPerformance();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      if (fpsMonitorRef.current) {
        cancelAnimationFrame(fpsMonitorRef.current);
      }
    };
  }, []);

  return performanceInfo;
}

export default usePerformance;
