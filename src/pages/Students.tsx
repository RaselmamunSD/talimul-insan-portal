import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, User, Phone, MapPin, Droplet, Calendar } from "lucide-react";
import { useState, useMemo } from "react";

// Sample student data
const generateStudentData = () => {
  const years = [1967, 1999, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2019, 2020, 2022, 2024, 2025];
  const students = [];
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  
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
        image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${year}-${i}`
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
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-bengali text-primary mb-8 text-center">
          হাফেজ ছাত্রের পরিচিতি
        </h1>
        
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

          {/* Students Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map(student => (
              <Card key={student.id} className="overflow-hidden hover:shadow-lg transition-shadow min-h-[380px]">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Student Image */}
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-islamic-green/10 flex items-center justify-center">
                      <img 
                        src={student.image} 
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Student Info */}
                    <div className="space-y-2 w-full">
                      <h3 className="font-bold text-lg font-bengali text-primary">
                        {student.name}
                      </h3>
                      
                      <div className="space-y-1.5 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="h-4 w-4 flex-shrink-0" />
                          <span className="font-bengali text-left">{student.fatherName}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="font-bengali text-left">{student.address}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <span className="text-left">{student.phone}</span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2 border-t">
                          <div className="flex items-center gap-1">
                            <Droplet className="h-4 w-4 text-islamic-green" />
                            <span className="font-semibold">{student.bloodGroup}</span>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-islamic-gold" />
                            <span className="font-semibold">{student.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
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
