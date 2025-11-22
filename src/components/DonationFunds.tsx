import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { Heart, Building2, Construction, Church, HandCoins, UtensilsCrossed, Users } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

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

const DonationFunds = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-islamic-dark-green via-islamic-green to-islamic-teal">
      {/* Islamic Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Decorative Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-islamic-gold/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-islamic-teal/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-4 inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <p className="font-bengali text-lg text-white">صَدَقَةٌ جَارِيَةٌ</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-white mb-4 drop-shadow-lg">
            অনুদান তহবিলসমূহ
          </h2>
          
          <p className="font-bengali text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            "যে ব্যক্তি আল্লাহর পথে ব্যয় করে, তার প্রতিদান আল্লাহর কাছে রয়েছে"
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {donationCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-white/20 bg-white/95 backdrop-blur-sm h-full">
                      <CardHeader className={`${category.bgColor} pb-4 md:pb-6`}>
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${category.bgColor} flex items-center justify-center mb-3 md:mb-4 mx-auto border-2 border-white shadow-lg`}>
                          <IconComponent className={`w-7 h-7 md:w-8 md:h-8 ${category.color}`} />
                        </div>
                        <CardTitle className="font-bengali text-lg md:text-xl text-center min-h-[50px] md:min-h-[60px] flex items-center justify-center px-2">
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4 pb-4 md:pt-6 md:pb-6 px-4">
                        <CardDescription className="font-bengali text-sm md:text-base text-center mb-4 md:mb-6 min-h-[50px] md:min-h-[60px]">
                          {category.description}
                        </CardDescription>
                        <Link to={`/donation-form?category=${category.id}`}>
                          <Button className="w-full bg-islamic-green hover:bg-islamic-green/90 font-bengali text-base md:text-lg py-5 md:py-6 shadow-lg hover:shadow-xl transition-smooth">
                            💝 দান করুন
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-4 xl:-left-12 bg-white/90 hover:bg-white text-islamic-green border-2 border-islamic-green shadow-lg" />
            <CarouselNext className="hidden lg:flex -right-4 xl:-right-12 bg-white/90 hover:bg-white text-islamic-green border-2 border-islamic-green shadow-lg" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            <div className="flex gap-1.5">
              {donationCategories.map((_, index) => (
                <div key={index} className="w-2 h-2 rounded-full bg-white/50" />
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-white text-islamic-green hover:bg-white/90 font-bengali text-xl px-8 py-6 shadow-xl hover:shadow-2xl transition-smooth border-2 border-white/50"
          >
            <Link to="/donate">সব তহবিল দেখুন</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationFunds;
