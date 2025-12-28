import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Search, Clock } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "No Actionable Insights",
    description: "Feedback lacks clear sentiment and meaning, leaving teams guessing about what customers really think.",
  },
  {
    icon: Search,
    title: "No Topic-Level Insights",
    description: "Current systems lack analytics for specific feedback topics, missing granular understanding of customer pain points.",
  },
  {
    icon: Clock,
    title: "Inefficient & Manual Handling",
    description: "Teams waste countless hours reviewing feedback manually, leading to delayed responses and missed opportunities.",
  },
];

const ProblemSection = () => {
  return (
    <section 
      id="problem" 
      className="section-padding bg-background"
      aria-labelledby="problem-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            The Problem
          </span>
          <h2 id="problem-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why traditional feedback analysis fails
          </h2>
          <p className="text-lg text-muted-foreground">
            Businesses struggle to extract meaningful insights from customer feedback, leading to missed opportunities and frustrated customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={problem.title} 
              variant="elevated"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mb-6">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
