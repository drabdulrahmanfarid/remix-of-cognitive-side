import { useState, useEffect } from 'react';

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-2xl bg-card/80 backdrop-blur-xl px-6 py-3 shadow-lg shadow-primary/5 border border-border/50">
          <span className="text-xl font-semibold tracking-tight text-primary">
            Transvyra
          </span>
          <a
            href="#contact"
            className="text-sm font-medium text-primary hover:text-accent transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
