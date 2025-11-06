import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AdmissionTerms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lime-600 via-green-500 to-emerald-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">شروط القبول</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              ভর্তির শর্তাবলী
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Admission Terms
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">সাধারণ শর্তাবলী</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-bengali">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">১.</span>
                    <span>ছাত্রের বয়স ৫ থেকে ১৮ বছরের মধ্যে হতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">২.</span>
                    <span>ছাত্র মানসিক ও শারীরিকভাবে সুস্থ হতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">৩.</span>
                    <span>সর্বশেষ শিক্ষা প্রতিষ্ঠানের ছাড়পত্র (TC) থাকতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">৪.</span>
                    <span>জন্ম নিবন্ধন সনদ বাধ্যতামূলক।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">৫.</span>
                    <span>ভর্তি পরীক্ষায় উত্তীর্ণ হতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">৬.</span>
                    <span>মাদ্রাসার সকল নিয়ম-কানুন মেনে চলতে সম্মত হতে হবে।</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">বিভাগ অনুযায়ী শর্ত</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary p-4 rounded bg-muted/30">
                    <h3 className="font-bold font-bengali mb-2 text-primary">নূরানী বিভাগ</h3>
                    <ul className="space-y-1 font-bengali text-sm ml-4">
                      <li>• বয়স: ৫-৮ বছর</li>
                      <li>• কোনো পূর্ব শিক্ষাগত যোগ্যতার প্রয়োজন নেই</li>
                      <li>• মৌখিক পরীক্ষায় অংশগ্রহণ</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary p-4 rounded bg-muted/30">
                    <h3 className="font-bold font-bengali mb-2 text-primary">হিফজ বিভাগ</h3>
                    <ul className="space-y-1 font-bengali text-sm ml-4">
                      <li>• বয়স: ৮-১৫ বছর</li>
                      <li>• কুরআন শুদ্ধভাবে পড়তে পারতে হবে</li>
                      <li>• নামাজের মৌলিক জ্ঞান থাকতে হবে</li>
                      <li>• স্মৃতিশক্তি পরীক্ষা করা হবে</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary p-4 rounded bg-muted/30">
                    <h3 className="font-bold font-bengali mb-2 text-primary">কওমী বিভাগ</h3>
                    <ul className="space-y-1 font-bengali text-sm ml-4">
                      <li>• বয়স: ১০-১৮ বছর</li>
                      <li>• আরবি ভাষার মৌলিক জ্ঞান</li>
                      <li>• পূর্ববর্তী জামাতের সনদপত্র</li>
                      <li>• লিখিত ও মৌখিক পরীক্ষায় উত্তীর্ণ</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary p-4 rounded bg-muted/30">
                    <h3 className="font-bold font-bengali mb-2 text-primary">লিল্লাহ বোডিং (এতিম)</h3>
                    <ul className="space-y-1 font-bengali text-sm ml-4">
                      <li>• পিতৃ/মাতৃহীন সনদপত্র</li>
                      <li>• পরিবারের আর্থিক অবস্থার প্রমাণপত্র</li>
                      <li>• স্থানীয় চেয়ারম্যান/মেম্বারের সুপারিশপত্র</li>
                      <li>• সম্পূর্ণ বিনামূল্যে সুবিধা পাবে</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">অভিভাবকের দায়িত্ব</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-bengali">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>নির্ধারিত সময়ে ফি প্রদান করতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>মাদ্রাসার নিয়ম মেনে চলতে সহযোগিতা করতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>ছাত্রের অগ্রগতি সম্পর্কে নিয়মিত খোঁজ নিতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>মাদ্রাসা কর্তৃপক্ষের সাথে সহযোগিতা করতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>জরুরি যোগাযোগের তথ্য আপডেট রাখতে হবে।</span>
                  </li>
                </ul>
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
                    <span>পূরণকৃত ভর্তি ফরম</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>জন্ম নিবন্ধন সনদ (মূল ও ফটোকপি)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>পূর্ববর্তী প্রতিষ্ঠানের ছাড়পত্র/TC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>পাসপোর্ট সাইজ ছবি (৪ কপি)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>অভিভাবকের জাতীয় পরিচয়পত্র (ফটোকপি)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>চিকিৎসা সনদ (স্বাস্থ্য পরীক্ষা)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-destructive/5 border-destructive">
              <CardHeader>
                <CardTitle className="font-bengali text-destructive">ভর্তি বাতিলের শর্ত</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-bengali text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>নিয়মিত অনুপস্থিত থাকলে</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>মাদ্রাসার নিয়ম ভঙ্গ করলে</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>নির্ধারিত সময়ে ফি প্রদান না করলে</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>অসদাচরণ বা শৃঙ্খলাহীনতার জন্য</span>
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

export default AdmissionTerms;
