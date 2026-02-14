import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card } from "./ui/card";

const Welcome = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15, rootMargin: "50px" });

  return (
    <section ref={ref} className="relative section-spacing bg-gradient-to-br from-background via-islamic-green/5 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-islamic-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-islamic-teal rounded-full blur-3xl"></div>
      </div>

      {/* Islamic Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
          backgroundSize: '400px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Main Content Card */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-islamic-green/20 shadow-2xl rounded-3xl overflow-hidden hover:shadow-elegant hover:border-islamic-green/30 transition-all duration-500">
            <div className="p-8 md:p-12 lg:p-16">
              {/* Arabic Greeting */}
              <div className={`text-center mb-8 transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                <p className="text-4xl md:text-4xl lg:text-5xl font-arabic text-islamic-gold mb-4 drop-shadow-sm">
                  السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
                </p>
              </div>

              {/* Bengali Welcome Title */}
              <h2 className={`text-center font-bengali text-6xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-islamic-green via-islamic-teal to-islamic-green bg-clip-text text-transparent mb-10 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                স্বাগতম
              </h2>

              {/* Welcome Message */}
              <div className={`space-y-6 font-bengali text-xl md:text-xl lg:text-2xl text-center leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                <p className="text-muted-foreground text-xl">
                  আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু।
                </p>
                <p className="text-foreground/80 max-w-3xl mx-auto text-xl">
                  আমাদের মাদ্রাসার ওয়েবসাইটে আপনাকে স্বাগতম। এখানে আপনি মাদ্রাসার সকল কার্যক্রম, 
                  শিক্ষা ব্যবস্থা, ভর্তি সংক্রান্ত তথ্য এবং আরও অনেক কিছু সম্পর্কে জানতে পারবেন।
                </p>
                <div className="pt-4">
                  <p className="text-islamic-green font-bold text-2xl md:text-2xl drop-shadow-sm">
                    আল্লাহ তায়ালা আমাদের সবাইকে দ্বীনি ইলম অর্জনের তাওফিক দান করুন। আমীন।
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-islamic-teal to-islamic-green rounded-full"></div>
                <div className="relative">
                  <div className="w-4 h-4 bg-islamic-gold rounded-full shadow-lg"></div>
                  <div className="absolute inset-0 bg-islamic-gold/50 rounded-full blur-sm animate-pulse"></div>
                </div>
                <div className="h-1 w-32 bg-gradient-to-l from-transparent via-islamic-teal to-islamic-green rounded-full"></div>
              </div>
            </div>

            {/* Decorative Bottom Border */}
            <div className="h-2 bg-gradient-to-r from-islamic-green via-islamic-teal to-islamic-green"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
