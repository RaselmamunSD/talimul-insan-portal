import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Award } from "lucide-react";

const QawmiDepartment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">القسم القومي</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              কওমি বিভাগ
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Qawmi Department
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
                  কওমি বিভাগে ইসলামী শিক্ষার সকল শাখায় পূর্ণাঙ্গ শিক্ষা প্রদান করা হয়। কুরআন, হাদীস, ফিক্বহ, আরবী ভাষা ও সাহিত্যসহ ইসলামী জ্ঞানের সকল বিষয়ে দক্ষ আলেম তৈরির লক্ষ্যে পরিচালিত হয় এই বিভাগ।
                </p>
                <p className="font-bengali leading-relaxed">
                  বেফাক বোর্ডের অধীনে এই বিভাগ পরিচালিত। মিশকাত পর্যন্ত সকল স্তরে শিক্ষা প্রদান করা হয়। আলেম, ফাযেল ও তাকমীল পর্যায়ে শিক্ষা সুবিধা রয়েছে।
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    ভর্তির যোগ্যতা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• মক্তব বা নাযেরা সম্পন্ন</li>
                    <li>• বয়স: ১০ বছর থেকে</li>
                    <li>• আরবী পড়তে পারা</li>
                    <li>• ইসলামী শিক্ষায় আগ্রহ</li>
                    <li>• পূর্ববর্তী পরীক্ষার সনদ</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    শিক্ষাক্রম
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• ইবতেদায়ী (প্রাথমিক স্তর)</li>
                    <li>• মুতাওয়াসসিতা (মাধ্যমিক স্তর)</li>
                    <li>• সানাবিয়্যাহ উলইয়া (উচ্চ মাধ্যমিক)</li>
                    <li>• আলিয়া (স্নাতক স্তর)</li>
                    <li>• তাকমীল ও তাখাসসুস</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  বিষয়সমূহ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bengali font-semibold mb-3 text-primary">মূল বিষয়</h4>
                    <ul className="space-y-2 font-bengali">
                      <li>• তাফসীরে কুরআন</li>
                      <li>• হাদীস শরীফ</li>
                      <li>• ফিক্বহ ও উসূলে ফিক্বহ</li>
                      <li>• আক্বীদা ও কালাম</li>
                      <li>• আরবী ভাষা ও ব্যাকরণ</li>
                      <li>• আরবী সাহিত্য</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bengali font-semibold mb-3 text-primary">সহায়ক বিষয়</h4>
                    <ul className="space-y-2 font-bengali">
                      <li>• বাংলা ভাষা ও সাহিত্য</li>
                      <li>• ইংরেজি ভাষা</li>
                      <li>• গণিত</li>
                      <li>• ইতিহাস ও সীরাত</li>
                      <li>• ভূগোল</li>
                      <li>• সাধারণ জ্ঞান</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">শ্রেণিভিত্তিক পাঠ্যক্রম</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">ইবতেদায়ী (১ম - ৫ম বর্ষ)</h4>
                    <p className="font-bengali text-sm">
                      মৌলিক ইসলামী জ্ঞান, আরবী ভাষার প্রাথমিক শিক্ষা, নাহু-সরফ, তাজবীদ ও সহজ পর্যায়ের কুরআন-হাদীসের কিতাব
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">মুতাওয়াসসিতা (৬ষ্ঠ - ৮ম বর্ষ)</h4>
                    <p className="font-bengali text-sm">
                      মধ্যম স্তরের আরবী সাহিত্য, হাদীস, ফিক্বহ, তাফসীর ও ইসলামী ইতিহাস
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">সানাবিয়্যাহ (৯ম - ১০ম বর্ষ)</h4>
                    <p className="font-bengali text-sm">
                      উচ্চতর ফিক্বহ, তাফসীর, হাদীস এবং আরবী সাহিত্যের গভীর পাঠ
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">আলিয়া - দাওরায়ে হাদীস</h4>
                    <p className="font-bengali text-sm">
                      সিহাহ সিত্তাসহ প্রধান হাদীসের কিতাব, উসূলে হাদীস ও ফিক্বহের গভীর জ্ঞান
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="font-bengali flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  বিশেষ সুবিধা
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-bengali">
                  <li>• যোগ্য ও অভিজ্ঞ উস্তাদবৃন্দ</li>
                  <li>• সমৃদ্ধ গ্রন্থাগার</li>
                  <li>• বেফাক বোর্ড অনুমোদিত পাঠ্যক্রম</li>
                  <li>• নিয়মিত পরীক্ষা ও মূল্যায়ন</li>
                  <li>• বৃত্তি ও পুরস্কারের ব্যবস্থা</li>
                  <li>• আবাসিক সুবিধা</li>
                  <li>• কম্পিউটার ও আধুনিক প্রযুক্তি শিক্ষা</li>
                  <li>• খেলাধুলা ও সাংস্কৃতিক কার্যক্রম</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">পরীক্ষা ও মূল্যায়ন</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bengali">
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <div className="font-semibold text-lg mb-2">মাসিক পরীক্ষা</div>
                    <p className="text-sm text-muted-foreground">প্রতি মাসে অনুষ্ঠিত হয়</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <div className="font-semibold text-lg mb-2">ষাণ্মাসিক পরীক্ষা</div>
                    <p className="text-sm text-muted-foreground">প্রতি ছয় মাসে</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <div className="font-semibold text-lg mb-2">বার্ষিক পরীক্ষা</div>
                    <p className="text-sm text-muted-foreground">বেফাক বোর্ড পরিচালিত</p>
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

export default QawmiDepartment;
