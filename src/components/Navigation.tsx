import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.5, 0, 0, 1] }}
        >
          <div className="mx-auto max-w-7xl px-6 py-4">
            <nav className="flex items-center justify-between rounded-full bg-card/60 backdrop-blur-2xl px-6 py-3 border border-accent/10 luminous-border">
              <span className="text-xl font-semibold tracking-tight text-primary">
                Cognitive Side
              </span>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-primary/70 hover:text-primary transition-colors duration-300"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                className="group relative flex items-center gap-2 px-5 py-2 text-sm font-medium text-primary rounded-full border border-primary/20 overflow-hidden"
                whileHover={{ borderColor: 'hsl(47 70% 47% / 0.5)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Background fill on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4, ease: [0.5, 0, 0, 1] }}
                />
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                  Contact
                </span>
                <motion.span
                  className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300"
                  initial={{ x: -8, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: [0.5, 0, 0, 1] }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.a>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
