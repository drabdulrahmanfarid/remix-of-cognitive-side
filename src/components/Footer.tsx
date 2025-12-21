const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cognitive Side. All rights reserved.
        </span>
        <span className="text-xl font-semibold tracking-tight text-foreground/30">
          Cognitive Side
        </span>
      </div>
    </footer>
  );
};

export default Footer;
