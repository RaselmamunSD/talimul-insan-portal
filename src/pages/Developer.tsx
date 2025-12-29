import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Code2, Globe, Mail, Phone, Facebook, Linkedin, Instagram, Youtube, ExternalLink, CheckCircle2, Sparkles } from "lucide-react";

const Developer = () => {
  const services = [
    "ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট",
    "মোবাইল অ্যাপ ডেভেলপমেন্ট",
    "ই-কমার্স সলিউশন",
    "কাস্টম সফটওয়্যার ডেভেলপমেন্ট",
    "UI/UX ডিজাইন",
    "ডিজিটাল মার্কেটিং",
    "SEO অপ্টিমাইজেশন",
    "গ্রাফিক্স ডিজাইন"
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "PHP", 
    "Laravel", "WordPress", "Tailwind CSS", "MongoDB", "PostgreSQL", "Firebase"
  ];

  return (
    <div className="min-h-screen font-bengali">
      <ScrollToTop />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-islamic-dark-green via-islamic-green to-islamic-teal pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-islamic-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-islamic-teal/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Code2 className="w-6 h-6 text-islamic-gold" />
              <span className="text-white/90 font-english font-semibold text-lg">Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-english">
              Higzen<span className="text-islamic-gold">Dev</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-bengali leading-relaxed">
              আধুনিক ও উদ্ভাবনী ডিজিটাল সলিউশন প্রদানকারী প্রতিষ্ঠান
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://higzendev.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-islamic-gold text-islamic-dark-green px-8 py-4 rounded-full font-semibold hover:bg-islamic-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Globe className="w-5 h-5" />
                <span className="font-english">Visit Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark-green mb-4">
                আমাদের সম্পর্কে
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-islamic-gold to-islamic-teal mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="font-english font-bold text-islamic-dark-green">HigzenDev</span> একটি আধুনিক ও পেশাদার সফটওয়্যার ডেভেলপমেন্ট কোম্পানি। আমরা ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ ডেভেলপমেন্ট, এবং কাস্টম সফটওয়্যার সলিউশন প্রদানে বিশেষজ্ঞ।
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                আমাদের দক্ষ টিম সর্বশেষ প্রযুক্তি ব্যবহার করে ক্লায়েন্টদের জন্য উচ্চমানের ডিজিটাল সলিউশন তৈরি করে। শিক্ষা প্রতিষ্ঠান, ব্যবসায়িক সংস্থা এবং স্টার্টআপগুলোর জন্য আমরা কার্যকর ও আকর্ষণীয় ওয়েবসাইট ও অ্যাপ্লিকেশন তৈরি করি।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-islamic-dark-green/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark-green mb-4">
              আমাদের সেবাসমূহ
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-islamic-gold to-islamic-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-islamic-gold/30 group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-islamic-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-islamic-dark-green mb-4">
              প্রযুক্তি ও টুলস
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-islamic-gold to-islamic-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-islamic-dark-green to-islamic-green text-white px-6 py-3 rounded-full font-english font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-islamic-dark-green via-islamic-green to-islamic-teal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              যোগাযোগ করুন
            </h2>
            <div className="w-24 h-1 bg-islamic-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="space-y-6">
                <a 
                  href="https://higzendev.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white hover:text-islamic-gold transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-islamic-gold group-hover:text-islamic-dark-green transition-all duration-300">
                    <Globe className="w-6 h-6" />
                  </div>
                  <span className="font-english text-lg">www.higzendev.com</span>
                </a>
                
                <a 
                  href="mailto:info@higzendev.com"
                  className="flex items-center gap-4 text-white hover:text-islamic-gold transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-islamic-gold group-hover:text-islamic-dark-green transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-english text-lg">info@higzendev.com</span>
                </a>
                
                <a 
                  href="tel:+8801700000000"
                  className="flex items-center gap-4 text-white hover:text-islamic-gold transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-islamic-gold group-hover:text-islamic-dark-green transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-english text-lg">+880 1700-000000</span>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-white/80 text-center mb-6">সোশ্যাল মিডিয়াতে অনুসরণ করুন</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-islamic-gold hover:text-islamic-dark-green transition-all duration-300"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-islamic-gold hover:text-islamic-dark-green transition-all duration-300"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-islamic-gold hover:text-islamic-dark-green transition-all duration-300"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-islamic-gold hover:text-islamic-dark-green transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developer;
