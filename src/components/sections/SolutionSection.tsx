import { Card, CardContent } from "@/components/ui/card";
import { Bot, PieChart, LayoutDashboard } from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "Fully Automated Analysis",
    features: [
      "AI-based topic extraction",
      "Automated department classification",
      "Aspect-based sentiment analysis",
    ],
  },
  {
    icon: PieChart,
    title: "Topic-Level Sentiment",
    features: [
      "Understand sentiment at topic level",
      "Actionable visualization",
      "Granular insights per category",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Smart Dashboard",
    features: [
      "Feedback captured with metadata",
      "Real-time management dashboards",
      "Export and reporting tools",
    ],
  },
];

const SolutionSection = () => {
  return (
    <section 
      id="solution" 
      className="section-padding bg-gradient-subtle"
      aria-labelledby="solution-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            The Solution
          </span>
          <h2 id="solution-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Intelligent feedback analytics that works for you
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI-powered platform transforms raw feedback into structured insights automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={solution.title} 
              variant="glass"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {solution.title}
                </h3>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
