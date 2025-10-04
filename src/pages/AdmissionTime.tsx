import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const AdmissionTime = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 font-bengali text-primary">
            ভর্তির সময়
          </h1>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-primary/5 border-primary">
              <CardContent className="p-8 text-center">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold font-bengali mb-2">২০২৫ শিক্ষাবর্ষ</h2>
                <p className="text-lg font-bengali">ভর্তি চলছে</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">ভর্তির সময়সূচি</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h3 className="font-semibold font-bengali mb-2">আবেদন শুরু:</h3>
                    <p className="font-bengali">০১ জানুয়ারি, ২০২৫</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h3 className="font-semibold font-bengali mb-2">আবেদনের শেষ তারিখ:</h3>
                    <p className="font-bengali">৩১ মার্চ, ২০২৫</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h3 className="font-semibold font-bengali mb-2">ভর্তি পরীক্ষা:</h3>
                    <p className="font-bengali">০৫ এপ্রিল - ১০ এপ্রিল, ২০২৫</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h3 className="font-semibold font-bengali mb-2">ফলাফল প্রকাশ:</h3>
                    <p className="font-bengali">১৫ এপ্রিল, ২০২৫</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary rounded bg-muted/30">
                    <h3 className="font-semibold font-bengali mb-2">ক্লাস শুরু:</h3>
                    <p className="font-bengali">২৫ এপ্রিল, ২০২৫</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">বিভাগ অনুযায়ী ভর্তি</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-bengali">
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold text-primary mb-1">নূরানী বিভাগ (৫-৮ বছর)</h4>
                    <p className="text-sm">সারা বছর ভর্তি চলে</p>
                  </div>
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold text-primary mb-1">হিফজ বিভাগ (৮-১৫ বছর)</h4>
                    <p className="text-sm">নির্ধারিত সময়ে ভর্তি</p>
                  </div>
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold text-primary mb-1">কওমী বিভাগ</h4>
                    <p className="text-sm">বার্ষিক ভর্তি</p>
                  </div>
                  <div className="p-3 border rounded">
                    <h4 className="font-semibold text-primary mb-1">লিল্লাহ বোডিং (এতিম)</h4>
                    <p className="text-sm">প্রয়োজন অনুযায়ী সারা বছর</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <h3 className="font-bengali font-semibold mb-3 text-center">যোগাযোগ</h3>
                <div className="text-center font-bengali space-y-2">
                  <p>ভর্তি সংক্রান্ত যেকোনো তথ্যের জন্য যোগাযোগ করুন:</p>
                  <p className="font-semibold">📞 +880 1XXX-XXXXXX</p>
                  <p>অথবা সরাসরি মাদ্রাসায় আসুন</p>
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

export default AdmissionTime;
