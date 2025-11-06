import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-600 via-neutral-500 to-gray-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">الشروط والأحكام</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              শর্তবলী
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Terms & Conditions
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ১. সাধারণ শর্তাবলী
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>এই ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের সকল শর্তাবলী মেনে নিতে সম্মত হচ্ছেন।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ওয়েবসাইটে প্রদত্ত সকল তথ্য সঠিক ও হালনাগাদ রাখার চেষ্টা করা হয়।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ওয়েবসাইটের কোনো অংশ অনুলিপি বা বিতরণ করার আগে অবশ্যই অনুমতি নিতে হবে।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ২. ভর্তি সংক্রান্ত শর্তাবলী
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ভর্তি পরীক্ষায় উত্তীর্ণ হওয়া ছাত্রদের অগ্রাধিকার দেওয়া হবে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>সকল প্রয়োজনীয় কাগজপত্র সঠিক ও সম্পূর্ণ হতে হবে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ভর্তি বাতিলের ক্ষেত্রে প্রতিষ্ঠানের সিদ্ধান্ত চূড়ান্ত বলে গণ্য হবে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ভর্তির পর নিয়মিত উপস্থিতি ও পড়াশোনা বাধ্যতামূলক।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ৩. ফি এবং অর্থ প্রদান
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>সকল ফি নির্ধারিত সময়ের মধ্যে পরিশোধ করতে হবে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>বিলম্বে পরিশোধের ক্ষেত্রে অতিরিক্ত চার্জ প্রযোজ্য হতে পারে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>লিল্লাহ বোডিং ছাত্রদের জন্য বিশেষ ছাড় প্রযোজ্য।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>পরিশোধিত ফি কোনো অবস্থাতেই ফেরত দেওয়া হবে না।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ৪. শৃঙ্খলা ও আচরণ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>সকল ছাত্রকে মাদ্রাসার নিয়ম-কানুন মেনে চলতে হবে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>শিক্ষক ও কর্মচারীদের সাথে শ্রদ্ধাপূর্ণ আচরণ করতে হবে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>নিয়ম ভঙ্গের ক্ষেত্রে শাস্তিমূলক ব্যবস্থা নেওয়া হবে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>গুরুতর অসদাচরণের ক্ষেত্রে বহিষ্কার করা হতে পারে।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-bengali text-xl text-islamic-dark-green">
                ৫. দায় পরিহার
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-bengali text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ব্যক্তিগত জিনিসপত্র হারানো বা ক্ষতিগ্রস্ত হলে মাদ্রাসা দায়ী থাকবে না।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>দুর্ঘটনার ক্ষেত্রে প্রাথমিক চিকিৎসা প্রদান করা হবে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>প্রাকৃতিক দুর্যোগ বা অপ্রত্যাশিত পরিস্থিতিতে ক্লাস বন্ধ থাকতে পারে।</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ওয়েবসাইটের তথ্য ব্যবহার করে সৃষ্ট কোনো ক্ষতির জন্য আমরা দায়ী নই।</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-islamic-light-green/20 rounded-lg border border-islamic-green">
            <p className="font-bengali text-center text-gray-700">
              এই শর্তাবলী সম্পর্কে কোনো প্রশ্ন থাকলে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
