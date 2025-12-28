import { Card, CardContent } from "@/components/ui/card";

const team = [
  { name: "Kamal Pashayev", role: "DevOps Engineer" },
  { name: "Musa Bakhshiyev", role: "Full-Stack Developer" },
  { name: "Nuray Masimova", role: "Product Designer" },
  { name: "Mahammad Avdoev", role: "Cybersecurity Analyst" },
  { name: "Kanan Aghayev", role: "Software Engineer" },
];

const TeamSection = () => {
  return (
    <section 
      id="team" 
      className="section-padding bg-background"
      aria-labelledby="team-title"
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 id="team-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet our team
          </h2>
          <p className="text-lg text-muted-foreground">
            Passionate experts building the future of customer feedback analytics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card 
              key={member.name}
              variant="outline"
              className="text-center animate-fade-in-up hover:border-accent/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
