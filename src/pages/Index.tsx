import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import ImageGallerySlider from "@/components/ImageGallerySlider";
import RecentNews from "@/components/RecentNews";
import PrincipalMessageHome from "@/components/PrincipalMessageHome";
import SuccessStatistics from "@/components/SuccessStatistics";
import FounderSection from "@/components/FounderSection";
import About from "@/components/About";
import Programs from "@/components/Programs";
import DonationFunds from "@/components/DonationFunds";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <ImageGallerySlider />
        <RecentNews />
        <PrincipalMessageHome />
        <SuccessStatistics />
        <FounderSection />
        <About />
        <Programs />
        <DonationFunds />
        <BlogSection />
        <Contact />
      </main>
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
