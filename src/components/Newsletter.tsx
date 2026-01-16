import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles, Bell, Send } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("সাবস্ক্রিপশন সফল হয়েছে!");
      setEmail("");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-islamic-green via-islamic-teal to-emerald-600 py-24 overflow-hidden">
      {/* Animated Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-amber-400/60 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-white/40 rounded-full animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-amber-300/50 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }}></div>
      </div>

      {/* Islamic Pattern Decorations - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-15">
        <img 
          src="/src/assets/islamic-pattern.png" 
          alt="" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Islamic Pattern Decorations - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-15">
        <img 
          src="/src/assets/islamic-pattern.png" 
          alt="" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Shimmer Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-full shadow-2xl">
                <Bell className="w-8 h-8 text-white animate-wiggle" />
              </div>
            </div>
          </div>

          <div className="mb-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-bengali text-white/90 text-sm">সর্বশেষ আপডেট পেতে যুক্ত হোন</span>
            </div>

            <h2 className="font-bengali text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              নিয়মিত নিউজলেটার পেতে
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">
                সাবস্ক্রাইব করুন
              </span>
            </h2>
            <p className="font-bengali text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              মাদ্রাসার সকল আপডেট, খবরাখবর ও গুরুত্বপূর্ণ ঘোষণা সরাসরি আপনার ইমেইলে পৌঁছে যাবে
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
            <div 
              className={`relative bg-white/10 backdrop-blur-md p-2 rounded-full border transition-all duration-500 ${
                isHovered 
                  ? 'border-amber-400/50 shadow-[0_0_30px_rgba(251,191,36,0.3)]' 
                  : 'border-white/20 shadow-xl'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-14 pl-12 pr-4 font-bengali text-lg bg-white border-0 focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-full shadow-inner"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-14 px-8 font-bengali text-lg font-semibold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-500 hover:via-orange-500 hover:to-amber-600 transition-all text-gray-900 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] hover:scale-105 flex items-center gap-2 group"
                >
                  <span>সাবস্ক্রাইব</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bengali text-sm">১০০% নিরাপদ</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bengali text-sm">স্প্যাম মুক্ত</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bengali text-sm">যেকোনো সময় আনসাবস্ক্রাইব</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>
    </section>
  );
};

export default Newsletter;
