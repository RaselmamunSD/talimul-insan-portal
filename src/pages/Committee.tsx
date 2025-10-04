import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Committee = () => {
  const members = [
    { name: "মাওলানা [নাম]", position: "সভাপতি", phone: "+880 1XXX-XXXXXX" },
    { name: "আলহাজ্ব [নাম]", position: "সহ-সভাপতি", phone: "+880 1XXX-XXXXXX" },
    { name: "মাওলানা [নাম]", position: "সাধারণ সম্পাদক", phone: "+880 1XXX-XXXXXX" },
    { name: "[নাম]", position: "কোষাধ্যক্ষ", phone: "+880 1XXX-XXXXXX" },
    { name: "[নাম]", position: "সদস্য", phone: "+880 1XXX-XXXXXX" },
    { name: "[নাম]", position: "সদস্য", phone: "+880 1XXX-XXXXXX" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8 font-bengali text-primary">
            কমিটি বিন্দু
          </h1>

          <div className="max-w-6xl mx-auto">
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="font-bengali text-center leading-relaxed text-lg">
                  তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং পরিচালনা কমিটি
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <Card key={index} className="hover:shadow-elegant transition-smooth">
                  <CardContent className="p-6">
                    <div className="bg-muted w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <h3 className="text-xl font-bold text-center font-bengali mb-2">
                      {member.name}
                    </h3>
                    <p className="text-center text-primary font-semibold font-bengali mb-2">
                      {member.position}
                    </p>
                    <p className="text-center text-muted-foreground text-sm">
                      {member.phone}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Committee;
