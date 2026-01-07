import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code2, Globe, Mail, Phone, Facebook, Linkedin, Instagram, Youtube, ExternalLink, CheckCircle2, Sparkles, Rocket, Zap, Award, Users, Target, Star, ArrowRight, MessageCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <Header />
      
      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-islamic-dark-green via-emerald-800 to-teal-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-islamic-gold/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/15 rounded-full blur-[150px]"></div>
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
            <div className="flex flex-wrap justify-center gap-5">
              <a 
                href="https://higzendev.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-islamic-gold via-yellow-400 to-islamic-gold text-islamic-dark-green px-8 py-4 rounded-full font-bold text-base hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-500 transform hover:scale-105"
              >
                <Globe className="w-5 h-5" />
                <span className="font-english">Visit Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a 
                href="mailto:info@higzendev.com"
                className="group inline-flex items-center gap-3 bg-white/15 backdrop-blur-md text-white border-2 border-white/40 px-8 py-4 rounded-full font-bold text-base hover:bg-white/25 hover:border-islamic-gold transition-all duration-500"
              >
                <Mail className="w-5 h-5" />
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
                  <div className="w-14 h-14 bg-gradient-to-br from-islamic-gold/30 to-islamic-teal/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-islamic-gold" />
                  </div>
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

      {/* Contact Section - Premium Design */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#0a1628] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 md:top-0 md:left-0 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-islamic-gold/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-10 right-5 md:bottom-0 md:right-0 w-48 h-48 md:w-72 lg:w-96 md:h-72 lg:h-96 bg-islamic-teal/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 lg:w-[500px] md:h-96 lg:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px]"></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden hidden md:block">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 bg-islamic-gold/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-islamic-gold/20 to-islamic-teal/20 backdrop-blur-xl px-5 py-2 md:px-8 md:py-3 rounded-full mb-6 md:mb-8 border border-islamic-gold/30">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-islamic-gold rounded-full animate-pulse"></div>
              <span className="text-islamic-gold font-semibold text-sm md:text-base">যোগাযোগ করুন</span>
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-islamic-gold" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              আজই <span className="text-transparent bg-clip-text bg-gradient-to-r from-islamic-gold via-yellow-400 to-islamic-teal">যোগাযোগ</span> করুন
            </h2>
            <p className="text-white/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 px-4">
              আপনার প্রজেক্ট নিয়ে আলোচনা করতে বা কোনো প্রশ্ন থাকলে যোগাযোগ করুন
            </p>
            <div className="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-islamic-gold via-islamic-teal to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Contact Card */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-islamic-gold/30 via-islamic-teal/30 to-cyan-500/30 rounded-[2rem] md:rounded-[2.5rem] blur-xl opacity-50"></div>
              
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14 border border-white/20 shadow-2xl">
                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                  {/* Website */}
                  <a 
                    href="https://higzendev.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-white/10 hover:border-islamic-gold/50 transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-islamic-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 bg-gradient-to-br from-islamic-gold via-yellow-400 to-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center text-islamic-dark-green shadow-lg shadow-islamic-gold/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Globe className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/50 text-xs md:text-sm mb-0.5 md:mb-1">ওয়েবসাইট</p>
                        <span className="font-english font-bold text-base md:text-lg lg:text-xl text-white group-hover:text-islamic-gold transition-colors duration-300 truncate block">higzendev.com</span>
                      </div>
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-islamic-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href="mailto:info@higzendev.com"
                    className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-white/10 hover:border-islamic-teal/50 transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-islamic-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 bg-gradient-to-br from-islamic-teal via-cyan-400 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-islamic-teal/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Mail className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/50 text-xs md:text-sm mb-0.5 md:mb-1">ইমেইল</p>
                        <span className="font-english font-bold text-base md:text-lg lg:text-xl text-white group-hover:text-islamic-teal transition-colors duration-300 truncate block">info@higzendev.com</span>
                      </div>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-islamic-teal group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </a>
                  
                  {/* Phone */}
                  <a 
                    href="tel:+8801700000000"
                    className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-white/10 hover:border-green-500/50 transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Phone className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/50 text-xs md:text-sm mb-0.5 md:mb-1">ফোন</p>
                        <span className="font-english font-bold text-base md:text-lg lg:text-xl text-white group-hover:text-green-400 transition-colors duration-300 truncate block">+880 1700-000000</span>
                      </div>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </a>
                  
                  {/* WhatsApp */}
                  <a 
                    href="#"
                    className="group relative overflow-hidden bg-gradient-to-br from-white/10 to-white/5 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-[1.02]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex items-center gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <MessageCircle className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/50 text-xs md:text-sm mb-0.5 md:mb-1">হোয়াটসঅ্যাপ</p>
                        <span className="font-english font-bold text-base md:text-lg lg:text-xl text-white group-hover:text-purple-400 transition-colors duration-300">Chat Now</span>
                      </div>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/40 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                    </div>
                  </a>
                </div>
                
                {/* Divider */}
                <div className="relative my-8 md:my-10 lg:my-12">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-[#0f2847] px-4 md:px-6">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-2 h-2 bg-islamic-gold rounded-full animate-pulse"></div>
                        <span className="text-white/50 text-sm md:text-base">সোশ্যাল মিডিয়া</span>
                        <div className="w-2 h-2 bg-islamic-teal rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-5">
                  {[
                    { icon: Facebook, color: "from-blue-500 to-blue-700", hoverColor: "hover:shadow-blue-500/40", label: "Facebook" },
                    { icon: Youtube, color: "from-red-500 to-red-700", hoverColor: "hover:shadow-red-500/40", label: "YouTube" },
                    { icon: Instagram, color: "from-pink-500 via-purple-500 to-orange-400", hoverColor: "hover:shadow-pink-500/40", label: "Instagram" },
                    { icon: Linkedin, color: "from-blue-600 to-blue-800", hoverColor: "hover:shadow-blue-600/40", label: "LinkedIn" }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`group w-12 h-12 md:w-14 lg:w-16 md:h-14 lg:h-16 bg-gradient-to-br ${social.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg ${social.hoverColor} hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 md:w-6 lg:w-7 md:h-6 lg:h-7 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 md:mt-10 lg:mt-12 text-center">
                  <a 
                    href="https://higzendev.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-islamic-gold via-yellow-400 to-amber-500 text-islamic-dark-green px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm md:text-base lg:text-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-500 transform hover:scale-105"
                  >
                    <Rocket className="w-4 h-4 md:w-5 lg:w-6 md:h-5 lg:h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-bengali">আপনার প্রজেক্ট শুরু করুন</span>
                    <ArrowRight className="w-4 h-4 md:w-5 lg:w-6 md:h-5 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-islamic-teal/10 px-5 py-2 md:px-6 md:py-3 rounded-full mb-4 md:mb-6">
              <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-islamic-teal" />
              <span className="text-islamic-teal font-semibold text-sm md:text-base">সাধারণ প্রশ্নাবলী</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-islamic-dark-green mb-4 md:mb-6">
              প্রায়শই জিজ্ঞাসিত <span className="text-islamic-teal">প্রশ্ন</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
              আমাদের সেবা সম্পর্কে সাধারণ প্রশ্নের উত্তর এখানে পাবেন
            </p>
            <div className="w-24 md:w-32 h-1 md:h-1.5 bg-gradient-to-r from-islamic-gold via-islamic-teal to-islamic-green mx-auto rounded-full"></div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-islamic-dark-green hover:text-islamic-teal hover:no-underline py-5">
                  আপনারা কোন ধরনের প্রজেক্ট নিয়ে কাজ করেন?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-5">
                  আমরা ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট, মোবাইল অ্যাপ (iOS ও Android), ই-কমার্স সলিউশন, কাস্টম সফটওয়্যার, UI/UX ডিজাইন, ডিজিটাল মার্কেটিং, SEO অপ্টিমাইজেশন এবং গ্রাফিক্স ডিজাইন সহ বিভিন্ন ধরনের প্রজেক্ট নিয়ে কাজ করি।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-islamic-dark-green hover:text-islamic-teal hover:no-underline py-5">
                  একটি প্রজেক্ট সম্পন্ন করতে কতদিন সময় লাগে?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-5">
                  প্রজেক্টের ধরন ও জটিলতার উপর নির্ভর করে সময় পরিবর্তিত হয়। সাধারণত একটি বেসিক ওয়েবসাইট ১-২ সপ্তাহে, মাঝারি প্রজেক্ট ২-৪ সপ্তাহে এবং জটিল প্রজেক্ট ১-৩ মাসে সম্পন্ন হয়। আমরা সবসময় ডেডলাইন মেনে চলি।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-islamic-dark-green hover:text-islamic-teal hover:no-underline py-5">
                  প্রজেক্টের খরচ কিভাবে নির্ধারণ করা হয়?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-5">
                  প্রজেক্টের স্কোপ, ফিচার, জটিলতা এবং সময়সীমার উপর ভিত্তি করে খরচ নির্ধারণ করা হয়। প্রাথমিক আলোচনার পর আমরা একটি বিনামূল্যে কোটেশন প্রদান করি। আমরা স্বচ্ছ মূল্য নীতি অনুসরণ করি এবং কোনো লুকানো খরচ নেই।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-islamic-dark-green hover:text-islamic-teal hover:no-underline py-5">
                  প্রজেক্ট শেষে সাপোর্ট পাওয়া যাবে?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-5">
                  হ্যাঁ, অবশ্যই। প্রতিটি প্রজেক্টের সাথে আমরা বিনামূল্যে সাপোর্ট প্রদান করি। এছাড়াও আমাদের ২৪/৭ কাস্টমার সাপোর্ট টিম সবসময় আপনার পাশে আছে। দীর্ঘমেয়াদী মেইনটেন্যান্স প্যাকেজও পাওয়া যায়।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-islamic-dark-green hover:text-islamic-teal hover:no-underline py-5">
                  কিভাবে প্রজেক্ট শুরু করা যায়?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-5">
                  খুবই সহজ! আমাদের ওয়েবসাইটে যোগাযোগ ফর্ম পূরণ করুন অথবা সরাসরি ফোন/ইমেইল করুন। আমরা প্রাথমিক আলোচনা করব, আপনার প্রয়োজনীয়তা বুঝব এবং একটি প্রস্তাবনা প্রদান করব। অনুমোদনের পর কাজ শুরু হবে।
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 px-6 overflow-hidden">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-islamic-dark-green hover:text-islamic-teal hover:no-underline py-5">
                  পেমেন্ট পদ্ধতি কি কি?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base leading-relaxed pb-5">
                  আমরা বিকাশ, নগদ, রকেট, ব্যাংক ট্রান্সফার এবং অনলাইন পেমেন্ট গ্রহণ করি। সাধারণত ৫০% অগ্রিম এবং ৫০% প্রজেক্ট ডেলিভারির সময় পেমেন্ট করতে হয়। বড় প্রজেক্টের জন্য মাইলস্টোন ভিত্তিক পেমেন্টও সম্ভব।
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            <p className="text-gray-600 mb-4">আরও কোনো প্রশ্ন আছে?</p>
            <a 
              href="mailto:info@higzendev.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-islamic-teal to-islamic-green text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-islamic-teal/30 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              <span>আমাদের জিজ্ঞাসা করুন</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Developer;
