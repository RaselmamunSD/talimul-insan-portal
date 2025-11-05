import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      date: "০৩ অক্টোবর ২০২৫",
      title: "২০২৫ শিক্ষাবর্ষের ভর্তি চলছে",
      description: "হিফজুল কুরআন, কওমী শিক্ষা ও লিল্লাহ বোডিং-এ সীমিত সংখ্যক আসনে ভর্তি চলছে। আগ্রহী অভিভাবকগণ অনলাইনে আবেদন করতে পারবেন।"
    },
    {
      date: "২৫ সেপ্টেম্বর ২০২৫",
      title: "কামিল পরীক্ষার বিজ্ঞপ্তি প্রকাশ",
      description: "কামিল ১ম ও ২য় পর্বের বার্ষিক পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে। সকল শিক্ষার্থীদের প্রস্তুতি নিতে বলা হচ্ছে।"
    },
    {
      date: "১০ সেপ্টেম্বর ২০২৫",
      title: "বার্ষিক খতমে কুরআন মাহফিল",
      description: "আলহামদুলিল্লাহ, এ বছর ৫০ জন ছাত্র সফলভাবে হিফজ সম্পন্ন করেছে। তাদের সম্মানে আগামী ২০ সেপ্টেম্বর খতমে কুরআন মাহফিল অনুষ্ঠিত হবে।"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-violet-500 to-purple-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">الأخبار</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              সাম্প্রতিক সংবাদ
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Recent News
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        
        <div className="max-w-4xl mx-auto space-y-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-islamic-green/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📰</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground font-bengali mb-2">
                      {item.date}
                    </p>
                    <h3 className="text-xl font-bold font-bengali text-islamic-green mb-2">
                      {item.title}
                    </h3>
                    <p className="font-bengali leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
