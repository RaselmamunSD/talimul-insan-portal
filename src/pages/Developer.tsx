import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Code2, Globe, Mail, Phone, Facebook, Linkedin, Instagram, Youtube, ExternalLink, CheckCircle2, Sparkles, Rocket, Zap, Award, Users, Target, Star, ArrowRight, MessageCircle } from "lucide-react";

const Developer = () => {
  const services = [
    { title: "ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট", icon: Globe, desc: "আকর্ষণীয় ও রেসপন্সিভ ওয়েবসাইট" },
    { title: "মোবাইল অ্যাপ ডেভেলপমেন্ট", icon: Rocket, desc: "iOS ও Android অ্যাপ" },
    { title: "ই-কমার্স সলিউশন", icon: Target, desc: "অনলাইন স্টোর ও পেমেন্ট" },
    { title: "কাস্টম সফটওয়্যার", icon: Code2, desc: "ব্যবসার জন্য কাস্টম সফটওয়্যার" },
    { title: "UI/UX ডিজাইন", icon: Sparkles, desc: "ব্যবহারকারী বান্ধব ডিজাইন" },
    { title: "ডিজিটাল মার্কেটিং", icon: Zap, desc: "সোশ্যাল মিডিয়া ও বিজ্ঞাপন" },
    { title: "SEO অপ্টিমাইজেশন", icon: Award, desc: "সার্চ ইঞ্জিনে র‍্যাঙ্কিং" },
    { title: "গ্রাফিক্স ডিজাইন", icon: Star, desc: "লোগো, ব্যানার ও ব্র্যান্ডিং" }
  ];

  const technologies = [
    { name: "React", color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", color: "from-blue-600 to-blue-800" },
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "Python", color: "from-yellow-500 to-blue-500" },
    { name: "PHP", color: "from-indigo-500 to-purple-600" },
    { name: "Laravel", color: "from-red-500 to-red-700" },
    { name: "WordPress", color: "from-blue-400 to-blue-600" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-blue-500" },
    { name: "MongoDB", color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", color: "from-blue-700 to-indigo-700" },
    { name: "Firebase", color: "from-yellow-500 to-orange-500" }
  ];

  const stats = [
    { value: "১০০+", label: "সম্পন্ন প্রজেক্ট", icon: Target },
    { value: "৫০+", label: "সন্তুষ্ট ক্লায়েন্ট", icon: Users },
    { value: "৫+", label: "বছরের অভিজ্ঞতা", icon: Award },
    { value: "২৪/৭", label: "সাপোর্ট", icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen font-bengali">
      <ScrollToTop />
      <Header />
      
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#0a1628] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-islamic-gold/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-islamic-teal/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-islamic-green/10 rounded-full blur-[150px]"></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-islamic-gold/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-islamic-gold/20 to-islamic-teal/20 backdrop-blur-xl px-8 py-4 rounded-full mb-10 border border-islamic-gold/30 shadow-2xl">
              <div className="w-3 h-3 bg-islamic-gold rounded-full animate-pulse"></div>
              <span className="text-islamic-gold font-english font-semibold text-lg tracking-wide">Professional Software Development</span>
              <Sparkles className="w-5 h-5 text-islamic-gold animate-pulse" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-islamic-gold to-islamic-teal mb-8 font-english tracking-tight">
              Higzen<span className="text-islamic-gold">Dev</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 font-bengali leading-relaxed max-w-3xl mx-auto">
              আধুনিক প্রযুক্তি ব্যবহার করে আপনার ব্যবসার জন্য <span className="text-islamic-gold font-semibold">উদ্ভাবনী ডিজিটাল সলিউশন</span> তৈরি করি
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://higzendev.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-islamic-gold to-yellow-500 text-[#0a1628] px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-500 transform hover:scale-105"
              >
                <Globe className="w-6 h-6" />
                <span className="font-english">Visit Website</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              
              <a 
                href="mailto:info@higzendev.com"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 hover:border-islamic-gold transition-all duration-500"
              >
                <Mail className="w-6 h-6" />
                <span className="font-bengali">যোগাযোগ করুন</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-2 h-4 bg-islamic-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1628] to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-islamic-gold/20 to-islamic-teal/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:border-islamic-gold/50 transition-all duration-500 hover:transform hover:scale-105">
                  <stat.icon className="w-10 h-10 text-islamic-gold mx-auto mb-4" />
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-bengali">{stat.value}</h3>
                  <p className="text-white/60 font-bengali">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 bg-islamic-green/10 text-islamic-green rounded-full font-semibold mb-4">আমাদের সম্পর্কে</span>
              <h2 className="text-4xl md:text-5xl font-bold text-islamic-dark-green mb-6">
                বিশ্বস্ত ডেভেলপমেন্ট পার্টনার
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-islamic-gold via-islamic-teal to-islamic-green mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-islamic-dark-green to-islamic-green rounded-3xl p-10 text-white shadow-2xl">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-islamic-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-4">আমাদের মিশন</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  উন্নত প্রযুক্তি ব্যবহার করে প্রতিটি ক্লায়েন্টের জন্য কার্যকর ও সুন্দর ডিজিটাল সলিউশন তৈরি করা এবং তাদের ব্যবসায়িক সাফল্যে অবদান রাখা।
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <div className="w-16 h-16 bg-islamic-gold/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-islamic-gold" />
                </div>
                <h3 className="text-2xl font-bold text-islamic-dark-green mb-4">আমাদের ভিশন</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  বাংলাদেশের শীর্ষস্থানীয় সফটওয়্যার ডেভেলপমেন্ট কোম্পানি হিসেবে প্রতিষ্ঠিত হওয়া এবং বিশ্বমানের প্রযুক্তি সেবা প্রদান করা।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-islamic-teal/10 text-islamic-teal rounded-full font-semibold mb-4">সেবাসমূহ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-islamic-dark-green mb-6">
              আমরা যা অফার করি
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-islamic-gold via-islamic-teal to-islamic-green mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-islamic-gold/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-islamic-gold/5 to-islamic-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-islamic-gold/20 to-islamic-teal/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-7 h-7 text-islamic-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-islamic-dark-green mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#0a1628] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-islamic-gold/20 text-islamic-gold rounded-full font-semibold mb-4 font-english">Technologies</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              প্রযুক্তি ও টুলস
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-islamic-gold via-islamic-teal to-islamic-green mx-auto rounded-full"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-r ${tech.color} text-white px-8 py-4 rounded-2xl font-english font-bold shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-default`}
              >
                <span className="relative z-10">{tech.name}</span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-islamic-dark-green via-islamic-green to-islamic-teal relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-islamic-gold/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-white/20 text-white rounded-full font-semibold mb-4">যোগাযোগ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              আজই যোগাযোগ করুন
            </h2>
            <div className="w-32 h-1.5 bg-islamic-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] p-10 md:p-14 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <a 
                  href="https://higzendev.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 text-white hover:text-islamic-gold transition-all duration-300 group bg-white/5 rounded-2xl p-6 hover:bg-white/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-islamic-gold to-yellow-500 rounded-2xl flex items-center justify-center text-islamic-dark-green shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">ওয়েবসাইট</p>
                    <span className="font-english font-semibold text-lg">higzendev.com</span>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@higzendev.com"
                  className="flex items-center gap-5 text-white hover:text-islamic-gold transition-all duration-300 group bg-white/5 rounded-2xl p-6 hover:bg-white/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-islamic-teal to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">ইমেইল</p>
                    <span className="font-english font-semibold text-lg">info@higzendev.com</span>
                  </div>
                </a>
                
                <a 
                  href="tel:+8801700000000"
                  className="flex items-center gap-5 text-white hover:text-islamic-gold transition-all duration-300 group bg-white/5 rounded-2xl p-6 hover:bg-white/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">ফোন</p>
                    <span className="font-english font-semibold text-lg">+880 1700-000000</span>
                  </div>
                </a>
                
                <a 
                  href="#"
                  className="flex items-center gap-5 text-white hover:text-islamic-gold transition-all duration-300 group bg-white/5 rounded-2xl p-6 hover:bg-white/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">হোয়াটসঅ্যাপ</p>
                    <span className="font-english font-semibold text-lg">Chat Now</span>
                  </div>
                </a>
              </div>
              
              {/* Social Links */}
              <div className="mt-12 pt-10 border-t border-white/20">
                <p className="text-white/70 text-center mb-8 text-lg">সোশ্যাল মিডিয়াতে অনুসরণ করুন</p>
                <div className="flex justify-center gap-5">
                  {[
                    { icon: Facebook, color: "from-blue-500 to-blue-700", label: "Facebook" },
                    { icon: Youtube, color: "from-red-500 to-red-700", label: "YouTube" },
                    { icon: Instagram, color: "from-pink-500 to-purple-600", label: "Instagram" },
                    { icon: Linkedin, color: "from-blue-600 to-blue-800", label: "LinkedIn" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
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
