import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2, Shield, Zap, Send } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("সাবস্ক্রিপশন সফল হয়েছে! 🎉", {
        description: "আপনার ইমেইলে শীঘ্রই আপডেট পাঠানো হবে।",
      });
      setEmail("");
      setIsLoading(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-islamic-green via-emerald-600 to-teal-600 py-20 md:py-28 overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Geometric Pattern - Single Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-5 hidden lg:block">
        <img 
          src="/src/assets/islamic-pattern.png" 
          alt="" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Clean Wave at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" fill="white" fillOpacity="0.03"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Content Section */}
          <div className="text-center mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20 hover:bg-white/15 transition-colors">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="font-bengali text-white/90 text-sm font-medium">সর্বশেষ আপডেট পান</span>
            </div>

            {/* Heading */}
            <h2 className="font-bengali text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight px-4">
              নিয়মিত নিউজলেটার পেতে
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                সাবস্ক্রাইব করুন
              </span>
            </h2>

            {/* Description */}
            <p className="font-bengali text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              মাদ্রাসার সকল আপডেট, খবরাখবর ও গুরুত্বপূর্ণ ঘোষণা সরাসরি আপনার ইমেইলে পৌঁছে যাবে
            </p>
          </div>

          {/* Modern Card Form */}
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 border border-white/20">
              <form onSubmit={handleSubscribe} className="space-y-6">
                {/* Email Input */}
                <div className="relative">
                  <label htmlFor="newsletter-email" className="sr-only">
                    ইমেইল ঠিকানা
                  </label>
                  <div className="relative">
                    <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                      isFocused ? 'text-islamic-green' : 'text-gray-400'
                    }`} />
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      required
                      disabled={isLoading}
                      className="h-14 sm:h-16 pl-12 pr-4 font-bengali text-base sm:text-lg bg-gray-50 border-2 border-gray-200 focus:border-islamic-green focus:bg-white focus-visible:ring-4 focus-visible:ring-islamic-green/10 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 sm:h-16 font-bengali text-base sm:text-lg font-semibold bg-gradient-to-r from-islamic-green to-emerald-600 hover:from-islamic-green hover:to-emerald-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>অপেক্ষা করুন...</span>
                    </>
                  ) : (
                    <>
                      <span>সাবস্ক্রাইব করুন</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-bengali text-sm text-gray-700 font-medium">১০০% নিরাপদ</span>
                  </div>
                  
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-bengali text-sm text-gray-700 font-medium">স্প্যাম মুক্ত</span>
                  </div>
                  
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-amber-600" />
                    </div>
                    <span className="font-bengali text-sm text-gray-700 font-medium">সহজ আনসাবস্ক্রাইব</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <p className="text-center text-white/60 text-xs sm:text-sm font-bengali mt-6 px-4">
              সাবস্ক্রাইব করার মাধ্যমে আপনি আমাদের{" "}
              <a href="/privacy-policy" className="text-white/90 hover:text-white underline transition-colors">
                গোপনীয়তা নীতি
              </a>{" "}
              এবং{" "}
              <a href="/terms" className="text-white/90 hover:text-white underline transition-colors">
                শর্তাবলী
              </a>{" "}
              মেনে নিচ্ছেন
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
