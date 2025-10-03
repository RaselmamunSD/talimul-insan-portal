import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      titleBn: "ঠিকানা",
      content: "হাড়ীভাঙ্গা এয়ারপোর্ট সংলগ্ন, লালমনিরহাট, বাংলাদেশ",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      titleBn: "ফোন",
      content: "+880 1XXX-XXXXXX",
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
    <section id="contact" className="py-16 px-4 bg-muted relative">
      <div className="absolute inset-0 islamic-pattern"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-primary mb-4">
            যোগাযোগ
          </h2>
          <p className="text-xl font-arabic text-secondary">
            اتصل بنا
          </p>
          <p className="text-lg font-english text-muted-foreground mt-2">
            Contact Us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-bengali text-primary">
                আমাদের সাথে যোগাযোগ করুন
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bengali font-medium mb-2">
                    আপনার নাম
                  </label>
                  <Input 
                    placeholder="নাম লিখুন" 
                    className="font-bengali"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bengali font-medium mb-2">
                    ই-মেইল
                  </label>
                  <Input 
                    type="email" 
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bengali font-medium mb-2">
                    ফোন নম্বর
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+880"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bengali font-medium mb-2">
                    বার্তা
                  </label>
                  <Textarea 
                    placeholder="আপনার বার্তা লিখুন..." 
                    rows={4}
                    className="font-bengali"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 font-bengali"
                >
                  বার্তা পাঠান
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bengali text-primary">
                  যোগাযোগের তথ্য
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-bengali font-semibold text-primary">
                        {info.titleBn}
                      </p>
                      <p className="text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="shadow-elegant">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-muted flex items-center justify-center rounded-b-lg">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="font-bengali text-muted-foreground">
                      মানচিত্র লোড হচ্ছে...
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
