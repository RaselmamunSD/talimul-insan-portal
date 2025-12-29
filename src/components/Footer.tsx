import { Facebook, Youtube, Mail, Phone, Linkedin, Instagram, ArrowUp, MapPin, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import madrasahLogo from "@/assets/madrasah-logo.png";
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
      <footer className="relative bg-gradient-to-b from-[hsl(200,60%,15%)] via-[hsl(200,65%,10%)] to-[hsl(200,70%,8%)] text-white overflow-hidden">
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

        <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Company Info - Logo, Name, Address, Contact, Social */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm p-2 border border-islamic-gold/30">
                  <img 
                    src={madrasahLogo} 
                    alt="Madrasah Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bengali font-bold text-lg text-islamic-gold">
                    তা'লিমুল ইন্সান
                  </h3>
                  <p className="text-xs text-white/70 font-bengali">
                    হাফেজিয়া মাদ্রাসা
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-islamic-gold" />
                <p className="font-bengali leading-relaxed">
                  হাড়ীভাঙ্গা এয়ারপোর্ট সংলগ্ন,<br />
                  লালমনিরহাট, বাংলাদেশ
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0 text-islamic-gold" />
                <span>+880 1XXX-XXXXXX</span>
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <p className="font-bengali text-sm mb-3 text-white/90">আমাদের সাথে যুক্ত থাকুন</p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* About Us Column */}
            <div>
              <h4 className="font-bengali font-bold text-base mb-5 text-islamic-gold border-b border-islamic-gold/30 pb-2">
                আমাদের সম্পর্কে
              </h4>
              <ul className="space-y-2">
                {links.aboutUs.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-sm text-white/75 hover:text-islamic-gold transition-all duration-300 inline-block relative story-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidance Column */}
            <div>
              <h4 className="font-bengali font-bold text-base mb-5 text-islamic-gold border-b border-islamic-gold/30 pb-2">
                শিক্ষা নির্দেশনা
              </h4>
              <ul className="space-y-2">
                {links.guidance.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-sm text-white/75 hover:text-islamic-gold transition-all duration-300 inline-block relative story-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilities Column */}
            <div>
              <h4 className="font-bengali font-bold text-base mb-5 text-islamic-gold border-b border-islamic-gold/30 pb-2">
                সুবিধাসমূহ
              </h4>
              <ul className="space-y-2">
                {links.facilities.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-sm text-white/75 hover:text-islamic-gold transition-all duration-300 inline-block relative story-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Developer Bar */}
          <div className="border-t border-white/10 pt-6 pb-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              <a 
                href="https://higzendev.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 group transition-all duration-300"
              >
                <Code2 className="w-4 h-4 text-islamic-gold group-hover:text-white transition-colors duration-300" />
                <span className="text-white/80 font-bengali text-sm group-hover:text-islamic-gold transition-colors duration-300">ডেভেলপার:</span>
                <span className="text-islamic-gold font-english font-semibold group-hover:text-white transition-colors duration-300">HigzenDev</span>
              </a>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] transition-all duration-300">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] transition-all duration-300">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-islamic-gold hover:text-[hsl(200,70%,8%)] transition-all duration-300">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="border-t border-white/10 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-white/70 font-bengali text-center md:text-left">
                © {currentYear} তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা | সর্বস্বত্ব সংরক্ষিত।
              </p>
              
              <div className="flex items-center gap-4 md:gap-6">
                <Link to="/privacy-policy" className="text-white/70 hover:text-islamic-gold font-bengali text-sm transition-colors duration-300">
                  গোপনীয়তা নীতি
                </Link>
                <Link to="/terms" className="text-white/70 hover:text-islamic-gold font-bengali text-sm transition-colors duration-300">
                  শর্তাবলী
                </Link>
                <Link to="/developer" className="flex items-center gap-1 text-white/70 hover:text-islamic-gold transition-colors duration-300 group">
                  <Code2 className="w-3.5 h-3.5 text-islamic-gold group-hover:text-white transition-colors duration-300" />
                  <span className="font-bengali text-sm">ডেভেলপার</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-islamic-gold text-[hsl(200,70%,8%)] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Footer;
