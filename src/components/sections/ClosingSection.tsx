import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const ClosingSection = () => {
  return (
    <section 
      id="contact" 
      className="section-padding bg-gradient-hero relative overflow-hidden"
      aria-labelledby="closing-title"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            id="closing-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 animate-fade-in-up"
          >
            Thank you for your attention!
          </h2>

          <p className="text-xl text-primary-foreground/70 mb-12 animate-fade-in-up animation-delay-100">
            Ready to transform your customer feedback into actionable insights?
          </p>

          {/* CTA Button */}
          <div className="mb-16 animate-fade-in-up animation-delay-200">
            <Button variant="hero" size="xl">
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/80 animate-fade-in-up animation-delay-300">
            <a 
              href="mailto:info@evalu.com" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
              aria-label="Email us at info@evalu.com"
            >
              <Mail className="w-5 h-5" />
              <span>info@evalu.com</span>
            </a>
            <a 
              href="tel:+994104230001" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
              aria-label="Call us at +994 104 230 001"
            >
              <Phone className="w-5 h-5" />
              <span>+994 104 230 001</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
