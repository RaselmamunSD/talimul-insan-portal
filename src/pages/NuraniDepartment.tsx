import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Baby, Clock, Star } from "lucide-react";

const NuraniDepartment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-600 via-amber-500 to-orange-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">قسم النورانية</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              নূরানী বিভাগ
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Nurani Department
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-6xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">বিভাগ সম্পর্কে</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-bengali leading-relaxed">
                  নূরানী বিভাগ শিশুদের কুরআন শিক্ষার প্রাথমিক ও মৌলিক বিভাগ। এই বিভাগে শিশুদের সহজ ও আকর্ষণীয় পদ্ধতিতে কুরআন শিক্ষা দেওয়া হয়। নূরানী পদ্ধতিতে শিশুরা খুব অল্প সময়ে সহীহ শুদ্ধভাবে কুরআন পড়তে শেখে।
                </p>
                <p className="font-bengali leading-relaxed">
                  এই বিভাগে শিক্ষার পরিবেশ অত্যন্ত শিশুবান্ধব। খেলাধুলা ও শিক্ষার সমন্বয়ে শিশুদের কুরআনের সাথে পরিচয় করানো হয়।
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <Baby className="w-5 h-5" />
                    ভর্তির যোগ্যতা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• বয়স: ৫ থেকে ৮ বছর</li>
                    <li>• কোনো পূর্ব শিক্ষার প্রয়োজন নেই</li>
                    <li>• শারীরিক ও মানসিকভাবে সুস্থ</li>
                    <li>• অভিভাবকের সম্মতি</li>
                    <li>• নিয়মিত উপস্থিত থাকার সক্ষমতা</li>
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
                    <li>• সাধারণ সময়কাল: ৮-১২ মাস</li>
                    <li>• দৈনিক ২-৩ ঘন্টা ক্লাস</li>
                    <li>• সাপ্তাহিক ৬ দিন</li>
                    <li>• সপ্তাহে ২ দিন মূল্যায়ন</li>
                    <li>• সারা বছর ভর্তি চলমান</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  পাঠ্যক্রম
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bengali font-semibold mb-2 text-primary">প্রথম পর্যায়</h4>
                    <ul className="space-y-1 font-bengali text-sm">
                      <li>• আরবী বর্ণমালা পরিচিতি</li>
                      <li>• হরকত (যবর, যের, পেশ)</li>
                      <li>• তানবীন ও তাশদীদ</li>
                      <li>• মাদ্দ ও সাকিন</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bengali font-semibold mb-2 text-primary">দ্বিতীয় পর্যায়</h4>
                    <ul className="space-y-1 font-bengali text-sm">
                      <li>• যুক্তাক্ষর পরিচয়</li>
                      <li>• ছোট সূরা পাঠ</li>
                      <li>• সঠিক উচ্চারণ অনুশীলন</li>
                      <li>• বাংলা অর্থসহ সূরা</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-bengali font-semibold mb-2 text-primary">তৃতীয় পর্যায়</h4>
                    <ul className="space-y-1 font-bengali text-sm">
                      <li>• নাযেরা শুরু (কুরআন পাঠ)</li>
                      <li>• তাজবীদের প্রাথমিক নিয়ম</li>
                      <li>• দৈনিক দোয়া ও মাসনূন দোয়া</li>
                      <li>• নামাজ শিক্ষা</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="font-bengali flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  বিশেষ বৈশিষ্ট্য
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 font-bengali">
                    <li>• শিশুবান্ধব পরিবেশ</li>
                    <li>• ছোট ব্যাচে পাঠদান</li>
                    <li>• অভিজ্ঞ শিশু শিক্ষক</li>
                    <li>• আধুনিক শিক্ষা পদ্ধতি</li>
                    <li>• রঙিন শিক্ষা উপকরণ</li>
                  </ul>
                  <ul className="space-y-2 font-bengali">
                    <li>• খেলার ছলে শিক্ষা</li>
                    <li>• নিয়মিত অভিভাবক সভা</li>
                    <li>• পুরস্কার ও উৎসাহ প্রদান</li>
                    <li>• স্বাস্থ্যকর খাবার</li>
                    <li>• নিরাপদ খেলার জায়গা</li>
                  </ul>
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
                    <span>সকাল - কুরআন পাঠ</span>
                    <span className="text-muted-foreground">৮:০০ - ৯:৩০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>বিরতি ও নাস্তা</span>
                    <span className="text-muted-foreground">৯:৩০ - ১০:০০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>তাজবীদ ও দোয়া</span>
                    <span className="text-muted-foreground">১০:০০ - ১১:০০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>খেলাধুলা</span>
                    <span className="text-muted-foreground">১১:০০ - ১১:৩০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-muted rounded">
                    <span>বিকাল - পুনরায় পাঠ</span>
                    <span className="text-muted-foreground">৪:০০ - ৫:৩০</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">শিক্ষা উপকরণ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-bengali text-center">
                  <div className="p-3 bg-muted rounded">
                    <div className="text-2xl mb-2">📚</div>
                    <div className="text-sm">নূরানী কায়দা</div>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <div className="text-2xl mb-2">🎨</div>
                    <div className="text-sm">রঙিন চার্ট</div>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm">শিক্ষা খেলনা</div>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <div className="text-2xl mb-2">🖼️</div>
                    <div className="text-sm">ছবি কার্ড</div>
                  </div>
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

export default NuraniDepartment;
