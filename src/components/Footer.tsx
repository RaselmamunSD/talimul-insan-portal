import { Facebook, Youtube, Mail, Phone, Linkedin, Instagram, ArrowUp, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import madrasahLogo from "@/assets/madrasah-logo.png";

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
        {/* Mosque Skyline SVG Pattern at Top */}
        <div className="absolute top-0 left-0 right-0 h-32 opacity-40 text-islamic-gold">
          <svg
            viewBox="0 0 1440 200"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
            fill="currentColor"
          >
            <path d="M0 150 L50 140 L60 120 L65 100 L70 90 L75 100 L80 120 L90 140 L140 150 L150 130 L155 110 L160 90 L165 80 L170 90 L175 110 L180 130 L230 150 L240 135 L245 120 L250 100 L255 85 L260 100 L265 120 L270 135 L320 150 L330 125 L335 100 L340 80 L345 70 L350 80 L355 100 L360 125 L410 150 L420 130 L425 110 L430 95 L435 85 L440 95 L445 110 L450 130 L500 150 L510 135 L515 115 L520 95 L525 80 L530 95 L535 115 L540 135 L590 150 L600 125 L605 105 L610 85 L615 70 L620 85 L625 105 L630 125 L680 150 L690 130 L695 110 L700 90 L705 75 L710 90 L715 110 L720 130 L770 150 L780 135 L785 115 L790 95 L795 85 L800 95 L805 115 L810 135 L860 150 L870 125 L875 105 L880 85 L885 75 L890 85 L895 105 L900 125 L950 150 L960 130 L965 110 L970 90 L975 80 L980 90 L985 110 L990 130 L1040 150 L1050 135 L1055 115 L1060 95 L1065 85 L1070 95 L1075 115 L1080 135 L1130 150 L1140 125 L1145 105 L1150 85 L1155 75 L1160 85 L1165 105 L1170 125 L1220 150 L1230 130 L1235 110 L1240 90 L1245 80 L1250 90 L1255 110 L1260 130 L1310 150 L1320 135 L1325 115 L1330 95 L1335 85 L1340 95 L1345 115 L1350 135 L1440 150 L1440 200 L0 200 Z" />
          </svg>
        </div>

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

          {/* Bottom Copyright Section */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-white/70 font-bengali text-center md:text-left">
                © {currentYear} তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং | সর্বস্বত্ব সংরক্ষিত।
              </p>
              <p className="text-white/60 text-xs font-english">
                Designed & Developed by <span className="text-islamic-gold">American Best IT Limited</span>
              </p>
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
