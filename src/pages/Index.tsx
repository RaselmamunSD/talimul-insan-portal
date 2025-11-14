import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import RecentNews from "@/components/RecentNews";
import PrincipalMessageHome from "@/components/PrincipalMessageHome";
import SuccessStatistics from "@/components/SuccessStatistics";
import About from "@/components/About";
import Contribute from "@/components/Contribute";
import Programs from "@/components/Programs";
import DonationFunds from "@/components/DonationFunds";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Welcome />
        <RecentNews />
        <PrincipalMessageHome />
        <SuccessStatistics />
        <About />
        <Contribute />
        <Programs />
        <DonationFunds />
        <Contact />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
