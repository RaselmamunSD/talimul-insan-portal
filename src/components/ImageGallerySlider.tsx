import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import madrasah1 from "@/assets/madrasah-1.png";
import madrasah2 from "@/assets/madrasah-2.png";
import madrasah3 from "@/assets/madrasah-3.png";
import madrasah4 from "@/assets/madrasah-4.png";
import madrasah5 from "@/assets/madrasah-5.png";

// Madrasah gallery images
const galleryImages = [
  {
    src: madrasah1,
    title: "মাদ্রাসার প্রধান ভবন",
  },
  {
    src: madrasah2,
    title: "মসজিদ ও ক্যাম্পাস",
  },
  {
    src: madrasah3,
    title: "শিক্ষা কার্যক্রম",
  },
  {
    src: madrasah4,
    title: "ছাত্রাবাস",
  },
  {
    src: madrasah5,
    title: "মাদ্রাসা পরিবেশ",
  },
];

const ImageGallerySlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play functionality - change every 3 seconds
    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(autoplay);
  }, [api]);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-0.5 w-16 bg-islamic-green"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-bengali text-islamic-green">
                আমাদের মাদ্রাসা
              </h2>
              <div className="h-0.5 w-16 bg-islamic-green"></div>
            </div>
          </div>
          <p className="text-muted-foreground font-bengali text-lg mt-3">
            মাদ্রাসার বিভিন্ন কার্যক্রম ও সুবিধাসমূহ
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-islamic-green/80 via-islamic-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation Buttons */}
            <button
              onClick={() => api?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-islamic-green hover:bg-islamic-dark-green text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-islamic-green hover:bg-islamic-dark-green text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </Carousel>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "w-8 bg-islamic-green" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50">
            <h3 className="text-2xl md:text-3xl font-bold font-bengali text-islamic-dark-green mb-6 text-center">
              দারুননাজাত সিদ্দিকিয়া কামিল মাদরাসার আপনাকে স্বাগতম
            </h3>
            
            <div className="space-y-6 font-bengali text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
  );
};

export default ImageGallerySlider;
