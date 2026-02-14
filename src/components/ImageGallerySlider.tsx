import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
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

        {/* Single Large Image Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                      />
                    </div>
                    {/* Image Title Below Image */}
                    <div className="bg-gradient-to-br from-islamic-green to-islamic-dark-green p-4 md:p-6">
                      <h3 className="text-white font-bengali text-xl md:text-2xl font-bold text-center">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Description Section */}
        <div className="max-w-6xl mx-auto mt-0">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-12 shadow-lg border border-blue-200/50">
            <h3 className="text-2xl md:text-3xl font-bold font-bengali text-islamic-dark-green mb-6 text-center">
              দারুননাজাত সিদ্দিকিয়া কামিল মাদরাসার আপনাকে স্বাগতম
            </h3>
            
            <div className="space-y-6 font-bengali text-base md:text-lg text-foreground/90 leading-relaxed">
              <p>
                দারুননাজাত সিদ্দিকিয়া কামিল মাদরাসা একটি ঐতিহ্যবাহী ইসলামী শিক্ষা প্রতিষ্ঠান। এখানে কুরআন ও হাদিসের শিক্ষার পাশাপাশি আধুনিক শিক্ষার সমন্বয় করা হয়েছে।
              </p>
              <p>
                আমাদের মাদরাসায় রয়েছে অভিজ্ঞ শিক্ষকমণ্ডলী, আধুনিক শিক্ষা উপকরণ এবং শিক্ষার্থীদের জন্য উন্নত আবাসিক সুবিধা। আমরা প্রতিটি শিক্ষার্থীকে দ্বীনি ও দুনিয়াবি শিক্ষায় শিক্ষিত করে তোলার জন্য প্রতিশ্রুতিবদ্ধ।
              </p>
            </div>

            {/* Slide Indicators - Moved Below Description */}
            <div className="flex justify-center gap-3 mt-8">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "w-12 bg-islamic-green" 
                      : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallerySlider;
