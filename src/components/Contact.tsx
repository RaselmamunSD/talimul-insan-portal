import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "50px" });
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      titleBn: "ঠিকানা",
      content: "হাড়ীভাঙ্গা এয়ারপোর্ট সংলগ্ন, লালমনিরহাট, বাংলাদেশ",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      titleBn: "ফোন",
      content: "+8801738060329",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      titleBn: "ই-মেইল",
      content: "info@talimulinsanmadrasah.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      titleBn: "সময়সূচী",
      content: "শনি - বৃহস্পতিবার: ৮:০০ - ৫:০০",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 py-16 md:py-20 overflow-hidden">
        {/* Islamic Pattern Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
            backgroundSize: '250px md:350px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Decorative Gradient Overlays */}
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="mb-5 md:mb-6 inline-block px-5 md:px-6 py-2.5 md:py-2 bg-white/20 backdrop-blur-sm rounded-full animate-fade-in">
              <p className="font-arabic text-lg md:text-xl">اتصل بنا</p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold font-bengali mb-4 md:mb-4 drop-shadow-lg animate-fade-in px-4" style={{ animationDelay: '0.1s' }}>
              যোগাযোগ
            </h1>
            
            <p className="font-english text-xl md:text-2xl lg:text-2xl opacity-95 drop-shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Contact Us
            </p>
          </div>
        </div>
      </section>

      <section ref={ref} id="contact" className="py-12 md:py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Islamic Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url(${new URL('../assets/islamic-pattern.png', import.meta.url).href})`,
            backgroundSize: '300px md:400px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-islamic-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 md:w-80 h-40 md:h-80 bg-islamic-teal/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className={`shadow-elegant transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
              <CardHeader className="pb-5 md:pb-6 pt-7 md:pt-6">
                <CardTitle className="text-2xl md:text-2xl font-bengali text-primary">
                  আমাদের সাথে যোগাযোগ করুন
                </CardTitle>
              </CardHeader>
              <CardContent className="px-7 md:px-6 pb-7 md:pb-6">
                <form className="space-y-5 md:space-y-4">
                  <div>
                    <label className="block text-base md:text-sm font-bengali font-medium mb-2 md:mb-2">
                      আপনার নাম
                    </label>
                    <Input 
                      placeholder="নাম লিখুন" 
                      className="font-bengali text-base md:text-base h-12 md:h-10"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base md:text-sm font-bengali font-medium mb-2 md:mb-2">
                      ই-মেইল
                    </label>
                    <Input 
                      type="email" 
                      placeholder="example@email.com"
                      className="text-base md:text-base h-12 md:h-10"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base md:text-sm font-bengali font-medium mb-2 md:mb-2">
                      ফোন নম্বর
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+880"
                      className="text-base md:text-base h-12 md:h-10"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base md:text-sm font-bengali font-medium mb-2 md:mb-2">
                      বার্তা
                    </label>
                    <Textarea 
                      placeholder="আপনার বার্তা লিখুন..." 
                      rows={4}
                      className="font-bengali text-base md:text-base"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 font-bengali text-base md:text-base h-12 md:h-11"
                  >
                    বার্তা পাঠান
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className={`space-y-6 md:space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
              <Card className="shadow-elegant">
                <CardHeader className="pb-5 md:pb-6 pt-7 md:pt-6">
                  <CardTitle className="text-2xl md:text-2xl font-bengali text-primary">
                    যোগাযোগের তথ্য
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 md:space-y-4 px-7 md:px-6 pb-7 md:pb-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 md:gap-4">
                      <div className="text-primary mt-1 md:mt-1 flex-shrink-0">
                        <div className="w-6 h-6 md:w-6 md:h-6">
                          {info.icon}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <p className="font-bengali font-semibold text-primary text-lg md:text-base">
                          {info.titleBn}
                        </p>
                        <p className="text-muted-foreground text-base md:text-base break-words">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="shadow-elegant">
                <CardContent className="p-0">
                  <div className="w-full h-64 md:h-64 rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5947896556844!2d89.2450!3d25.9230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU1JzIyLjgiTiA4OcKwMTQnNDIuMCJF!5e0!3m2!1sen!2sbd!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Talimul Insan Madrasah Location"
                      className="grayscale-0 hover:grayscale-0 transition-all duration-300"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
