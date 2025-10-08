import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bengali font-bold text-islamic-dark-green mb-8 text-center">
            সাহায্য ও সহায়তা
          </h1>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-bengali text-2xl text-islamic-dark-green">
                প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-bengali text-left">
                    ভর্তির জন্য কী কী কাগজপত্র প্রয়োজন?
                  </AccordionTrigger>
                  <AccordionContent className="font-bengali text-gray-700">
                    জন্ম সনদ, পূর্ববর্তী প্রতিষ্ঠানের সনদপত্র, অভিভাবকের জাতীয় পরিচয়পত্র, 
                    পাসপোর্ট সাইজের ছবি এবং স্থানীয় চেয়ারম্যান/মেম্বারের প্রত্যয়নপত্র প্রয়োজন।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-bengali text-left">
                    ভর্তি পরীক্ষা কখন অনুষ্ঠিত হয়?
                  </AccordionTrigger>
                  <AccordionContent className="font-bengali text-gray-700">
                    সাধারণত প্রতি বছর রমজান মাসের পর শাওয়াল মাসে ভর্তি পরীক্ষা অনুষ্ঠিত হয়। 
                    নির্দিষ্ট তারিখ আমাদের ওয়েবসাইট এবং নোটিশ বোর্ডে প্রকাশ করা হয়।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-bengali text-left">
                    লিল্লাহ বোডিং কী এবং কীভাবে আবেদন করবো?
                  </AccordionTrigger>
                  <AccordionContent className="font-bengali text-gray-700">
                    লিল্লাহ বোডিং হল এতিম ও অসহায় ছাত্রদের জন্য সম্পূর্ণ বিনামূল্যে শিক্ষা ও আবাসন সুবিধা। 
                    আবেদনের জন্য অভিভাবকের আর্থিক অবস্থার প্রমাণপত্র এবং সংশ্লিষ্ট কর্তৃপক্ষের সুপারিশপত্র প্রয়োজন।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-bengali text-left">
                    মাসিক খরচ কত?
                  </AccordionTrigger>
                  <AccordionContent className="font-bengali text-gray-700">
                    মাসিক খরচ বিভাগ এবং সুবিধা অনুযায়ী ভিন্ন হয়। বিস্তারিত জানতে আবাসন চার্জ পাতা দেখুন 
                    বা সরাসরি প্রশাসনের সাথে যোগাযোগ করুন।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="font-bengali text-left">
                    হিফজ বিভাগে ভর্তির বয়স সীমা কত?
                  </AccordionTrigger>
                  <AccordionContent className="font-bengali text-gray-700">
                    সাধারণত ৭ থেকে ১৫ বছর বয়সী ছাত্ররা হিফজ বিভাগে ভর্তি হতে পারে। 
                    তবে বিশেষ ক্ষেত্রে বয়স সীমা শিথিল করা যেতে পারে।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="font-bengali text-left">
                    ছাত্রদের বাড়ি যাওয়ার নিয়ম কী?
                  </AccordionTrigger>
                  <AccordionContent className="font-bengali text-gray-700">
                    মাসিক নির্ধারিত ছুটির দিনে অভিভাবকের অনুমতি নিয়ে বাড়ি যাওয়া যায়। 
                    দীর্ঘ ছুটির জন্য আগে থেকে আবেদন করতে হবে এবং প্রশাসনের অনুমতি নিতে হবে।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="font-bengali text-left">
                    চিকিৎসা সুবিধা কেমন?
                  </AccordionTrigger>
                  <AccordionContent className="font-bengali text-gray-700">
                    মাদ্রাসায় প্রাথমিক চিকিৎসা সুবিধা রয়েছে। গুরুতর অসুস্থতার ক্ষেত্রে নিকটস্থ 
                    হাসপাতালে নেওয়া হয় এবং অভিভাবককে অবহিত করা হয়।
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="font-bengali text-left">
                    দান করার পদ্ধতি কী?
                  </AccordionTrigger>
                  <AccordionContent className="font-bengali text-gray-700">
                    আপনি ব্যাংক ট্রান্সফার, বিকাশ, নগদ বা সরাসরি অফিসে এসে দান করতে পারেন। 
                    বিস্তারিত তথ্যের জন্য "দান করুন" পাতা দেখুন বা আমাদের সাথে যোগাযোগ করুন।
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-bengali text-2xl text-islamic-dark-green">
                যোগাযোগের তথ্য
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-islamic-light-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-islamic-dark-green" />
                  </div>
                  <div>
                    <h3 className="font-bengali font-semibold text-lg mb-2">ফোন</h3>
                    <p className="font-bengali text-gray-700">+880 1XXX-XXXXXX</p>
                    <p className="font-bengali text-gray-700">+880 1XXX-XXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-islamic-light-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-islamic-dark-green" />
                  </div>
                  <div>
                    <h3 className="font-bengali font-semibold text-lg mb-2">ইমেইল</h3>
                    <p className="text-gray-700 break-all">info@talimulinsanmadrasah.com</p>
                    <p className="text-gray-700">admin@talimulinsanmadrasah.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-islamic-light-green rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-islamic-dark-green" />
                  </div>
                  <div>
                    <h3 className="font-bengali font-semibold text-lg mb-2">ঠিকানা</h3>
                    <p className="font-bengali text-gray-700">
                      তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা<br />
                      ও লিল্লাহ বোডিং<br />
                      বাংলাদেশ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-islamic-light-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-islamic-dark-green" />
                  </div>
                  <div>
                    <h3 className="font-bengali font-semibold text-lg mb-2">অফিস সময়</h3>
                    <p className="font-bengali text-gray-700">শনিবার - বৃহস্পতিবার</p>
                    <p className="font-bengali text-gray-700">সকাল ৯:০০ - বিকাল ৫:০০</p>
                    <p className="font-bengali text-sm text-gray-600 mt-2">শুক্রবার বন্ধ</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-bengali text-2xl text-islamic-dark-green">
                প্রয়োজনীয় লিংক
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/admission-instructions" className="p-4 border border-islamic-green rounded-lg hover:bg-islamic-light-green/20 transition-smooth">
                  <h4 className="font-bengali font-semibold text-lg text-islamic-dark-green mb-1">
                    ভর্তি নির্দেশনা
                  </h4>
                  <p className="font-bengali text-sm text-gray-600">
                    ভর্তি প্রক্রিয়া সম্পর্কে বিস্তারিত জানুন
                  </p>
                </a>

                <a href="/admission-form" className="p-4 border border-islamic-green rounded-lg hover:bg-islamic-light-green/20 transition-smooth">
                  <h4 className="font-bengali font-semibold text-lg text-islamic-dark-green mb-1">
                    ভর্তি ফরম
                  </h4>
                  <p className="font-bengali text-sm text-gray-600">
                    অনলাইনে ভর্তি ফরম পূরণ করুন
                  </p>
                </a>

                <a href="/accommodation-charges" className="p-4 border border-islamic-green rounded-lg hover:bg-islamic-light-green/20 transition-smooth">
                  <h4 className="font-bengali font-semibold text-lg text-islamic-dark-green mb-1">
                    আবাসন চার্জ
                  </h4>
                  <p className="font-bengali text-sm text-gray-600">
                    খরচ সম্পর্কে বিস্তারিত দেখুন
                  </p>
                </a>

                <a href="/contact" className="p-4 border border-islamic-green rounded-lg hover:bg-islamic-light-green/20 transition-smooth">
                  <h4 className="font-bengali font-semibold text-lg text-islamic-dark-green mb-1">
                    যোগাযোগ করুন
                  </h4>
                  <p className="font-bengali text-sm text-gray-600">
                    সরাসরি আমাদের সাথে যোগাযোগ করুন
                  </p>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 p-6 bg-islamic-light-green/20 rounded-lg border border-islamic-green text-center">
            <h3 className="font-bengali font-semibold text-xl text-islamic-dark-green mb-3">
              আরও সাহায্য প্রয়োজন?
            </h3>
            <p className="font-bengali text-gray-700 mb-4">
              আমরা সর্বদা আপনাকে সাহায্য করতে প্রস্তুত। অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-islamic-green text-white px-8 py-3 rounded-lg font-bengali font-semibold hover:bg-islamic-dark-green transition-smooth"
            >
              যোগাযোগ করুন
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Help;
