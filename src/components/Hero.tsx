import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/20 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Users className="w-4 h-4 mr-2" />
                10,000+ Students Active
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Top Faculty Network
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your NEET Preparation —{" "}
              <span className="text-primary">Simplified. Strategic. Scored.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              NCERT-aligned lessons, full-length mocks, analytics and 1:1 mentor support — 
              everything to get you NEET-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Start Free Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl">
                View Demo Dashboard
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>14-day money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <img
                src={heroDashboard}
                alt="Scholoria NEET Learning Dashboard showing course progress, mock test scores, and analytics"
                className="w-full h-auto"
              />
              {/* Floating stats */}
              <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="font-semibold text-foreground">Your Progress</span>
                </div>
                <p className="text-2xl font-bold text-primary">+15%</p>
                <p className="text-xs text-muted-foreground">vs. last week</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
