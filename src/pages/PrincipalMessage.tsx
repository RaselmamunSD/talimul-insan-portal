import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrincipalMessage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 font-bengali text-primary">
            মুহতামিমের বাণী ও সংক্ষিপ্ত জীবনবৃত্তান্ত
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="bg-muted aspect-square rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">👤</span>
                  </div>
                  <h3 className="text-xl font-bold text-center font-bengali mb-2">
                    আলহাজ্ব মাওলানা [নাম]
                  </h3>
                  <p className="text-center text-muted-foreground font-bengali">
                    মুহতামিম
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali">মুহতামিমের বাণী</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <p className="font-bengali leading-relaxed text-foreground">
                    বিস্মিল্লাহির রাহমানির রাহিম। সকল প্রশংসা মহান আল্লাহ তায়ালার জন্য। দরূদ ও সালাম বর্ষিত হোক প্রিয় নবী হযরত মুহাম্মদ (সা.) এর উপর।
                  </p>
                  <p className="font-bengali leading-relaxed text-foreground mt-4">
                    তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং একটি ইসলামী শিক্ষা প্রতিষ্ঠান যেখানে কুরআন ও হাদিসের শিক্ষা প্রদান করা হয়। আমাদের লক্ষ্য হলো এমন প্রজন্ম তৈরি করা যারা কুরআনের হাফেজ হবে এবং ইসলামী মূল্যবোধে বিশ্বাসী হবে।
                  </p>
                  <p className="font-bengali leading-relaxed text-foreground mt-4">
                    আমরা বিশেষভাবে এতিম ও অসহায় শিশুদের বিনামূল্যে শিক্ষা, থাকা ও খাওয়ার ব্যবস্থা করে থাকি। আল্লাহর রহমতে এই প্রতিষ্ঠান দিন দিন এগিয়ে চলেছে।
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali">সংক্ষিপ্ত জীবনবৃত্তান্ত</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 font-bengali text-foreground">
                    <div>
                      <h4 className="font-semibold text-primary">শিক্ষাগত যোগ্যতা:</h4>
                      <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                        <li>কামিল (মাস্টার্স) - দারুল উলুম দেওবন্দ</li>
                        <li>দাওরায়ে হাদিস - জামেয়া ইসলামিয়া</li>
                        <li>হিফজুল কুরআন সম্পন্ন</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">কর্মজীবন:</h4>
                      <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                        <li>তা'লিমুল ইন্সান মাদ্রাসার প্রতিষ্ঠাতা মুহতামিম</li>
                        <li>বিভিন্ন ইসলামী সংগঠনের সাথে যুক্ত</li>
                        <li>সমাজ সেবায় নিবেদিত প্রাণ</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrincipalMessage;
