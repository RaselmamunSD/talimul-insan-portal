import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import islamicPattern from "@/assets/islamic-pattern.png";

const allNews = [
  {
    id: "1",
    date: "০৩ অক্টোবর ২০২৫",
    title: "২০২৫ শিক্ষাবর্ষের ভর্তি চলছে",
    description: "হিফজুল কুরআন, কওমী শিক্ষা ও লিল্লাহ বোডিং-এ সীমিত সংখ্যক আসনে ভর্তি চলছে। আগ্রহী অভিভাবকগণ অনলাইনে আবেদন করতে পারবেন।",
    fullContent: "হিফজুল কুরআন, কওমী শিক্ষা ও লিল্লাহ বোডিং-এ সীমিত সংখ্যক আসনে ভর্তি চলছে। আগ্রহী অভিভাবকগণ অনলাইনে আবেদন করতে পারবেন।\n\nভর্তির জন্য প্রয়োজনীয় কাগজপত্র:\n• জন্ম নিবন্ধন সনদের ফটোকপি\n• পূর্ববর্তী শিক্ষা প্রতিষ্ঠানের ছাড়পত্র\n• অভিভাবকের জাতীয় পরিচয়পত্রের ফটোকপি\n• সদ্য তোলা পাসপোর্ট সাইজের ছবি ৪ কপি\n\nভর্তি ফরম মাদ্রাসা অফিস থেকে সংগ্রহ করা যাবে অথবা অনলাইনে আবেদন করা যাবে। বিস্তারিত জানতে মাদ্রাসা অফিসে যোগাযোগ করুন।",
    category: "ভর্তি",
    isNew: true,
  },
  {
    id: "2",
    date: "২৫ সেপ্টেম্বর ২০২৫",
    title: "কামিল পরীক্ষার বিজ্ঞপ্তি প্রকাশ",
    description: "কামিল ১ম ও ২য় পর্বের বার্ষিক পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে।",
    fullContent: "কামিল ১ম ও ২য় পর্বের বার্ষিক পরীক্ষা আগামী ১৫ নভেম্বর থেকে শুরু হবে। সকল শিক্ষার্থীদের প্রস্তুতি নিতে বলা হচ্ছে।\n\nপরীক্ষার সময়সূচী:\n• কামিল ১ম পর্ব: ১৫ নভেম্বর - ৩০ নভেম্বর\n• কামিল ২য় পর্ব: ১ ডিসেম্বর - ১৫ ডিসেম্বর\n\nপরীক্ষার হলে প্রবেশপত্র ছাড়া প্রবেশ নিষেধ। প্রবেশপত্র মাদ্রাসা অফিস থেকে সংগ্রহ করতে হবে।",
    category: "পরীক্ষা",
    isNew: true,
  },
  {
    id: "3",
    date: "১০ সেপ্টেম্বর ২০২৫",
    title: "বার্ষিক খতমে কুরআন মাহফিল",
    description: "এ বছর ৫০ জন ছাত্র সফলভাবে হিফজ সম্পন্ন করেছে।",
    fullContent: "আলহামদুলিল্লাহ, এ বছর ৫০ জন ছাত্র সফলভাবে হিফজ সম্পন্ন করেছে। তাদের সম্মানে আগামী ২০ সেপ্টেম্বর খতমে কুরআন মাহফিল অনুষ্ঠিত হবে।\n\nমাহফিলের বিবরণ:\n• তারিখ: ২০ সেপ্টেম্বর ২০২৫\n• সময়: আসরের নামাযের পর\n• স্থান: মাদ্রাসা কেন্দ্রীয় মাঠ\n\nসকল অভিভাবক ও শুভানুধ্যায়ীদের উপস্থিত থাকার জন্য অনুরোধ করা হচ্ছে।",
    category: "অনুষ্ঠান",
    isNew: false,
  },
  {
    id: "4",
    date: "০১ সেপ্টেম্বর ২০২৫",
    title: "নতুন শিক্ষক নিয়োগ বিজ্ঞপ্তি",
    description: "মাদ্রাসায় অভিজ্ঞ শিক্ষক নিয়োগ দেওয়া হবে।",
    fullContent: "মাদ্রাসায় অভিজ্ঞ শিক্ষক নিয়োগ দেওয়া হবে। আগ্রহী প্রার্থীদের আগামী ১৫ সেপ্টেম্বরের মধ্যে আবেদন করতে হবে।\n\nপদের বিবরণ:\n• আরবি ভাষা শিক্ষক - ২ জন\n• হিফজ বিভাগ শিক্ষক - ৩ জন\n• বাংলা বিষয় শিক্ষক - ১ জন\n\nযোগ্যতা:\n• সংশ্লিষ্ট বিষয়ে কামিল/ফাযিল পাশ\n• কমপক্ষে ২ বছরের শিক্ষকতার অভিজ্ঞতা\n\nআবেদনপত্র মাদ্রাসা অফিসে জমা দিতে হবে।",
    category: "নিয়োগ",
    isNew: false,
  },
  {
    id: "5",
    date: "২০ আগস্ট ২০২৫",
    title: "ঈদ-উল-আযহা উপলক্ষে ছুটির ঘোষণা",
    description: "আগামী ঈদ-উল-আযহা উপলক্ষে মাদ্রাসা ১০ দিন বন্ধ থাকবে।",
    fullContent: "আগামী ঈদ-উল-আযহা উপলক্ষে মাদ্রাসা ১০ দিন বন্ধ থাকবে। ছুটির পর নিয়মিত ক্লাস শুরু হবে।\n\nছুটির সময়কাল:\n• শুরু: ১০ জিলহজ্জ (ঈদের দিন)\n• শেষ: ২০ জিলহজ্জ\n• ক্লাস শুরু: ২১ জিলহজ্জ\n\nসকল ছাত্রদের নির্ধারিত তারিখে মাদ্রাসায় ফিরে আসতে হবে।",
    category: "ছুটি",
    isNew: false,
  },
  {
    id: "6",
    date: "১০ আগস্ট ২০২৫",
    title: "অভিভাবক সমাবেশের তারিখ ঘোষণা",
    description: "আগামী ২৫ আগস্ট রবিবার সকাল ১০টায় মাদ্রাসা প্রাঙ্গণে অভিভাবক সমাবেশ অনুষ্ঠিত হবে।",
    fullContent: "আগামী ২৫ আগস্ট রবিবার সকাল ১০টায় মাদ্রাসা প্রাঙ্গণে অভিভাবক সমাবেশ অনুষ্ঠিত হবে।\n\nসমাবেশের আলোচ্য বিষয়:\n• ছাত্রদের শিক্ষা অগ্রগতি পর্যালোচনা\n• মাদ্রাসার উন্নয়ন পরিকল্পনা\n• অভিভাবকদের মতামত ও পরামর্শ গ্রহণ\n• আগামী শিক্ষাবর্ষের পরিকল্পনা\n\nসকল অভিভাবকদের সময়মতো উপস্থিত থাকার জন্য বিশেষভাবে অনুরোধ করা হচ্ছে।",
    category: "সমাবেশ",
    isNew: false,
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "ভর্তি": "from-emerald-500 to-teal-500",
    "পরীক্ষা": "from-blue-500 to-indigo-500",
    "অনুষ্ঠান": "from-purple-500 to-pink-500",
    "নিয়োগ": "from-orange-500 to-amber-500",
    "ছুটি": "from-rose-500 to-red-500",
    "সমাবেশ": "from-cyan-500 to-blue-500",
  };
  return colors[category] || "from-gray-500 to-slate-500";
};

