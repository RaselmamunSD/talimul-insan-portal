import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DailySchedule = () => {
  const schedule = [
    { time: "৪:৩০ - ৫:০০", activity: "ফজরের নামাজের জন্য উঠা ও প্রস্তুতি" },
    { time: "৫:০০ - ৫:৩০", activity: "ফজরের নামাজ (জামাতে)" },
    { time: "৫:৩০ - ৬:৩০", activity: "সবক মুখস্ত করা" },
    { time: "৬:৩০ - ৭:০০", activity: "নাশতা" },
    { time: "৭:০০ - ১২:০০", activity: "দরসের সময় (ক্লাস)" },
    { time: "১২:০০ - ১২:৩০", activity: "জোহরের নামাজ" },
    { time: "১২:৩০ - ১:৩০", activity: "দুপুরের খাবার" },
    { time: "১:৩০ - ৩:৩০", activity: "বিশ্রাম (কায়লুলা)" },
    { time: "৩:৩০ - ৪:০০", activity: "আসরের নামাজ" },
    { time: "৪:০০ - ৬:০০", activity: "সবক আদায় ও পড়াশুনা" },
    { time: "৬:০০ - ৬:৩০", activity: "মাগরিবের নামাজ" },
    { time: "৬:৩০ - ৭:৩০", activity: "মক্তব ক্লাস / মুতালাআ" },
    { time: "৭:৩০ - ৮:০০", activity: "এশার নামাজ" },
    { time: "৮:০০ - ৯:০০", activity: "রাতের খাবার" },
    { time: "৯:০০ - ১০:০০", activity: "সবক প্রস্তুতি / পড়াশুনা" },
    { time: "১০:০০", activity: "ঘুমানোর সময়" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">الجدول اليومي</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              দৈনিক আবাসিক কার্যসূচি
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Daily Schedule
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali text-center">দৈনিক রুটিন</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth border-l-4 border-primary"
                    >
                      <div className="bg-primary/10 px-4 py-2 rounded font-semibold text-primary min-w-[120px] text-center">
                        {item.time}
                      </div>
                      <div className="font-bengali flex-1">
                        {item.activity}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">সাপ্তাহিক বিশেষ কার্যক্রম</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-bengali">
                  <div className="p-3 border-l-4 border-primary rounded bg-muted/30">
                    <span className="font-semibold text-primary">শুক্রবার:</span> জুমার নামাজ ও সাপ্তাহিক বয়ান
                  </div>
                  <div className="p-3 border-l-4 border-primary rounded bg-muted/30">
                    <span className="font-semibold text-primary">বৃহস্পতিবার:</span> দারসে হাদিস
                  </div>
                  <div className="p-3 border-l-4 border-primary rounded bg-muted/30">
                    <span className="font-semibold text-primary">সোমবার:</span> তালিম ও মশওয়ারা
                  </div>
                  <div className="p-3 border-l-4 border-primary rounded bg-muted/30">
                    <span className="font-semibold text-primary">শনিবার:</span> খেলাধুলা ও শরীরচর্চা
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary">
              <CardContent className="p-6">
                <h3 className="font-bengali font-semibold text-center mb-3 text-primary">বিশেষ দ্রষ্টব্য</h3>
                <ul className="space-y-2 font-bengali text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>সকল ছাত্রকে নির্ধারিত সময় মেনে চলতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>নামাজ জামাতে আদায় করা বাধ্যতামূলক।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>রুটিনে পরিবর্তন হলে পূর্বে জানানো হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>অসুস্থতার ক্ষেত্রে তাৎক্ষণিক জানাতে হবে।</span>
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

export default DailySchedule;
