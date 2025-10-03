import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
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
        { label: "শিক্ষক পরিচিতি", href: "/teachers" },
        { label: "হাফেজ ছাত্রের পরিচিতি", href: "/students" }
      ]
    },
    { label: "ভর্তি", href: "/admission" },
    { label: "নিউজ", href: "/news" },
    { label: "গ্যালারি", href: "/gallery" },
    { label: "মিডিয়া", href: "/media" },
    { label: "যোগাযোগ", href: "/contact" },
  ];

  return (
    <header className="w-full shadow-elegant">
      {/* Top Bar */}
      <div className="bg-white text-foreground py-2 px-4 border-b">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-semibold">Madrasah Code: 11004</span>
            <span className="font-semibold">EIIN: 107906</span>
          </div>
          
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-semibold">
                🕐 {formatTime(currentTime)}
              </span>
              <span className="font-semibold">📅 {formatDate(currentTime)}</span>
            </div>
            
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
      <div className="bg-islamic-green text-white py-4 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={madrasahLogo} 
                alt="Madrasah Logo" 
                className="w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-full bg-white p-2"
              />
            </div>

            {/* Center - Names */}
            <div className="flex-1 text-center space-y-1">
              <h1 className="text-xl lg:text-3xl font-bold font-bengali leading-tight">
                হাড়ীভাঙ্গা তা'লিমুল ইন্‌স্সান হাফেজিয়া কওমী মাদ্রাসা
              </h1>
              <h2 className="text-base lg:text-xl font-bold font-bengali">
                ও লিল্লাহ বোডিং
              </h2>
              <p className="text-sm lg:text-base font-bengali">
                হাড়ীভাঙ্গা এয়ারপোর্ট সংলগ্ন, লালমনিরহাট।
              </p>
              
              <p className="text-lg lg:text-2xl font-arabic text-islamic-gold leading-relaxed mt-2">
                المدرسة الحافظية و القومية تعليم الانسان و دار الايتام
              </p>
              
              <p className="text-base lg:text-lg font-english text-islamic-orange font-semibold mt-1">
                Harivanga Talimul Insan Hafizia Qawmi Madrasah & Lillah Boarding
              </p>
            </div>
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
      <nav className="bg-primary/95 text-white sticky top-0 z-50">
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
                      <DropdownMenuContent className="bg-white">
                        {item.dropdown.map((subItem) => (
                          <DropdownMenuItem key={subItem.label} asChild>
                            <Link to={subItem.href} className="font-bengali cursor-pointer">
                              {subItem.label}
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
                className="bg-islamic-gold hover:bg-islamic-gold/90 text-white font-bengali font-bold animate-glow"
              >
                <Link to="/donate">দান করুন</Link>
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4">
              <ul className="font-bengali">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    {item.dropdown ? (
                      <div>
                        <div className="block px-4 py-3 font-semibold">
                          {item.label}
                        </div>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-8 py-2 hover:bg-white/10"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 rounded transition-smooth font-semibold ${
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
              <div className="mt-4 px-4 space-y-2">
                <Button 
                  asChild
                  className="w-full bg-islamic-gold hover:bg-islamic-gold/90 text-white font-bengali font-bold"
                >
                  <Link to="/donate">দান করুন</Link>
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
