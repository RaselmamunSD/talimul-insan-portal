import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import personPlaceholder from "@/assets/person-placeholder.png";

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
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/30 dark:hover:to-indigo-950/30 border-2 border-transparent hover:border-blue-200"
            >
              <CardContent className="p-8">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-blue-500 ring-offset-4 ring-offset-background shadow-lg group-hover:ring-blue-600 group-hover:scale-105 transition-all duration-300">
                  <img src={personPlaceholder} alt={teacher.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold font-bengali text-center mb-2 group-hover:text-blue-700 transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-primary font-bengali text-center mb-4 font-semibold">
                  {teacher.designation}
                </p>
                <div className="space-y-2 font-bengali text-sm bg-muted/50 rounded-lg p-4 group-hover:bg-white/80 transition-colors">
                  <p><span className="font-semibold text-blue-600">যোগ্যতা:</span> {teacher.qualification}</p>
                  <p><span className="font-semibold text-blue-600">অভিজ্ঞতা:</span> {teacher.experience}</p>
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
