import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, BookOpen, Clock, Target } from "lucide-react";

const Revision = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-green-500 to-emerald-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">قسم المراجعة</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              রিভিশন বিভাগ
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Revision Department
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-6xl mx-auto space-y-6">
            <Card className="bg-primary/5">
              <CardContent className="p-8 text-center">
                <RefreshCw className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold font-bengali mb-4">হিফজ পাকা করার বিশেষ ব্যবস্থা</h2>
                <p className="font-bengali leading-relaxed text-lg">
                  "যে ব্যক্তি কুরআন শিখে অতঃপর ভুলে যায়, সে একটি বড় গুনাহ করে" - (আবু দাউদ)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">রিভিশন বিভাগ সম্পর্কে</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-bengali leading-relaxed">
                  রিভিশন বিভাগ বিশেষভাবে সেই সকল হাফেজদের জন্য যারা হিফজ সম্পন্ন করেছেন কিন্তু নিয়মিত দোহরানোর সুযোগ পাচ্ছেন না। এই বিভাগে হাফেজরা তাদের হিফজ মজবুত ও সুরক্ষিত রাখার জন্য পদ্ধতিগতভাবে সম্পূর্ণ কুরআন বারবার দোহরানো করেন।
                </p>
                <p className="font-bengali leading-relaxed">
                  অভিজ্ঞ উস্তাদদের তত্ত্বাবধানে প্রতিদিন নির্দিষ্ট পরিমাণ দোহরানো এবং সাপ্তাহিক পূর্ণ আমুক্তা পদ্ধতিতে হিফজ সংরক্ষণ করা হয়।
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    ভর্তির যোগ্যতা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• সম্পূর্ণ কুরআন হিফজ সম্পন্ন</li>
                    <li>• হিফজের সনদপত্র থাকা বাঞ্ছনীয়</li>
                    <li>• নিয়মিত দোহরানোর আগ্রহ</li>
                    <li>• বয়স: ১৫ বছরের ঊর্ধ্বে</li>
                    <li>• প্রয়োজন অনুযায়ী ভর্তি পরীক্ষা</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    কোর্সের সময়কাল
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• স্বল্পমেয়াদী: ৬ মাস</li>
                    <li>• মধ্যমেয়াদী: ১ বছর</li>
                    <li>• দীর্ঘমেয়াদী: ২ বছর</li>
                    <li>• প্রয়োজন অনুযায়ী বাড়ানো যায়</li>
                    <li>• দৈনিক ৪-৬ ঘন্টা দোহরানো</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  রিভিশন পদ্ধতি
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">দৈনিক দোহরানো</h4>
                    <p className="font-bengali text-sm mb-2">
                      প্রতিদিন নির্দিষ্ট পরিমাণ (১-২ পারা) দোহরানো করা হয়
                    </p>
                    <ul className="space-y-1 font-bengali text-sm">
                      <li>• ফজরের পর: ১ পারা</li>
                      <li>• সকালের সময়: ১ পারা</li>
                      <li>• আসরের পর: অর্ধ পারা</li>
                      <li>• মাগরিবের পর: অর্ধ পারা</li>
                    </ul>
                  </div>

                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">সাপ্তাহিক আমুক্তা</h4>
                    <p className="font-bengali text-sm">
                      প্রতি সপ্তাহে সম্পূর্ণ কুরআন একবার দোহরানো সম্পন্ন করার লক্ষ্য
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">মাসিক মূল্যায়ন</h4>
                    <p className="font-bengali text-sm">
                      প্রতি মাসে উস্তাদের কাছে পূর্ণ কুরআন শোনানো ও মূল্যায়ন
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">বিশেষ তাজবীদ ক্লাস</h4>
                    <p className="font-bengali text-sm">
                      তাজবীদের সূক্ষ্ম নিয়ম ও মাখরাজ শুদ্ধিকরণের বিশেষ ক্লাস
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">দৈনিক রুটিন</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-bengali">
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>ফজর পর - দোহরানো</span>
                    <span className="text-muted-foreground">৫:৩০ - ৭:০০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>সকাল - দোহরানো</span>
                    <span className="text-muted-foreground">৮:০০ - ১০:০০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>তাজবীদ ক্লাস</span>
                    <span className="text-muted-foreground">১০:৩০ - ১১:৩০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>আসর পর - দোহরানো</span>
                    <span className="text-muted-foreground">৪:৩০ - ৬:০০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>মাগরিব পর - উস্তাদের কাছে শোনানো</span>
                    <span className="text-muted-foreground">৬:৩০ - ৭:৩০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>এশা পর - পুনরায় দোহরানো</span>
                    <span className="text-muted-foreground">৮:৩০ - ৯:৩০</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="font-bengali">বিশেষ সুবিধা</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 font-bengali">
                    <li>• অভিজ্ঞ হাফেজ উস্তাদ</li>
                    <li>• ছোট গ্রুপে তত্ত্বাবধান</li>
                    <li>• নীরব পরিবেশ</li>
                    <li>• পৃথক দোহরানো কক্ষ</li>
                    <li>• নিয়মিত মূল্যায়ন</li>
                  </ul>
                  <ul className="space-y-2 font-bengali">
                    <li>• আবাসিক সুবিধা</li>
                    <li>• পুষ্টিকর খাবার</li>
                    <li>• স্বাস্থ্য সেবা</li>
                    <li>• বিশেষ উৎসাহমূলক পুরস্কার</li>
                    <li>• মাসিক সনদপত্র</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">সফলতার পরিসংখ্যান</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">১০০+</div>
                    <div className="text-sm font-bengali mt-2">হাফেজ রিভিশন করেছেন</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">৯৮%</div>
                    <div className="text-sm font-bengali mt-2">হিফজ সংরক্ষণ হার</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">৫০+</div>
                    <div className="text-sm font-bengali mt-2">বর্তমান শিক্ষার্থী</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">১-২</div>
                    <div className="text-sm font-bengali mt-2">বছরে পূর্ণ দোহরানো</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <h3 className="font-bengali font-semibold mb-3 text-center">যোগাযোগ</h3>
                <div className="text-center font-bengali space-y-2">
                  <p>রিভিশন বিভাগে ভর্তি সংক্রান্ত তথ্যের জন্য:</p>
                  <p className="font-semibold">📞 +880 1XXX-XXXXXX</p>
                  <p>অথবা সরাসরি মাদ্রাসায় যোগাযোগ করুন</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Revision;
