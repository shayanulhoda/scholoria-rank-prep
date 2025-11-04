import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "₹999",
    period: "/month",
    description: "Perfect for trying out",
    popular: false,
    features: [
      "All subject courses (Physics, Chemistry, Biology)",
      "5 full-length mock tests",
      "Basic doubt resolution",
      "Chapter-wise notes (PDF)",
      "Progress tracking dashboard",
      "Mobile app access",
    ],
    cta: "Start Monthly Plan",
  },
  {
    name: "Quarterly",
    price: "₹2,499",
    period: "/3 months",
    description: "Best for Class 12 students",
    popular: true,
    badge: "Most Popular",
    discount: "Save 17%",
    features: [
      "Everything in Monthly, plus:",
      "20 full-length mock tests",
      "Priority doubt resolution",
      "Downloadable formula sheets",
      "Weekly progress reports",
      "Personalized study plan",
      "Revision flashcards",
    ],
    cta: "Start Quarterly Plan",
  },
  {
    name: "Yearly",
    price: "₹7,999",
    period: "/year",
    description: "For serious rank improvement",
    popular: false,
    badge: "Best Value",
    discount: "Save 33%",
    features: [
      "Everything in Quarterly, plus:",
      "Unlimited mock tests",
      "1:1 mentor sessions (2/month)",
      "Premium teacher access",
      "Live doubt sessions",
      "Rank prediction updates",
      "Test-week strategy sessions",
      "All future content updates",
    ],
    cta: "Start Yearly Plan",
  },
];

const Pricing = () => {
  return (
    <section className="py-16 lg:py-24 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose a plan that fits your <span className="text-primary">strategy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All plans include NCERT-aligned courses, expert faculty, and progress tracking
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl border-2 p-8 bg-card ${
                plan.popular
                  ? "border-primary shadow-2xl scale-105"
                  : "border-border hover:border-primary/50"
              } transition-all duration-300`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1.5 text-sm font-semibold">
                    {plan.popular && <Sparkles className="w-3 h-3 mr-1" />}
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {plan.discount && (
                  <Badge variant="secondary" className="text-success">
                    {plan.discount}
                  </Badge>
                )}
              </div>

              <Button
                size="lg"
                className={`w-full mb-6 rounded-xl ${plan.popular ? "" : "variant-outline"}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">
            14-day money-back guarantee • Flexible plan switching
          </p>
          <p className="text-sm text-muted-foreground">
            All prices inclusive of taxes. Premium mentor add-on available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
