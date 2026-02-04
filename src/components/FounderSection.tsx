import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import personPlaceholder from "@/assets/person-placeholder.png";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: "50px" });

  const founder = {
    name: "হযরত মাওলানা মুহাম্মদ আব্দুল করীম",
    title: "প্রতিষ্ঠাতা ও প্রধান পৃষ্ঠপোষক",
    arabicTitle: "مؤسس المدرسة",
    description: `হযরত মাওলানা মুহাম্মদ আব্দুল করীম সাহেব একজন বিশিষ্ট আলেমে দ্বীন ও সমাজসেবক। তিনি দীর্ঘ ৪০ বছরেরও বেশি সময় ধরে ইসলামী শিক্ষার প্রচার ও প্রসারে নিরলসভাবে কাজ করে যাচ্ছেন।

তাঁর সুদূরপ্রসারী চিন্তা ও অক্লান্ত পরিশ্রমের ফলে ১৯৯৫ সালে তা'লীমুল ইনসান মাদ্রাসা প্রতিষ্ঠিত হয়। তিনি বিশ্বাস করেন যে, সঠিক ইসলামী শিক্ষাই পারে একটি আদর্শ সমাজ গঠন করতে এবং মানুষকে দুনিয়া ও আখেরাতে সফলতার পথ দেখাতে।

তিনি বিভিন্ন বড় বড় মাদ্রাসা থেকে শিক্ষা অর্জন করেছেন এবং দেশ-বিদেশের বিখ্যাত আলেমদের সান্নিধ্য লাভ করেছেন। তাঁর অধীনে শত শত ছাত্র হাফেজে কুরআন ও আলেমে দ্বীন হিসেবে গড়ে উঠেছে।`,
    achievements: [
      "৪০+ বছরের শিক্ষকতার অভিজ্ঞতা",
      "১০০০+ ছাত্র তৈরি করেছেন",
      "একাধিক ইসলামী প্রতিষ্ঠানের প্রতিষ্ঠাতা",
      "দেশ-বিদেশে ইসলামী দাওয়াতে অবদান"
    ]
  };

  return (
    <section ref={ref} className="section-spacing px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-block px-5 py-2 bg-primary/10 rounded-full mb-4">
            <p className="font-arabic text-lg text-primary">{founder.arabicTitle}</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-foreground mb-4">
            মাদ্রাসার প্রতিষ্ঠাতা
          </h2>
          <p className="text-lg font-english text-muted-foreground">
            Founder of the Madrasah
          </p>
        </div>

        {/* Founder Card */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-card rounded-3xl shadow-elegant overflow-hidden border border-border/50">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 flex items-center justify-center">
                <div className="relative">
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-xl scale-110" />
                  
                  <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary ring-offset-4 ring-offset-card shadow-2xl">
                    <img 
                      src={personPlaceholder} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-300" />
                </div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 md:p-10">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold font-bengali text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-semibold font-bengali text-lg">
                    {founder.title}
                  </p>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-muted-foreground font-bengali leading-relaxed whitespace-pre-line text-base">
                    {founder.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="bg-muted/50 rounded-2xl p-6">
                  <h4 className="font-bold font-bengali text-foreground mb-4 text-lg">
                    বিশেষ অর্জনসমূহ
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {founder.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 bg-background/80 rounded-xl px-4 py-3 shadow-sm"
                      >
                        <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-lg">✓</span>
                        </span>
                        <span className="font-bengali text-sm text-foreground">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
