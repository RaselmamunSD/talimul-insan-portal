import { Facebook, Youtube, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import madrasahLogo from "@/assets/madrasah-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    quick: [
      { label: "হোম", href: "/" },
      { label: "পরিচিতি", href: "/principal-message" },
      { label: "ভর্তি", href: "/admission-time" },
      { label: "যোগাযোগ", href: "/contact" },
    ],
    programs: [
      { label: "হিফজুল কুরআন", href: "/hifz-department" },
      { label: "কওমী শিক্ষা", href: "/qawmi-department" },
      { label: "নূরানী বিভাগ", href: "/nurani-department" },
      { label: "লিল্লাহ বোডিং", href: "/lillah-boarding" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-islamic-dark-green to-islamic-darker text-white overflow-hidden">
      {/* Mosque Skyline SVG Pattern at Top */}
      <div className="absolute top-0 left-0 right-0 h-32 opacity-30">
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
      <div className="absolute inset-0 opacity-5">
        <div className="islamic-pattern h-full w-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm p-3 border border-white/20">
                <img 
                  src={madrasahLogo} 
                  alt="Madrasah Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bengali font-bold text-xl">
                  তা'লিমুল ইন্সান
                </h3>
                <p className="text-sm text-islamic-gold">
                  হাফেজিয়া মাদ্রাসা
                </p>
              </div>
            </div>
            <p className="text-sm font-bengali leading-relaxed text-white/80">
              কুরআন ও হাদিসের শিক্ষায় আলোকিত একটি আদর্শ প্রতিষ্ঠান। 
              এতিম ও অসহায়দের সেবায় নিবেদিত।
            </p>
            <p className="text-sm font-arabic text-islamic-gold">
              المدرسة الحافظية و القومية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bengali font-bold text-lg mb-6 text-islamic-gold">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2">
              {links.quick.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-bengali text-sm text-white/80 hover:text-islamic-gold hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-islamic-gold">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bengali font-bold text-lg mb-6 text-islamic-gold">
              কার্যক্রম
            </h4>
            <ul className="space-y-2">
              {links.programs.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="font-bengali text-sm text-white/80 hover:text-islamic-gold hover:translate-x-1 transition-all duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-islamic-gold">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bengali font-bold text-lg mb-6 text-islamic-gold">
              যোগাযোগ করুন
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/80">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-islamic-gold" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-islamic-gold" />
                <span className="break-all">info@talimulinsanmadrasah.com</span>
              </div>
              
              <div className="pt-4">
                <p className="font-bengali text-sm mb-4 text-islamic-gold">সোশ্যাল মিডিয়া</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-islamic-dark-green border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-islamic-gold hover:text-islamic-dark-green border border-white/10 hover:border-islamic-gold transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="text-center mb-4">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Link to="/terms" className="text-sm font-bengali text-white/80 hover:text-islamic-gold transition-smooth">
                শর্তবলী
              </Link>
              <span className="text-white/30">|</span>
              <Link to="/privacy-policy" className="text-sm font-bengali text-white/80 hover:text-islamic-gold transition-smooth">
                গোপনীয়তা নীতি
              </Link>
              <span className="text-white/30">|</span>
              <Link to="/help" className="text-sm font-bengali text-white/80 hover:text-islamic-gold transition-smooth">
                সাহায্য
              </Link>
            </div>
          </div>
          <p className="text-sm font-bengali text-center text-white/70">
            © {currentYear} তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-xs text-islamic-gold mt-2 font-english text-center">
            Madrasah Code: 11004 | EIIN: 107906
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
