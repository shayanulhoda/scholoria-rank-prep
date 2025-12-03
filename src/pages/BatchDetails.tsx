import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Monitor,
  FileText,
  Users,
  Headphones,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const batchData = {
  "arjuna-2026": {
    name: "Arjuna NEET UG 2026",
    banner: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=300&fit=crop",
    language: "Hinglish",
    tag: "For NEET Aspirants",
    startDate: "15 Jan 2025",
    endDate: "15 May 2026",
    originalPrice: 45999,
    discountedPrice: 29999,
    about: "Arjuna NEET UG 2026 is a comprehensive preparation program designed for students targeting NEET 2026. This batch covers the complete NCERT syllabus with in-depth concept clarity, extensive practice sessions, and regular test series to ensure you're fully prepared for the exam.",
    duration: "16 Months",
    validity: "Till NEET 2026 Exam",
    mode: "Live + Recorded",
    schedule: "Daily 4-5 hours",
    subjects: ["Physics", "Chemistry", "Biology (Botany + Zoology)"],
    features: [
      "Complete NCERT coverage with detailed explanations",
      "1000+ hours of live interactive classes",
      "50+ full-length mock tests",
      "Chapter-wise DPPs (Daily Practice Problems)",
      "Doubt resolution sessions",
      "Previous year question analysis",
      "Personalized performance tracking",
      "Study materials and notes in PDF format",
    ],
  },
  "lakshya-2025": {
    name: "Lakshya NEET UG 2025",
    banner: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=300&fit=crop",
    language: "English",
    tag: "For NEET Aspirants",
    startDate: "01 Dec 2024",
    endDate: "01 May 2025",
    originalPrice: 35999,
    discountedPrice: 24999,
    about: "Lakshya NEET UG 2025 is an intensive crash course for students appearing in NEET 2025. This batch focuses on quick revision, important topics, and extensive practice to help you score maximum marks in the limited time available.",
    duration: "5 Months",
    validity: "Till NEET 2025 Exam",
    mode: "Live + Recorded",
    schedule: "Daily 6-7 hours",
    subjects: ["Physics", "Chemistry", "Biology (Botany + Zoology)"],
    features: [
      "Rapid revision of complete syllabus",
      "Focus on high-weightage topics",
      "30+ full-length mock tests",
      "Quick doubt resolution",
      "Previous year question bank",
      "Last-minute preparation tips",
    ],
  },
  "dropper-2025": {
    name: "Dropper Batch 2025",
    banner: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=300&fit=crop",
    language: "Hindi",
    tag: "For NEET Droppers",
    startDate: "01 Jul 2024",
    endDate: "01 May 2025",
    originalPrice: 39999,
    discountedPrice: 27999,
    about: "Specially designed for students who are taking a drop year to improve their NEET score. This batch provides comprehensive coverage with focus on weak areas, advanced problem-solving, and mental conditioning for exam success.",
    duration: "10 Months",
    validity: "Till NEET 2025 Exam",
    mode: "Live + Recorded",
    schedule: "Daily 5-6 hours",
    subjects: ["Physics", "Chemistry", "Biology (Botany + Zoology)"],
    features: [
      "Complete syllabus revision",
      "Focus on weak areas identification",
      "Advanced problem-solving techniques",
      "40+ full-length mock tests",
      "One-on-one mentorship sessions",
      "Stress management workshops",
      "Peer discussion forums",
    ],
  },
};

const BatchDetails = () => {
  const navigate = useNavigate();
  const { batchId } = useParams();
  
  const batch = batchData[batchId as keyof typeof batchData] || batchData["arjuna-2026"];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/subscription-plans")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Plans
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  About the Batch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {batch.about}
                </p>
              </Card>

              {/* Course Details */}
              <Card className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Course Details</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Course Duration</p>
                      <p className="font-semibold text-foreground">{batch.duration}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Validity</p>
                      <p className="font-semibold text-foreground">{batch.validity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Monitor className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Mode of Lectures</p>
                      <p className="font-semibold text-foreground">{batch.mode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Schedule</p>
                      <p className="font-semibold text-foreground">{batch.schedule}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Exam Guidance</p>
                      <p className="font-semibold text-foreground">Expert Mentors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Support</p>
                      <p className="font-semibold text-foreground">24/7 Doubt Resolution</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Subjects */}
              <Card className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Subjects Covered</h2>
                <div className="flex flex-wrap gap-3">
                  {batch.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Features */}
              <Card className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">What You'll Get</h2>
                <ul className="space-y-3">
                  {batch.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Right Sidebar - Plan Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 overflow-hidden">
                {/* Banner */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={batch.banner}
                    alt={batch.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2">{batch.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {batch.language}
                    </Badge>
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      {batch.tag}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Start: {batch.startDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>End: {batch.endDate}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-2xl font-bold text-foreground">
                      ₹{formatPrice(batch.discountedPrice)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{formatPrice(batch.originalPrice)}
                    </span>
                  </div>

                  <Badge className="bg-green-100 text-green-700 text-sm mb-6 w-full justify-center py-2">
                    Save ₹{formatPrice(batch.originalPrice - batch.discountedPrice)} ({Math.round((1 - batch.discountedPrice / batch.originalPrice) * 100)}% OFF)
                  </Badge>

                  <Button className="w-full rounded-xl py-6 text-base">
                    Continue with Batch
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BatchDetails;
