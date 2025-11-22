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
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>("all");
  const [selectedAddress, setSelectedAddress] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  const students = useMemo(() => generateStudentData(), []);
  const years = [1967, 1999, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2019, 2020, 2022, 2024, 2025];
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const addresses = ["ঢাকা", "চট্টগ্রাম", "সিলেট", "রাজশাহী", "খুলনা", "বরিশাল", "রংপুর", "ময়মনসিংহ"];
  
  const filteredStudents = useMemo(() => {
    let filtered = students;
    
    // Filter by batch
    if (selectedBatch !== "all") {
      filtered = filtered.filter(student => student.year.toString() === selectedBatch);
    }
    
    // Filter by blood group
    if (selectedBloodGroup !== "all") {
      filtered = filtered.filter(student => student.bloodGroup === selectedBloodGroup);
    }
    
    // Filter by address
    if (selectedAddress !== "all") {
      filtered = filtered.filter(student => student.address.includes(selectedAddress));
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
  }, [students, selectedBatch, selectedBloodGroup, selectedAddress, searchQuery]);
  
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
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="নাম বা সাল দিয়ে খুঁজুন..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 font-bengali"
                  />
                </div>
                
                {/* Filter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Batch Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-bengali text-muted-foreground">ব্যাচ</label>
                    <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                      <SelectTrigger className="font-bengali">
                        <SelectValue placeholder="সকল ব্যাচ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all" className="font-bengali">সকল ব্যাচ</SelectItem>
                        {years.map(year => (
                          <SelectItem key={year} value={year.toString()} className="font-bengali">
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Blood Group Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-bengali text-muted-foreground">ব্লাড গ্রুপ</label>
                    <Select value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
                      <SelectTrigger className="font-bengali">
                        <SelectValue placeholder="সকল গ্রুপ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all" className="font-bengali">সকল গ্রুপ</SelectItem>
                        {bloodGroups.map(group => (
                          <SelectItem key={group} value={group}>
                            {group}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Address Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-bengali text-muted-foreground">ঠিকানা</label>
                    <Select value={selectedAddress} onValueChange={setSelectedAddress}>
                      <SelectTrigger className="font-bengali">
                        <SelectValue placeholder="সকল জেলা" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all" className="font-bengali">সকল জেলা</SelectItem>
                        {addresses.map(address => (
                          <SelectItem key={address} value={address} className="font-bengali">
                            {address}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Clear Filters Button */}
                  <div className="space-y-2">
                    <label className="text-sm font-bengali text-muted-foreground opacity-0">ফিল্টার</label>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedBatch("all");
                        setSelectedBloodGroup("all");
                        setSelectedAddress("all");
                        setSearchQuery("");
                      }}
                      className="w-full font-bengali"
                    >
                      ফিল্টার রিসেট করুন
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center text-muted-foreground font-bengali">
                মোট: {filteredStudents.length} জন ছাত্র
              </div>
            </CardContent>
          </Card>

          {/* Students Grid - 3D Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudents.map(student => (
              <div key={student.id} className="flip-card-container group" style={{ perspective: '1500px' }}>
                <div className="flip-card-inner relative w-full h-[450px] transition-transform duration-700 ease-out transform-style-3d group-hover:rotate-y-180">
                  
                  {/* Front Side */}
                  <div className="flip-card-face flip-card-front absolute inset-0 backface-hidden">
                    <Card className="h-full overflow-hidden shadow-xl border-2 border-islamic-green/10 hover:shadow-2xl hover:border-islamic-green/30 transition-all duration-300 bg-gradient-to-br from-background via-background to-islamic-green/5">
                      <CardContent className="p-8 h-full flex flex-col justify-between">
                        {/* Top Decorative Border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-islamic-green to-transparent"></div>
                        
                        <div className="flex flex-col items-center text-center space-y-5 mt-4">
                          {/* Student Image with Enhanced Ring */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-islamic-green to-islamic-teal rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative w-36 h-36 rounded-full overflow-hidden bg-gradient-to-br from-islamic-green/20 via-islamic-teal/20 to-islamic-gold/10 flex items-center justify-center ring-4 ring-islamic-green/30 shadow-2xl group-hover:ring-islamic-green/50 transition-all duration-300">
                              <img 
                                src={student.image} 
                                alt={student.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          {/* Student Info */}
                          <div className="space-y-3 w-full">
                            <div className="space-y-1">
                              <h3 className="font-bold text-2xl font-bengali text-primary group-hover:text-islamic-green transition-colors">
                                {student.name}
                              </h3>
                              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-islamic-teal to-transparent mx-auto"></div>
                            </div>
                            
                            <div className="space-y-2.5 text-sm pt-2">
                              <div className="flex items-center gap-2 text-muted-foreground justify-center hover:text-islamic-green transition-colors">
                                <div className="w-8 h-8 rounded-full bg-islamic-green/10 flex items-center justify-center">
                                  <User className="h-4 w-4 text-islamic-green" />
                                </div>
                                <span className="font-bengali">{student.fatherName}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-muted-foreground justify-center hover:text-islamic-teal transition-colors">
                                <div className="w-8 h-8 rounded-full bg-islamic-teal/10 flex items-center justify-center">
                                  <MapPin className="h-4 w-4 text-islamic-teal" />
                                </div>
                                <span className="font-bengali">{student.address}</span>
                              </div>
                              
                              <div className="flex items-center gap-2 text-muted-foreground justify-center hover:text-islamic-gold transition-colors">
                                <div className="w-8 h-8 rounded-full bg-islamic-gold/10 flex items-center justify-center">
                                  <Phone className="h-4 w-4 text-islamic-gold" />
                                </div>
                                <span>{student.phone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Bottom Info with Enhanced Design */}
                        <div className="space-y-3">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                          <div className="flex items-center justify-center gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-islamic-green/15 to-islamic-green/5 rounded-full border border-islamic-green/30 shadow-sm">
                              <Droplet className="h-4 w-4 text-islamic-green" />
                              <span className="font-bold text-islamic-green">{student.bloodGroup}</span>
                            </div>
                            
                            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-islamic-gold/15 to-islamic-gold/5 rounded-full border border-islamic-gold/30 shadow-sm">
                              <Calendar className="h-4 w-4 text-islamic-gold" />
                              <span className="font-bold text-islamic-gold">{student.year}</span>
                            </div>
                          </div>
                          
                          <p className="text-xs text-muted-foreground font-bengali italic opacity-70 group-hover:opacity-100 transition-opacity">
                            আরও দেখতে হোভার করুন ↻
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Back Side - Clean UI */}
                  <div className="flip-card-face flip-card-back absolute inset-0 backface-hidden rotate-y-180">
                    <Card className="h-full overflow-hidden shadow-xl border border-border/50 bg-background">
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        {/* Top Decorative Border */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-islamic-green to-transparent"></div>
                        
                        <div className="space-y-5 flex-1 flex flex-col justify-center">
                          {/* Header */}
                          <div className="text-center space-y-2 pb-2 border-b border-border/30">
                            <h3 className="font-bold text-lg font-bengali text-foreground">
                              {student.name}
                            </h3>
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-8 h-px bg-islamic-green/50"></div>
                              <Calendar className="h-3 w-3 text-islamic-gold" />
                              <span className="text-xs font-semibold text-islamic-gold">ব্যাচ {student.year}</span>
                              <div className="w-8 h-px bg-islamic-green/50"></div>
                            </div>
                          </div>
                          
                          {/* Current Position */}
                          <div className="space-y-2 bg-islamic-green/5 p-4 rounded-lg border border-islamic-green/20">
                            <div className="inline-block px-3 py-1 bg-islamic-green/15 rounded-md">
                              <span className="text-xs font-bold text-islamic-green font-bengali">
                                বর্তমান অবস্থান
                              </span>
                            </div>
                            <p className="font-bold text-base font-bengali text-foreground leading-relaxed">
                              {student.position.title}
                            </p>
                            <p className="text-sm text-muted-foreground font-bengali">
                              {student.position.org}
                            </p>
                          </div>
                          
                          {/* Biography */}
                          <div className="space-y-2 bg-islamic-teal/5 p-4 rounded-lg border border-islamic-teal/20">
                            <div className="inline-block px-3 py-1 bg-islamic-teal/15 rounded-md">
                              <span className="text-xs font-bold text-islamic-teal font-bengali">
                                সংক্ষিপ্ত পরিচিতি
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed font-bengali text-foreground">
                              {student.bio}
                            </p>
                          </div>
                        </div>
                        
                        {/* Bottom Info */}
                        <div className="pt-3 mt-3 border-t border-border/30 text-center">
                          <p className="text-xs text-muted-foreground font-bengali">
                            আবার ফিরতে হোভার সরান
                          </p>
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
