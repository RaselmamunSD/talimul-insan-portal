import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

// YouTube ভিডিও লিংক যোগ করুন (embed URL format: https://www.youtube.com/embed/VIDEO_ID)
const youtubeVideos = [
  {
    id: 1,
    title: "মাদ্রাসার কার্যক্রম",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // এখানে আপনার YouTube ভিডিও ID দিন
  },
  {
    id: 2,
    title: "বার্ষিক অনুষ্ঠান",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // এখানে আপনার YouTube ভিডিও ID দিন
  },
  {
    id: 3,
    title: "ছাত্রদের অর্জন",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // এখানে আপনার YouTube ভিডিও ID দিন
  },
  {
    id: 4,
    title: "মাদ্রাসা পরিচিতি",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // এখানে আপনার YouTube ভিডিও ID দিন
  },
];

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">الوسائط</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              মিডিয়া
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Media
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-bengali text-islamic-green mb-4">ভিডিও</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {youtubeVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-4 bg-gradient-to-r from-islamic-green/5 to-islamic-teal/5">
                      <h3 className="font-bengali font-semibold text-foreground">{video.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-bengali text-islamic-green mb-4">অডিও</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <Card key={item}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-islamic-green/10 rounded-full flex items-center justify-center text-2xl">
                      🎵
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bengali font-semibold">কুরআন তিলাওয়াত - পর্ব {item}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Media;
