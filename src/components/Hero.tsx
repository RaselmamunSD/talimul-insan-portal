import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import madrasahBuilding from "@/assets/madrasah-building.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Using the same image 5 times as placeholder - can be replaced with different images
  const images = [
    madrasahBuilding,
    madrasahBuilding,
    madrasahBuilding,
    madrasahBuilding,
    madrasahBuilding,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Talimul Insan Madrasah ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90"></div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-smooth"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-smooth"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-smooth ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
