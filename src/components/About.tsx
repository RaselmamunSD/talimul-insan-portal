import { Card, CardContent } from "./ui/card";
import { BookOpen, Heart, Users, GraduationCap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      titleBn: "হাফেজিয়া প্রোগ্রাম",
      titleEn: "Hafizia Program",
      descBn: "পবিত্র কুরআন মুখস্থ করার জন্য বিশেষায়িত প্রশিক্ষণ",
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      titleBn: "কওমী শিক্ষা",
      titleEn: "Qawmi Education",
      descBn: "ঐতিহ্যবাহী ইসলামী শিক্ষা পাঠ্যক্রম",
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      titleBn: "লিল্লাহ বোডিং",
      titleEn: "Lillah Boarding",
      descBn: "এতিম ও অসহায় শিশুদের জন্য বিনামূল্যে আবাসন",
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      titleBn: "চরিত্র গঠন",
      titleEn: "Character Building",
      descBn: "ইসলামী মূল্যবোধ ও নৈতিকতা শিক্ষা",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 bg-muted relative">
      <div className="absolute inset-0 islamic-pattern"></div>
      
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

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <p className="text-lg font-bengali leading-relaxed mb-4">
                হাড়ীভাঙ্গা তা'লিমুল ইন্‌সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং লালমনিরহাটে অবস্থিত একটি 
                স্বনামধন্য ইসলামী শিক্ষা প্রতিষ্ঠান। আমরা কুরআনিক শিক্ষা, হাদিস, ফিকহ এবং আরবি ভাষা শিক্ষার 
                মাধ্যমে ছাত্রদের পরিপূর্ণ ইসলামী জ্ঞান প্রদান করি।
              </p>
              <p className="text-base font-english text-muted-foreground">
                Located near Haribhanga Airport in Lalmonirhat, our institution has been serving 
                the community by providing quality Islamic education and shelter for orphans. 
                We combine traditional Qawmi curriculum with modern teaching methods to prepare 
                students for both spiritual and worldly success.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-xl transition-smooth hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-bengali text-primary mb-2">
                  {feature.titleBn}
                </h3>
                <p className="text-sm font-english text-accent font-semibold mb-2">
                  {feature.titleEn}
                </p>
                <p className="text-base font-bengali text-muted-foreground">
                  {feature.descBn}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
