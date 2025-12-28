import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
      aria-labelledby="hero-title"
    >
      {/* Futuristic floating shapes background */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        {/* Additional glowing particles */}
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-accent rounded-full animate-particle"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-accent/80 rounded-full animate-particle animation-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-accent/60 rounded-full animate-particle animation-delay-400"></div>
      </div>

      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(222_47%_11%/0.6)_100%)]"></div>

      <div className="section-container relative z-10 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">AI-Powered Analytics Platform</span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-ev-insight-reveal"
          >
            AI-powered customer feedback analytics for{" "}
            <span className="gradient-text">modern businesses</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-ev-neural-ease animation-delay-300">
            Transform feedback into actionable insights with topic-level sentiment and real-time dashboards.
          </p>

          {/* Futuristic CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-ev-quantum-lift animation-delay-500">
            <Button variant="hero" size="xl" className="futuristic-button animate-ev-cta-attractor" asChild>
              <a href="#pricing" aria-label="Get early access to Evalu">
                Get Early Access
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" className="border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20" asChild>
              <a href="#product" aria-label="See product overview">
                See Product
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
