import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Users, Award } from "lucide-react";

const HifzDepartment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 font-bengali text-primary">
            হিফজুল কুরআন বিভাগ
          </h1>

          <div className="max-w-6xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">বিভাগ সম্পর্কে</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-bengali leading-relaxed">
                  হিফজুল কুরআন বিভাগ আমাদের মাদ্রাসার সবচেয়ে গুরুত্বপূর্ণ বিভাগ। এই বিভাগে শিক্ষার্থীরা পবিত্র কুরআনুল কারীম সম্পূর্ণ মুখস্থ করার সুযোগ পায়। অভিজ্ঞ শিক্ষক ও আধুনিক পদ্ধতিতে শিক্ষা প্রদান করা হয়।
                </p>
                <p className="font-bengali leading-relaxed">
                  আমাদের হিফজ বিভাগে শিক্ষার্থীদের শুধুমাত্র মুখস্থই নয়, বরং সঠিক তিলাওয়াত, তাজবীদ এবং কুরআনের সাথে আত্মিক সম্পর্ক স্থাপনের শিক্ষা দেওয়া হয়।
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
                    <li>• বয়স: ৮ থেকে ১৫ বছর</li>
                    <li>• নূরানী বা নাযেরা সম্পন্ন</li>
                    <li>• সুস্বাস্থ্যের অধিকারী</li>
                    <li>• মানসিকভাবে প্রস্তুত</li>
                    <li>• অভিভাবকের সম্মতি</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    সময়কাল
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• সাধারণ সময়কাল: ২-৩ বছর</li>
                    <li>• মেধা অনুযায়ী কম-বেশি হতে পারে</li>
                    <li>• দৈনিক ৬-৮ ঘন্টা পাঠ</li>
                    <li>• সাপ্তাহিক মূল্যায়ন</li>
                    <li>• মাসিক সবক পরীক্ষা</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    পাঠ্যক্রম
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• তাজবীদের নিয়ম</li>
                    <li>• সহীহ উচ্চারণ প্রশিক্ষণ</li>
                    <li>• নতুন সবক</li>
                    <li>• দোহরানো (পুনরায় মুখস্থ)</li>
                    <li>• আমুক্তা (সম্পূর্ণ দোহরানো)</li>
                    <li>• মাখারিজ প্রশিক্ষণ</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-bengali flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    বিশেষ সুবিধা
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 font-bengali">
                    <li>• অভিজ্ঞ হাফেজ উস্তাদবৃন্দ</li>
                    <li>• ছোট গ্রুপে পাঠদান</li>
                    <li>• ব্যক্তিগত তত্ত্বাবধান</li>
                    <li>• নিয়মিত মূল্যায়ন</li>
                    <li>• পুরস্কার ও উৎসাহ প্রদান</li>
                    <li>• সম্পূর্ণ আবাসিক ব্যবস্থা</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-bengali font-semibold text-lg mb-4">দৈনিক রুটিন</h3>
                <div className="space-y-3 font-bengali">
                  <div className="flex justify-between p-3 bg-background rounded">
                    <span>ফজর পর - সবক</span>
                    <span className="text-muted-foreground">৬:০০ - ৮:০০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded">
                    <span>সকাল - দোহরানো</span>
                    <span className="text-muted-foreground">৮:৩০ - ১০:৩০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded">
                    <span>বিকাল - নতুন সবক</span>
                    <span className="text-muted-foreground">৪:০০ - ৬:০০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded">
                    <span>মাগরিব পর - সবক</span>
                    <span className="text-muted-foreground">৬:৩০ - ৭:৩০</span>
                  </div>
                  <div className="flex justify-between p-3 bg-background rounded">
                    <span>এশা পর - পুনরায় দোহরানো</span>
                    <span className="text-muted-foreground">৮:৩০ - ৯:৩০</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">সফলতার হার</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">৯৫%</div>
                    <div className="text-sm font-bengali mt-2">সফলতার হার</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">২০০+</div>
                    <div className="text-sm font-bengali mt-2">সফল হাফেজ</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">১৫০+</div>
                    <div className="text-sm font-bengali mt-2">বর্তমান ছাত্র</div>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary">২-৩</div>
                    <div className="text-sm font-bengali mt-2">বছর গড় সময়</div>
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

export default HifzDepartment;
