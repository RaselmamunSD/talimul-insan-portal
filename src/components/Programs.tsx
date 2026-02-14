import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./ui/card";
import { Badge } from "./ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { BookOpen, GraduationCap, Heart, Sparkles, Clock, CheckCircle2 } from "lucide-react";

const Programs = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "50px" });
  const programs = [
    {
      titleBn: "হিফজুল কুরআন (হাফেজিয়া)",
      titleAr: "حفظ القرآن الكريم",
      duration: "২-৩ বছর",
      description: "সম্পূর্ণ পবিত্র কুরআন মুখস্থকরণের জন্য বিশেষ প্রোগ্রাম। অভিজ্ঞ হাফেজদের তত্ত্বাবধানে তাজবীদ সহ সঠিক উচ্চারণে কুরআন মুখস্থ করার সুযোগ।",
      features: ["তাজবীদসহ শুদ্ধ উচ্চারণ", "নিয়মিত দোহরানো", "অভিজ্ঞ উস্তাদ", "বিনামূল্যে থাকা-খাওয়া"],
      icon: BookOpen,
      gradient: "from-emerald-500 to-teal-600",
      lightGradient: "from-emerald-50 to-teal-50",
    },
    {
      titleBn: "কওমী মাদ্রাসা শিক্ষা",
      titleAr: "التعليم القومي",
      duration: "৮-১০ বছর",
      description: "ঐতিহ্যবাহী কওমী শিক্ষা পাঠ্যক্রম অনুসরণ করে আরবি ভাষা, হাদিস, ফিকহ, উসূলে ফিকহ, মানতিক, ফালসাফা ইত্যাদি বিষয়ে গভীর জ্ঞান অর্জন।",
      features: ["দাওরায়ে হাদিস পর্যন্ত", "আরবি ভাষা দক্ষতা", "ইসলামী আইনশাস্ত্র", "মাদ্রাসা বোর্ড স্বীকৃত"],
      icon: GraduationCap,
      gradient: "from-blue-500 to-indigo-600",
      lightGradient: "from-blue-50 to-indigo-50",
    },
    {
      titleBn: "নূরানী/নাযেরা বিভাগ",
      titleAr: "القسم النوراني",
      duration: "১-২ বছর",
      description: "শিশুদের জন্য কুরআন শিক্ষার প্রাথমিক পর্যায়। আরবি বর্ণমালা থেকে শুরু করে সঠিক উচ্চারণে কুরআন তিলাওয়াত শিক্ষা।",
      features: ["কায়দা শিক্ষা", "তাজবীদ মৌলিক", "আমপারা", "শিশু-বান্ধব পরিবেশ"],
      icon: Sparkles,
      gradient: "from-amber-500 to-orange-600",
      lightGradient: "from-amber-50 to-orange-50",
    },
    {
      titleBn: "লিল্লাহ বোডিং (এতিমখানা)",
      titleAr: "دار الأيتام",
      duration: "স্থায়ী",
      description: "এতিম ও অসহায় শিশুদের জন্য সম্পূর্ণ বিনামূল্যে থাকা, খাওয়া, পড়াশোনা এবং চিকিৎসার ব্যবস্থা। ইসলামী পরিবেশে তাদের লালন-পালন ও শিক্ষা।",
      features: ["বিনামূল্যে সকল সুবিধা", "স্বাস্থ্যসেবা", "পোশাক ও বই", "আধ্যাত্মিক পরিচর্যা"],
      icon: Heart,
      gradient: "from-rose-500 to-pink-600",
      lightGradient: "from-rose-50 to-pink-50",
    },
  ];

  return (
    <section ref={ref} id="programs" className="section-spacing px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto">
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold font-bengali text-primary mb-5 px-4">
            শিক্ষা কার্যক্রম
          </h2>
          <p className="text-2xl md:text-2xl font-arabic text-secondary">
            البرامج التعليمية
          </p>
          <p className="text-xl md:text-xl font-english text-muted-foreground mt-3">
            Academic Programs
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-emerald-400 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index} 
                className={`group relative bg-white border-2 border-transparent shadow-lg rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-primary/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ 
                  transitionDelay: `${200 + index * 150}ms`,
                }}
              >
                {/* Gradient Header */}
                <div className={`relative h-32 md:h-28 bg-gradient-to-r ${program.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-10"></div>
                  <div className="absolute inset-0 flex items-center justify-between px-6 md:px-8">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                        <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 font-bengali text-sm md:text-sm px-3 md:px-4 py-1.5 md:py-2 group-hover:bg-white/30 transition-all duration-300">
                        <Clock className="w-3.5 h-3.5 mr-1.5 md:mr-2" />
                        {program.duration}
                      </Badge>
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="absolute -right-4 -bottom-12 w-24 h-24 rounded-full bg-white/5"></div>
                </div>

                <CardHeader className="pb-4 md:pb-4 pt-6 md:pt-6 px-7 md:px-8">
                  <CardTitle className="text-2xl md:text-2xl font-bengali text-foreground mb-2 md:mb-2 group-hover:text-primary transition-colors duration-300">
                    {program.titleBn}
                  </CardTitle>
                  <CardDescription className="text-xl md:text-lg font-arabic text-secondary/80">
                    {program.titleAr}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-7 md:px-8 pb-7 md:pb-8">
                  <p className="text-lg md:text-base font-bengali text-muted-foreground mb-6 md:mb-6 leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                    {program.description}
                  </p>
                  
                  <div className={`space-y-3 md:space-y-3 bg-gradient-to-br ${program.lightGradient} p-6 md:p-5 rounded-2xl border border-primary/10 group-hover:border-primary/20 transition-all duration-300`}>
                    <p className="text-base md:text-sm font-bengali font-bold text-primary mb-3 md:mb-3 flex items-center">
                      <Sparkles className="w-5 h-5 md:w-4 md:h-4 mr-2 group-hover:animate-pulse" />
                      বৈশিষ্ট্যসমূহ:
                    </p>
                    <ul className="grid grid-cols-2 gap-3 md:gap-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-base md:text-sm font-bengali group/item">
                          <CheckCircle2 className="w-5 h-5 md:w-4 md:h-4 text-primary mr-2 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                          <span className="leading-snug text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  boxShadow: 'inset 0 0 0 2px hsl(var(--primary) / 0.3), 0 0 30px -5px hsl(var(--primary) / 0.3)'
                }}></div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-14 md:mt-16">
          <p className="text-xl md:text-lg font-bengali text-muted-foreground px-4">
            আরও বিস্তারিত জানতে এবং ভর্তির জন্য যোগাযোগ করুন
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
