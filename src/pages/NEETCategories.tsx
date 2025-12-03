import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { GraduationCap, Award, BookMarked, ArrowLeft } from "lucide-react";

const neetCategories = [
  {
    id: "neet-ug",
    title: "NEET UG",
    description: "For students preparing for undergraduate medical entrance after Class 12",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=200&fit=crop",
    route: "/subscription-plans",
  },
  {
    id: "neet-pg",
    title: "NEET PG",
    description: "For medical graduates preparing for postgraduate medical entrance",
    icon: Award,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=200&fit=crop",
    route: "/subscription-plans",
  },
  {
    id: "foundations",
    title: "Foundations",
    description: "Build strong basics for Class 8-10 students aspiring for NEET",
    icon: BookMarked,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=200&fit=crop",
    route: "/subscription-plans",
  },
];

const NEETCategories = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <button
            onClick={() => navigate("/course-selection")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Select Your NEET Category
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose the program that matches your preparation level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {neetCategories.map((category) => {
              const Icon = category.icon;

              return (
                <Card
                  key={category.id}
                  className="overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-background">{category.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>
                    <Button
                      onClick={() => navigate(category.route)}
                      className="w-full rounded-xl"
                    >
                      Explore Plans
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NEETCategories;
