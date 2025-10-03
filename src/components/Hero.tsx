import { Button } from "./ui/button";
import madrasahBuilding from "@/assets/madrasah-building.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={madrasahBuilding}
          alt="Talimul Insan Madrasah Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90"></div>
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-bengali leading-tight">
            স্বাগতম
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-arabic text-secondary leading-relaxed">
            بسم الله الرحمن الرحيم
          </h2>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl font-bengali leading-relaxed mb-4">
              আমাদের মিশন
            </p>
            <p className="text-lg md:text-xl font-bengali leading-relaxed">
              কুরআনিক মুখস্থকরণ (হাফেজিয়া), জাতীয় কওমী শিক্ষা এবং এতিমদের জন্য আশ্রয় প্রদানের মাধ্যমে 
              তরুণ মনকে লালন করার জন্য নিবেদিত।
            </p>
            <p className="text-base md:text-lg font-english mt-4 text-secondary font-semibold">
              Dedicated to nurturing young minds through Quranic memorization, 
              national Qawmi education, and providing shelter for orphans.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-foreground font-bengali font-semibold text-lg px-8 py-6"
            >
              ভর্তির জন্য আবেদন করুন
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-bengali font-semibold text-lg px-8 py-6 backdrop-blur-sm"
            >
              দান করুন
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
