import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Users, GraduationCap, Star } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      titleBn: "হিফজুল কুরআন",
      titleEn: "Hifzul Quran",
      descBn: "পবিত্র কুরআন সম্পূর্ণ মুখস্থ করার জন্য বিশেষায়িত প্রশিক্ষণ ও নিবিড় পরিচর্যা। অভিজ্ঞ শিক্ষকমণ্ডলীর তত্ত্বাবধানে তাজবিদসহ শুদ্ধভাবে কুরআন মুখস্থ করার সুযোগ।",
      link: "/hifz-department"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      titleBn: "কওমী শিক্ষা",
      titleEn: "Qawmi Education",
      descBn: "ঐতিহ্যবাহী কওমী শিক্ষা পাঠ্যক্রম অনুযায়ী আরবি ভাষা, ফিকহ, হাদিস, তাফসির ও অন্যান্য ইসলামী জ্ঞান অর্জনের ব্যবস্থা। দক্ষ ও অভিজ্ঞ উস্তাদগণের তত্ত্বাবধান।",
      link: "/qawmi-department"
    },
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      titleBn: "নূরানী বিভাগ",
      titleEn: "Nurani Department",
      descBn: "ছোট শিশুদের জন্য নূরানী পদ্ধতিতে কুরআন শিক্ষার বিশেষ ব্যবস্থা। সহজ ও আধুনিক পদ্ধতিতে আরবি হরফ, শব্দ ও কুরআন পড়া শেখানো হয়।",
      link: "/nurani-department"
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      titleBn: "লিল্লাহ বোডিং",
      titleEn: "Lillah Boarding",
      descBn: "এতিম ও অসহায় শিশুদের জন্য সম্পূর্ণ বিনামূল্যে আবাসন, খাবার, চিকিৎসা ও শিক্ষার ব্যবস্থা। আল্লাহর সন্তুষ্টির জন্য মানবসেবায় নিবেদিত।",
      link: "/lillah-boarding"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      titleBn: "চরিত্র গঠন",
      titleEn: "Character Building",
      descBn: "ইসলামী মূল্যবোধ, নৈতিকতা, শিষ্টাচার ও সামাজিক দায়িত্ববোধ শিক্ষার মাধ্যমে আদর্শ মানুষ হিসেবে গড়ে তোলা। ব্যক্তিত্ব ও চরিত্র বিকাশে বিশেষ গুরুত্ব।",
      link: "/features"
    },
  ];

  return (
    <section id="about" className="py-16 px-4 bg-muted relative">
      <div className="absolute inset-0 islamic-pattern opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-primary mb-4">
            আমাদের সম্পর্কে
          </h2>
          <p className="text-xl font-arabic text-secondary">
            مدرستنا - معلومات عنا
          </p>
          <p className="text-lg font-english text-muted-foreground mt-2">
            About Our Madrasah
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Card className="shadow-elegant bg-white border-2">
            <CardContent className="p-8">
              <p className="text-lg font-bengali leading-relaxed mb-4">
                হাড়ীভাঙ্গা তা'লিমুল ইন্‌সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং লালমনিরহাটে অবস্থিত একটি 
                স্বনামধন্য ইসলামী শিক্ষা প্রতিষ্ঠান। আমরা কুরআনিক শিক্ষা, হাদিস, ফিকহ এবং আরবি ভাষা শিক্ষার 
                মাধ্যমে ছাত্রদের পরিপূর্ণ ইসলামী জ্ঞান প্রদান করি।
              </p>
              <p className="text-lg font-bengali leading-relaxed mb-4">
                আমাদের মূল লক্ষ্য হলো কুরআন ও সুন্নাহর আলোকে প্রকৃত মুসলিম হিসেবে শিক্ষার্থীদের গড়ে তোলা। 
                এখানে শুধু কিতাবি শিক্ষা নয়, বরং ব্যবহারিক ও নৈতিক শিক্ষার মাধ্যমে আদর্শ চরিত্রবান মানুষ 
                হিসেবে তৈরি করা হয়। প্রতিষ্ঠানটি ২০০৮ সাল থেকে নিরলসভাবে দ্বীনি শিক্ষা বিস্তারে কাজ করে আসছে।
              </p>
              <p className="text-base font-english text-muted-foreground">
                Located near Haribhanga Airport in Lalmonirhat, our institution has been serving 
                the community by providing quality Islamic education and shelter for orphans since 2008. 
                We combine traditional Qawmi curriculum with modern teaching methods to prepare 
                students for both spiritual and worldly success. Our experienced faculty members 
                are dedicated to nurturing young minds in an environment of Islamic values and discipline.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const bgColors = [
              "bg-blue-50/80 border-blue-200",
              "bg-purple-50/80 border-purple-200", 
              "bg-green-50/80 border-green-200",
              "bg-pink-50/80 border-pink-200",
              "bg-indigo-50/80 border-indigo-200"
            ];
            const iconBgColors = [
              "bg-blue-500",
              "bg-purple-500",
              "bg-green-500", 
              "bg-pink-500",
              "bg-indigo-500"
            ];
            
            return (
              <Card 
                key={index}
                className={`${bgColors[index % 5]} border-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 rounded-2xl`}
              >
                <CardContent className="p-6 text-center">
                  <div className={`${iconBgColors[index % 5]} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-md`}>
                    {feature.icon}
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-sm font-bengali font-semibold text-primary">ধাপ {index + 1}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold font-bengali text-foreground mb-3">
                    {feature.titleBn}
                  </h3>
                  
                  <p className="text-sm font-bengali text-muted-foreground leading-relaxed mb-4">
                    {feature.descBn}
                  </p>
                  
                  <Button 
                    asChild 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary hover:bg-primary/10 font-bengali"
                  >
                    <Link to={feature.link}>
                      বিস্তারিত →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
