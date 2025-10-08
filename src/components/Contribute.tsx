import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { HandHeart } from "lucide-react";

const Contribute = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-br from-islamic-green to-islamic-teal rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HandHeart className="w-10 h-10" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold font-bengali mb-6">
            অবদান রাখুন
          </h2>
          
          <p className="text-lg font-bengali mb-3 leading-relaxed max-w-3xl mx-auto">
            জীবনবাথী বাংলাদেশের একমাত্র অনাভিজনক মুসলিম ম্যাট্রিমনি প্লাটফর্ম। এটি সম্পূর্ণ
          </p>
          <p className="text-lg font-bengali mb-3 leading-relaxed max-w-3xl mx-auto">
            ডোনেশনের দ্বারা পরিচালিত হয়। ভাই, সামর্থবানরা ডোনেট করে এই প্লাটফর্মের উন্নয়নে
          </p>
          <p className="text-lg font-bengali mb-8 leading-relaxed max-w-3xl mx-auto">
            সহযোগীতা করুন। এবং বুঝহের মুসলিম উম্মাহর কল্যানে অবদান রাখুন।
          </p>

          <Button 
            asChild 
            size="lg"
            className="bg-white text-islamic-green hover:bg-white/90 font-bengali text-xl px-8 py-6 rounded-xl shadow-lg"
          >
            <Link to="/donate">
              <HandHeart className="w-5 h-5 mr-2" />
              ডোনেট করুন
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contribute;
