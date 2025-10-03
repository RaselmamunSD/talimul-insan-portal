import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Students = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-bengali text-primary mb-8 text-center">
          হাফেজ ছাত্রের পরিচিতি
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold font-bengali text-islamic-green mb-4">
                আমাদের সফল হাফেজগণ
              </h2>
              <p className="font-bengali leading-relaxed mb-4">
                আলহামদুলিল্লাহ, আমাদের মাদ্রাসা থেকে এ পর্যন্ত ২০০+ ছাত্র সফলভাবে কুরআনে হাফেজ হয়েছে। 
                তারা দেশে-বিদেশে বিভিন্ন মাদ্রাসায় কুরআন শিক্ষাদান ও ইমামতির মতো গুরুত্বপূর্ণ দায়িত্ব পালন করছেন।
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-6 bg-islamic-green/10 rounded-lg">
                  <div className="text-4xl font-bold text-islamic-green mb-2">200+</div>
                  <p className="font-bengali">সফল হাফেজ</p>
                </div>
                <div className="text-center p-6 bg-islamic-gold/10 rounded-lg">
                  <div className="text-4xl font-bold text-islamic-gold mb-2">150+</div>
                  <p className="font-bengali">বর্তমান শিক্ষার্থী</p>
                </div>
                <div className="text-center p-6 bg-islamic-orange/10 rounded-lg">
                  <div className="text-4xl font-bold text-islamic-orange mb-2">95%</div>
                  <p className="font-bengali">সফলতার হার</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold font-bengali text-islamic-green mb-4">
                বৈশিষ্ট্যসমূহ
              </h2>
              <ul className="space-y-3 font-bengali">
                <li className="flex items-start gap-2">
                  <span className="text-islamic-green mt-1">✓</span>
                  <span>অভিজ্ঞ ও দক্ষ উস্তাদদের তত্ত্বাবধানে হিফজ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-islamic-green mt-1">✓</span>
                  <span>মাখরাজ ও তাজবিদ সহীহভাবে শিক্ষাদান</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-islamic-green mt-1">✓</span>
                  <span>নিয়মিত তাস্মী ও দাওর পরীক্ষা</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-islamic-green mt-1">✓</span>
                  <span>উত্তম আখলাক ও চরিত্র গঠনে বিশেষ গুরুত্ব</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Students;
