import { Calendar, ChevronRight, Bell } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    date: "০৩ অক্টোবর ২০২৫",
    title: "২০২৫ শিক্ষাবর্ষের ভর্তি চলছে",
    excerpt: "হিফজুল কুরআন, কওমী শিক্ষা ও লিল্লাহ বোডিং-এ সীমিত সংখ্যক আসনে ভর্তি চলছে।",
    category: "ভর্তি",
    isNew: true,
  },
  {
    id: 2,
    date: "২৫ সেপ্টেম্বর ২০২৫",
    title: "কামিল পরীক্ষার বিজ্ঞপ্তি প্রকাশ",
    excerpt: "কামিল ১ম ও ২য় পর্বের বার্ষিক পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে।",
    category: "পরীক্ষা",
    isNew: true,
  },
  {
    id: 3,
    date: "১০ সেপ্টেম্বর ২০২৫",
    title: "বার্ষিক খতমে কুরআন মাহফিল",
    excerpt: "এ বছর ৫০ জন ছাত্র সফলভাবে হিফজ সম্পন্ন করেছে। আগামী ২০ সেপ্টেম্বর মাহফিল অনুষ্ঠিত হবে।",
    category: "অনুষ্ঠান",
    isNew: false,
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "ভর্তি": "bg-emerald-100 text-emerald-700",
    "পরীক্ষা": "bg-blue-100 text-blue-700",
    "অনুষ্ঠান": "bg-purple-100 text-purple-700",
    "ঘোষণা": "bg-amber-100 text-amber-700",
  };
  return colors[category] || "bg-muted text-muted-foreground";
};

const RecentNews = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "50px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 bg-gradient-to-br from-background via-islamic-teal/5 to-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-islamic-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-islamic-green/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-islamic-teal/10 rounded-full mb-4">
            <Bell className="w-5 h-5 text-islamic-teal" />
            <span className="font-bengali text-base text-islamic-teal font-semibold">সর্বশেষ নোটিশ</span>
          </div>
          
          <h2 className="font-bengali text-5xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 px-4">
            সাম্প্রতিক নোটিশ
          </h2>
          
          <p className="font-bengali text-lg md:text-lg text-muted-foreground max-w-2xl mx-auto">
            মাদ্রাসার সর্বশেষ ঘোষণা ও গুরুত্বপূর্ণ তথ্যাবলী
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-islamic-gold"></div>
            <div className="w-2 h-2 bg-islamic-gold rounded-full"></div>
            <div className="w-3 h-3 bg-islamic-teal rounded-full"></div>
            <div className="w-2 h-2 bg-islamic-gold rounded-full"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-islamic-gold"></div>
          </div>
        </div>

        {/* Notice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsItems.map((news, index) => (
            <Link to="/news" key={news.id} className="block">
              <Card 
                className={`group h-full border border-border/50 hover:border-islamic-teal/30 hover:shadow-xl bg-card/90 backdrop-blur-sm transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <CardContent className="p-6 md:p-6 flex flex-col h-full">
                  {/* Top row: category + new badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-sm font-bengali font-semibold ${getCategoryColor(news.category)}`}>
                      {news.category}
                    </span>
                    {news.isNew && (
                      <span className="px-2.5 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-bengali font-semibold animate-pulse">
                        নতুন
                      </span>
                    )}
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bengali text-sm">{news.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bengali text-xl font-bold text-foreground mb-3 group-hover:text-islamic-teal transition-colors line-clamp-2">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-bengali text-muted-foreground text-base leading-relaxed mb-4 line-clamp-2 flex-1">
                    {news.excerpt}
                  </p>

                  {/* Read More */}
                  <span className="flex items-center gap-1.5 text-islamic-teal font-bengali font-semibold text-base group-hover:gap-3 transition-all mt-auto">
                    বিস্তারিত দেখুন
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <Button 
            asChild
            size="lg"
            className="font-bengali text-lg px-8 py-6 h-14 bg-gradient-to-r from-islamic-teal to-islamic-green hover:from-islamic-green hover:to-islamic-teal shadow-lg hover:shadow-xl"
          >
            <Link to="/news">
              সকল নোটিশ দেখুন
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
