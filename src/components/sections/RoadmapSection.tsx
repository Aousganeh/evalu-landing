import { Card, CardContent } from "@/components/ui/card";

const milestones = [
  {
    quarter: "2026 Q2",
    title: "MVP Launch & Testing",
    description: "Launch MVP with AI-driven feedback analysis and pilot customers.",
    status: "upcoming",
  },
  {
    quarter: "2026 Q3",
    title: "Public Launch & Expansion",
    description: "Release paid plans and expand adoption with improved AI insights.",
    status: "upcoming",
  },
  {
    quarter: "2027 Q1",
    title: "Partnerships & Enterprise",
    description: "Form strategic partnerships and enable enterprise-grade solutions.",
    status: "future",
  },
  {
    quarter: "2027 Q4",
    title: "Global Scaling",
    description: "Scale globally with advanced automation and analytics.",
    status: "future",
  },
];

const RoadmapSection = () => {
  return (
    <section 
      id="roadmap" 
      className="section-padding bg-gradient-hero"
      aria-labelledby="roadmap-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Roadmap
          </span>
          <h2 id="roadmap-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Our journey ahead
          </h2>
          <p className="text-lg text-primary-foreground/70">
            A clear path from MVP to market leadership.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.quarter}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-primary transform -translate-x-1/2 z-10" />
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <Card className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <span className="inline-block text-sm font-bold text-accent mb-2">
                        {milestone.quarter}
                      </span>
                      <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
