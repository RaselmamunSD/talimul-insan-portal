import { Facebook, Youtube, Mail, Phone, Linkedin, Instagram, ArrowUp, MapPin, Code2, Send, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import madrasahLogo from "@/assets/madrasah-logo-new.png";
import footerMosqueBg from "@/assets/footer-mosque-bg.jpeg";

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

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-600" },
    { icon: Youtube, label: "YouTube", href: "#", color: "hover:bg-red-600" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-700" },
  ];

  return (
    <>
      <footer className="relative text-white overflow-hidden">
        {/* Full Footer Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${footerMosqueBg})`
          }}
        />
        
        {/* Vibrant Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(148,72%,18%)]/95 via-[hsl(148,68%,22%)]/90 to-[hsl(148,65%,15%)]/95" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Top Decorative Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 relative z-10">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            
            {/* Company Info Section */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-6">
              {/* Logo and Brand */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/10 backdrop-blur-md p-2 border border-white/20 shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-105">
                  <img 
                    src={madrasahLogo} 
                    alt="Madrasah Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bengali font-bold text-xl sm:text-2xl bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text text-transparent">
                    তা'লিমুল ইন্সান
                  </h3>
                  <p className="text-sm text-white/80 font-bengali tracking-wide">
                    হাফেজিয়া মাদ্রাসা
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-300">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="text-sm text-white/85 font-bengali leading-relaxed group-hover:text-white transition-colors duration-300">
                    হাড়ীভাঙ্গা এয়ারপোর্ট সংলগ্ন,<br />
                    লালমনিরহাট, বাংলাদেশ
                  </div>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-300">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm text-white/85 group-hover:text-white transition-colors duration-300">
                    +880 1XXX-XXXXXX
                  </span>
                </div>

                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/30 transition-all duration-300">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm text-white/85 group-hover:text-white transition-colors duration-300">
                    info@talimul-insan.com
                  </span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-2">
                <p className="font-bengali text-sm mb-4 text-white/90 font-medium">আমাদের সাথে যুক্ত থাকুন</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 ${social.color} hover:border-transparent transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* About Us Column */}
            <div className="space-y-5">
              <h4 className="font-bengali font-bold text-lg text-white relative inline-block">
                আমাদের সম্পর্কে
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
              </h4>
              <ul className="space-y-3 pt-2">
                {links.aboutUs.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-sm text-white/75 hover:text-emerald-300 transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guidance Column */}
            <div className="space-y-5">
              <h4 className="font-bengali font-bold text-lg text-white relative inline-block">
                শিক্ষা নির্দেশনা
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
              </h4>
              <ul className="space-y-3 pt-2">
                {links.guidance.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-sm text-white/75 hover:text-emerald-300 transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Facilities Column */}
            <div className="space-y-5">
              <h4 className="font-bengali font-bold text-lg text-white relative inline-block">
                সুবিধাসমূহ
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-transparent rounded-full" />
              </h4>
              <ul className="space-y-3 pt-2">
                {links.facilities.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="font-bengali text-sm text-white/75 hover:text-emerald-300 transition-all duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Developer Bar */}
          <div className="border-t border-white/10 pt-8 pb-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
              <a 
                href="https://higzendev.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/70 font-bengali text-sm">ডেভেলপার:</span>
                  <span className="text-emerald-300 font-english font-semibold text-base group-hover:text-emerald-200 transition-colors duration-300">HigzenDev</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/50 group-hover:text-emerald-300 transition-colors duration-300" />
                </div>
              </a>
              <div className="flex gap-2">
                {[Facebook, Youtube, Instagram].map((Icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <div className="flex justify-start mb-4">
              <button
                onClick={scrollToTop}
                className="group relative w-14 h-14 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 hover:from-emerald-400 hover:via-green-400 hover:to-teal-500 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-900/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 animate-fade-in"
                aria-label="Scroll to top"
              >
                <span className="absolute inset-0 rounded-2xl bg-emerald-400/30 animate-ping opacity-60"></span>
                <span className="absolute inset-1 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></span>
                <ArrowUp className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
              </button>
            </div>
          )}

          {/* Bottom Copyright Bar */}
          <div className="border-t border-white/10 py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
                <Link 
                  to="/privacy-policy" 
                  className="text-white/60 hover:text-emerald-300 font-bengali text-sm transition-all duration-300 hover:translate-x-0.5"
                >
                  গোপনীয়তা নীতি
                </Link>
                <span className="text-white/30 hidden sm:inline">|</span>
                <Link 
                  to="/terms" 
                  className="text-white/60 hover:text-emerald-300 font-bengali text-sm transition-all duration-300 hover:translate-x-0.5"
                >
                  শর্তাবলী
                </Link>
                <span className="text-white/30 hidden sm:inline">|</span>
                <Link 
                  to="/developer" 
                  className="flex items-center gap-1.5 text-white/60 hover:text-emerald-300 transition-all duration-300 group hover:translate-x-0.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-emerald-500 group-hover:text-emerald-300 transition-colors duration-300" />
                  <span className="font-bengali text-sm">ডেভেলপার</span>
                </Link>
              </div>
              <p className="text-white/60 font-bengali text-center sm:text-right text-sm">
                © {currentYear} তা'লিমুল ইন্সান হাফেজিয়া কওমী মাদ্রাসা | সর্বস্বত্ব সংরক্ষিত
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
