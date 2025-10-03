import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdmissionInstructions = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (agreed) {
      navigate("/admission-form");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold font-bengali text-primary mb-6 text-center">
            ভর্তির নির্দেশনা
          </h1>
          
          <div className="space-y-6 font-bengali text-foreground">
            <section>
              <h2 className="text-xl font-bold mb-3 text-islamic-green">১. যোগ্যতা</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>শিক্ষার্থীর বয়স ৫-১৫ বছরের মধ্যে হতে হবে</li>
                <li>হিফজ বিভাগের জন্য কুরআন পড়তে পারা আবশ্যক</li>
                <li>কওমী বিভাগের জন্য বাংলা ও আরবি পড়ার সামান্য জ্ঞান থাকতে হবে</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-islamic-green">২. প্রয়োজনীয় কাগজপত্র</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>শিক্ষার্থীর জন্ম নিবন্ধন সনদের ফটোকপি</li>
                <li>অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি</li>
                <li>পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের প্রশংসাপত্র (যদি থাকে)</li>
                <li>সদ্য তোলা পাসপোর্ট সাইজের ৪ কপি ছবি</li>
                <li>অভিভাবকের আয়ের প্রমাণপত্র (এতিম শিক্ষার্থীদের জন্য প্রযোজ্য নয়)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-islamic-green">৩. ভর্তি প্রক্রিয়া</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>অনলাইন ফরম পূরণ করুন এবং জমা দিন</li>
                <li>প্রয়োজনীয় কাগজপত্র সহ মাদ্রাসায় উপস্থিত হন</li>
                <li>লিখিত পরীক্ষা ও মৌখিক পরীক্ষায় অংশগ্রহণ করুন</li>
                <li>নির্বাচিত শিক্ষার্থীদের তালিকা ওয়েবসাইটে প্রকাশ করা হবে</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-islamic-green">৪. ভর্তি ফি</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>হিফজ বিভাগ: ৫,০০০ টাকা (বার্ষিক)</li>
                <li>কওমী বিভাগ: ৩,০০০ টাকা (বার্ষিক)</li>
                <li>লিল্লাহ বোডিং (এতিম শিক্ষার্থী): সম্পূর্ণ বিনামূল্যে</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-3 text-islamic-green">৫. গুরুত্বপূর্ণ নোট</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>ভর্তি সীমিত আসনের ভিত্তিতে হবে</li>
                <li>সকল তথ্য সঠিক ও সত্য হতে হবে</li>
                <li>ভুল তথ্য প্রদান করলে ভর্তি বাতিল হবে</li>
                <li>ভর্তির পর মাদ্রাসার নিয়ম-শৃঙ্খলা মেনে চলতে হবে</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 p-4 bg-secondary rounded-lg">
            <div className="flex items-start gap-3">
              <Checkbox 
                id="agree" 
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="agree" className="font-bengali text-sm cursor-pointer">
                আমি উপরের সকল নির্দেশনা পড়েছি এবং বুঝেছি। আমি মাদ্রাসার সকল নিয়ম-কানুন মেনে চলতে সম্মত।
              </label>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={handleNext}
              disabled={!agreed}
              className="px-8 py-3 font-bengali text-lg bg-primary hover:bg-primary/90"
            >
              পরবর্তী
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdmissionInstructions;
