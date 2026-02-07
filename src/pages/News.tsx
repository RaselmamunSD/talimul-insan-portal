import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Bell, ArrowRight, Megaphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import islamicPattern from "@/assets/islamic-pattern.png";

const allNews = [
  {
    id: "1",
    date: "০৩ অক্টোবর ২০২৫",
    title: "২০২৫ শিক্ষাবর্ষের ভর্তি চলছে",
    description: "হিফজুল কুরআন, কওমী শিক্ষা ও লিল্লাহ বোডিং-এ সীমিত সংখ্যক আসনে ভর্তি চলছে। আগ্রহী অভিভাবকগণ অনলাইনে আবেদন করতে পারবেন।",
    category: "ভর্তি",
    isNew: true,
  },
  {
    id: "2",
    date: "২৫ সেপ্টেম্বর ২০২৫",
    title: "কামিল পরীক্ষার বিজ্ঞপ্তি প্রকাশ",
    description: "কামিল ১ম ও ২য় পর্বের বার্ষিক পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে। সকল শিক্ষার্থীদের প্রস্তুতি নিতে বলা হচ্ছে।",
    category: "পরীক্ষা",
    isNew: true,
  },
  {
    id: "3",
    date: "১০ সেপ্টেম্বর ২০২৫",
    title: "বার্ষিক খতমে কুরআন মাহফিল",
    description: "আলহামদুলিল্লাহ, এ বছর ৫০ জন ছাত্র সফলভাবে হিফজ সম্পন্ন করেছে। তাদের সম্মানে আগামী ২০ সেপ্টেম্বর খতমে কুরআন মাহফিল অনুষ্ঠিত হবে।",
    category: "অনুষ্ঠান",
    isNew: false,
  },
  {
    id: "4",
    date: "০১ সেপ্টেম্বর ২০২৫",
    title: "নতুন শিক্ষক নিয়োগ বিজ্ঞপ্তি",
    description: "মাদ্রাসায় অভিজ্ঞ শিক্ষক নিয়োগ দেওয়া হবে। আগ্রহী প্রার্থীদের আগামী ১৫ সেপ্টেম্বরের মধ্যে আবেদন করতে হবে।",
    category: "নিয়োগ",
    isNew: false,
  },
  {
    id: "5",
    date: "২০ আগস্ট ২০২৫",
    title: "ঈদ-উল-আযহা উপলক্ষে ছুটির ঘোষণা",
    description: "আগামী ঈদ-উল-আযহা উপলক্ষে মাদ্রাসা ১০ দিন বন্ধ থাকবে। ছুটির পর নিয়মিত ক্লাস শুরু হবে।",
    category: "ছুটি",
    isNew: false,
  },
  {
    id: "6",
    date: "১০ আগস্ট ২০২৫",
    title: "অভিভাবক সমাবেশের তারিখ ঘোষণা",
    description: "আগামী ২৫ আগস্ট রবিবার সকাল ১০টায় মাদ্রাসা প্রাঙ্গণে অভিভাবক সমাবেশ অনুষ্ঠিত হবে।",
    category: "সমাবেশ",
    isNew: false,
  },
];

const categories = ["সকল", "ভর্তি", "পরীক্ষা", "অনুষ্ঠান", "নিয়োগ", "ছুটি", "সমাবেশ"];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "ভর্তি": "from-emerald-500 to-teal-500",
    "পরীক্ষা": "from-blue-500 to-indigo-500",
    "অনুষ্ঠান": "from-purple-500 to-pink-500",
    "নিয়োগ": "from-orange-500 to-amber-500",
    "ছুটি": "from-rose-500 to-red-500",
    "সমাবেশ": "from-cyan-500 to-blue-500",
  };
  return colors[category] || "from-gray-500 to-slate-500";
};

const News = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "50px" });
  const [activeCategory, setActiveCategory] = useState("সকল");

  const filteredNews = activeCategory === "সকল"
    ? allNews
    : allNews.filter((n) => n.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-islamic-green via-islamic-teal to-islamic-dark-green py-14 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${islamicPattern})`, backgroundSize: "350px", backgroundRepeat: "repeat" }}
        />
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-islamic-gold/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-5">
            <Bell className="w-5 h-5 animate-pulse" />
            <p className="font-arabic text-base">إعلان</p>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-bengali mb-3 drop-shadow-lg">নোটিশ বোর্ড</h1>
          <p className="font-english text-base md:text-lg opacity-90">Notice Board</p>
          <p className="font-bengali text-sm md:text-base opacity-80 mt-3 max-w-xl mx-auto">
            মাদ্রাসার সকল গুরুত্বপূর্ণ ঘোষণা ও নোটিশ এখানে প্রকাশিত হয়
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/60" />
            <Megaphone className="w-5 h-5 text-islamic-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/60" />
          </div>
        </div>
      </section>

      <main ref={ref} className="flex-1 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 py-10 md:py-14">

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-2 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-bengali text-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-islamic-green text-white shadow-md"
                    : "bg-muted hover:bg-islamic-green/10 text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Notice List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredNews.map((item, index) => (
              <Link to={`/notice/${item.id}`} key={item.id} className="block">
              <Card
                className={`group border-0 hover:shadow-xl bg-card/90 backdrop-blur-sm overflow-hidden transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${150 + index * 80}ms` }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    {/* Color Bar */}
                    <div className={`bg-gradient-to-b ${getCategoryColor(item.category)} p-3 sm:p-5 sm:w-36 flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-2 text-white`}>
                      <div className="flex items-center gap-2 sm:flex-col sm:gap-1">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="font-bengali text-xs sm:text-sm font-semibold">{item.date}</span>
                      </div>
                      <span className="px-2 py-0.5 bg-white/20 rounded-full text-xs font-bengali">{item.category}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 sm:p-5 flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          {item.isNew && (
                            <span className="px-2 py-0.5 bg-destructive/10 text-destructive rounded-full text-xs font-bengali font-semibold animate-pulse">
                              নতুন
                            </span>
                          )}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold font-bengali text-foreground mb-2 group-hover:text-islamic-green transition-colors">
                          {item.title}
                        </h3>
                        <p className="font-bengali text-muted-foreground text-sm leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="hidden sm:flex shrink-0 items-center justify-center w-9 h-9 rounded-full bg-muted group-hover:bg-islamic-green group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}

            {filteredNews.length === 0 && (
              <p className="text-center font-bengali text-muted-foreground py-12">এই বিভাগে কোনো নোটিশ নেই</p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
