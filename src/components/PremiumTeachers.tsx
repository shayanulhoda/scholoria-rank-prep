import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Video, MessageCircle, Calendar } from "lucide-react";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import teacher3 from "@/assets/teacher-3.jpg";

const teachers = [
  {
    name: "Dr. Rajesh Kumar",
    subject: "Physics",
    image: teacher1,
    experience: "15+ years",
    toppers: "30+ students scoring 600+",
    features: ["Live masterclass", "1:1 mentorship", "Priority doubt queue"],
  },
  {
    name: "Dr. Priya Sharma",
    subject: "Chemistry",
    image: teacher2,
    experience: "12+ years",
    toppers: "45+ students scoring 600+",
    features: ["Weekly live doubts", "Topic masterclasses", "Personalized study plan"],
  },
  {
    name: "Dr. Anand Verma",
    subject: "Biology",
    image: teacher3,
    experience: "18+ years",
    toppers: "50+ students scoring 600+",
    features: ["Live masterclass", "Test-week strategy", "Priority support"],
  },
];

const PremiumTeachers = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 px-4 py-2" variant="secondary">
            <Award className="w-4 h-4 mr-2" />
            Premium Faculty
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Learn from <span className="text-primary">Premium Teachers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Handpicked NEET faculty with proven track records. Premium Teachers offer scheduled 
            live masterclasses, recorded deep-dives, and priority doubt resolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Teacher Image */}
              <div className="relative h-64 overflow-hidden bg-accent">
                <img
                  src={teacher.image}
                  alt={`${teacher.name} - ${teacher.subject} NEET teacher`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">Premium</Badge>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{teacher.name}</h3>
                <p className="text-primary font-semibold mb-3">{teacher.subject}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{teacher.experience} teaching experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                    <Award className="w-4 h-4 text-success" />
                    <span>{teacher.toppers}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {teacher.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 rounded-lg">
                    <Video className="w-4 h-4 mr-2" />
                    Watch Intro
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 rounded-lg">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Ask Doubt
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="rounded-xl px-8">
            Book a Free Mentor Call
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Get personalized guidance from our premium teachers
          </p>
        </div>
      </div>
    </section>
  );
};

export default PremiumTeachers;
