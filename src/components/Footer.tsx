const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Transvyra. All rights reserved.
        </span>
        <span className="text-xl font-semibold tracking-tight text-primary/30">
          Transvyra
        </span>
      </div>
    </footer>
  );
};

export default Footer;
