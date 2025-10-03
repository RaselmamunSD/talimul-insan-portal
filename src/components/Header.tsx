import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import madrasahLogo from "@/assets/madrasah-logo.png";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { label: "হোম", href: "#home", active: true },
    { label: "পরিচিতি", href: "#about" },
    { label: "ভর্তি", href: "#admission" },
    { label: "মিডিয়া", href: "#media" },
    { label: "যোগাযোগ", href: "#contact" },
  ];

  return (
    <header className="w-full shadow-elegant">
      {/* Top Bar */}
      <div className="bg-secondary text-foreground py-2 px-4">
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
            
            <Button 
              variant="default" 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bengali"
            >
              অনলাইন আবেদন <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-white py-6 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={madrasahLogo} 
                alt="Madrasah Logo" 
                className="w-24 h-24 lg:w-28 lg:h-28 object-contain rounded-full bg-white p-2"
              />
            </div>

            {/* Center - Names */}
            <div className="flex-1 text-center space-y-2">
              <h1 className="text-2xl lg:text-4xl font-bold font-bengali leading-tight">
                হাড়ীভাঙ্গা তা'লিমুল ইন্‌স্সান হাফেজিয়া কওমী মাদ্রাসা
              </h1>
              <h2 className="text-lg lg:text-2xl font-bold font-bengali">
                ও লিল্লাহ বোডিং
              </h2>
              <p className="text-base lg:text-lg font-bengali">
                হাড়ীভাঙ্গা এয়ারপোর্ট সংলগ্ন, লালমনিরহাট।
              </p>
              
              <p className="text-xl lg:text-3xl font-arabic text-secondary leading-relaxed mt-3">
                المدرسة الحافظية و القومية تعليم الانسان و دار الايتام
              </p>
              
              <p className="text-lg lg:text-xl font-english text-accent font-semibold mt-2">
                Harivanga Talimul Insan Hafizia Qawmi Madrasah & Lillah Boarding
              </p>
            </div>

            {/* Right - Building Image */}
            <div className="flex-shrink-0 hidden lg:block">
              <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full bg-white/10 flex items-center justify-center text-6xl">
                  🕌
                </div>
              </div>
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
          <div className="flex items-center justify-between lg:justify-start">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-1 py-3 font-bengali">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`px-6 py-3 rounded transition-smooth font-semibold ${
                      item.active
                        ? "bg-white text-primary"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <ul className="lg:hidden pb-4 font-bengali">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block px-4 py-3 rounded transition-smooth font-semibold ${
                      item.active
                        ? "bg-white text-primary"
                        : "hover:bg-white/10"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
