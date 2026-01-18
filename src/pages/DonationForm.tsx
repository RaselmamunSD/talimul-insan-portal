import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Building2, Phone, Mail, CreditCard, Heart, Construction, Church, HandCoins, UtensilsCrossed, Users, Check } from "lucide-react";

// Payment method logos
import bkashLogo from "@/assets/bkash-logo.png";
import nagadLogo from "@/assets/nagad-logo.png";
import rocketLogo from "@/assets/rocket-logo.png";

const categoryNames: Record<string, string> = {
  "orphan-students": "এতিম ও অসহায় ছাত্রদের সাহায্য",
  "madrasah-development": "মাদ্রাসার উন্নয়ন",
  "new-building": "মাদ্রাসার নতুন নির্মাণাধীন ভবনের জন্য",
  "new-mosque": "নতুন মসজিদ নির্মাণাধীন ভবনের জন্য",
  "zakat-fund": "যাকাত ফান্ড",
  "ramadan-iftar": "রমাদান ইফতার ও সেহেরী ফান্ড",
  "annual-mahfil": "বাৎসরিক মাহফিল"
};

const categoryDetails: Record<string, { description: string; importance: string; impact: string; icon: any; expenses: { label: string; value: string }[] }> = {
  "orphan-students": {
    description: "এতিম ও অসহায় ছাত্রদের শিক্ষা ও জীবনযাত্রার ব্যয় নির্বাহে সহায়তা করুন। আল্লাহ তা'আলা এতিমদের প্রতি সদাচরণ করার বিশেষ গুরুত্ব দিয়েছেন।",
    importance: "রাসূলুল্লাহ (সা.) বলেছেন, 'আমি এবং এতিমের তত্ত্বাবধায়ক জান্নাতে এভাবে থাকব' এবং তিনি তর্জনী ও মধ্যমা আঙুল একসাথে রেখে ইঙ্গিত করলেন। (বুখারী)",
    impact: "আপনার দান একজন এতিম শিশুর জীবন পরিবর্তন করতে পারে, তাদের শিক্ষা, খাবার এবং আবাসনের নিশ্চয়তা প্রদান করবে।",
    icon: Heart,
    expenses: [
      { label: "শিক্ষা উপকরণ", value: "বই, খাতা, কলম ইত্যাদি" },
      { label: "খাবার খরচ", value: "মাসিক খাবার ও পুষ্টি" },
      { label: "পোশাক", value: "শীতবস্ত্র ও জুতা" },
      { label: "চিকিৎসা", value: "স্বাস্থ্য সেবা ও ওষুধ" }
    ]
  },
  "madrasah-development": {
    description: "মাদ্রাসার সার্বিক উন্নয়ন, রক্ষণাবেক্ষণ এবং শিক্ষার মান উন্নয়নে অবদান রাখুন।",
    importance: "ইলম অর্জনের স্থান তৈরি ও রক্ষণাবেক্ষণ করা একটি সাদাকায়ে জারিয়া। যতদিন এই প্রতিষ্ঠান থেকে মানুষ ইলম অর্জন করবে, আপনি তার সওয়াব পেতে থাকবেন।",
    impact: "আপনার অবদান শত শত ছাত্রের জন্য উন্নত শিক্ষার পরিবেশ নিশ্চিত করবে এবং মানসম্মত ইসলামী শিক্ষা প্রদানে সহায়তা করবে।",
    icon: Building2,
    expenses: [
      { label: "বিদ্যুৎ বিল", value: "মাসিক বিদ্যুৎ খরচ" },
      { label: "পানি ও গ্যাস", value: "মাসিক ইউটিলিটি" },
      { label: "রক্ষণাবেক্ষণ", value: "ভবন মেরামত ও পরিষ্কার" },
      { label: "আসবাবপত্র", value: "ডেস্ক, চেয়ার ইত্যাদি" }
    ]
  },
  "new-building": {
    description: "মাদ্রাসার নতুন শিক্ষা ভবন নির্মাণে আপনার অবদান রাখুন এবং ভবিষ্যৎ প্রজন্মের শিক্ষার জন্য একটি আধুনিক স্থাপনা তৈরিতে অংশীদার হন।",
    importance: "একটি শিক্ষা প্রতিষ্ঠান নির্মাণ করা সবচেয়ে বড় সাদাকায়ে জারিয়াগুলোর মধ্যে একটি। যতদিন এই ভবনে শিক্ষা কার্যক্রম চলবে, আপনি সওয়াব পেতে থাকবেন।",
    impact: "নতুন ভবন শত শত ছাত্রকে আরামদায়ক ও আধুনিক পরিবেশে পড়াশোনার সুযোগ দেবে।",
    icon: Construction,
    expenses: [
      { label: "ভিত্তি নির্মাণ", value: "ফাউন্ডেশন ও পিলার" },
      { label: "ইট ও সিমেন্ট", value: "নির্মাণ সামগ্রী" },
      { label: "রড ও টাইলস", value: "কাঠামো ও ফিনিশিং" },
      { label: "শ্রমিক বেতন", value: "দৈনিক মজুরি" }
    ]
  },
  "new-mosque": {
    description: "নতুন মসজিদ নির্মাণে সাদাকায়ে জারিয়ায় অংশীদার হোন এবং আল্লাহর ঘর তৈরিতে অবদান রাখুন।",
    importance: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি আল্লাহর সন্তুষ্টির জন্য একটি মসজিদ নির্মাণ করবে, আল্লাহ তার জন্য জান্নাতে একটি ঘর নির্মাণ করবেন।' (বুখারী ও মুসলিম)",
    impact: "আপনার দান হাজারো মুসল্লির নামাজ আদায়ের ব্যবস্থা করবে এবং এলাকায় ইসলামী শিক্ষা ও সংস্কৃতির কেন্দ্র হয়ে উঠবে।",
    icon: Church,
    expenses: [
      { label: "মিম্বার ও মিহরাব", value: "ডিজাইন ও নির্মাণ" },
      { label: "কার্পেট", value: "জায়নামাজ ও মেঝে" },
      { label: "সাউন্ড সিস্টেম", value: "মাইক ও স্পিকার" },
      { label: "এসি ও ফ্যান", value: "শীতাতপ নিয়ন্ত্রণ" }
    ]
  },
  "zakat-fund": {
    description: "আপনার যাকাত দিয়ে দরিদ্র ও অসহায় ছাত্রদের শিক্ষা ও জীবনযাত্রায় সাহায্য করুন।",
    importance: "যাকাত ইসলামের পাঁচটি স্তম্ভের একটি। সঠিক খাতে যাকাত প্রদান করা প্রতিটি মুসলমানের দায়িত্ব।",
    impact: "আপনার যাকাত দরিদ্র ছাত্রদের শিক্ষা উপকরণ, খাবার এবং অন্যান্য প্রয়োজনীয় সামগ্রী সরবরাহ করবে।",
    icon: HandCoins,
    expenses: [
      { label: "দরিদ্র ছাত্র সহায়তা", value: "শিক্ষা ও খাবার" },
      { label: "ঋণগ্রস্ত সাহায্য", value: "ঋণ পরিশোধ" },
      { label: "মুসাফির সহায়তা", value: "যাত্রী সাহায্য" },
      { label: "জরুরি সাহায্য", value: "চিকিৎসা ও দুর্যোগ" }
    ]
  },
  "ramadan-iftar": {
    description: "রমাদান মাসে ছাত্রদের ইফতার ও সেহেরীর ব্যবস্থায় অংশ নিন এবং রোজাদারদের ইফতার করানোর সওয়াব লাভ করুন।",
    importance: "রাসূলুল্লাহ (সা.) বলেছেন, 'যে ব্যক্তি কোনো রোজাদারকে ইফতার করাবে, সে তার সমান সওয়াব পাবে।' (তিরমিযী)",
    impact: "আপনার দান শত শত ছাত্রকে মাহে রমাদানে পুষ্টিকর ইফতার ও সেহেরী খাওয়ার সুযোগ দেবে।",
    icon: UtensilsCrossed,
    expenses: [
      { label: "খেজুর ও পানি", value: "ইফতার শুরু" },
      { label: "ফল ও জুস", value: "তাজা ফলমূল" },
      { label: "ভাত ও তরকারি", value: "সেহেরী খাবার" },
      { label: "মিষ্টি", value: "ঈদ উপলক্ষে" }
    ]
  },
  "annual-mahfil": {
    description: "বার্ষিক ওয়াজ মাহফিল আয়োজনে সহযোগিতা করুন এবং ইসলামী শিক্ষা প্রচারে অংশীদার হোন।",
    importance: "দ্বীনি মাহফিল আয়োজন করা এবং মানুষকে ইসলামের পথে আহ্বান করা একটি মহৎ কাজ। এতে অসংখ্য মানুষ উপকৃত হয় এবং ইসলামের বাণী ছড়িয়ে পড়ে।",
    impact: "আপনার অবদান হাজারো মানুষের কাছে ইসলামী জ্ঞান পৌঁছে দেবে এবং ধর্মীয় চেতনা জাগ্রত করবে।",
    icon: Users,
    expenses: [
      { label: "প্যান্ডেল ও স্টেজ", value: "মঞ্চ সজ্জা" },
      { label: "সাউন্ড সিস্টেম", value: "মাইক ও জেনারেটর" },
      { label: "আলেম সম্মানী", value: "বক্তাদের সম্মানী" },
      { label: "খাবার ব্যবস্থা", value: "অতিথি আপ্যায়ন" }
    ]
  }
};

