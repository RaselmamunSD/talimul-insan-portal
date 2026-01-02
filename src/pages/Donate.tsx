import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Import donation images
import donateOrphan from "@/assets/donate-orphan.jpg";
import donateDevelopment from "@/assets/donate-development.jpg";
import donateNewBuilding from "@/assets/donate-new-building.jpg";
import donateMosque from "@/assets/donate-mosque.jpg";
import donateZakat from "@/assets/donate-zakat.jpg";
import donateRamadan from "@/assets/donate-ramadan.jpg";
import donateMahfil from "@/assets/donate-mahfil.jpg";

const donationCategories = [
  {
    id: "orphan-students",
    title: "এতিম ও অসহায় ছাত্রদের সাহায্য",
    description: "এতিম ও অসহায় ছাত্রদের শিক্ষা ও জীবনযাত্রার ব্যয় নির্বাহে সহায়তা করুন। আপনার সাহায্য হবে তাদের ভবিষ্যতের আলো।",
    image: donateOrphan
  },
  {
    id: "madrasah-development",
    title: "মাদ্রাসার উন্নয়ন",
    description: "মাদ্রাসার সার্বিক উন্নয়ন ও রক্ষণাবেক্ষণে অবদান রাখুন। আপনার অনুদান হবে ইলমে দ্বীনের প্রসারে সহায়ক।",
    image: donateDevelopment
  },
  {
    id: "new-building",
    title: "নতুন নির্মাণাধীন ভবন",
    description: "নতুন শিক্ষা ভবন নির্মাণে আপনার অবদান রাখুন। আপনার দান হবে শিক্ষার্থীদের জন্য সাদাকায়ে জারিয়া।",
    image: donateNewBuilding
  },
  {
    id: "new-mosque",
    title: "নতুন মসজিদ নির্মাণ",
    description: "নতুন মসজিদ নির্মাণে সাদাকায়ে জারিয়ায় অংশীদার হোন। আল্লাহর ঘর নির্মাণে অংশগ্রহণ করুন।",
    image: donateMosque
  },
  {
    id: "zakat-fund",
    title: "যাকাত তহবিল",
    description: "যাকাতের মাধ্যমে সমাজ বদলের এই যাত্রায় আজই শরিক হোন। আপনার যাকাত হবে দুঃস্থ মানুষের উপার্জনের অবলম্বন।",
    image: donateZakat
  },
  {
    id: "ramadan-iftar",
    title: "রমাদান ইফতার ও সেহেরী",
    description: "রমাদান মাসে ছাত্রদের ইফতার ও সেহেরীর ব্যবস্থায় অংশ নিন। আপনার দান হবে সওয়াবের মাধ্যম।",
    image: donateRamadan
  },
  {
    id: "annual-mahfil",
    title: "বাৎসরিক মাহফিল",
    description: "বার্ষিক ওয়াজ মাহফিল আয়োজনে সহযোগিতা করুন। দ্বীনের দাওয়াতে আপনিও অংশীদার হোন।",
    image: donateMahfil
  }
];

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-islamic-teal via-islamic-green to-islamic-gold py-20 overflow-hidden">
        {/* Islamic Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
            backgroundSize: '400px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Mosque Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6 inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <p className="font-bengali text-lg">صَدَقَةٌ جَارِيَةٌ</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-bengali mb-6 drop-shadow-lg">
              দান করুন
            </h1>
            
            <p className="font-bengali text-xl md:text-2xl mb-4 leading-relaxed drop-shadow-md">
              "যে ব্যক্তি আল্লাহর পথে সুন্দর ঋণ দেয়, আল্লাহ তার জন্য তা বহুগুণ বৃদ্ধি করে দেন।"
            </p>
            
            <p className="font-bengali text-lg opacity-90 drop-shadow-md">
              (সূরা আল-বাকারা: ২৪৫)
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {donationCategories.map((category, index) => (
                <Card 
                  key={category.id} 
                  className="group overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content Section */}
                  <CardContent className="p-6 text-center">
                    {/* Title */}
                    <h3 className="font-bengali text-2xl font-bold text-islamic-dark-green mb-4 leading-tight">
                      {category.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-bengali text-gray-600 text-base leading-relaxed mb-6 min-h-[72px]">
                      {category.description}
                    </p>
                    
                    {/* Donate Button */}
                    <Link to={`/donation-form?category=${category.id}`} className="block">
                      <Button className="w-full bg-islamic-green hover:bg-islamic-dark-green text-white font-bengali text-lg py-6 rounded-xl transition-all duration-300 hover:shadow-lg">
                        দান করুন
                      </Button>
                    </Link>
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

export default Donate;