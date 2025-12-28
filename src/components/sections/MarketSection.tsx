import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Target, Rocket } from "lucide-react";

const marketData = [
  {
    icon: Globe,
    label: "TAM",
    title: "Total Addressable Market",
    value: "$63.6B",
    subtext: "/year",
    description: "Global customer feedback & experience analytics market — 26.5M businesses",
  },
  {
    icon: Target,
    label: "SAM",
    title: "Serviceable Available Market",
    value: "$8-12B",
    subtext: "/year",
    description: "EMEA-based SMBs and mid-market using digital channels",
  },
  {
    icon: Rocket,
    label: "SOM",
    title: "Serviceable Obtainable Market",
    value: "$3-5M",
    subtext: "/year",
    description: "Initial reachable customers in Azerbaijan and nearby markets",
  },
];

const MarketSection = () => {
  return (
    <section 
      id="market" 
      className="section-padding bg-gradient-hero"
      aria-labelledby="market-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Market Size
          </span>
          <h2 id="market-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            A massive market opportunity
          </h2>
          <p className="text-lg text-primary-foreground/70">
            The customer feedback analytics market is growing rapidly as businesses recognize the value of data-driven insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {marketData.map((item, index) => (
            <Card 
              key={item.label}
              className="bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-bold text-accent uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <CardTitle className="text-primary-foreground text-lg">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-foreground">{item.value}</span>
                  <span className="text-primary-foreground/60 ml-1">{item.subtext}</span>
                </div>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
