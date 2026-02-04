import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import personPlaceholder from "@/assets/person-placeholder.png";

const ResidentialHalls = () => {
  const directors = [
    { name: "মাওলানা আব্দুর রহমান", role: "প্রধান পরিচালক", department: "হিফজ বিভাগ", phone: "+880 1XXX-XXXXXX" },
    { name: "মাওলানা হাফেজ ইব্রাহীম", role: "সহকারী পরিচালক", department: "কওমী বিভাগ", phone: "+880 1XXX-XXXXXX" },
    { name: "হাফেজ মোঃ ইউসুফ আলী", role: "হল সুপারভাইজার", department: "নূরানী বিভাগ", phone: "+880 1XXX-XXXXXX" },
    { name: "মাওলানা আবু তালহা", role: "হল সুপারভাইজার", department: "হিফজ বিভাগ", phone: "+880 1XXX-XXXXXX" },
    { name: "জনাব মোঃ রফিকুল ইসলাম", role: "হল সুপারভাইজার", department: "কওমী বিভাগ", phone: "+880 1XXX-XXXXXX" },
    { name: "হাফেজ মোঃ আব্দুল মান্নান", role: "হল সুপারভাইজার", department: "লিল্লাহ বোর্ডিং", phone: "+880 1XXX-XXXXXX" },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {directors.map((director, index) => (
                    <div 
                      key={index} 
                      className="group text-center p-6 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50 hover:from-purple-50 hover:to-indigo-50 dark:hover:from-purple-950/30 dark:hover:to-indigo-950/30 border-2 border-transparent hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-100 w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-purple-500 ring-offset-4 ring-offset-background shadow-lg group-hover:ring-purple-600 group-hover:scale-105 transition-all duration-300">
                        <img src={personPlaceholder} alt={director.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-lg font-bold font-bengali mb-1 group-hover:text-purple-700 transition-colors">{director.name}</h3>
                      <p className="text-primary font-semibold text-sm font-bengali mb-1">{director.role}</p>
                      <p className="text-purple-600 dark:text-purple-400 text-xs font-bengali mb-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full inline-block">{director.department}</p>
                      <p className="text-xs text-muted-foreground mt-2 bg-muted/50 rounded-lg py-2 px-4 group-hover:bg-white/80 transition-colors">{director.phone}</p>
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
