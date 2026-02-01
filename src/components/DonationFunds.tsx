import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

// Import donation images
import donateOrphan from "@/assets/donate-orphan.jpg";
import donateDevelopment from "@/assets/donate-development.jpg";
import donateNewBuilding from "@/assets/donate-new-building.jpg";
import donateMosque from "@/assets/donate-mosque.jpg";
import donateZakat from "@/assets/donate-zakat.jpg";
import donateRamadan from "@/assets/donate-ramadan.jpg";
import donateMahfil from "@/assets/donate-mahfil.jpg";

const donationCategories = [
  {
    id: "orphan-students",
    title: "এতিম ও অসহায় ছাত্রদের সাহায্য",
    description: "এতিম ও অসহায় ছাত্রদের শিক্ষা ও জীবনযাত্রার ব্যয় নির্বাহে সহায়তা করুন",
    image: donateOrphan
  },
  {
    id: "madrasah-development",
    title: "মাদ্রাসার উন্নয়ন",
    description: "মাদ্রাসার সার্বিক উন্নয়ন ও রক্ষণাবেক্ষণে অবদান রাখুন",
    image: donateDevelopment
  },
  {
    id: "new-building",
    title: "নতুন নির্মাণাধীন ভবন",
    description: "নতুন শিক্ষা ভবন নির্মাণে আপনার অবদান রাখুন",
    image: donateNewBuilding
  },
  {
    id: "new-mosque",
    title: "নতুন মসজিদ নির্মাণ",
    description: "নতুন মসজিদ নির্মাণে সাদাকায়ে জারিয়ায় অংশীদার হোন",
    image: donateMosque
  },
  {
    id: "zakat-fund",
    title: "যাকাত তহবিল",
    description: "আপনার যাকাত দিয়ে দরিদ্র ছাত্রদের সাহায্য করুন",
    image: donateZakat
  },
  {
    id: "ramadan-iftar",
    title: "রমাদান ইফতার ও সেহেরী",
    description: "রমাদান মাসে ছাত্রদের ইফতার ও সেহেরীর ব্যবস্থায় অংশ নিন",
    image: donateRamadan
  },
  {
    id: "annual-mahfil",
    title: "বাৎসরিক মাহফিল",
    description: "বার্ষিক ওয়াজ মাহফিল আয়োজনে সহযোগিতা করুন",
    image: donateMahfil
  }
];

const DonationFunds = () => {
  return (
    <section className="relative section-spacing overflow-hidden bg-gradient-to-br from-islamic-dark-green via-islamic-green to-islamic-teal">
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
              {donationCategories.map((category) => (
                <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 h-full">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Content Section */}
                    <CardContent className="p-5 text-center">
                      {/* Title */}
                      <h3 className="font-bengali text-xl font-bold text-islamic-dark-green mb-3 leading-tight min-h-[56px] flex items-center justify-center">
                        {category.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-bengali text-gray-600 text-sm leading-relaxed mb-5 min-h-[48px]">
                        {category.description}
                      </p>
                      
                      {/* Donate Button */}
                      <Link to={`/donation-form?category=${category.id}`} className="block">
                        <Button className="w-full bg-islamic-green hover:bg-islamic-dark-green text-white font-bengali text-base py-5 rounded-xl transition-all duration-300 hover:shadow-lg">
                          দান করুন
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
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
