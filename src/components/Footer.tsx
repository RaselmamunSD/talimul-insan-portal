import { Facebook, Youtube, Mail, Phone } from "lucide-react";
import madrasahLogo from "@/assets/madrasah-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    quick: [
      { label: "হোম", href: "#home" },
      { label: "পরিচিতি", href: "#about" },
      { label: "ভর্তি", href: "#admission" },
      { label: "যোগাযোগ", href: "#contact" },
    ],
    programs: [
      { label: "হিফজুল কুরআন", href: "#programs" },
      { label: "কওমী শিক্ষা", href: "#programs" },
      { label: "নূরানী বিভাগ", href: "#programs" },
      { label: "লিল্লাহ বোডিং", href: "#programs" },
    ],
  };

  return (
    <footer className="bg-islamic-dark-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={madrasahLogo} 
                alt="Madrasah Logo" 
                className="w-16 h-16 rounded-full bg-white p-2"
              />
              <div>
                <h3 className="font-bengali font-bold text-lg">
                  তা'লিমুল ইন্সান
                </h3>
                <p className="text-sm text-secondary">
                  হাফেজিয়া মাদ্রাসা
                </p>
              </div>
            </div>
            <p className="text-sm font-bengali leading-relaxed">
              কুরআন ও হাদিসের শিক্ষায় আলোকিত একটি আদর্শ প্রতিষ্ঠান। 
              এতিম ও অসহায়দের সেবায় নিবেদিত।
            </p>
            <p className="text-xs font-arabic text-secondary">
              المدرسة الحافظية و القومية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bengali font-bold text-lg mb-4 border-b border-white/20 pb-2">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2">
              {links.quick.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-bengali text-sm hover:text-secondary transition-smooth flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bengali font-bold text-lg mb-4 border-b border-white/20 pb-2">
              কার্যক্রম
            </h4>
            <ul className="space-y-2">
              {links.programs.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-bengali text-sm hover:text-secondary transition-smooth flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bengali font-bold text-lg mb-4 border-b border-white/20 pb-2">
              যোগাযোগ করুন
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="break-all">info@talimulinsanmadrasah.com</span>
              </div>
              
              <div className="pt-4">
                <p className="font-bengali text-sm mb-3">সোশ্যাল মিডিয়া</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-smooth"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-smooth"
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
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm font-bengali">
            © {currentYear} তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা ও লিল্লাহ বোডিং। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-xs text-secondary mt-2 font-english">
            Madrasah Code: 11004 | EIIN: 107906
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
