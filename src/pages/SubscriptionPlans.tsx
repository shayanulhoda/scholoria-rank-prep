import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Calendar, Infinity, Crown, ChevronRight } from "lucide-react";

const plans = [
  {
    id: "arjuna-2026",
    name: "Arjuna NEET UG 2026",
    banner: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=200&fit=crop",
    language: "Hinglish",
    tag: "For NEET Aspirants",
    startDate: "15 Jan 2025",
    endDate: "15 May 2026",
    originalPrice: 45999,
    discountedPrice: 29999,
    hasInfinity: true,
    hasPro: true,
    morePlans: 3,
  },
  {
    id: "lakshya-2025",
    name: "Lakshya NEET UG 2025",
    banner: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=200&fit=crop",
    language: "English",
    tag: "For NEET Aspirants",
    startDate: "01 Dec 2024",
    endDate: "01 May 2025",
    originalPrice: 35999,
    discountedPrice: 24999,
    hasInfinity: true,
    hasPro: false,
    morePlans: 2,
  },
  {
    id: "dropper-2025",
    name: "Dropper Batch 2025",
    banner: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=200&fit=crop",
    language: "Hindi",
    tag: "For NEET Droppers",
    startDate: "01 Jul 2024",
    endDate: "01 May 2025",
    originalPrice: 39999,
    discountedPrice: 27999,
    hasInfinity: true,
    hasPro: true,
    morePlans: 4,
  },
];

const SubscriptionPlans = () => {
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/neet-categories")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to NEET Categories
          </button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              NEET UG Subscription Plans
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose the perfect batch for your NEET preparation journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className="overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                {/* Banner */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={plan.banner}
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{plan.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {plan.language}
                    </Badge>
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      {plan.tag}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Start: {plan.startDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>End: {plan.endDate}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-foreground">
                      ₹{formatPrice(plan.discountedPrice)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{formatPrice(plan.originalPrice)}
                    </span>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      {Math.round((1 - plan.discountedPrice / plan.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mb-4">
                    <Button
                      variant="outline"
                      className="flex-1 rounded-xl"
                      onClick={() => navigate(`/batch-details/${plan.id}`)}
                    >
                      Explore
                    </Button>
                    <Button className="flex-1 rounded-xl">
                      Buy Now
                    </Button>
                  </div>

                  {/* More Plans Footer */}
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {plan.hasInfinity && (
                          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                            <Infinity className="w-4 h-4 text-primary" />
                          </div>
                        )}
                        {plan.hasPro && (
                          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                            <Crown className="w-4 h-4 text-primary" />
                          </div>
                        )}
                      </div>
                      <button className="flex items-center gap-1 text-sm text-primary hover:underline">
                        {plan.morePlans} more plans inside
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubscriptionPlans;
