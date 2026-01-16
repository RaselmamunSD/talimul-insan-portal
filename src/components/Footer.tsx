import { Facebook, Youtube, Mail, Phone, Linkedin, Instagram, ArrowUp, MapPin, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import madrasahLogo from "@/assets/madrasah-logo-new.png";
import mosqueSkyline from "@/assets/mosque-skyline.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = {
    aboutUs: [
      { label: "মুহতামিমের বাণী", href: "/principal-message" },
      { label: "কমিটি বিন্দু", href: "/committee" },
      { label: "প্রতিষ্ঠার লক্ষ্য", href: "/goals" },
      { label: "বৈশিষ্ট্য", href: "/features" },
      { label: "শিক্ষক পরিচিতি", href: "/teachers" },
    ],
    guidance: [
      { label: "হিফজুল কুরআন", href: "/hifz-department" },
      { label: "কওমী বিভাগ", href: "/qawmi-department" },
      { label: "নূরানী বিভাগ", href: "/nurani-department" },
      { label: "রিভিশন", href: "/revision" },
      { label: "ছাত্র পরিচিতি", href: "/students" },
    ],
    facilities: [
      { label: "আবাসিক হল", href: "/residential-halls" },
      { label: "আবাসন চার্জ", href: "/accommodation-charges" },
      { label: "লিল্লাহ বোডিং", href: "/lillah-boarding" },
      { label: "দৈনিক কার্যসূচি", href: "/daily-schedule" },
      { label: "গ্যালারি", href: "/gallery" },
    ],
  };

  return (
    <>
      <footer className="relative bg-gradient-to-b from-islamic-dark-green via-[hsl(148,68%,18%)] to-[hsl(148,70%,12%)] text-white overflow-hidden">
        {/* Mosque Skyline Background Image at Top */}
        <div 
          className="absolute top-0 left-0 right-0 h-40 bg-no-repeat bg-center bg-cover opacity-30"
          style={{
            backgroundImage: `url(${mosqueSkyline})`,
            backgroundPosition: 'center bottom'
          }}
        />

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="islamic-pattern h-full w-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-6 sm:pb-8 relative z-10">

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
            {/* Company Info - Logo, Name, Address, Contact, Social */}
            <div className="space-y-4 sm:space-y-5 col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/5 backdrop-blur-sm p-1.5 sm:p-2 border border-islamic-gold/30">
                  <img 
                    src={madrasahLogo} 
                    alt="Madrasah Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bengali font-bold text-base sm:text-lg text-islamic-gold">
                    তা'লিমুল ইন্সান
                  </h3>
                  <p className="text-xs text-white/70 font-bengali">
                    হাফেজিয়া মাদ্রাসা
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-islamic-gold" />
                <p className="font-bengali leading-relaxed">
                  হাড়ীভাঙ্গা এয়ারপোর্ট সংলগ্ন,<br />
                  লালমনিরহাট, বাংলাদেশ
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0 text-islamic-gold" />
                <span>+880 1XXX-XXXXXX</span>
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <p className="font-bengali text-xs sm:text-sm mb-2 sm:mb-3 text-white/90">আমাদের সাথে যুক্ত থাকুন</p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 sm:w-9 sm:h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* About Us Column */}
            <div>
              <h4 className="font-bengali font-bold text-sm sm:text-base mb-3 sm:mb-5 text-islamic-gold border-b border-islamic-gold/30 pb-2">
                আমাদের সম্পর্কে
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.aboutUs.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-xs sm:text-sm text-white/75 hover:text-islamic-green transition-all duration-300 inline-block relative story-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidance Column */}
            <div>
              <h4 className="font-bengali font-bold text-sm sm:text-base mb-3 sm:mb-5 text-islamic-gold border-b border-islamic-gold/30 pb-2">
                শিক্ষা নির্দেশনা
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.guidance.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-xs sm:text-sm text-white/75 hover:text-islamic-green transition-all duration-300 inline-block relative story-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilities Column */}
            <div>
              <h4 className="font-bengali font-bold text-sm sm:text-base mb-3 sm:mb-5 text-islamic-gold border-b border-islamic-gold/30 pb-2">
                সুবিধাসমূহ
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.facilities.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-xs sm:text-sm text-white/75 hover:text-islamic-green transition-all duration-300 inline-block relative story-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Developer Bar */}
          <div className="border-t border-white/10 pt-4 sm:pt-6 pb-3 sm:pb-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-8">
              <a 
                href="https://higzendev.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 group transition-all duration-300 px-3 sm:px-4 py-2 rounded-lg hover:bg-islamic-green/20"
              >
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-islamic-gold group-hover:text-islamic-green transition-colors duration-300" />
                <span className="text-white/80 font-bengali text-xs sm:text-sm group-hover:text-islamic-green transition-colors duration-300">ডেভেলপার:</span>
                <span className="text-islamic-gold font-english font-semibold text-sm sm:text-base group-hover:text-islamic-green transition-colors duration-300">HigzenDev</span>
              </a>
              <div className="flex gap-2">
                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-green hover:text-white transition-all duration-300 hover:scale-110">
                  <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-green hover:text-white transition-all duration-300 hover:scale-110">
                  <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-green hover:text-white transition-all duration-300 hover:scale-110">
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button - Inside Footer, Left Side */}
          {showScrollTop && (
            <div className="flex justify-start mb-3">
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-islamic-green hover:bg-islamic-green/90 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Bottom Copyright Bar */}
          <div className="border-t border-white/10 py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 md:gap-6">
                <Link to="/privacy-policy" className="text-white/70 hover:text-islamic-green font-bengali text-xs sm:text-sm transition-colors duration-300">
                  গোপনীয়তা নীতি
                </Link>
                <Link to="/terms" className="text-white/70 hover:text-islamic-green font-bengali text-xs sm:text-sm transition-colors duration-300">
                  শর্তাবলী
                </Link>
                <Link to="/developer" className="flex items-center gap-1 text-white/70 hover:text-islamic-green transition-colors duration-300 group">
                  <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-islamic-gold group-hover:text-islamic-green transition-colors duration-300" />
                  <span className="font-bengali text-xs sm:text-sm">ডেভেলপার</span>
                </Link>
              </div>
              <p className="text-white/70 font-bengali text-center sm:text-right text-xs sm:text-sm">
                © {currentYear} তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা | সর্বস্বত্ব সংরক্ষিত।
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
