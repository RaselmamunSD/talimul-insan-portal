import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Bell, Clock, ArrowRight, Megaphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import islamicPattern from "@/assets/islamic-pattern.png";

const News = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "50px" });

  const newsItems = [
    {
      date: "০৩ অক্টোবর ২০২৫",
      title: "২০২৫ শিক্ষাবর্ষের ভর্তি চলছে",
      description: "হিফজুল কুরআন, কওমী শিক্ষা ও লিল্লাহ বোডিং-এ সীমিত সংখ্যক আসনে ভর্তি চলছে। আগ্রহী অভিভাবকগণ অনলাইনে আবেদন করতে পারবেন।",
      category: "ভর্তি",
      isNew: true
    },
    {
      date: "২৫ সেপ্টেম্বর ২০২৫",
      title: "কামিল পরীক্ষার বিজ্ঞপ্তি প্রকাশ",
      description: "কামিল ১ম ও ২য় পর্বের বার্ষিক পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে। সকল শিক্ষার্থীদের প্রস্তুতি নিতে বলা হচ্ছে।",
      category: "পরীক্ষা",
      isNew: true
    },
    {
      date: "১০ সেপ্টেম্বর ২০২৫",
      title: "বার্ষিক খতমে কুরআন মাহফিল",
      description: "আলহামদুলিল্লাহ, এ বছর ৫০ জন ছাত্র সফলভাবে হিফজ সম্পন্ন করেছে। তাদের সম্মানে আগামী ২০ সেপ্টেম্বর খতমে কুরআন মাহফিল অনুষ্ঠিত হবে।",
      category: "অনুষ্ঠান",
      isNew: false
    },
    {
      date: "০১ সেপ্টেম্বর ২০২৫",
      title: "নতুন শিক্ষক নিয়োগ বিজ্ঞপ্তি",
      description: "মাদ্রাসায় অভিজ্ঞ শিক্ষক নিয়োগ দেওয়া হবে। আগ্রহী প্রার্থীদের আগামী ১৫ সেপ্টেম্বরের মধ্যে আবেদন করতে হবে।",
      category: "নিয়োগ",
      isNew: false
    },
    {
      date: "২০ আগস্ট ২০২৫",
      title: "ঈদ-উল-আযহা উপলক্ষে ছুটির ঘোষণা",
      description: "আগামী ঈদ-উল-আযহা উপলক্ষে মাদ্রাসা ১০ দিন বন্ধ থাকবে। ছুটির পর নিয়মিত ক্লাস শুরু হবে।",
      category: "ছুটি",
      isNew: false
    },
    {
      date: "১০ আগস্ট ২০২৫",
      title: "অভিভাবক সমাবেশের তারিখ ঘোষণা",
      description: "আগামী ২৫ আগস্ট রবিবার সকাল ১০টায় মাদ্রাসা প্রাঙ্গণে অভিভাবক সমাবেশ অনুষ্ঠিত হবে। সকল অভিভাবকদের উপস্থিত থাকার অনুরোধ করা হচ্ছে।",
      category: "সমাবেশ",
      isNew: false
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "ভর্তি": "from-emerald-500 to-teal-500",
      "পরীক্ষা": "from-blue-500 to-indigo-500",
      "অনুষ্ঠান": "from-purple-500 to-pink-500",
      "নিয়োগ": "from-orange-500 to-amber-500",
      "ছুটি": "from-rose-500 to-red-500",
      "সমাবেশ": "from-cyan-500 to-blue-500"
    };
    return colors[category] || "from-gray-500 to-slate-500";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-islamic-green via-islamic-teal to-islamic-dark-green py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${islamicPattern})`,
            backgroundSize: '350px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-islamic-gold/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="mb-6 inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full">
              <Bell className="w-5 h-5 animate-pulse" />
              <p className="font-arabic text-lg">إعلان</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-bengali mb-4 drop-shadow-lg">
              নোটিশ বোর্ড
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md mb-2">
              Notice Board
            </p>

            <p className="font-bengali text-base md:text-lg opacity-80 mt-4 max-w-xl mx-auto">
              মাদ্রাসার সকল গুরুত্বপূর্ণ ঘোষণা ও নোটিশ এখানে প্রকাশিত হয়
            </p>

            {/* Decorative Line */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/60"></div>
              <Megaphone className="w-6 h-6 text-islamic-gold" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
          </div>
        </div>
      </section>
      
      <main ref={ref} className="flex-1 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 py-12 md:py-16">
          
          {/* Section Title */}
          <div className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="font-bengali text-2xl md:text-3xl font-bold text-foreground mb-2">
              সাম্প্রতিক নোটিশ সমূহ
            </h2>
            <p className="font-bengali text-muted-foreground">
              সর্বশেষ আপডেট এবং গুরুত্বপূর্ণ বিজ্ঞপ্তি
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {newsItems.map((item, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Left Color Bar / Date Section */}
                    <div className={`bg-gradient-to-b ${getCategoryColor(item.category)} p-4 md:p-6 md:w-40 flex flex-row md:flex-col items-center justify-between md:justify-center gap-2 md:gap-3 text-white`}>
                      <div className="flex items-center gap-2 md:flex-col md:gap-1">
                        <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="font-bengali text-sm md:text-base font-semibold">{item.date}</span>
                      </div>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bengali">
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            {item.isNew && (
                              <span className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-xs font-bengali font-semibold animate-pulse">
                                নতুন
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-lg md:text-xl font-bold font-bengali text-foreground mb-3 group-hover:text-islamic-green transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="font-bengali text-muted-foreground leading-relaxed text-sm md:text-base">
                            {item.description}
                          </p>
                        </div>
                        
                        {/* Arrow Icon */}
                        <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-muted group-hover:bg-islamic-green group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Section */}
          <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <p className="font-bengali text-muted-foreground text-sm mb-4">
              আরও নোটিশ দেখতে নিচে স্ক্রল করুন অথবা নির্দিষ্ট বিভাগ নির্বাচন করুন
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["ভর্তি", "পরীক্ষা", "অনুষ্ঠান", "নিয়োগ", "ছুটি"].map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 bg-muted hover:bg-islamic-green hover:text-white rounded-full font-bengali text-sm transition-all duration-300"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
