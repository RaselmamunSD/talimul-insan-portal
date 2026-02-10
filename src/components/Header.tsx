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
import madrasahLogo from "@/assets/madrasah-logo-new.webp";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"bn" | "en">("bn");
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

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
      href: "/principal-message", 
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
      href: "/hifz-department", 
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
      href: "/residential-halls", 
      dropdown: [
        { label: "আবাসিক হল ও পরিচালকবৃন্দ", href: "/residential-halls", icon: Building },
        { label: "আবাসন চার্জ", href: "/accommodation-charges", icon: DollarSign },
        { label: "আবাসিক নীতিমাল", href: "/residential-policies", icon: FileText },
        { label: "দৈনিক আবাসিক কার্যসূচি", href: "/daily-schedule", icon: Clock }
      ]
    },
    { 
      label: "ভর্তি", 
      href: "/admission-time", 
      dropdown: [
        { label: "ভর্তির সময়", href: "/admission-time", icon: Clock },
        { label: "ভর্তি পরীক্ষা", href: "/admission-exam", icon: ClipboardCheck },
        { label: "ভর্তির শর্তাবলী", href: "/admission-terms", icon: FileText }
      ]
    },
    { label: "নোটিশ", href: "/news" },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "মিডিয়া", href: "/media" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <>
      <header className="w-full shadow-elegant bg-background">
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-white text-foreground py-2 px-4 border-b">
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
      <div className="bg-gradient-to-r from-islamic-dark-green via-islamic-green to-islamic-dark-green text-white py-3 px-4 relative overflow-hidden">
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4">
            {/* Left - English Name */}
            <div className="hidden lg:block text-left flex-1">
              <h2 className="text-sm font-english font-semibold leading-tight">
                Talimul Insan Hafizia Qawmi Madrasah & Lillah Boarding
              </h2>
            </div>

            {/* Center - Logo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-white/40 rounded-full blur-md animate-pulse"></div>
                <img 
                  src={madrasahLogo} 
                  alt="Madrasah Logo" 
                  className="relative w-20 h-20 lg:w-28 lg:h-28 object-contain rounded-full bg-white p-2 shadow-[0_0_20px_rgba(255,255,255,0.5),0_0_40px_rgba(34,197,94,0.3)]"
                />
              </div>
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
              হাড়ীভাঙ্গা তা'লিমুল ইনসান হাফেজিয়া,কওমী মাদ্রাসা ও লিল্লাহ বোর্ডিং
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

      </header>

      {/* Navigation Menu */}
      <nav className="bg-gradient-to-r from-islamic-dark-green via-islamic-green/90 to-islamic-dark-green text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-auto">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} className="transition-transform duration-300 rotate-90" /> : <Menu size={28} className="transition-transform duration-300" />}
            </button>

            {/* Mobile Donate Button */}
            <div className="lg:hidden">
              <Button 
                asChild
                className="bg-islamic-green hover:bg-islamic-green/90 hover:scale-105 text-white font-bengali font-bold border-2 border-white px-4 py-2 text-sm shadow-lg animate-electric-glow transition-all duration-300"
              >
                <Link to="/donate"> দান করুন</Link>
              </Button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-1 py-3 font-bengali flex-1">
              {menuItems.map((item) => (
                <li key={item.label}>
                  {item.dropdown ? (
                    <DropdownMenu open={hoveredMenu === item.label} onOpenChange={(open) => !open && setHoveredMenu(null)}>
                      <div 
                        onMouseEnter={() => setHoveredMenu(item.label)}
                        onMouseLeave={() => setHoveredMenu(null)}
                      >
                        <DropdownMenuTrigger asChild>
                          <Link
                            to={item.href}
                            className="nav-link px-6 py-3 rounded transition-smooth font-semibold hover:bg-white/10 inline-flex items-center whitespace-nowrap group leading-none"
                          >
                            {item.label}
                            <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-y-0.5" />
                          </Link>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                          className="bg-white min-w-[280px] shadow-xl border-2 border-primary/10 dropdown-animate"
                          onMouseEnter={() => setHoveredMenu(item.label)}
                          onMouseLeave={() => setHoveredMenu(null)}
                        >
                          {item.dropdown.map((subItem, index) => (
                            <DropdownMenuItem 
                              key={subItem.label} 
                              asChild
                              className="transition-all duration-200 border border-transparent hover:border-primary/20 hover:shadow-lg rounded-lg mb-1"
                              style={{ animationDelay: `${index * 30}ms` }}
                            >
                              <Link 
                                to={subItem.href} 
                                className="font-bengali cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-primary/10 hover:via-accent/5 hover:to-islamic-teal/10 transition-all duration-300 group relative overflow-hidden rounded-lg"
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-islamic-teal/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                {subItem.icon && (
                                  <subItem.icon className="h-5 w-5 text-primary group-hover:text-islamic-teal group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 relative z-10 drop-shadow-md" />
                                )}
                                <span className="group-hover:text-primary group-hover:translate-x-1 group-hover:font-semibold transition-all duration-300 relative z-10">
                                  {subItem.label}
                                </span>
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </div>
                    </DropdownMenu>
                  ) : (
                    <Link
                      to={item.href}
                      className={`nav-link px-6 py-3 rounded transition-all duration-300 font-semibold inline-block ${
                        item.active
                          ? "bg-white text-primary shadow-md"
                          : "hover:bg-white/10 hover:-translate-y-0.5"
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
                className="bg-islamic-green hover:bg-islamic-green/90 hover:scale-105 text-white font-bengali font-bold border-2 border-white px-6 py-3 shadow-lg hover:shadow-2xl transition-all duration-300 animate-electric-glow"
              >
                <Link to="/donate"> দান করুন</Link>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 hover:bg-white/20 transition-all duration-300">
                    <Globe className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
                    {language === "bn" ? "বাংলা" : "English"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white dropdown-animate">
                  <DropdownMenuItem onClick={() => setLanguage("bn")} className="cursor-pointer hover:bg-primary/5 transition-colors">
                    বাংলা
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer hover:bg-primary/5 transition-colors">
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
              onClick={() => setIsMenuOpen(false)}
            />
          )}

          {/* Mobile Menu */}
          <div 
            className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-b from-islamic-dark-green to-islamic-dark-green/95 text-white z-50 lg:hidden overflow-y-auto shadow-2xl transition-transform duration-300 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Pattern */}
            <div className="relative bg-gradient-to-r from-primary to-islamic-green p-6 border-b border-white/20">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
              </div>
              <div className="relative flex justify-between items-center">
                <div>
                  <span className="font-bengali font-bold text-xl text-white drop-shadow-lg">MTIHQML</span>
                  <p className="font-bengali text-xs text-white/80 mt-1">হাড়ীভাঙ্গা তা'লিমুল ইনসান হাফেজিয়া,কওমী মাদ্রাসা ও লিল্লাহ বোর্ডিং</p>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2.5 hover:bg-white/20 rounded-full transition-all duration-200 hover:rotate-90"
                  aria-label="Close menu"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
            </div>

            <ul className="font-bengali py-2">
              {menuItems.map((item, index) => (
                <li 
                  key={item.label} 
                  className="border-b border-white/5"
                  style={{ 
                    animation: isMenuOpen ? `fade-in 0.3s ease-out ${index * 0.05}s both` : 'none'
                  }}
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="w-full flex items-center justify-between px-6 py-4 font-semibold text-white hover:bg-white/10 transition-all duration-300 active:bg-white/20 group"
                      >
                        <span className="text-[15px] group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                        <ChevronDown 
                          className={`h-5 w-5 transition-all duration-300 ${
                            openDropdowns.includes(item.label) ? 'rotate-180 text-islamic-green' : 'text-white/60 group-hover:translate-y-0.5'
                          }`} 
                        />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openDropdowns.includes(item.label) 
                            ? 'max-h-[600px] opacity-100' 
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="bg-white/5 backdrop-blur-sm">
                          {item.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="flex items-center gap-3 px-8 py-3.5 hover:bg-gradient-to-r hover:from-islamic-green/20 hover:to-islamic-teal/20 hover:pl-10 transition-all duration-300 text-sm text-white/90 hover:text-white border-l-2 border-transparent hover:border-islamic-green group relative overflow-hidden"
                              onClick={() => setIsMenuOpen(false)}
                              style={{
                                animation: openDropdowns.includes(item.label) 
                                  ? `fade-in 0.2s ease-out ${subIndex * 0.05}s both` 
                                  : 'none'
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-islamic-teal/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                              {subItem.icon && (
                                <subItem.icon className="h-4 w-4 text-islamic-green flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10" />
                              )}
                              <span className="leading-tight relative z-10">{subItem.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center px-6 py-4 transition-all duration-300 font-semibold text-[15px] relative group overflow-hidden ${
                        item.active
                          ? "bg-gradient-to-r from-islamic-green to-islamic-green/80 text-white shadow-lg"
                          : "hover:bg-white/10 text-white/90 hover:text-white active:bg-white/20 hover:pl-8"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-islamic-teal/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="p-6 space-y-3 border-t border-white/10 mt-auto">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-islamic-green to-primary hover:from-islamic-green/90 hover:to-primary/90 hover:scale-105 text-white font-bengali font-bold border border-white/20 shadow-lg transition-all duration-300"
              >
                <Link to="/donate" onClick={() => setIsMenuOpen(false)}> <b> দান করুন </b> </Link>
              </Button>
              
              <Button
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/20 hover:scale-105 font-bengali backdrop-blur-sm transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === "bn" ? "বাংলা" : "English"}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
