import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("সাবস্ক্রিপশন সফল হয়েছে!");
      setEmail("");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-islamic-green to-islamic-teal py-20 overflow-hidden">
      {/* Islamic Pattern Decorations - Left Side */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-20">
        <img 
          src="/src/assets/islamic-pattern.png" 
          alt="" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Islamic Pattern Decorations - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-20">
        <img 
          src="/src/assets/islamic-pattern.png" 
          alt="" 
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <h2 className="font-bengali text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              নিয়মিত নিউজলেটার পেতে সাবস্ক্রাইব করুন
            </h2>
            <p className="font-bengali text-white/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-2">
              মাদ্রাসার সকল আপডেট ও খবরাখবর সরাসরি আপনার ইমেইলে পান
            </p>
            <p className="font-bengali text-white/95 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              আপনার ভ্রমণের তারিখ, বাজেট এবং হোটেল পছন্দ অনুযায়ী আমরা আপনাকে সেবা প্রদান করব
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input
                type="email"
                placeholder="ইমেইল লিখুন"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 font-bengali text-lg bg-white border-0 focus-visible:ring-2 focus-visible:ring-white/50 rounded-full"
              />
            </div>
            <Button
              type="submit"
              className="h-14 px-12 font-bengali text-lg font-semibold bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 transition-all text-gray-900 rounded-full shadow-lg hover:shadow-xl"
            >
              সাবস্ক্রাইব করুন
            </Button>
          </form>

          <p className="font-bengali text-white/80 text-sm mt-6">
            আমরা আপনার ইমেইল গোপনীয় রাখব এবং স্প্যাম করব না
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
