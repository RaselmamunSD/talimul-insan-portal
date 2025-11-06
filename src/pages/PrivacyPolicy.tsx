import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-600 via-gray-500 to-zinc-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">سياسة الخصوصية</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              গোপনীয়তা নীতি
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Privacy Policy
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ১. তথ্য সংগ্রহ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আমরা শুধুমাত্র প্রয়োজনীয় ব্যক্তিগত তথ্য সংগ্রহ করি যা শিক্ষা প্রতিষ্ঠান পরিচালনার জন্য প্রয়োজন।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ভর্তির সময় ছাত্র ও অভিভাবকদের নাম, ঠিকানা, ফোন নম্বর এবং জন্ম তারিখ সংগ্রহ করা হয়।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>শিক্ষাগত যোগ্যতা এবং পূর্ববর্তী প্রতিষ্ঠানের তথ্য সংগ্রহ করা হয়।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ওয়েবসাইট ব্যবহারের সময় কুকিজ এবং লগ তথ্য স্বয়ংক্রিয়ভাবে সংরক্ষিত হতে পারে।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ২. তথ্যের ব্যবহার
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ছাত্রদের নথি সংরক্ষণ এবং একাডেমিক রেকর্ড রক্ষণাবেক্ষণের জন্য তথ্য ব্যবহার করা হয়।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>অভিভাবকদের সাথে যোগাযোগ এবং জরুরি পরিস্থিতিতে সংযোগ স্থাপনের জন্য।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>প্রতিষ্ঠানের কার্যক্রম, পরীক্ষা এবং অন্যান্য গুরুত্বপূর্ণ বিজ্ঞপ্তি প্রেরণের জন্য।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>সার্টিফিকেট এবং প্রশংসাপত্র প্রস্তুত করার জন্য।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ৩. তথ্য সুরক্ষা
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখার জন্য আমরা প্রতিশ্রুতিবদ্ধ।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>অননুমোদিত অ্যাক্সেস রোধে প্রয়োজনীয় নিরাপত্তা ব্যবস্থা গ্রহণ করা হয়েছে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>শুধুমাত্র অনুমোদিত কর্মকর্তারা ছাত্রদের তথ্য দেখতে পারেন।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>নিয়মিতভাবে আমাদের নিরাপত্তা ব্যবস্থা পর্যালোচনা ও হালনাগাদ করা হয়।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ৪. তথ্য শেয়ারিং
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আপনার অনুমতি ছাড়া আমরা তৃতীয় পক্ষের সাথে আপনার তথ্য শেয়ার করি না।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আইনি প্রয়োজনে সরকারি সংস্থার সাথে তথ্য শেয়ার করতে হতে পারে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>শিক্ষা বোর্ড এবং সংশ্লিষ্ট কর্তৃপক্ষের সাথে একাডেমিক তথ্য শেয়ার করা হয়।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>বাণিজ্যিক উদ্দেশ্যে কখনোই ছাত্রদের তথ্য বিক্রয় করা হয় না।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ৫. কুকিজ নীতি
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ওয়েবসাইটের অভিজ্ঞতা উন্নত করতে আমরা কুকিজ ব্যবহার করি।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আপনি যেকোনো সময় আপনার ব্রাউজার সেটিংস থেকে কুকিজ অক্ষম করতে পারেন।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>কুকিজ আপনার ব্রাউজিং পছন্দ মনে রাখতে সাহায্য করে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আমরা কোনো সংবেদনশীল তথ্য কুকিজে সংরক্ষণ করি না।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ৬. আপনার অধিকার
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আপনি আপনার ব্যক্তিগত তথ্য দেখার এবং সংশোধন করার অনুরোধ করতে পারেন।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আপনার তথ্য মুছে ফেলার জন্য অনুরোধ করার অধিকার আছে (নিয়ম সাপেক্ষে)।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>মার্কেটিং যোগাযোগ থেকে বেরিয়ে আসার অধিকার আছে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>গোপনীয়তা নীতি সম্পর্কে অভিযোগ জানানোর সুযোগ রয়েছে।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-islamic-light-green/20 rounded-lg border border-islamic-green">
            <p className="font-bengali text-center text-gray-700 mb-2">
              এই গোপনীয়তা নীতি সর্বশেষ আপডেট করা হয়েছে: ২০২৫
            </p>
            <p className="font-bengali text-center text-gray-700">
              গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন থাকলে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
