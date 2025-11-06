import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AccommodationCharges = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">رسوم الإقامة</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              আবাসন চার্জ
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Accommodation Charges
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">মাসিক আবাসন ফি</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-bengali font-semibold">আবাসন ফি:</span>
                      <span className="text-xl font-bold text-primary">২,০০০ টাকা/মাস</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-bengali font-semibold">খাবার খরচ:</span>
                      <span className="text-xl font-bold text-primary">৩,০০০ টাকা/মাস</span>
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <div className="flex justify-between items-center">
                      <span className="font-bengali font-semibold text-lg">মোট মাসিক:</span>
                      <span className="text-2xl font-bold text-primary">৫,০০০ টাকা/মাস</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">অতিরিক্ত ফি (বার্ষিক)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-bengali">
                  <div className="flex justify-between p-3 border-b">
                    <span>ভর্তি ফি (একবার):</span>
                    <span className="font-semibold">১,০০০ টাকা</span>
                  </div>
                  <div className="flex justify-between p-3 border-b">
                    <span>উন্নয়ন ফি (বার্ষিক):</span>
                    <span className="font-semibold">৫০০ টাকা</span>
                  </div>
                  <div className="flex justify-between p-3 border-b">
                    <span>পরীক্ষা ফি (বার্ষিক):</span>
                    <span className="font-semibold">৩০০ টাকা</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary">
              <CardHeader>
                <CardTitle className="font-bengali text-primary">বিশেষ সুবিধা</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-bengali">
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p><span className="font-semibold">এতিম শিক্ষার্থী:</span> সম্পূর্ণ বিনামূল্যে (লিল্লাহ বোডিং)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p><span className="font-semibold">দুস্থ পরিবার:</span> বিশেষ ছাড় প্রযোজ্য</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p><span className="font-semibold">মেধাবী শিক্ষার্থী:</span> বৃত্তির ব্যবস্থা আছে</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <p><span className="font-semibold">একাধিক ভাই:</span> দ্বিতীয় সন্তান থেকে ছাড় পাবেন</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="font-bengali text-center text-sm text-muted-foreground">
                  * ফি পরিবর্তনযোগ্য। সর্বশেষ আপডেটের জন্য প্রশাসনের সাথে যোগাযোগ করুন।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccommodationCharges;
