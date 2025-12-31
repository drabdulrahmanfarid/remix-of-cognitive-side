import { useState, useEffect } from "react";
export function usePerformance() {
  const [performanceInfo, setPerformanceInfo] = useState(() => {
    // Default to high-end until we can detect
    return {
      isLowEnd: false,
      prefersReducedMotion: false,
      hardwareConcurrency: 8,
      deviceMemory: null,
    };
  });
  useEffect(() => {
    const checkPerformance = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      // Hardware concurrency (CPU cores)
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      // Device memory (in GB, Chrome only)
      const deviceMemory = navigator.deviceMemory || null;
      // Connection type detection (slow connection = likely low-end)
      const connection = navigator.connection;
      const isSlowConnection =
        connection?.effectiveType === "2g" ||
        connection?.effectiveType === "slow-2g";
      // Mobile detection
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      // Screen size check (small screens often = less powerful devices)
      const isSmallScreen = window.innerWidth < 768;
      // Determine if low-end device
      // Low-end if: reduced motion preferred, OR low cores, OR low memory, OR slow connection
      const isLowEnd =
        prefersReducedMotion ||
        hardwareConcurrency <= 2 ||
        (deviceMemory !== null && deviceMemory <= 2) ||
        isSlowConnection ||
        (isMobile && isSmallScreen && hardwareConcurrency <= 4);
      setPerformanceInfo({
        isLowEnd,
        prefersReducedMotion,
        hardwareConcurrency,
        deviceMemory,
      });
    };
    checkPerformance();
    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => checkPerformance();
    mediaQuery.addEventListener("change", handleChange);
    // Re-check on resize (in case of device orientation change)
    window.addEventListener("resize", checkPerformance);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", checkPerformance);
    };
  }, []);
  return performanceInfo;
}
export default usePerformance;
