import { Users, User, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const SuccessStatistics = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    {
      icon: <Users className="w-12 h-12" />,
      number: 375,
      suffix: "",
      label: "সফলভাবে বয়াতি",
      bgColor: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-500"
    },
    {
      icon: <User className="w-12 h-12" />,
      number: 289,
      suffix: "",
      label: "পায়রের বাছাভাতী",
      bgColor: "from-green-500 to-green-600",
      iconBg: "bg-green-500"
    },
    {
      icon: <User className="w-12 h-12" />,
      number: 86,
      suffix: "",
      label: "শায়ের বাছাভাতী",
      bgColor: "from-pink-500 to-pink-600",
      iconBg: "bg-pink-500"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      number: 5,
      suffix: "+",
      label: "মোট বিবাহ সম্পন্ন",
      bgColor: "from-red-500 to-red-600",
      iconBg: "bg-red-500"
    }
  ];

  return (
    <section ref={ref} className="py-16 px-4 bg-gradient-to-br from-[#1a4d4d] to-[#0d3333]">
      <div className="container mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold font-bengali text-white mb-4">
            আমাদের সাফল্যের পরিসংখ্যান
          </h2>
          <p className="text-lg font-bengali text-white/80">
            হাজারো পরিবারের আস্থা প্রতীক জীবনগাথী মুসলিম ম্যাট্রিমনি
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const StatCard = () => {
              const { count, ref: counterRef } = useCounterAnimation(stat.number, 2000, true);
              
              return (
                <div 
                  ref={counterRef}
                  className={`relative bg-gradient-to-br ${stat.bgColor} rounded-2xl p-8 text-center text-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className={`${stat.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-3`}>
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold font-bengali mb-2 transition-all duration-300 hover:scale-110">
                    {convertToBengaliNumber(count)}{stat.suffix}
                  </div>
                  <div className="text-lg font-bengali opacity-90">
                    {stat.label}
                  </div>
                </div>
              );
            };
            
            return <StatCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

// Helper function to convert English numbers to Bengali
const convertToBengaliNumber = (num: number): string => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map(digit => bengaliDigits[parseInt(digit)] || digit).join('');
};

export default SuccessStatistics;
