import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Store, Users, School } from "lucide-react";

const audiences = [
  {
    icon: Laptop,
    title: "SaaS Service Platforms",
    description: "Subscription-based software companies seeking to reduce churn and improve product-market fit.",
  },
  {
    icon: Store,
    title: "E-commerce Websites",
    description: "Online retailers looking to understand customer sentiment about products and shopping experience.",
  },
  {
    icon: Users,
    title: "Customer Service & Call Centers",
    description: "Support teams needing to analyze feedback at scale and identify common pain points.",
  },
  {
    icon: School,
    title: "Education & Training Platforms",
    description: "Educational institutions wanting to improve course quality based on learner feedback.",
  },
];

const AudienceSection = () => {
  return (
    <section 
      id="audience" 
      className="section-padding bg-background"
      aria-labelledby="audience-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Target Audience
          </span>
          <h2 id="audience-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built for customer-centric businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform serves organizations that prioritize understanding and acting on customer feedback.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card 
              key={audience.title}
              variant="outline"
              className="text-center animate-fade-in-up hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6">
                  <audience.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
