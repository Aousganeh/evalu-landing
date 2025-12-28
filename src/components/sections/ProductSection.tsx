import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, BrainCircuit, Heart, BarChart3, Tag, Building2, Link } from "lucide-react";

const productFeatures = [
  {
    name: "AI Topic Extraction",
    description: "Automatically identify key topics and themes from customer feedback",
    icon: BrainCircuit
  },
  {
    name: "Sentiment Analysis",
    description: "Advanced AI-powered analysis of customer sentiment and emotions",
    icon: Heart
  },
  {
    name: "Smart Dashboards",
    description: "Real-time insights and visualizations for better decision making",
    icon: BarChart3
  },
  {
    name: "Metadata Capture",
    description: "Comprehensive tagging and categorization of feedback data",
    icon: Tag
  },
  {
    name: "Department Classification",
    description: "Automatically route feedback to the right teams and departments",
    icon: Building2
  },
  {
    name: "Custom Integrations",
    description: "Seamless integration with your existing tools and workflows",
    icon: Link
  }
];

const ProductSection = () => {
  return (
    <section
      id="product"
      className="section-padding bg-gradient-subtle"
      aria-labelledby="product-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Business Model
          </span>
          <h2 id="product-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Key Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful AI-driven features designed to transform your customer feedback into actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ev-depth-focus">
          {productFeatures.map((feature, index) => (
            <Card
              key={feature.name}
              className="futuristic-card ev-hover-premium text-center animate-ev-capability-expand ev-depth-item"
            >
              <CardContent className="pt-8 pb-8">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-accent/10 rounded-xl border border-accent/20">
                  <feature.icon className="w-7 h-7 text-accent animate-glow" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground mb-3">
                  {feature.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
