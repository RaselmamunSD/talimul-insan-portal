import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Building2, Construction, Church, HandCoins, UtensilsCrossed, Users } from "lucide-react";

const donationCategories = [
  {
    id: "orphan-students",
    title: "এতিম ও অসহায় ছাত্রদের সাহায্য",
    description: "এতিম ও অসহায় ছাত্রদের শিক্ষা ও জীবনযাত্রার ব্যয় নির্বাহে সহায়তা করুন",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    id: "madrasah-development",
    title: "মাদ্রাসার উন্নয়ন",
    description: "মাদ্রাসার সার্বিক উন্নয়ন ও রক্ষণাবেক্ষণে অবদান রাখুন",
    icon: Building2,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    id: "new-building",
    title: "মাদ্রাসার নতুন নির্মাণাধীন ভবনের জন্য",
    description: "নতুন শিক্ষা ভবন নির্মাণে আপনার অবদান রাখুন",
    icon: Construction,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    id: "new-mosque",
    title: "নতুন মসজিদ নির্মাণাধীন ভবনের জন্য",
    description: "নতুন মসজিদ নির্মাণে সাদাকায়ে জারিয়ায় অংশীদার হোন",
    icon: Church,
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    id: "zakat-fund",
    title: "যাকাত ফান্ড",
    description: "আপনার যাকাত দিয়ে দরিদ্র ছাত্রদের সাহায্য করুন",
    icon: HandCoins,
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    id: "ramadan-iftar",
    title: "রমাদান ইফতার ও সেহেরী ফান্ড",
    description: "রমাদান মাসে ছাত্রদের ইফতার ও সেহেরীর ব্যবস্থায় অংশ নিন",
    icon: UtensilsCrossed,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    id: "annual-mahfil",
    title: "বাৎসরিক মাহফিল",
    description: "বার্ষিক ওয়াজ মাহফিল আয়োজনে সহযোগিতা করুন",
    icon: Users,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50"
  }
];

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-islamic-teal via-islamic-green to-islamic-gold py-20 overflow-hidden">
        {/* Islamic Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
            backgroundSize: '400px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Mosque Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6 inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <p className="font-bengali text-lg">صَدَقَةٌ جَارِيَةٌ</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-bengali mb-6 drop-shadow-lg">
              দান করুন
            </h1>
            
            <p className="font-bengali text-xl md:text-2xl mb-4 leading-relaxed drop-shadow-md">
              "যে ব্যক্তি আল্লাহর পথে সুন্দর ঋণ দেয়, আল্লাহ তার জন্য তা বহুগুণ বৃদ্ধি করে দেন।"
            </p>
            
            <p className="font-bengali text-lg opacity-90 drop-shadow-md">
              (সূরা আল-বাকারা: ২৪৫)
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className={`${category.bgColor} pb-6`}>
                    <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mb-4 mx-auto border-2 border-white shadow-md`}>
                      <IconComponent className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <CardTitle className="font-bengali text-xl text-center">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 pb-6">
                    <CardDescription className="font-bengali text-base text-center mb-6 min-h-[60px]">
                      {category.description}
                    </CardDescription>
                    <Link to={`/donation-form?category=${category.id}`}>
                      <Button className="w-full bg-islamic-green hover:bg-islamic-green/90 font-bengali text-lg py-6">
                        দান করুন
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
