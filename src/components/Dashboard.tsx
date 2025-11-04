import { Badge } from "@/components/ui/badge";
import { BarChart3, Calendar, Target, TrendingUp, Clock, BookOpen } from "lucide-react";

const stats = [
  {
    label: "Study Time Today",
    value: "4h 35m",
    icon: Clock,
    trend: "+25%",
    color: "text-blue-500",
  },
  {
    label: "Tests Completed",
    value: "24",
    icon: Target,
    trend: "+8",
    color: "text-green-500",
  },
  {
    label: "Chapters Mastered",
    value: "68/98",
    icon: BookOpen,
    trend: "69%",
    color: "text-purple-500",
  },
  {
    label: "Predicted Rank",
    value: "AIR 1,234",
    icon: TrendingUp,
    trend: "↑ 450",
    color: "text-primary",
  },
];

const Dashboard = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 px-4 py-2" variant="secondary">
            <BarChart3 className="w-4 h-4 mr-2" />
            Analytics & Progress
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your progress, <span className="text-primary">in one place</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Daily study targets, recent activity, topic-wise strengths, score improvement 
            chart and estimated rank projection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-accent/50 rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {stat.trend}
                  </Badge>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features List */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Dashboard Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Progress Ring</p>
                    <p className="text-sm text-muted-foreground">Visual chapter completion tracking</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Recent Tests</p>
                    <p className="text-sm text-muted-foreground">Quick access to latest attempts</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Time-on-Subject Heatmap</p>
                    <p className="text-sm text-muted-foreground">Identify where you're spending time</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Next Suggested Topic</p>
                    <p className="text-sm text-muted-foreground">AI-driven study recommendations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Revision Calendar</p>
                    <p className="text-sm text-muted-foreground">Never miss important revision dates</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-6">
            <div className="bg-accent rounded-2xl p-8 border border-border">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Weekly Study Score
              </h3>
              <p className="text-muted-foreground mb-4">
                Track your consistency and study habits with our smart scoring system that 
                analyzes your learning patterns.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">87</span>
                <span className="text-muted-foreground">/100 this week</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <TrendingUp className="w-12 h-12 text-success mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Predicted Rank
              </h3>
              <p className="text-muted-foreground mb-4">
                Based on your latest mocks and performance trends, we estimate your potential 
                NEET rank using AI algorithms.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Tip:</strong> Keep attempting full-length 
                mocks regularly for more accurate predictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
