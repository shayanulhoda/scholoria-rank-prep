import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Clock, TrendingUp, FileCheck, Video, Award } from "lucide-react";
import mockTestInterface from "@/assets/mock-test-interface.jpg";

const features = [
  {
    icon: Target,
    title: "Topic Tests",
    description: "Quick chapter-wise tests to build confidence",
  },
  {
    icon: Clock,
    title: "Timed Sectional Tests",
    description: "Practice under real exam time pressure",
  },
  {
    icon: FileCheck,
    title: "Full-Length NEET Mocks",
    description: "Complete exam simulation with OMR interface",
  },
  {
    icon: Video,
    title: "Detailed Solutions",
    description: "Video explanations for every question",
  },
  {
    icon: Award,
    title: "All-India Ranking",
    description: "See where you stand among peers",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track improvement over time",
  },
];

const MockTests = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="mb-4 px-4 py-2" variant="secondary">
              <Target className="w-4 h-4 mr-2" />
              Assessments & Mock Tests
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Practice like the <span className="text-primary">real exam</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Topic tests, timed sectional tests and full-length NEET mock exams with instant 
              analytics and solution videos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-xl">
                Start Practice Test
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl">
                View Sample Paper
              </Button>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-background border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Auto-scored OMR-style tests</strong> with 
                detailed video solutions, All-India ranking, and downloadable answer keys.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <img
                src={mockTestInterface}
                alt="NEET mock test interface showing OMR answer sheet, questions, timer and analytics"
                className="w-full h-auto"
              />
            </div>
            {/* Floating achievement badge */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
              <div className="text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">650/720</p>
                <p className="text-sm text-muted-foreground">Latest Mock Score</p>
                <Badge className="mt-2" variant="secondary">AIR 1,234</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockTests;
