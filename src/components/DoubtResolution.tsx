import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, CheckCircle, Clock, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Chapter-linked Doubts",
    description: "Attach doubts to specific chapters or questions for context",
  },
  {
    icon: Users,
    title: "Teacher & Peer Replies",
    description: "Get answers from experienced teachers and fellow students",
  },
  {
    icon: ThumbsUp,
    title: "Vote-up Solutions",
    description: "Community votes highlight the most helpful answers",
  },
  {
    icon: CheckCircle,
    title: "Mentor-verified Answers",
    description: "Premium teachers mark correct solutions",
  },
  {
    icon: Clock,
    title: "Live Doubt Sessions",
    description: "Join scheduled doubt-clearing sessions with faculty",
  },
];

const DoubtResolution = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 px-4 py-2" variant="secondary">
            <MessageSquare className="w-4 h-4 mr-2" />
            Community & Support
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Never stay <span className="text-primary">stuck</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Raise doubts attached to chapters or individual questions. Get teacher/peer replies, 
            pinned solutions and moderated discussions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-accent/50 rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Example Doubt Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-foreground">AS</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-foreground">Arjun Sharma</span>
                  <Badge variant="secondary" className="text-xs">Chapter: Thermodynamics</Badge>
                </div>
                <p className="text-foreground mb-3">
                  I'm confused about the difference between isothermal and adiabatic processes. 
                  Can someone explain with examples?
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    2 hours ago
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    5 replies
                  </span>
                </div>
              </div>
            </div>

            {/* Teacher Reply */}
            <div className="ml-16 mt-4 p-4 rounded-xl bg-accent/30 border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-foreground">Dr. Rajesh Kumar</span>
                    <Badge className="text-xs">Verified Teacher</Badge>
                  </div>
                  <p className="text-sm text-foreground mb-2">
                    Great question! In isothermal process, temperature stays constant while in 
                    adiabatic, no heat is exchanged. For NEET, remember: Isothermal → pV = constant, 
                    Adiabatic → pVᵞ = constant.
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>1 hour ago</span>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                      12 helpful
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            <strong className="text-foreground">Average response time: 6 hours</strong> • 
            Priority support for Premium students
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoubtResolution;
