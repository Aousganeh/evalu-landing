import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, BrainCircuit, TrendingUp, Target } from "lucide-react";

const advantages = [
  {
    icon: BrainCircuit,
    title: "AI-powered multi-topic extraction",
    description: "Automatically identify and categorize multiple topics from each piece of feedback.",
  },
  {
    icon: Sparkles,
    title: "Aspect-based sentiment analysis",
    description: "Understand sentiment for specific aspects, not just overall feedback polarity.",
  },
  {
    icon: TrendingUp,
    title: "Real-time interactive dashboard",
    description: "Dynamic visualizations that update instantly as new feedback comes in.",
  },
  {
    icon: Target,
    title: "Built for startups & SMBs",
    description: "Affordable pricing and quick setup designed for growing businesses.",
  },
];

const competitors = ["Survicate", "Typeform", "Hotjar", "Qualtrics"];

const AdvantagesSection = () => {
  return (
    <section 
      id="advantages" 
      className="section-padding bg-gradient-subtle"
      aria-labelledby="advantages-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Competitive Advantages
          </span>
          <h2 id="advantages-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why choose Evalu?
          </h2>
          <p className="text-lg text-muted-foreground">
            We outperform legacy solutions with purpose-built AI technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={advantage.title}
              variant="glass"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted alternative to:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {competitors.map((competitor) => (
              <span 
                key={competitor}
                className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium"
              >
                {competitor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
