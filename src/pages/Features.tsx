import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Features = () => {
  const features = [
    "অভিজ্ঞ ও দক্ষ শিক্ষকমণ্ডলী",
    "আধুনিক শিক্ষা পদ্ধতি",
    "সুন্দর ও স্বাস্থ্যকর পরিবেশ",
    "বিনামূল্যে থাকা ও খাওয়ার ব্যবস্থা (এতিম ও দুস্থদের জন্য)",
    "পূর্ণাঙ্গ হিফজ বিভাগ",
    "কওমী মাদ্রাসা শিক্ষা ব্যবস্থা",
    "নূরানী বিভাগ (শিশুদের জন্য)",
    "লিল্লাহ বোডিং সুবিধা",
    "নিয়মিত পরীক্ষা ও মূল্যায়ন",
    "চিকিৎসা সেবা",
    "খেলাধুলা ও শরীরচর্চার ব্যবস্থা",
    "ইসলামী নৈতিকতা ও আদব-কায়দা শিক্ষা",
    "আরবি ভাষা শিক্ষা",
    "মক্তব বিভাগ",
    "বার্ষিক পুরস্কার বিতরণ",
    "অভিভাবক সভা",
    "সাপ্তাহিক দারসে হাদিস",
    "মাসিক দোয়া মাহফিল",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4 font-bengali text-primary">
            বৈশিষ্ট্য
          </h1>
          <p className="text-center font-bengali text-lg mb-12 max-w-3xl mx-auto">
            তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং এর বিশেষ বৈশিষ্ট্যসমূহ
          </p>

          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-smooth">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="font-bengali text-foreground leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="font-bengali text-muted-foreground">শিক্ষার্থী</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="font-bengali text-muted-foreground">হাফেজ সম্পন্ন</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <p className="font-bengali text-muted-foreground">অভিজ্ঞ শিক্ষক</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
