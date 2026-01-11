import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import personPlaceholder from "@/assets/person-placeholder.png";

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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 via-red-500 to-orange-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">اللجنة</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              কমিটি বিন্দু
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Committee
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

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
                <Card 
                  key={index} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/30 dark:hover:to-indigo-950/30 border-2 border-transparent hover:border-blue-200"
                >
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-blue-500 ring-offset-4 ring-offset-background shadow-lg group-hover:ring-blue-600 group-hover:scale-105 transition-all duration-300">
                      <img src={personPlaceholder} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-center font-bengali mb-2 group-hover:text-blue-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-center text-primary font-semibold font-bengali mb-3">
                      {member.position}
                    </p>
                    <p className="text-center text-muted-foreground text-sm bg-muted/50 rounded-lg py-2 px-4 group-hover:bg-white/80 transition-colors">
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
