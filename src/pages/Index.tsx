import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Certifications />
      <Footer />
    </div>
  );
};

export default Index;