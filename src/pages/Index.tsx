import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrincipalMessageHome from "@/components/PrincipalMessageHome";
import About from "@/components/About";
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
        <About />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
