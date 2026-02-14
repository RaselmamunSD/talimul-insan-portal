import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import principalPhoto from "@/assets/principal-photo.png";
import { Quote } from "lucide-react";

const PrincipalMessageHome = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-10 md:mb-14 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block px-5 md:px-6 py-2.5 md:py-2 bg-primary/10 rounded-full mb-4 md:mb-4">
            <p className="font-arabic text-lg md:text-xl text-primary">رسالة المدير</p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-bengali text-foreground mb-4 md:mb-4 px-4">
            মুহতামিমের বাণী
          </h2>
          <p className="text-lg md:text-xl font-english text-muted-foreground">
            Principal's Message
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-card rounded-2xl md:rounded-3xl shadow-elegant overflow-hidden border border-border/50">
            <div className="flex flex-col md:grid md:grid-cols-5 gap-0">
              {/* Principal Image Section */}
              <div className="md:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-8 flex items-center justify-center">
                <div className="relative">
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-xl scale-110" />
                  
                  <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-4 ring-primary ring-offset-4 md:ring-offset-4 ring-offset-card shadow-2xl">
                    <img 
                      src={principalPhoto} 
                      alt="মুহতামিম সাহেব" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Decorative elements - hidden on mobile */}
                  <div className="hidden sm:block absolute -top-4 -right-4 w-6 md:w-8 h-6 md:h-8 bg-primary/20 rounded-full animate-pulse" />
                  <div className="hidden sm:block absolute -bottom-2 -left-2 w-4 md:w-6 h-4 md:h-6 bg-primary/30 rounded-full animate-pulse delay-300" />
                </div>
              </div>

              {/* Message Content Section */}
              <div className="md:col-span-3 p-8 md:p-8 lg:p-10 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 md:top-6 right-6 md:right-6 opacity-10">
                  <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary" />
                </div>

                {/* Name & Title */}
                <div className="mb-6 md:mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold font-bengali text-foreground mb-2 md:mb-2">
                    মাওলানা মুহাম্মদ আব্দুল্লাহ
                  </h3>
                  <p className="text-primary font-semibold font-bengali text-lg md:text-xl">
                    মুহতামিম ও প্রতিষ্ঠাতা
                  </p>
                </div>

                {/* Message */}
                <div className="space-y-4 md:space-y-4 mb-8 md:mb-8">
                  <p className="text-lg md:text-xl font-bengali leading-relaxed text-foreground">
                    বিস্মিল্লাহির রাহমানির রাহিম। আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ। 
                    আল্লাহ তা'আলার অশেষ রহমতে আমাদের মাদ্রাসা দীর্ঘ ১৫ বছর যাবত কুরআন ও হাদিসের 
                    খিদমতে নিয়োজিত রয়েছে।
                  </p>
                  <p className="text-base md:text-lg font-bengali leading-relaxed text-muted-foreground">
                    আমাদের প্রতিষ্ঠানে শিক্ষার্থীরা শুধুমাত্র ধর্মীয় জ্ঞানই অর্জন করে না, বরং 
                    চরিত্র গঠন, নৈতিকতা ও মানবিক মূল্যবোধেও দীক্ষিত হয়।
                  </p>
                </div>

                {/* CTA Button */}
                <Button asChild size="lg" className="font-bengali text-base group w-full sm:w-auto">
                  <Link to="/principal-message">
                    সম্পূর্ণ বাণী পড়ুন 
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessageHome;
