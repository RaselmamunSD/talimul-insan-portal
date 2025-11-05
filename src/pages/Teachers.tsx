import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Teachers = () => {
  const teachers = [
    {
      name: "মাওলানা আব্দুল করিম",
      designation: "প্রধান মুহতামিম",
      qualification: "কামিল, দাওরায়ে হাদিস",
      experience: "২৫ বছর",
    },
    {
      name: "মাওলানা মুহাম্মদ আলী",
      designation: "হিফজ বিভাগের প্রধান",
      qualification: "হাফেজ, কামিল",
      experience: "১৫ বছর",
    },
    {
      name: "উস্তাদ আবু বকর",
      designation: "কওমী বিভাগের শিক্ষক",
      qualification: "ফাজিল, দাওরায়ে হাদিস",
      experience: "১০ বছর",
    },
    {
      name: "মাওলানা উমর ফারুক",
      designation: "নূরানী বিভাগের প্রধান",
      qualification: "আলিম, হাফেজ",
      experience: "৮ বছর",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">المعلمون</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              শিক্ষক পরিচিতি
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Our Teachers
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-islamic-green/10 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-xl font-bold font-bengali text-center mb-2">
                  {teacher.name}
                </h3>
                <p className="text-islamic-green font-bengali text-center mb-3">
                  {teacher.designation}
                </p>
                <div className="space-y-2 font-bengali text-sm">
                  <p><span className="font-semibold">যোগ্যতা:</span> {teacher.qualification}</p>
                  <p><span className="font-semibold">অভিজ্ঞতা:</span> {teacher.experience}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teachers;
