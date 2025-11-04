import Hero from "@/components/Hero";
import WhyScholoria from "@/components/WhyScholoria";
import Courses from "@/components/Courses";
import PremiumTeachers from "@/components/PremiumTeachers";
import MockTests from "@/components/MockTests";
import Dashboard from "@/components/Dashboard";
import DoubtResolution from "@/components/DoubtResolution";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyScholoria />
      <Courses />
      <PremiumTeachers />
      <MockTests />
      <Dashboard />
      <DoubtResolution />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
