const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Flowing gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <div 
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(231 58% 33% / 0.4) 0%, transparent 70%)',
          }}
        />
        {/* Accent gradient blob */}
        <div 
          className="absolute -bottom-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(241 100% 70% / 0.3) 0%, transparent 70%)',
            animationDelay: '-3s',
          }}
        />
        {/* CTA highlight blob */}
        <div 
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(359 82% 75% / 0.3) 0%, transparent 70%)',
            animationDelay: '-1.5s',
          }}
        />
        {/* Subtle flowing lines */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-[0.03]" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M0,400 Q300,200 600,400 T1200,400" 
            fill="none" 
            stroke="hsl(231, 58%, 33%)" 
            strokeWidth="2"
          />
          <path 
            d="M0,500 Q400,300 800,500 T1200,500" 
            fill="none" 
            stroke="hsl(241, 100%, 70%)" 
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-primary mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          Operations, executed.
        </h1>
        <p 
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          We help organizations turn adoption into real operational outcomes.
        </p>
        <div 
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            Start a conversation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
