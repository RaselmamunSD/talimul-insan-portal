import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import madrasahBuilding from "@/assets/madrasah-building.jpg";
import mosqueSkyline from "@/assets/mosque-skyline.png";
import Lightbox from "./Lightbox";

// Sample gallery images - replace with actual madrasah activity images
const galleryImages = [
  {
    src: madrasahBuilding,
    title: "মাদ্রাসার প্রধান ভবন",
    description: "আধুনিক সুবিধা সম্পন্ন শিক্ষা প্রতিষ্ঠান",
  },
  {
    src: mosqueSkyline,
    title: "মসজিদ ও ক্যাম্পাস",
    description: "নামাজ ও ইবাদতের জন্য সুন্দর পরিবেশ",
  },
  {
    src: madrasahBuilding,
    title: "শ্রেণীকক্ষ কার্যক্রম",
    description: "আধুনিক শিক্ষা পদ্ধতিতে পাঠদান",
  },
  {
    src: mosqueSkyline,
    title: "কুরআন শিক্ষা কার্যক্রম",
    description: "হিফজ ও তিলাওয়াত প্রশিক্ষণ",
  },
  {
    src: madrasahBuilding,
    title: "সাংস্কৃতিক অনুষ্ঠান",
    description: "ইসলামিক অনুষ্ঠান ও প্রতিযোগিতা",
  },
];

const ImageGallerySlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play functionality
    const autoplay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(autoplay);
  }, [api]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-primary"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-bengali text-primary">
                আমাদের মাদ্রাসা
              </h2>
              <div className="h-px w-12 bg-primary"></div>
            </div>
          </div>
          <p className="text-muted-foreground font-bengali text-lg mt-2">
            মাদ্রাসার বিভিন্ন কার্যক্রম ও সুবিধাসমূহ
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-2 border-border/50 overflow-hidden group hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <CardContent className="p-0" onClick={() => openLightbox(index)}>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Zoom Icon */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                          <Maximize2 className="h-5 w-5 text-primary" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-bengali font-semibold text-lg mb-1">
                            {image.title}
                          </h3>
                          <p className="text-white/90 font-bengali text-sm">
                            {image.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary hover:bg-primary/90 text-white border-0" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary hover:bg-primary/90 text-white border-0" />
          </Carousel>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default ImageGallerySlider;
