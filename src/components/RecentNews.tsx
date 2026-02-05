import { Calendar, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "react-router-dom";

const RecentNews = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "50px" });
  const newsItems = [
    {
      id: 1,
      date: "১৫ নভেম্বর, ২০২৪",
      title: "নতুন শিক্ষাবর্ষ ২০২৫ এর ভর্তি প্রক্রিয়া শুরু",
      excerpt: "আগামী ১ জানুয়ারি থেকে নতুন শিক্ষাবর্ষের ভর্তি কার্যক্রম শুরু হবে। আগ্রহী শিক্ষার্থীরা অনলাইনে আবেদন করতে পারবেন।",
      category: "ভর্তি"
    },
    {
      id: 2,
      date: "১০ নভেম্বর, ২০২৪",
      title: "বার্ষিক পরীক্ষার ফলাফল প্রকাশ",
      excerpt: "২০২৪ সালের বার্ষিক পরীক্ষার ফলাফল প্রকাশিত হয়েছে। সকল শিক্ষার্থী তাদের ফলাফল অফিস থেকে সংগ্রহ করতে পারবেন।",
      category: "পরীক্ষা"
    },
    {
      id: 3,
      date: "৫ নভেম্বর, ২০২৪",
      title: "ঈদ-উল-আযহা উপলক্ষে ছুটির ঘোষণা",
      excerpt: "আগামী ঈদ-উল-আযহা উপলক্ষে মাদ্রাসা ১০ দিন বন্ধ থাকবে। ছুটির পর নিয়মিত ক্লাস শুরু হবে।",
      category: "ঘোষণা"
    }
  ];

  return (
    <section ref={ref} className="relative section-spacing bg-gradient-to-br from-background via-islamic-teal/5 to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/islamic-pattern.png')] bg-repeat opacity-10"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-islamic-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-islamic-green/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-islamic-teal/10 rounded-full">
              <Calendar className="w-5 h-5 text-islamic-teal" />
              <span className="font-bengali text-sm text-islamic-teal font-semibold">সর্বশেষ আপডেট</span>
            </div>
          </div>
          
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-foreground mb-4">
            সাম্প্রতিক খবর ও ঘোষণা
          </h2>
          
          <p className="font-bengali text-lg text-muted-foreground max-w-2xl mx-auto">
            মাদ্রাসার সর্বশেষ খবর, ঘোষণা এবং গুরুত্বপূর্ণ তথ্যাবলী এখানে পাবেন
          </p>

          {/* Decorative Line */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-islamic-gold"></div>
            <div className="w-2 h-2 bg-islamic-gold rounded-full"></div>
            <div className="w-3 h-3 bg-islamic-teal rounded-full"></div>
            <div className="w-2 h-2 bg-islamic-gold rounded-full"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-islamic-gold"></div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {newsItems.map((news, index) => (
            <Card 
              key={news.id}
              className={`group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-islamic-teal/20 bg-card/80 backdrop-blur-sm ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-islamic-gold/20 to-islamic-teal/20 rounded-full text-xs font-bengali font-semibold text-islamic-green">
                    {news.category}
                  </span>
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
                <p className="font-bengali text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {news.excerpt}
                </p>

                {/* Read More Link */}
                <button className="flex items-center gap-2 text-islamic-teal font-bengali font-semibold text-sm group-hover:gap-3 transition-all">
                  বিস্তারিত পড়ুন
                  <ChevronRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <Button 
            asChild
            size="lg"
            className="font-bengali text-base px-8 py-6 bg-gradient-to-r from-islamic-teal to-islamic-green hover:from-islamic-green hover:to-islamic-teal transition-all duration-300 shadow-lg hover:shadow-xl"
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
