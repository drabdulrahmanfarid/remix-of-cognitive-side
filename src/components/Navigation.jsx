import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const navLinks = [{
  label: "About",
  href: "#about"
}, {
  label: "Services",
  href: "#services"
}, {
  label: "How We Work",
  href: "#how-we-work"
}, {
  label: "Benefits",
  href: "#benefits"
}, {
  label: "FAQ",
  href: "#faq"
}, {
  label: "Contact",
  href: "#contact"
}];
const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;
      setIsVisible(window.scrollY > heroHeight * (isMobile ? 0.3 : 0.8));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <AnimatePresence>
      {isVisible && <motion.header className="fixed top-0 left-0 right-0 z-50" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} transition={{
      duration: 0.5,
      ease: [0.5, 0, 0, 1]
    }}>
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex items-center justify-between rounded-full bg-card/60 backdrop-blur-2xl px-6 py-3 border border-accent/10 luminous-border">
              <motion.a href="#" className="flex items-center gap-2 group" whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.2
          }}>
                <img alt="Cognitive Side" className="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(47_70%_47%/0.6)]" src="/lovable-uploads/8db5ef23-b75c-4b36-9ce4-2374d75cf6b6.png" />
                <span className="text-lg font-semibold tracking-tight text-primary hidden sm:inline">
                  Cognitive Side
                </span>
              </motion.a>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map(link => <motion.a key={link.label} href={link.href} className="text-sm font-medium text-primary/70 hover:text-primary transition-colors duration-300" whileHover={{
              y: -2
            }} transition={{
              duration: 0.2
            }}>
                    {link.label}
                  </motion.a>)}
              </div>

              {/* Stats badge replacing contact button - hidden on mobile */}
              <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-card/50">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-sm font-medium text-primary">20+ Successful Projects Delivered</span>
              </div>
            </nav>
          </div>
        </motion.header>}
    </AnimatePresence>;
};
export default Navigation;