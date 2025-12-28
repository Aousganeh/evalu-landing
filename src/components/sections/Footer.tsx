
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 border-t border-primary-foreground/10" role="contentinfo">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary-foreground">
            evalu<span className="text-accent">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Evalu. All rights reserved.
          </p>

          {/* Social links placeholder */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Twitter"
            >
              𝕏
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
