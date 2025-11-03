import { useState, useEffect } from "react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  User, 
  Users, 
  Target, 
  Award, 
  BookOpen, 
  GraduationCap,
  Book,
  Home as HomeIcon,
  Building,
  DollarSign,
  FileText,
  Clock,
  ClipboardCheck,
  School
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import madrasahLogo from "@/assets/madrasah-logo.png";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"bn" | "en">("bn");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-GB");
  };

  const menuItems = [
    { label: "হোম", href: "/", active: true },
    { 
      label: "পরিচিতি", 
      href: "#", 
      dropdown: [
        { label: "মুহতামিমের বাণী ও সংক্ষিপ্ত জীবনবৃত্তান্ত", href: "/principal-message", icon: User },
        { label: "কমিটি বিন্দু", href: "/committee", icon: Users },
        { label: "প্রতিষ্ঠার লক্ষ্য", href: "/goals", icon: Target },
        { label: "বৈশিষ্ট্য", href: "/features", icon: Award },
        { label: "শিক্ষক পরিচিতি", href: "/teachers", icon: GraduationCap },
        { label: "হাফেজ ছাত্রের পরিচিতি", href: "/students", icon: BookOpen }
      ]
    },
    { 
      label: "বিভাগ সমূহ", 
      href: "#", 
      dropdown: [
        { label: "হিফজুল কুরআন", href: "/hifz-department", icon: Book },
        { label: "কওমি বিভাগ", href: "/qawmi-department", icon: School },
        { label: "নূরানী বিভাগ", href: "/nurani-department", icon: BookOpen },
        { label: "লিল্লাহ বোডিং", href: "/lillah-boarding", icon: HomeIcon },
        { label: "রিভিশন", href: "/revision", icon: ClipboardCheck }
      ]
    },
    { 
      label: "আবাসন", 
      href: "#", 
      dropdown: [
        { label: "আবাসিক হল ও পরিচালকবৃন্দ", href: "/residential-halls", icon: Building },
        { label: "আবাসন চার্জ", href: "/accommodation-charges", icon: DollarSign },
        { label: "আবাসিক নীতিমাল", href: "/residential-policies", icon: FileText },
        { label: "দৈনিক আবাসিক কার্যসূচি", href: "/daily-schedule", icon: Clock }
      ]
    },
    { 
      label: "ভর্তি", 
      href: "#", 
      dropdown: [
        { label: "ভর্তির সময়", href: "/admission-time", icon: Clock },
        { label: "ভর্তি পরীক্ষা", href: "/admission-exam", icon: ClipboardCheck },
        { label: "ভর্তির শর্তাবলী", href: "/admission-terms", icon: FileText }
      ]
    },
    { label: "নিউজ", href: "/news" },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "মিডিয়া", href: "/media" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <header className="w-full shadow-elegant sticky top-0 z-50 bg-background">
      {/* Top Bar */}
      <div className="bg-white text-foreground py-2 px-4 border-b">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold">
              🕐 {formatTime(currentTime)}
            </span>
            <span className="font-semibold">📅 {formatDate(currentTime)}</span>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white font-bengali"
                >
                  অনলাইন আবেদন <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/admission-instructions" className="font-bengali cursor-pointer">
                    ভর্তি ফরম
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-islamic-dark-green text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4">
            {/* Left - English Name */}
            <div className="hidden lg:block text-left flex-1">
              <p className="text-sm font-english font-semibold leading-tight">
                Talimul Insan Hafizia<br />Qawmi Madrasah & Lillah Boarding
              </p>
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0">
              <img 
                src={madrasahLogo} 
                alt="Madrasah Logo" 
                className="w-16 h-16 lg:w-20 lg:h-20 object-contain rounded-full bg-white p-2"
              />
            </div>

            {/* Right - Arabic Name */}
            <div className="hidden lg:block text-right flex-1">
              <p className="text-sm font-arabic leading-relaxed">
                المدرسة الحافظية و القومية<br />تعليم الانسان و دار الايتام
              </p>
            </div>
          </div>
          
          {/* Bengali Names - Center */}
          <div className="text-center mt-2">
            <h1 className="text-lg lg:text-2xl font-bold font-bengali leading-tight">
              হাড়ীভাঙ্গা তা'লিমুল ইন্‌স্সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং
            </h1>
            <p className="text-xs lg:text-sm font-bengali mt-1">
              হাড়ীভাঙ্গা এয়ারপোর্ট সংলগ্ন, লালমনিরহাট।
            </p>
          </div>
        </div>
      </div>

      {/* Notice Bar */}
      <div className="bg-white border-y border-border py-2 px-4 overflow-hidden">
        <div className="container mx-auto flex items-center gap-4">
          <span className="font-bold text-destructive font-bengali whitespace-nowrap">
            নোটিশঃ
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap font-bengali">
              <span className="mx-8">🔔 ভর্তি চলছে - ২০২৫ শিক্ষাবর্ষের জন্য আবেদন করুন</span>
              <span className="mx-8">📚 কামিল ১ম ও ২য় পর্বের পরীক্ষার বিজ্ঞপ্তি প্রকাশিত</span>
              <span className="mx-8">📧 ই-মেইল পরিবর্তন সংক্রান্ত নোটিশ - বিস্তারিত দেখুন</span>
              <span className="mx-8">🎓 নতুন শিক্ষার্থীদের জন্য অরিয়েন্টেশন প্রোগ্রাম আগামী সপ্তাহে</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-islamic-dark-green text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-1 py-3 font-bengali flex-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="px-6 py-3 rounded transition-smooth font-semibold hover:bg-white/10 flex items-center gap-1">
                        {item.label} <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white min-w-[280px] shadow-xl border-2 border-primary/10">
                        {item.dropdown.map((subItem) => (
                          <DropdownMenuItem key={subItem.label} asChild>
                            <Link 
                              to={subItem.href} 
                              className="font-bengali cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-primary/5 transition-smooth group"
                            >
                              {subItem.icon && (
                                <subItem.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                              )}
                              <span className="group-hover:text-primary transition-colors">
                                {subItem.label}
                              </span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-6 py-3 rounded transition-smooth font-semibold ${
                        item.active
                          ? "bg-white text-primary"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                asChild
                className="bg-islamic-green hover:bg-islamic-green/90 text-white font-bengali font-bold border-2 border-white px-6 py-3 shadow-lg hover:shadow-xl transition-smooth"
              >
                <Link to="/donate">💝 দান করুন</Link>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Globe className="h-4 w-4" />
                    {language === "bn" ? "বাংলা" : "English"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem onClick={() => setLanguage("bn")} className="cursor-pointer">
                    বাংলা
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed top-0 right-0 bottom-0 w-80 bg-islamic-dark-green text-white z-50 lg:hidden animate-slide-in-right overflow-y-auto shadow-2xl">
              {/* Close Button */}
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <span className="font-bengali font-bold text-lg">মেনু</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-smooth"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="font-bengali py-4">
                {menuItems.map((item) => (
                  <li key={item.label} className="border-b border-white/5">
                    {item.dropdown ? (
                      <div>
                        <div className="flex items-center px-6 py-4 font-semibold text-white/90">
                          <ChevronDown className="h-4 w-4 mr-2" />
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="flex items-center px-10 py-3 hover:bg-white/10 transition-smooth text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.icon && (
                              <subItem.icon className="h-4 w-4 mr-3 text-islamic-green" />
                            )}
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center px-6 py-4 transition-smooth font-semibold ${
                          item.active
                            ? "bg-white text-primary"
                            : "hover:bg-white/10"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="p-6 space-y-3 border-t border-white/10">
                <Button 
                  asChild
                  className="w-full bg-islamic-green hover:bg-islamic-green/90 text-white font-bengali font-bold border-2 border-white shadow-lg"
                >
                  <Link to="/donate" onClick={() => setIsMenuOpen(false)}>💝 দান করুন</Link>
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10 font-bengali"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {language === "bn" ? "বাংলা" : "English"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
