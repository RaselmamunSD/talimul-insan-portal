import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Users, Gift } from "lucide-react";

const LillahBoarding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-600 via-rose-500 to-red-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">البورديغ لله</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              লিল্লাহ বোডিং
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Lillah Boarding
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-6xl mx-auto space-y-6">
            <Card className="bg-primary/5">
              <CardContent className="p-8 text-center">
                <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold font-bengali mb-4">এতিম ও অসহায় শিশুদের জন্য বিশেষ ব্যবস্থা</h2>
                <p className="font-bengali leading-relaxed text-lg">
                  "নিশ্চয়ই আল্লাহর কাছে সর্বোত্তম সম্পদ হলো এতিমের প্রতি দয়া"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">লিল্লাহ বোডিং সম্পর্কে</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-bengali leading-relaxed">
                  লিল্লাহ বোডিং হলো এতিম ও অসহায় শিশুদের জন্য সম্পূর্ণ বিনামূল্যে আবাসিক শিক্ষা ব্যবস্থা। এখানে এতিম শিশুরা পরিবারের মতো পরিবেশে থেকে কুরআন ও ইসলামী শিক্ষা লাভ করে।
                </p>
                <p className="font-bengali leading-relaxed">
                  আল্লাহর সন্তুষ্টি অর্জনের উদ্দেশ্যে এবং এতিম শিশুদের ভবিষ্যৎ গড়ার লক্ষ্যে এই বিশেষ বোডিং পরিচালিত হয়। সমাজের সচ্ছল মুসলমানদের দান-সাদাকাহ দিয়ে এই বোডিং পরিচালিত হয়।
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
                    <li>• এতিম (পিতৃহীন) শিশু</li>
                    <li>• অথবা অসহায় পরিবারের সন্তান</li>
                    <li>• বয়স: ৬ থেকে ১৫ বছর</li>
                    <li>• শারীরিক ও মানসিকভাবে সুস্থ</li>
                    <li>• অভিভাবক/আত্মীয়ের সুপারিশ</li>
                    <li>• প্রয়োজনীয় কাগজপত্র</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    সম্পূর্ণ বিনামূল্যে সুবিধা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• আবাসন ও খাবার</li>
                    <li>• শিক্ষা উপকরণ</li>
                    <li>• পোশাক</li>
                    <li>• চিকিৎসা সেবা</li>
                    <li>• বই ও কপি</li>
                    <li>• ব্যক্তিগত যত্ন</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  আবাসিক সুবিধা
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bengali font-semibold mb-3 text-primary">বসবাসের ব্যবস্থা</h4>
                    <ul className="space-y-2 font-bengali">
                      <li>• পরিচ্ছন্ন শয়নকক্ষ</li>
                      <li>• আরামদায়ক বিছানা</li>
                      <li>• ব্যক্তিগত আলমারি</li>
                      <li>• পর্যাপ্ত আলো-বাতাস</li>
                      <li>• নিরাপদ পরিবেশ</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bengali font-semibold mb-3 text-primary">খাবারের ব্যবস্থা</h4>
                    <ul className="space-y-2 font-bengali">
                      <li>• দৈনিক ৩ বেলা পুষ্টিকর খাবার</li>
                      <li>• সকালের নাস্তা</li>
                      <li>• বিকালের নাস্তা</li>
                      <li>• ফল ও দুধ</li>
                      <li>• স্বাস্থ্যসম্মত রান্ন</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">শিক্ষা ব্যবস্থা</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">কুরআন শিক্ষা</h4>
                    <p className="font-bengali text-sm">
                      নাযেরা, হিফজ এবং তাজবীদসহ সম্পূর্ণ কুরআন শিক্ষার ব্যবস্থা
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">ইসলামী শিক্ষা</h4>
                    <p className="font-bengali text-sm">
                      হাদীস, ফিক্বহ, আক্বীদা ও ইসলামী আচার-ব্যবহারের শিক্ষা
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">সাধারণ শিক্ষা</h4>
                    <p className="font-bengali text-sm">
                      বাংলা, ইংরেজি, গণিত ও সাধারণ জ্ঞানের শিক্ষা
                    </p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h4 className="font-bengali font-semibold mb-2">দক্ষতা উন্নয়ন</h4>
                    <p className="font-bengali text-sm">
                      বিভিন্ন হস্তশিল্প ও প্রযুক্তিগত প্রশিক্ষণ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="font-bengali">বিশেষ যত্ন ও সেবা</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bengali">
                  <div className="p-4 bg-background rounded text-center">
                    <div className="text-3xl mb-2">🏥</div>
                    <h4 className="font-semibold mb-2">স্বাস্থ্য সেবা</h4>
                    <p className="text-sm">নিয়মিত স্বাস্থ্য পরীক্ষা ও চিকিৎসা</p>
                  </div>
                  <div className="p-4 bg-background rounded text-center">
                    <div className="text-3xl mb-2">❤️</div>
                    <h4 className="font-semibold mb-2">মানসিক সহায়তা</h4>
                    <p className="text-sm">মমতাময় পরিচর্যা ও কাউন্সেলিং</p>
                  </div>
                  <div className="p-4 bg-background rounded text-center">
                    <div className="text-3xl mb-2">🎓</div>
                    <h4 className="font-semibold mb-2">ভবিষ্যৎ পরিকল্পনা</h4>
                    <p className="text-sm">উচ্চ শিক্ষা ও কর্মসংস্থানে সহায়তা</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-bengali font-semibold text-lg mb-4 text-center">দান করে সাওয়াবের অংশীদার হন</h3>
                <div className="space-y-3 font-bengali text-center">
                  <p className="leading-relaxed">
                    এতিম শিশুদের লালন-পালন ও শিক্ষা দানে অংশ নিয়ে আল্লাহর সন্তুষ্টি অর্জন করুন
                  </p>
                  <p className="font-semibold text-lg">
                    "আমি ও এতিমের প্রতিপালক জান্নাতে এভাবে থাকব" (বুখারী)
                  </p>
                  <div className="pt-4">
                    <p className="mb-2">যোগাযোগ: <span className="font-semibold">+880 1XXX-XXXXXX</span></p>
                    <p>অথবা সরাসরি মাদ্রাসায় যোগাযোগ করুন</p>
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

export default LillahBoarding;
