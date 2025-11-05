import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-video bg-islamic-green/10 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="w-full h-full flex items-center justify-center text-6xl">
                🕌
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
