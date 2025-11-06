import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdmissionExam = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-500 to-pink-500 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
            backgroundSize: '350px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="mb-4 inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <p className="font-arabic text-lg">امتحان القبول</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              ভর্তি পরীক্ষা
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Admission Exam
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">পরীক্ষার বিবরণ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 font-bengali">
                <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                  <h3 className="font-semibold mb-2">পরীক্ষার তারিখ:</h3>
                  <p>০৫ এপ্রিল - ১০ এপ্রিল, ২০২৫</p>
                </div>
                <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                  <h3 className="font-semibold mb-2">পরীক্ষার স্থান:</h3>
                  <p>তা'লিমুল ইন্সান মাদ্রাসা, হাড়ীভাঙ্গা, লালমনিরহাট</p>
                </div>
                <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                  <h3 className="font-semibold mb-2">পরীক্ষার সময়:</h3>
                  <p>সকাল ১০:০০ টা</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">বিভাগ অনুযায়ী পরীক্ষা</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold font-bengali text-lg mb-3 text-primary">হিফজ বিভাগ</h3>
                    <ul className="space-y-2 font-bengali ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>কুরআন তিলাওয়াত (সূরা পরীক্ষা)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>নামাজের নিয়ম ও মাসায়েল</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>বাংলা পড়া ও লেখা</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>সাক্ষাৎকার</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold font-bengali text-lg mb-3 text-primary">কওমী বিভাগ</h3>
                    <ul className="space-y-2 font-bengali ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>আরবি ব্যাকরণ (নাহু-সরফ)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>কুরআন তিলাওয়াত</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>ইসলামি মাসায়েল</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>সাধারণ জ্ঞান</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold font-bengali text-lg mb-3 text-primary">নূরানী বিভাগ</h3>
                    <ul className="space-y-2 font-bengali ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>বর্ণ পরিচয় (বাংলা ও আরবি)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>মৌখিক পরীক্ষা</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>সাক্ষাৎকার</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">প্রয়োজনীয় কাগজপত্র</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-bengali">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>ভর্তি ফরম (পূরণকৃত)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>সর্বশেষ শিক্ষা প্রতিষ্ঠানের সনদপত্র/টিসি</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>জন্ম নিবন্ধন সনদ (কপি)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>পাসপোর্ট সাইজ ছবি (৪ কপি)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>অভিভাবকের জাতীয় পরিচয়পত্র (কপি)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary">
              <CardContent className="p-6">
                <h3 className="font-bengali font-semibold mb-3 text-center text-primary">গুরুত্বপূর্ণ নির্দেশনা</h3>
                <ul className="space-y-2 font-bengali text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>পরীক্ষার ৩০ মিনিট আগে উপস্থিত থাকতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>ভর্তি কার্ড সাথে আনতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>কলম ও পেন্সিল সাথে থাকবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>মোবাইল ফোন নিষিদ্ধ।</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionExam;
