import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Users, Globe, MessageCircle } from "lucide-react";

const AboutContact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        {/* About Section */}
        <section className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-extrabold text-primary text-center">About Us</h1>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Story</h2>
              <p className="text-foreground leading-relaxed font-medium">
                BT Foods has been at the forefront of sustainable food production since our inception. 
                We believe in bringing the freshest, highest-quality products from farm to table, 
                while supporting local farmers and maintaining environmentally conscious practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Mission</h2>
              <p className="text-foreground leading-relaxed font-medium">
                Our mission is to provide exceptional food products while promoting sustainable 
                agriculture and supporting local farming communities. We strive to maintain the 
                highest standards of quality while ensuring environmental responsibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Quality</h3>
                  </div>
                  <p className="text-foreground font-medium">We never compromise on the quality of our products.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Sustainability</h3>
                  </div>
                  <p className="text-foreground font-medium">Environmental responsibility is at our core.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Community</h3>
                  </div>
                  <p className="text-foreground font-medium">Supporting local farmers and communities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="flex items-center justify-center gap-3 mb-8">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-extrabold text-primary text-center">Contact Us</h2>
          </div>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutContact;