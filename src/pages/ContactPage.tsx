import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
