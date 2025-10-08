import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrincipalMessageHome from "@/components/PrincipalMessageHome";
import SuccessStatistics from "@/components/SuccessStatistics";
import About from "@/components/About";
import Contribute from "@/components/Contribute";
import Programs from "@/components/Programs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PrincipalMessageHome />
        <SuccessStatistics />
        <About />
        <Contribute />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