const NoticeDetail = () => {
  const { id } = useParams();
  const notice = allNews.find((n) => n.id === id);

  if (!notice) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-bengali text-2xl font-bold mb-4">নোটিশ পাওয়া যায়নি</h2>
            <Link to="/news" className="font-bengali text-islamic-green hover:underline">সকল নোটিশে ফিরে যান</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-islamic-green via-islamic-teal to-islamic-dark-green py-14 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${islamicPattern})`, backgroundSize: "350px", backgroundRepeat: "repeat" }}
        />
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${getCategoryColor(notice.category)} mb-4`}>
            <Tag className="w-4 h-4" />
            <span className="font-bengali text-sm font-semibold">{notice.category}</span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-bengali mb-3 drop-shadow-lg">
            {notice.title}
          </h1>
          <div className="flex items-center justify-center gap-2 opacity-80">
            <Calendar className="w-4 h-4" />
            <span className="font-bengali text-sm">{notice.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 font-bengali text-sm text-muted-foreground hover:text-islamic-green transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              সকল নোটিশে ফিরে যান
            </Link>

            <div className="bg-card rounded-2xl shadow-lg p-6 md:p-10">
              {notice.fullContent.split("\n\n").map((paragraph, i) => (
                <div key={i} className="mb-5 last:mb-0">
                  {paragraph.includes("\n•") ? (
                    <ul className="space-y-2">
                      {paragraph.split("\n").map((line, j) => (
                        <li key={j} className={`font-bengali text-foreground leading-relaxed ${line.startsWith("•") ? "pl-4" : "font-semibold mb-2"}`}>
                          {line}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-bengali text-foreground leading-relaxed text-base md:text-lg">
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NoticeDetail;
