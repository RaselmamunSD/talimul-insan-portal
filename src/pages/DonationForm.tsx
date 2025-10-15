import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Building2, Phone, Mail, CreditCard } from "lucide-react";

const categoryNames: Record<string, string> = {
  "orphan-students": "এতিম ও অসহায় ছাত্রদের সাহায্য",
  "madrasah-development": "মাদ্রাসার উন্নয়ন",
  "new-building": "মাদ্রাসার নতুন নির্মাণাধীন ভবনের জন্য",
  "new-mosque": "নতুন মসজিদ নির্মাণাধীন ভবনের জন্য",
  "zakat-fund": "যাকাত ফান্ড",
  "ramadan-iftar": "রমাদান ইফতার ও সেহেরী ফান্ড",
  "annual-mahfil": "বাৎসরিক মাহফিল"
};

const DonationForm = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category") || "";
  const categoryName = categoryNames[categoryId] || "সাধারণ দান";
  
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
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-bengali text-primary mb-2">
              দান ফর্ম
            </h1>
            <p className="font-bengali text-lg text-muted-foreground">
              {categoryName}
            </p>
          </div>

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
                  <Label className="font-bengali text-base mb-3 block">
                    <CreditCard className="inline w-4 h-4 mr-1" />
                    পেমেন্ট মেথড *
                  </Label>
                  <Select required onValueChange={setPaymentMethod}>
                    <SelectTrigger className="text-lg h-12">
                      <SelectValue placeholder="পেমেন্ট মেথড নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="bkash" className="font-bengali text-base">
                        বিকাশ
                      </SelectItem>
                      <SelectItem value="nagad" className="font-bengali text-base">
                        নগদ
                      </SelectItem>
                      <SelectItem value="bank" className="font-bengali text-base">
                        ব্যাংক ট্রান্সফার
                      </SelectItem>
                    </SelectContent>
                  </Select>
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
      </main>
      
      <Footer />
    </div>
  );
};

export default DonationForm;
