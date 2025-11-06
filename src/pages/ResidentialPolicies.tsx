import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResidentialPolicies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">سياسات السكن</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              আবাসিক নীতিমালা
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Residential Policies
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">সাধারণ নিয়মাবলী</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-bengali">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">১.</span>
                    <span>সকল ছাত্রকে নির্ধারিত সময়ে নামাজ আদায় করতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">২.</span>
                    <span>হলের সকল নিয়ম-কানুন মেনে চলতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">৩.</span>
                    <span>পরিষ্কার-পরিচ্ছন্নতা বজায় রাখতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">৪.</span>
                    <span>নির্ধারিত সময়ে ঘুমাতে এবং ঘুম থেকে উঠতে হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">৫.</span>
                    <span>মোবাইল ফোন ব্যবহার সীমিত এবং নির্ধারিত সময়ে।</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">নিষিদ্ধ কার্যক্রম</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-bengali">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>অনুমতি ছাড়া বাইরে যাওয়া নিষেধ।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>হলে ধূমপান, মাদক ব্যবহার সম্পূর্ণ নিষিদ্ধ।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>অন্যের জিনিস অনুমতি ছাড়া ব্যবহার করা যাবে না।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>ঝগড়া-বিবাদ এবং অশোভন আচরণ নিষিদ্ধ।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold">✗</span>
                    <span>অপ্রয়োজনীয় শব্দ করা যাবে না।</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">ছুটি ও বাড়িতে যাওয়ার নিয়ম</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-bengali">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>মাসে একবার সাপ্তাহিক ছুটিতে বাড়িতে যাওয়া যাবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>জরুরি কারণে অভিভাবকের লিখিত অনুমতি প্রয়োজন।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>রমজান ও ঈদের সময় বিশেষ ছুটি থাকবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>বার্ষিক পরীক্ষার পর দীর্ঘ ছুটি থাকবে।</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">শাস্তিমূলক ব্যবস্থা</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 font-bengali">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>নিয়ম ভঙ্গের ক্ষেত্রে সতর্কতা প্রদান করা হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>বারবার নিয়ম ভঙ্গে অভিভাবককে জানানো হবে।</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">→</span>
                    <span>গুরুতর অপরাধের ক্ষেত্রে হল থেকে বহিষ্কার করা হতে পারে।</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary">
              <CardContent className="p-6">
                <p className="font-bengali text-center leading-relaxed">
                  <span className="font-semibold">মনে রাখবেন:</span> এই নীতিমালা আপনার নিরাপত্তা ও সুশৃঙ্খল পরিবেশ নিশ্চিত করার জন্য প্রণয়ন করা হয়েছে। সবাই মিলে এই নিয়ম মেনে চলে একটি সুন্দর ও পরিচ্ছন্ন পরিবেশ তৈরি করুন।
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

export default ResidentialPolicies;
