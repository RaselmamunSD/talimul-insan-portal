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
    <section className="relative bg-gradient-to-br from-islamic-green to-islamic-teal py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 mx-auto mb-4 text-white opacity-90" />
            <h2 className="font-bengali text-3xl md:text-4xl font-bold text-white mb-4">
              নিয়মিত নিউজলেটার পেতে সাবস্ক্রাইব করুন
            </h2>
            <p className="font-bengali text-white/90 text-lg">
              মাদ্রাসার সকল আপডেট ও খবরাখবর সরাসরি আপনার ইমেইলে পান
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="ইমেইল লিখুন"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-14 px-6 font-bengali text-lg bg-white border-0 focus-visible:ring-2 focus-visible:ring-white/50"
            />
            <Button
              type="submit"
              className="h-14 px-8 font-bengali text-lg font-bold bg-gradient-gold hover:opacity-90 transition-smooth text-primary"
            >
              সাবস্ক্রাইব
            </Button>
          </form>

          <p className="font-bengali text-white/70 text-sm mt-4">
            আমরা আপনার ইমেইল গোপনীয় রাখব এবং স্প্যাম করব না
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
