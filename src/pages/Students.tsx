import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, User, Phone, MapPin, Droplet, Calendar } from "lucide-react";
import { useState, useMemo } from "react";

// Sample student data with career info
const generateStudentData = () => {
  const years = [1967, 1999, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2019, 2020, 2022, 2024, 2025];
  const students = [];
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  
  const positions = [
    { title: "প্রধান ইমাম", org: "কেন্দ্রীয় মসজিদ" },
    { title: "কুরআন শিক্ষক", org: "জামিয়া মাদরাসা" },
    { title: "হিফজ উস্তাদ", org: "দারুল কুরআন" },
    { title: "ইমাম ও খতীব", org: "বায়তুল মুকাররম" },
    { title: "ক্বারী", org: "ইসলামিক ফাউন্ডেশন" },
    { title: "মুয়াজ্জিন", org: "জাতীয় মসজিদ" },
    { title: "কুরআন প্রশিক্ষক", org: "ইসলামিক একাডেমি" },
    { title: "তাজবিদ শিক্ষক", org: "মাদানি মাদরাসা" }
  ];
  
  const bios = [
    "আলহামদুলিল্লাহ, কুরআন হিফজ সম্পন্ন করে বিভিন্ন ইসলামিক প্রতিষ্ঠানে সেবা প্রদান করছি।",
    "কুরআনের খেদমতে নিয়োজিত। শত শত ছাত্রকে কুরআন শিক্ষা প্রদান করছি।",
    "হিফজ সম্পন্ন করে তাজবিদ ও ক্বিরাত নিয়ে উচ্চতর পড়াশোনা করেছি।",
    "মাদরাসা থেকে হিফজ সম্পন্ন করে বর্তমানে ইমামতির দায়িত্ব পালন করছি।",
    "কুরআনের সুমধুর তেলাওয়াত ও শিক্ষাদানে ব্যস্ত রয়েছি।",
    "হিফজুল কুরআন সম্পন্ন করে বর্তমানে ইসলামিক শিক্ষা প্রচারে নিয়োজিত।",
    "কুরআন হিফজ ও তাজবিদ শিক্ষাদানে নিয়োজিত একজন উস্তাদ।",
    "আলহামদুলিল্লাহ, পবিত্র কুরআন হিফজ করে ইসলামিক শিক্ষা বিস্তারে কাজ করছি।"
  ];
  
  years.forEach(year => {
    for (let i = 1; i <= 20; i++) {
      students.push({
        id: `${year}-${i}`,
        name: `মুহাম্মদ ${['আব্দুল্লাহ', 'ইব্রাহিম', 'ইউসুফ', 'মুসা', 'ঈসা', 'সালেহ', 'নূহ', 'আদম'][i % 8]} ${i}`,
        fatherName: `মোঃ ${['করিম', 'রহিম', 'হাসান', 'হোসেন', 'আলী', 'উমর', 'উসমান', 'বিলাল'][i % 8]}`,
        address: `${['ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'রাজশাহী', 'খুলনা', 'বরিশাল', 'রংপুর', 'ময়মনসিংহ'][i % 8]}, বাংলাদেশ`,
        phone: `01${Math.floor(Math.random() * 900000000) + 100000000}`,
        bloodGroup: bloodGroups[i % bloodGroups.length],
        year: year,
        image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${year}-${i}`,
        position: positions[i % positions.length],
        bio: bios[i % bios.length]
      });
    }
  });
  
  return students;
};

const Students = () => {
  const [selectedBatch, setSelectedBatch] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const students = useMemo(() => generateStudentData(), []);
  const years = [1967, 1999, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2019, 2020, 2022, 2024, 2025];
  
  const filteredStudents = useMemo(() => {
    let filtered = students;
    
    // Filter by batch
    if (selectedBatch !== "all") {
      filtered = filtered.filter(student => student.year.toString() === selectedBatch);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(student => 
        student.name.toLowerCase().includes(query) || 
        student.year.toString().includes(query)
      );
    }
    
    return filtered;
  }, [students, selectedBatch, searchQuery]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 py-20 overflow-hidden">
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
              <p className="font-arabic text-lg">الطلاب الحفاظ</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
              হাফেজ ছাত্রের পরিচিতি
            </h1>
            
            <p className="font-english text-lg md:text-xl opacity-90 drop-shadow-md">
              Our Hafiz Students
            </p>
          </div>
        </div>
      </section>
      
      <main className="flex-1 container mx-auto px-4 py-12">
        
        <div className="max-w-4xl mx-auto space-y-8 mb-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold font-bengali text-islamic-green mb-4">
                আমাদের সফল হাফেজগণ
              </h2>
              <p className="font-bengali leading-relaxed mb-4">
                আলহামদুলিল্লাহ, আমাদের মাদ্রাসা থেকে এ পর্যন্ত ২০০+ ছাত্র সফলভাবে কুরআনে হাফেজ হয়েছে। 
                তারা দেশে-বিদেশে বিভিন্ন মাদ্রাসায় কুরআন শিক্ষাদান ও ইমামতির মতো গুরুত্বপূর্ণ দায়িত্ব পালন করছেন।
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center p-6 bg-islamic-green/10 rounded-lg">
                  <div className="text-4xl font-bold text-islamic-green mb-2">200+</div>
                  <p className="font-bengali">সফল হাফেজ</p>
                </div>
                <div className="text-center p-6 bg-islamic-gold/10 rounded-lg">
                  <div className="text-4xl font-bold text-islamic-gold mb-2">150+</div>
                  <p className="font-bengali">বর্তমান শিক্ষার্থী</p>
                </div>
                <div className="text-center p-6 bg-islamic-orange/10 rounded-lg">
                  <div className="text-4xl font-bold text-islamic-orange mb-2">95%</div>
                  <p className="font-bengali">সফলতার হার</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold font-bengali text-islamic-green mb-4">
                বৈশিষ্ট্যসমূহ
              </h2>
              <ul className="space-y-3 font-bengali">
                <li className="flex items-start gap-2">
                  <span className="text-islamic-green mt-1">✓</span>
                  <span>অভিজ্ঞ ও দক্ষ উস্তাদদের তত্ত্বাবধানে হিফজ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-islamic-green mt-1">✓</span>
                  <span>মাখরাজ ও তাজবিদ সহীহভাবে শিক্ষাদান</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-islamic-green mt-1">✓</span>
                  <span>নিয়মিত তাস্মী ও দাওর পরীক্ষা</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-islamic-green mt-1">✓</span>
                  <span>উত্তম আখলাক ও চরিত্র গঠনে বিশেষ গুরুত্ব</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* New Students Directory Section */}
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold font-bengali text-primary text-center mb-8">
            ছাত্রদের তথ্য
          </h2>
          
          {/* Search and Filter Section */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search Bar */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="নাম বা সাল দিয়ে খুঁজুন..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 font-bengali"
                  />
                </div>
                
                {/* Batch Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant={selectedBatch === "all" ? "default" : "outline"}
                    onClick={() => setSelectedBatch("all")}
                    className="font-bengali"
                  >
                    Batch - All
                  </Button>
                  
                  <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                    <SelectTrigger className="w-[180px] font-bengali">
                      <SelectValue placeholder="Batch - Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year} value={year.toString()} className="font-bengali">
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-4 text-center text-muted-foreground font-bengali">
                মোট: {filteredStudents.length} জন ছাত্র
              </div>
            </CardContent>
          </Card>

          {/* Students Grid - 3D Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map(student => (
              <div key={student.id} className="flip-card-container group" style={{ perspective: '1000px' }}>
                <div className="flip-card-inner relative w-full h-[420px] transition-transform duration-700 ease-out transform-style-3d group-hover:rotate-y-180">
                  
                  {/* Front Side */}
                  <div className="flip-card-face flip-card-front absolute inset-0 backface-hidden">
                    <Card className="h-full overflow-hidden shadow-lg border-2 hover:shadow-2xl transition-shadow">
                      <CardContent className="p-8 h-full flex flex-col justify-center">
                        <div className="flex flex-col items-center text-center space-y-4">
                          {/* Student Image */}
                          <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-islamic-green/20 to-islamic-teal/20 flex items-center justify-center ring-4 ring-islamic-green/20 shadow-lg">
                            <img 
                              src={student.image} 
                              alt={student.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Student Info */}
                          <div className="space-y-2 w-full">
                            <h3 className="font-bold text-xl font-bengali text-primary">
                              {student.name}
                            </h3>
                            
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground justify-center">
                                <User className="h-4 w-4 flex-shrink-0" />
                                <span className="font-bengali">{student.fatherName}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-muted-foreground justify-center">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span className="font-bengali">{student.address}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-muted-foreground justify-center">
                                <Phone className="h-4 w-4 flex-shrink-0" />
                                <span>{student.phone}</span>
                              </div>
                              
                              <div className="flex items-center justify-center gap-6 pt-3 border-t mt-3">
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-islamic-green/10 rounded-full">
                                  <Droplet className="h-4 w-4 text-islamic-green" />
                                  <span className="font-semibold text-islamic-green">{student.bloodGroup}</span>
                                </div>
                                
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-islamic-gold/10 rounded-full">
                                  <Calendar className="h-4 w-4 text-islamic-gold" />
                                  <span className="font-semibold text-islamic-gold">{student.year}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-xs text-muted-foreground font-bengali mt-4 italic">
                            আরও দেখতে হোভার করুন
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-face flip-card-back absolute inset-0 backface-hidden rotate-y-180">
                    <Card className="h-full overflow-hidden shadow-2xl border-2 bg-gradient-to-br from-islamic-green/5 via-background to-islamic-teal/5 backdrop-blur-sm">
                      <CardContent className="p-8 h-full flex flex-col justify-center">
                        <div className="space-y-6 text-center">
                          {/* Header with decorative element */}
                          <div className="space-y-2">
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-islamic-green to-transparent mx-auto rounded-full"></div>
                            <h3 className="font-bold text-xl font-bengali text-primary">
                              {student.name}
                            </h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-islamic-teal to-transparent mx-auto rounded-full"></div>
                          </div>
                          
                          {/* Current Position */}
                          <div className="space-y-3 bg-gradient-to-br from-islamic-green/10 to-islamic-teal/10 p-5 rounded-xl border border-islamic-green/20 shadow-inner">
                            <div className="text-sm font-semibold text-islamic-green font-bengali">
                              বর্তমান অবস্থান
                            </div>
                            <div className="space-y-1">
                              <p className="font-bold text-lg font-bengali text-primary">
                                {student.position.title}
                              </p>
                              <p className="text-sm text-muted-foreground font-bengali">
                                {student.position.org}
                              </p>
                            </div>
                          </div>
                          
                          {/* Biography */}
                          <div className="space-y-3 bg-gradient-to-br from-islamic-teal/10 to-islamic-green/10 p-5 rounded-xl border border-islamic-teal/20 shadow-inner">
                            <div className="text-sm font-semibold text-islamic-teal font-bengali">
                              সংক্ষিপ্ত পরিচিতি
                            </div>
                            <p className="text-sm leading-relaxed font-bengali text-foreground/90">
                              {student.bio}
                            </p>
                          </div>
                          
                          {/* Batch Year Badge */}
                          <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-islamic-gold/10 rounded-full border border-islamic-gold/30">
                              <Calendar className="h-4 w-4 text-islamic-gold" />
                              <span className="font-semibold text-islamic-gold">ব্যাচ {student.year}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
          
          <style>{`
            .flip-card-container {
              perspective: 1000px;
            }
            
            .flip-card-inner {
              transform-style: preserve-3d;
              transition: transform 0.7s cubic-bezier(0.4, 0.0, 0.2, 1);
            }
            
            .flip-card-container:hover .flip-card-inner {
              transform: rotateY(180deg);
            }
            
            .flip-card-face {
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
            }
            
            .flip-card-back {
              transform: rotateY(180deg);
            }
            
            .rotate-y-180 {
              transform: rotateY(180deg);
            }
            
            .backface-hidden {
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
            }
            
            .transform-style-3d {
              transform-style: preserve-3d;
            }
          `}</style>
          
          {filteredStudents.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground font-bengali text-lg">
                  কোনো ছাত্র পাওয়া যায়নি
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Students;
