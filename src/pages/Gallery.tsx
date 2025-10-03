import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-bengali text-primary mb-8 text-center">
          ফটো গ্যালারি
        </h1>
        
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
