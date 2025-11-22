import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Welcome = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-background via-islamic-green/5 to-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-islamic-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-islamic-teal rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Arabic Greeting */}
          <div className={`mb-6 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <p className="text-3xl md:text-4xl font-arabic text-islamic-gold mb-2">
              السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </p>
          </div>

          {/* Welcome Icon */}
          <div className={`flex justify-center mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}>
            <div className="relative">
              <Sparkles className="w-16 h-16 text-islamic-teal animate-pulse" />
              <div className="absolute inset-0 bg-islamic-teal/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Bengali Welcome Title */}
          <h2 className={`font-bengali text-4xl md:text-5xl font-bold text-foreground mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            স্বাগতম
          </h2>

          {/* Welcome Message */}
          <div className={`space-y-4 font-bengali text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <p>
              আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহি ওয়া বারাকাতুহু।
            </p>
            <p>
              আমাদের মাদ্রাসার ওয়েবসাইটে আপনাকে স্বাগতম। এখানে আপনি মাদ্রাসার সকল কার্যক্রম, 
              শিক্ষা ব্যবস্থা, ভর্তি সংক্রান্ত তথ্য এবং আরও অনেক কিছু সম্পর্কে জানতে পারবেন।
            </p>
            <p className="text-islamic-green font-semibold">
              আল্লাহ তায়ালা আমাদের সবাইকে দ্বীনি ইলম অর্জনের তাওফিক দান করুন। আমীন।
            </p>
          </div>

          {/* Decorative Border */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-islamic-teal"></div>
            <div className="w-3 h-3 bg-islamic-gold rounded-full"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-islamic-teal"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
