import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Printer, Edit, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdmissionForm = () => {
  const { toast } = useToast();
  const [isEditable, setIsEditable] = useState(true);

  const handleDownload = () => {
    toast({
      title: "ডাউনলোড হচ্ছে",
      description: "আবেদন ফর্ম ডাউনলোড করা হচ্ছে...",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "প্রিন্ট",
      description: "প্রিন্ট ডায়লগ খোলা হয়েছে",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "সফল",
      description: "আবেদন সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold font-bengali text-primary mb-8 text-center">
            ভর্তি আবেদন ফর্ম
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold font-bengali text-islamic-green border-b pb-2">
                শিক্ষার্থীর তথ্য
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="studentName" className="font-bengali">শিক্ষার্থীর নাম (বাংলায়) *</Label>
                  <Input id="studentName" disabled={!isEditable} required className="font-bengali" />
                </div>
                <div>
                  <Label htmlFor="studentNameEn" className="font-bengali">শিক্ষার্থীর নাম (ইংরেজিতে) *</Label>
                  <Input id="studentNameEn" disabled={!isEditable} required />
                </div>
                <div>
                  <Label htmlFor="dob" className="font-bengali">জন্ম তারিখ *</Label>
                  <Input id="dob" type="date" disabled={!isEditable} required />
                </div>
                <div>
                  <Label htmlFor="gender" className="font-bengali">লিঙ্গ *</Label>
                  <Select disabled={!isEditable} required>
                    <SelectTrigger>
                      <SelectValue placeholder="নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="male">ছেলে</SelectItem>
                      <SelectItem value="female">মেয়ে</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="birthCertificate" className="font-bengali">জন্ম নিবন্ধন নম্বর *</Label>
                  <Input id="birthCertificate" disabled={!isEditable} required />
                </div>
                <div>
                  <Label htmlFor="religion" className="font-bengali">ধর্ম *</Label>
                  <Input id="religion" defaultValue="ইসলাম" disabled={!isEditable} required className="font-bengali" />
                </div>
              </div>
            </section>

            {/* Guardian Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold font-bengali text-islamic-green border-b pb-2">
                অভিভাবকের তথ্য
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fatherName" className="font-bengali">পিতার নাম *</Label>
                  <Input id="fatherName" disabled={!isEditable} required className="font-bengali" />
                </div>
                <div>
                  <Label htmlFor="motherName" className="font-bengali">মাতার নাম *</Label>
                  <Input id="motherName" disabled={!isEditable} required className="font-bengali" />
                </div>
                <div>
                  <Label htmlFor="guardianPhone" className="font-bengali">মোবাইল নম্বর *</Label>
                  <Input id="guardianPhone" type="tel" disabled={!isEditable} required />
                </div>
                <div>
                  <Label htmlFor="guardianNID" className="font-bengali">জাতীয় পরিচয়পত্র নম্বর *</Label>
                  <Input id="guardianNID" disabled={!isEditable} required />
                </div>
                <div>
                  <Label htmlFor="occupation" className="font-bengali">পেশা</Label>
                  <Input id="occupation" disabled={!isEditable} className="font-bengali" />
                </div>
                <div>
                  <Label htmlFor="income" className="font-bengali">মাসিক আয়</Label>
                  <Input id="income" type="number" disabled={!isEditable} />
                </div>
              </div>
            </section>

            {/* Address */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold font-bengali text-islamic-green border-b pb-2">
                ঠিকানা
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="address" className="font-bengali">বর্তমান ঠিকানা *</Label>
                  <Textarea id="address" disabled={!isEditable} required className="font-bengali" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="district" className="font-bengali">জেলা *</Label>
                    <Input id="district" disabled={!isEditable} required className="font-bengali" />
                  </div>
                  <div>
                    <Label htmlFor="upazila" className="font-bengali">উপজেলা *</Label>
                    <Input id="upazila" disabled={!isEditable} required className="font-bengali" />
                  </div>
                  <div>
                    <Label htmlFor="postCode" className="font-bengali">পোস্ট কোড</Label>
                    <Input id="postCode" disabled={!isEditable} />
                  </div>
                </div>
              </div>
            </section>

            {/* Academic Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold font-bengali text-islamic-green border-b pb-2">
                শিক্ষাগত তথ্য
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="department" className="font-bengali">বিভাগ *</Label>
                  <Select disabled={!isEditable} required>
                    <SelectTrigger>
                      <SelectValue placeholder="নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="hifjul">হিফজুল কুরআন</SelectItem>
                      <SelectItem value="qawmi">কওমী শিক্ষা</SelectItem>
                      <SelectItem value="nurani">নূরানী</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="previousSchool" className="font-bengali">পূর্ববর্তী শিক্ষা প্রতিষ্ঠান</Label>
                  <Input id="previousSchool" disabled={!isEditable} className="font-bengali" />
                </div>
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handleDownload}
                className="font-bengali gap-2"
              >
                <Download className="h-4 w-4" />
                Download Application Form
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handlePrint}
                className="font-bengali gap-2"
              >
                <Printer className="h-4 w-4" />
                Print
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditable(!isEditable)}
                className="font-bengali gap-2"
              >
                <Edit className="h-4 w-4" />
                Edit
              </Button>
              <Button
                type="submit"
                className="bg-islamic-green hover:bg-islamic-green/90 font-bengali gap-2"
                disabled={!isEditable}
              >
                <Send className="h-4 w-4" />
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdmissionForm;
