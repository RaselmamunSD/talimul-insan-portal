import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Maximize2 } from "lucide-react";
import madrasahBuilding from "@/assets/madrasah-building.jpg";
import mosqueSkyline from "@/assets/mosque-skyline.png";
import Lightbox from "@/components/Lightbox";
import ScrollToTop from "@/components/ScrollToTop";

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
  {
    src: mosqueSkyline,
    title: "আবাসিক হল",
    description: "ছাত্রদের জন্য আরামদায়ক থাকার ব্যবস্থা",
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
            backgroundSize: '350px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="mb-4 inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <p className="font-arabic text-lg">معرض الصور</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              ফটো গ্যালারি
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Photo Gallery
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-video rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bengali font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/90 font-bengali text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
              
              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <Maximize2 className="h-5 w-5 text-islamic-green" />
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gallery;
