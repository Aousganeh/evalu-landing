import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "$150",
    period: "/month",
    description: "Perfect for small teams getting started with feedback analytics.",
    features: [
      "AI Topic Extraction",
      "Basic Sentiment Analysis",
      "Standard Dashboards",
      "Metadata Feedback Capture",
      "Email Support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$300",
    period: "/month",
    description: "For growing businesses that need advanced insights.",
    features: [
      "AI Topic Extraction",
      "Advanced Sentiment Analysis",
      "Premium Dashboards",
      "Advanced Metadata Tagging",
      "Department Classification",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Enterprise-grade solutions with dedicated support and custom integrations.",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom AI Model Training",
      "Priority 24/7 Support",
      "Advanced Security & Compliance",
      "White-label Solutions",
      "On-premise Deployment",
    ],
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section 
      id="pricing" 
      className="section-padding bg-background"
      aria-labelledby="pricing-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Pricing Plans
          </span>
          <h2 id="pricing-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pricing Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              variant={plan.featured ? "pricing-featured" : "pricing"}
              className={`relative animate-ev-value-frame ${plan.featured ? 'futuristic-card ev-hover-premium ev-border-trace ev-glass-sheen' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className={`text-center pb-4 ${plan.featured ? 'pt-12' : 'pt-8'}`}>
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground ev-anim-data-tick">{plan.price}</span>
                  <span className="text-muted-foreground ev-anim-data-tick" style={{ animationDelay: '100ms' }}>{plan.period}</span>
                </div>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={plan.featured ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
