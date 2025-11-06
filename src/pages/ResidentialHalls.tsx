import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResidentialHalls = () => {
  const directors = [
    { name: "মাওলানা [নাম]", role: "প্রধান পরিচালক", phone: "+880 1XXX-XXXXXX" },
    { name: "মাওলানা [নাম]", role: "সহকারী পরিচালক", phone: "+880 1XXX-XXXXXX" },
    { name: "[নাম]", role: "হল সুপারভাইজার", phone: "+880 1XXX-XXXXXX" },
  ];

  const halls = [
    {
      name: "হল নং - ০১",
      capacity: "১০০ জন",
      facilities: "শীতাতপ নিয়ন্ত্রিত, আলমারি, বিছানা"
    },
    {
      name: "হল নং - ০২",
      capacity: "১০০ জন",
      facilities: "শীতাতপ নিয়ন্ত্রিত, আলমারি, বিছানা"
    },
    {
      name: "হল নং - ০৩",
      capacity: "৮০ জন",
      facilities: "পাখা, আলমারি, বিছানা"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">القاعات السكنية</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              আবাসিক হল ও পরিচালকবৃন্দ
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Residential Halls
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">পরিচালকবৃন্দ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {directors.map((director, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <span className="text-3xl">👤</span>
                      </div>
                      <h3 className="font-bold font-bengali mb-1">{director.name}</h3>
                      <p className="text-primary text-sm font-bengali mb-2">{director.role}</p>
                      <p className="text-xs text-muted-foreground">{director.phone}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">আবাসিক হলসমূহ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {halls.map((hall, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-smooth">
                      <h3 className="font-bold font-bengali text-lg mb-2 text-primary">
                        {hall.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-bengali text-sm">
                        <p><span className="font-semibold">ধারণক্ষমতা:</span> {hall.capacity}</p>
                        <p><span className="font-semibold">সুবিধা:</span> {hall.facilities}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-bengali">সাধারণ সুবিধাসমূহ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 font-bengali">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>পরিষ্কার-পরিচ্ছন্ন ও স্বাস্থ্যকর পরিবেশ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>২৪ ঘণ্টা বিদ্যুৎ সুবিধা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>বিশুদ্ধ পানীয় জলের ব্যবস্থা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>পৃথক ওয়াশরুম সুবিধা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>নিরাপত্তা ব্যবস্থা</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>প্রাথমিক চিকিৎসা সেবা</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResidentialHalls;
