import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Import activity images
import activityHifz from "@/assets/activity-hifz.jpg";
import activityQawmi from "@/assets/activity-qawmi.jpg";
import activityNurani from "@/assets/activity-nurani.jpg";
import activityLillah from "@/assets/activity-lillah.jpg";
import activityCharacter from "@/assets/activity-character.jpg";
import activityKnowledge from "@/assets/activity-knowledge.jpg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      image: activityHifz,
      titleBn: "হিফজুল কুরআন",
      category: "নিয়মিত কার্যক্রম",
      descBn: "পবিত্র কুরআন সম্পূর্ণ মুখস্থ করার জন্য বিশেষায়িত প্রশিক্ষণ ও নিবিড় পরিচর্যা।",
      link: "/hifz-department"
    },
    {
      image: activityQawmi,
      titleBn: "কওমী শিক্ষা",
      category: "নিয়মিত কার্যক্রম",
      descBn: "ঐতিহ্যবাহী কওমী শিক্ষা পাঠ্যক্রম অনুযায়ী আরবি ভাষা ও ইসলামী জ্ঞান অর্জন।",
      link: "/qawmi-department"
    },
    {
      image: activityNurani,
      titleBn: "নূরানী বিভাগ",
      category: "নিয়মিত কার্যক্রম",
      descBn: "ছোট শিশুদের জন্য নূরানী পদ্ধতিতে কুরআন শিক্ষার বিশেষ ব্যবস্থা।",
      link: "/nurani-department"
    },
    {
      image: activityLillah,
      titleBn: "লিল্লাহ বোডিং",
      category: "নিয়মিত কার্যক্রম",
      descBn: "এতিম ও অসহায় শিশুদের জন্য সম্পূর্ণ বিনামূল্যে আবাসন ও শিক্ষার ব্যবস্থা।",
      link: "/lillah-boarding"
    },
    {
      image: activityCharacter,
      titleBn: "চরিত্র গঠন",
      category: "নিয়মিত কার্যক্রম",
      descBn: "ইসলামী মূল্যবোধ ও নৈতিকতার মাধ্যমে আদর্শ মানুষ হিসেবে গড়ে তোলা।",
      link: "/features"
    },
    {
      image: activityKnowledge,
      titleBn: "সাধারণ জ্ঞান",
      category: "নিয়মিত কার্যক্রম",
      descBn: "ধর্মীয় শিক্ষার পাশাপাশি বাংলা, ইংরেজি, গণিত ও বিজ্ঞান শিক্ষা প্রদান।",
      link: "/features"
    },
  ];

  return (
    <section ref={ref} id="about" className="py-16 px-4 bg-muted relative">
      <div className="absolute inset-0 islamic-pattern opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        {/* About Us Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-primary mb-4">
            আমাদের সম্পর্কে
          </h2>
          <p className="text-xl font-arabic text-secondary">
            معلومات عنا
          </p>
          <p className="text-lg font-english text-muted-foreground mt-2">
            About Our Madrasah
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <Card className={`shadow-elegant bg-white border-2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
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

            <div className={`rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <img 
                src="/src/assets/madrasah-building.jpg" 
                alt="তা'লিমুল ইন্সান মাদ্রাসা ভবন" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Activities Section */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-primary mb-4">
            আমাদের কার্যক্রমসমূহ
          </h2>
          <p className="text-xl font-arabic text-secondary">
            أنشطتنا وبرامجنا
          </p>
          <p className="text-lg font-english text-muted-foreground mt-2">
            Our Activities & Programs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group bg-white border-2 border-transparent shadow-lg rounded-2xl overflow-hidden h-full transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-primary hover:bg-gradient-to-br hover:from-primary/5 hover:to-emerald-50 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ 
                transitionDelay: `${500 + index * 100}ms`,
              }}
            >
              {/* Image Section */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.titleBn}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="p-6 flex flex-col h-auto">
                {/* Category Tag */}
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  <span className="text-sm font-bengali text-primary font-medium group-hover:text-emerald-600 transition-colors duration-300">
                    {feature.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold font-bengali text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.titleBn}
                </h3>
                
                {/* Description */}
                <p className="text-sm font-bengali text-muted-foreground leading-relaxed mb-5 group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.descBn}
                </p>
                
                {/* Button */}
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bengali font-semibold rounded-lg transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg"
                >
                  <Link to={feature.link}>
                    বিস্তারিত দেখুন
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
