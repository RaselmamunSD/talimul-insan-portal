import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-bengali text-primary mb-8 text-center">
          মিডিয়া
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-bengali text-islamic-green mb-4">ভিডিও</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((item) => (
                <Card key={item}>
                  <CardContent className="p-0">
                    <div className="aspect-video bg-islamic-green/10 flex items-center justify-center text-6xl">
                      🎥
                    </div>
                    <div className="p-4">
                      <h3 className="font-bengali font-semibold">মাদ্রাসার কার্যক্রম</h3>
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
