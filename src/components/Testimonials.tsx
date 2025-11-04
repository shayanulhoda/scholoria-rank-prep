import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ananya Gupta",
    city: "Delhi",
    rank: "AIR 847",
    score: "680/720",
    quote:
      "Scholoria's mock tests are exactly like the real NEET. The analytics helped me focus on weak topics and improve my score by 95 marks in just 3 months!",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    city: "Mumbai",
    rank: "AIR 1,234",
    score: "665/720",
    quote:
      "The premium teachers are incredible. Dr. Rajesh's Physics masterclasses cleared all my doubts. The 1:1 mentor sessions were game-changers for my preparation.",
    rating: 5,
  },
  {
    name: "Priya Reddy",
    city: "Bangalore",
    rank: "AIR 2,105",
    score: "650/720",
    quote:
      "I was a repeater feeling lost. Scholoria's personalized study plan and topic-wise analytics gave me direction. The doubt resolution is super fast!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 px-4 py-2" variant="secondary">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hear from our <span className="text-primary">toppers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real students, real results — see how Scholoria helped them achieve their NEET dreams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Student Info */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mb-3">{testimonial.city}</p>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="font-semibold">
                    {testimonial.rank}
                  </Badge>
                  <Badge className="bg-success text-success-foreground font-semibold">
                    {testimonial.score}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">10,000+</p>
            <p className="text-muted-foreground">Active Students</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">95%</p>
            <p className="text-muted-foreground">Student Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">500+</p>
            <p className="text-muted-foreground">Students Scoring 600+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
