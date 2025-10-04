import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, BookOpen, Heart, GraduationCap } from "lucide-react";

const Goals = () => {
  const goals = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "কুরআনিক শিক্ষা",
      description: "পবিত্র কুরআন শরীফ হিফজ ও তিলাওয়াতে দক্ষতা অর্জন এবং কুরআনের শিক্ষা বাস্তব জীবনে প্রয়োগ করা।"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "ইসলামী শিক্ষা",
      description: "হাদিস, ফিকহ, আকীদা ও অন্যান্য ইসলামী বিষয়ে পূর্ণাঙ্গ শিক্ষা প্রদান করা।"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "চরিত্র গঠন",
      description: "ইসলামী মূল্যবোধ ও নৈতিকতার ভিত্তিতে উত্তম চরিত্রবান মুসলিম তৈরি করা।"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "সমাজ সেবা",
      description: "এতিম ও অসহায় শিশুদের বিনামূল্যে শিক্ষা, আবাসন ও খাবারের ব্যবস্থা করা।"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-4 font-bengali text-primary">
            প্রতিষ্ঠার লক্ষ্য
          </h1>
          <p className="text-center font-bengali text-lg mb-12 max-w-3xl mx-auto">
            তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং এর মূল লক্ষ্য ও উদ্দেশ্য
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {goals.map((goal, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-bold font-bengali mb-3">
                    {goal.title}
                  </h3>
                  <p className="font-bengali leading-relaxed text-foreground">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="font-bengali text-center">আমাদের ভিশন ও মিশন</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-bold font-bengali text-primary mb-2">ভিশন:</h3>
                <p className="font-bengali leading-relaxed text-foreground">
                  একটি আদর্শ ইসলামী শিক্ষা প্রতিষ্ঠান হিসেবে গড়ে তোলা যেখানে শিক্ষার্থীরা কুরআন ও সুন্নাহর আলোকে জীবন গড়তে পারবে এবং সমাজে ইসলামের সঠিক শিক্ষা প্রচার করতে পারবে।
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold font-bengali text-primary mb-2">মিশন:</h3>
                <ul className="list-disc list-inside space-y-2 font-bengali text-foreground ml-4">
                  <li>মানসম্মত ইসলামী শিক্ষা প্রদান</li>
                  <li>হাফেজে কুরআন তৈরি করা</li>
                  <li>এতিম ও দুস্থ শিশুদের সহায়তা করা</li>
                  <li>নৈতিক মূল্যবোধ সম্পন্ন প্রজন্ম গড়া</li>
                  <li>সমাজে ইসলামী সংস্কৃতি ও শিক্ষা প্রসারে কাজ করা</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Goals;
