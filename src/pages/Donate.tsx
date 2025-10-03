import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();

  const handleDonate = (e: React.FormEvent) => {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-bengali text-primary mb-4 text-center">
            দান করুন
          </h1>
          <p className="text-center font-bengali text-lg mb-8">
            "যে ব্যক্তি আল্লাহর পথে সুন্দর ঋণ দেয়, আল্লাহ তার জন্য তা বহুগুণ বৃদ্ধি করে দেন।" (সূরা আল-বাকারা: ২৪৫)
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🤲</div>
                <h3 className="font-bengali font-bold text-lg mb-2">যাকাত</h3>
                <p className="font-bengali text-sm">আপনার যাকাত দিয়ে এতিম ও অসহায় ছাত্রদের সাহায্য করুন</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">💝</div>
                <h3 className="font-bengali font-bold text-lg mb-2">সাদাকাহ</h3>
                <p className="font-bengali text-sm">স্বেচ্ছায় দান করে সওয়াব অর্জন করুন</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🕌</div>
                <h3 className="font-bengali font-bold text-lg mb-2">লিল্লাহ</h3>
                <p className="font-bengali text-sm">মাদ্রাসার উন্নয়ন ও রক্ষণাবেক্ষণে সহায়তা করুন</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleDonate} className="space-y-6">
                <div>
                  <Label htmlFor="donationType" className="font-bengali">দানের ধরন *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="zakat">যাকাত</SelectItem>
                      <SelectItem value="sadaqah">সাদাকাহ</SelectItem>
                      <SelectItem value="lillah">লিল্লাহ</SelectItem>
                      <SelectItem value="general">সাধারণ দান</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount" className="font-bengali">দানের পরিমাণ (টাকা) *</Label>
                  <Input id="amount" type="number" placeholder="১০০০" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-bengali">নাম *</Label>
                    <Input id="name" required className="font-bengali" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-bengali">মোবাইল নম্বর *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="font-bengali">ই-মেইল</Label>
                  <Input id="email" type="email" />
                </div>

                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-bengali font-bold mb-2">ব্যাংক তথ্য:</h3>
                  <div className="space-y-1 font-bengali text-sm">
                    <p><strong>ব্যাংক:</strong> ইসলামী ব্যাংক বাংলাদেশ লিমিটেড</p>
                    <p><strong>শাখা:</strong> লালমনিরহাট</p>
                    <p><strong>হিসাব নং:</strong> ১২৩৪৫৬৭৮৯০</p>
                    <p><strong>হিসাবের নাম:</strong> তা'লিমুল ইন্সান মাদ্রাসা</p>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-islamic-green hover:bg-islamic-green/90 font-bengali text-lg py-6">
                  দান করুন
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
