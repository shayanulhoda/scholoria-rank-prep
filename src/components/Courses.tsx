import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, FileText, Play } from "lucide-react";

const courses = [
  {
    subject: "Physics",
    description: "Master mechanics, electromagnetism, and modern physics",
    progress: 68,
    chapters: 32,
    duration: "120 hours",
    color: "from-blue-500 to-cyan-500",
  },
  {
    subject: "Chemistry",
    description: "Organic, inorganic, and physical chemistry concepts",
    progress: 45,
    chapters: 28,
    duration: "110 hours",
    color: "from-purple-500 to-pink-500",
  },
  {
    subject: "Biology",
    description: "Botany and zoology for NEET with detailed diagrams",
    progress: 82,
    chapters: 38,
    duration: "150 hours",
    color: "from-green-500 to-emerald-500",
  },
];

const features = [
  { icon: Play, text: "Chapter-wise recorded videos (short, focused)" },
  { icon: FileText, text: "Downloadable PDF notes & formula sheets" },
  { icon: BookOpen, text: "Quick-revision flashcards & QR-linked micro-videos" },
  { icon: Clock, text: "Course paths: Class 11, Class 12, Repeater, Crash Course" },
];

const Courses = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Learn from top NEET faculty — <span className="text-primary">anytime, anywhere</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Structured courses split by chapter → video lessons, practice sets, downloadable notes 
            and quick revision cards. Built for NCERT mastery and NEET-style application.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{course.subject}</h3>
                    <p className="text-sm text-muted-foreground">{course.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-foreground">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.chapters} chapters
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>
                </div>

                <Button className="w-full rounded-xl" variant={course.progress > 0 ? "default" : "outline"}>
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
