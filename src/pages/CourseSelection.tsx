import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Stethoscope, Atom, BookOpen, Check } from "lucide-react";

const categories = [
  {
    id: "neet",
    title: "NEET",
    description: "Medical entrance exam for MBBS, BDS, and other medical courses in India",
    icon: Stethoscope,
    route: "/neet-categories",
  },
  {
    id: "iit-jee",
    title: "IIT JEE",
    description: "Engineering entrance exam for IITs, NITs, and other top engineering colleges",
    icon: Atom,
    route: "/jee-categories",
  },
  {
    id: "upsc",
    title: "UPSC",
    description: "Civil Services examination for administrative positions in Government of India",
    icon: BookOpen,
    route: "/upsc-categories",
  },
];

const CourseSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedCategory) {
      const category = categories.find((c) => c.id === selectedCategory);
      if (category) {
        navigate(category.route);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Choose Your Exam Category
            </h1>
            <p className="text-muted-foreground text-lg">
              Select the exam you're preparing for to get personalized courses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;

              return (
                <Card
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`relative p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    isSelected
                      ? "border-2 border-primary bg-accent shadow-lg"
                      : "border-2 border-transparent hover:border-primary/30"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                    isSelected ? "bg-primary" : "bg-accent"
                  }`}>
                    <Icon className={`w-8 h-8 ${isSelected ? "text-primary-foreground" : "text-primary"}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleNext}
              disabled={!selectedCategory}
              className="px-12 py-6 text-lg rounded-xl"
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseSelection;
