import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import principalPhoto from "@/assets/principal-photo.png";

const PrincipalMessageHome = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-primary mb-4">
            মুহতামিমের বাণী
          </h2>
          <p className="text-xl font-arabic text-secondary">
            رسالة المدير
          </p>
          <p className="text-lg font-english text-muted-foreground mt-2">
            Principal's Message
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className={`shadow-elegant overflow-hidden transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Principal Image */}
                <div className="md:col-span-1 bg-gradient-primary p-8 flex flex-col items-center justify-center text-white">
                  <div className="w-40 h-40 rounded-full bg-white/20 border-4 border-white/40 overflow-hidden mb-4">
                    <img 
                      src={principalPhoto} 
                      alt="মুহতামিম সাহেব" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-bold font-bengali text-center">
                    মাওলানা মুহাম্মদ আব্দুল্লাহ
                  </h3>
                  <p className="text-sm font-bengali text-secondary text-center mt-2">
                    মুহতামিম ও প্রতিষ্ঠাতা
                  </p>
                </div>

                {/* Message Content */}
                <div className="md:col-span-2 p-8">
                  <div className="space-y-4">
                    <p className="text-lg font-bengali leading-relaxed text-foreground">
                      বিস্মিল্লাহির রাহমানির রাহিম। আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ। 
                      আল্লাহ তা'আলার অশেষ রহমতে আমাদের মাদ্রাসা দীর্ঘ ১৫ বছর যাবত কুরআন ও হাদিসের 
                      খিদমতে নিয়োজিত রয়েছে।
                    </p>
                    <p className="text-base font-bengali leading-relaxed text-muted-foreground">
                      আমাদের প্রতিষ্ঠানে শিক্ষার্থীরা শুধুমাত্র ধর্মীয় জ্ঞানই অর্জন করে না, বরং 
                      চরিত্র গঠন, নৈতিকতা ও মানবিক মূল্যবোধেও দীক্ষিত হয়। আমরা বিশ্বাস করি যে, 
                      সত্যিকারের ইসলামী শিক্ষা ছাড়া কোনো জাতি উন্নতি লাভ করতে পারে না।
                    </p>
                    <div className="pt-4">
                      <Button asChild className="bg-primary hover:bg-primary/90 font-bengali">
                        <Link to="/principal-message">
                          সম্পূর্ণ বাণী পড়ুন →
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessageHome;
