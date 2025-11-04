import { BookOpen, Target, BarChart3, MessageSquare, Smartphone, CheckCircle } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "NCERT-first curriculum",
    description: "Video + notes mapped to NCERT chapters with practice emphasized",
  },
  {
    icon: Target,
    title: "Real-exam mocks",
    description: "Full-length NEET simulators with OMR-style scoring & All-India ranking",
  },
  {
    icon: BarChart3,
    title: "Data-driven improvement",
    description: "Topic-level analytics, time-on-topic, and rank projection",
  },
  {
    icon: MessageSquare,
    title: "Fast doubt resolution",
    description: "Chapter-linked doubts answered by mentors and peers",
  },
  {
    icon: Smartphone,
    title: "Flexible learning",
    description: "Recorded lessons + downloadable notes for revision on the go",
  },
  {
    icon: CheckCircle,
    title: "Prep smarter",
    description: "Spend time on weak topics, not rewatching everything",
  },
];

const WhyScholoria = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Scholoria</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built specifically for NEET aspirants, with features that matter for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl bg-accent/50 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyScholoria;