const DonationForm = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category") || "";
  const categoryName = categoryNames[categoryId] || "সাধারণ দান";
  const categoryInfo = categoryDetails[categoryId] || {
    description: "আপনার দান মাদ্রাসার উন্নয়নে ব্যবহৃত হবে।",
    importance: "আল্লাহর পথে দান করা একটি মহৎ কাজ।",
    impact: "আপনার অবদান শিক্ষার মান উন্নয়নে সাহায্য করবে।",
    icon: Building2,
    expenses: [
      { label: "সাধারণ খরচ", value: "মাদ্রাসার উন্নয়ন" }
    ]
  };
  
  const IconComponent = categoryInfo.icon;
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ধন্যবাদ",
      description: "আপনার দানের জন্য আল্লাহ আপনাকে উত্তম প্রতিদান দিন।",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-islamic-teal via-islamic-green to-islamic-gold py-16 overflow-hidden">
        {/* Islamic Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
            backgroundSize: '300px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-4 inline-flex items-center gap-3 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <IconComponent className="w-6 h-6" />
              <p className="font-bengali text-lg">صَدَقَةٌ جَارِيَةٌ</p>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold font-bengali mb-4 drop-shadow-lg">
              {categoryName}
            </h1>
            
            <p className="font-bengali text-lg md:text-xl opacity-90 drop-shadow-md max-w-2xl mx-auto">
              আপনার দান একটি সাদাকায়ে জারিয়া
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Details & Expense Categories */}
          <div className="space-y-6">
            {/* Category Description Card */}
            <Card className="border-islamic-green/20">
              <CardHeader>
                <CardTitle className="font-bengali text-xl flex items-center gap-2">
                  <IconComponent className="w-5 h-5 text-islamic-green" />
                  বিস্তারিত তথ্য
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-bengali text-muted-foreground leading-relaxed">
                  {categoryInfo.description}
                </p>
                <div className="p-4 bg-islamic-green/5 rounded-lg border border-islamic-green/10">
                  <p className="font-bengali text-sm text-foreground font-medium mb-2">গুরুত্ব:</p>
                  <p className="font-bengali text-sm text-muted-foreground leading-relaxed">
                    {categoryInfo.importance}
                  </p>
                </div>
                <div className="p-4 bg-islamic-gold/5 rounded-lg border border-islamic-gold/10">
                  <p className="font-bengali text-sm text-foreground font-medium mb-2">প্রভাব:</p>
                  <p className="font-bengali text-sm text-muted-foreground leading-relaxed">
                    {categoryInfo.impact}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quran Verse Card */}
            <Card className="bg-gradient-to-br from-islamic-green/5 to-islamic-gold/5 border-islamic-green/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="font-arabic text-2xl mb-3 leading-relaxed">
                    مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا
                  </p>
                  <p className="font-bengali text-base text-muted-foreground">
                    "কে আছ যে আল্লাহকে উত্তম ঋণ দেবে?"
                  </p>
                  <p className="font-bengali text-sm text-muted-foreground mt-2">
                    (সূরা আল-বাকারা: ২৪৫)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Expense Categories Card - Below the details */}
            <Card className="border-islamic-green/20 bg-gradient-to-br from-islamic-green/5 to-transparent">
              <CardHeader>
                <CardTitle className="font-bengali text-2xl flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-islamic-green" />
                  দানের ব্যয়ের খাত
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categoryInfo.expenses?.map((expense, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-4 bg-white rounded-xl border border-islamic-green/10 shadow-sm hover:shadow-md hover:border-islamic-green/30 transition-all duration-300"
                  >
                    <span className="font-bengali font-medium text-foreground">{expense.label}:</span>
                    <span className="font-bengali text-muted-foreground">{expense.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Donation Form */}
          <div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-bengali text-2xl">দানের তথ্য</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="amount" className="font-bengali text-base">
                    দানের পরিমাণ (টাকা) *
                  </Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    placeholder="১০০০" 
                    required 
                    className="text-lg h-12"
                  />
                </div>

                <div>
                  <Label htmlFor="name" className="font-bengali text-base">
                    নাম *
                  </Label>
                  <Input 
                    id="name" 
                    required 
                    className="font-bengali text-lg h-12" 
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="font-bengali text-base">
                      <Phone className="inline w-4 h-4 mr-1" />
                      ফোন নম্বর *
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      className="text-lg h-12"
                      placeholder="০১৭xxxxxxxx"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-bengali text-base">
                      <Mail className="inline w-4 h-4 mr-1" />
                      ই-মেইল
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      className="text-lg h-12"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label className="font-bengali text-lg mb-4 block">
                    পেমেন্ট মেথড বেছে নিন *
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {/* bKash */}
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bkash")}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === "bkash"
                          ? "border-islamic-green bg-islamic-green/5 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      {paymentMethod === "bkash" && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-islamic-green rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <img src={bkashLogo} alt="বিকাশ" className="h-12 w-auto object-contain" />
                    </button>

                    {/* Nagad */}
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("nagad")}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === "nagad"
                          ? "border-islamic-green bg-islamic-green/5 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      {paymentMethod === "nagad" && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-islamic-green rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <img src={nagadLogo} alt="নগদ" className="h-12 w-auto object-contain" />
                    </button>

                    {/* Rocket */}
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("rocket")}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                        paymentMethod === "rocket"
                          ? "border-islamic-green bg-islamic-green/5 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
                      }`}
                    >
                      {paymentMethod === "rocket" && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-islamic-green rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <img src={rocketLogo} alt="রকেট" className="h-12 w-auto object-contain" />
                    </button>
                  </div>

                  {/* Bank Transfer Option */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bank")}
                    className={`mt-3 w-full relative flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 ${
                      paymentMethod === "bank"
                        ? "border-islamic-green bg-islamic-green/5 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"
                    }`}
                  >
                    {paymentMethod === "bank" && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-islamic-green rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <span className="font-bengali font-medium">ব্যাংক ট্রান্সফার</span>
                  </button>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-islamic-green hover:bg-islamic-green/90 font-bengali text-xl py-7"
                >
                  পরবর্তী ধাপ
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Bank Information Card */}
          <Card className="bg-gradient-to-br from-islamic-green/5 to-islamic-green/10 border-islamic-green/20">
            <CardHeader>
              <CardTitle className="font-bengali text-2xl flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                ব্যাংক অ্যাকাউন্টের তথ্য
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 font-bengali">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold">ব্যাংকের নাম:</span>
                  <span>ইসলামী ব্যাংক বাংলাদেশ লিমিটেড</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold">শাখা:</span>
                  <span>লালমনিরহাট</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold">হিসাব নম্বর:</span>
                  <span className="text-lg font-mono">১২৩৪৫৬৭৮৯০</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-semibold">হিসাবের নাম:</span>
                  <span>তা'লিমুল ইন্সান মাদ্রাসা</span>
                </div>
                
                {paymentMethod === "bkash" && (
                  <div className="mt-4 p-4 bg-pink-50 border border-pink-200 rounded-lg">
                    <p className="font-semibold text-pink-800">বিকাশ নম্বর:</p>
                    <p className="text-2xl font-mono text-pink-900">০১৭xxxxxxxx</p>
                    <p className="text-sm text-pink-700 mt-2">পার্সোনাল নম্বরে সেন্ড মানি করুন</p>
                  </div>
                )}
                
                {paymentMethod === "nagad" && (
                  <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <p className="font-semibold text-orange-800">নগদ নম্বর:</p>
                    <p className="text-2xl font-mono text-orange-900">০১৭xxxxxxxx</p>
                    <p className="text-sm text-orange-700 mt-2">পার্সোনাল নম্বরে সেন্ড মানি করুন</p>
                  </div>
                )}
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

export default DonationForm;
