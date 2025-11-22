import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Programs = () => {
  const { ref, isVisible } = useScrollAnimation();
  const programs = [
    {
      titleBn: "হিফজুল কুরআন (হাফেজিয়া)",
      titleAr: "حفظ القرآن الكريم",
      duration: "২-৩ বছর",
      description: "সম্পূর্ণ পবিত্র কুরআন মুখস্থকরণের জন্য বিশেষ প্রোগ্রাম। অভিজ্ঞ হাফেজদের তত্ত্বাবধানে তাজবীদ সহ সঠিক উচ্চারণে কুরআন মুখস্থ করার সুযোগ।",
      features: ["তাজবীদসহ শুদ্ধ উচ্চারণ", "নিয়মিত দোহরানো", "অভিজ্ঞ উস্তাদ", "বিনামূল্যে থাকা-খাওয়া"],
    },
    {
      titleBn: "কওমী মাদ্রাসা শিক্ষা",
      titleAr: "التعليم القومي",
      duration: "৮-১০ বছর",
      description: "ঐতিহ্যবাহী কওমী শিক্ষা পাঠ্যক্রম অনুসরণ করে আরবি ভাষা, হাদিস, ফিকহ, উসূলে ফিকহ, মানতিক, ফালসাফা ইত্যাদি বিষয়ে গভীর জ্ঞান অর্জন।",
      features: ["দাওরায়ে হাদিস পর্যন্ত", "আরবি ভাষা দক্ষতা", "ইসলামী আইনশাস্ত্র", "মাদ্রাসা বোর্ড স্বীকৃত"],
    },
    {
      titleBn: "নূরানী/নাযেরা বিভাগ",
      titleAr: "القسم النوراني",
      duration: "১-২ বছর",
      description: "শিশুদের জন্য কুরআন শিক্ষার প্রাথমিক পর্যায়। আরবি বর্ণমালা থেকে শুরু করে সঠিক উচ্চারণে কুরআন তিলাওয়াত শিক্ষা।",
      features: ["কায়দা শিক্ষা", "তাজবীদ মৌলিক", "আমপারা", "শিশু-বান্ধব পরিবেশ"],
    },
    {
      titleBn: "লিল্লাহ বোডিং (এতিমখানা)",
      titleAr: "دار الأيتام",
      duration: "স্থায়ী",
      description: "এতিম ও অসহায় শিশুদের জন্য সম্পূর্ণ বিনামূল্যে থাকা, খাওয়া, পড়াশোনা এবং চিকিৎসার ব্যবস্থা। ইসলামী পরিবেশে তাদের লালন-পালন ও শিক্ষা।",
      features: ["বিনামূল্যে সকল সুবিধা", "স্বাস্থ্যসেবা", "পোশাক ও বই", "আধ্যাত্মিক পরিচর্যা"],
    },
  ];

  return (
    <section ref={ref} id="programs" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-primary mb-4">
            শিক্ষা কার্যক্রম
          </h2>
          <p className="text-xl font-arabic text-secondary">
            البرامج التعليمية
          </p>
          <p className="text-lg font-english text-muted-foreground mt-2">
            Academic Programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 border-t-8 border-t-primary bg-gradient-to-br from-white to-muted/30 rounded-2xl overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <CardHeader className="pb-6 pt-8 px-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="font-bengali text-base px-4 py-2 shadow-md">
                    ⏱️ {program.duration}
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-bengali text-primary mb-3 leading-snug">
                  {program.titleBn}
                </CardTitle>
                <CardDescription className="text-xl font-arabic text-secondary">
                  {program.titleAr}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <p className="text-lg font-bengali text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-3 bg-muted/50 p-6 rounded-xl border border-primary/10">
                  <p className="text-base font-bengali font-bold text-primary mb-4 flex items-center">
                    <span className="mr-2">✨</span>
                    বৈশিষ্ট্যসমূহ:
                  </p>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-base font-bengali">
                        <span className="text-primary mr-3 text-xl mt-0.5">✓</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-bengali text-muted-foreground mb-4">
            আরও বিস্তারিত জানতে এবং ভর্তির জন্য যোগাযোগ করুন
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
