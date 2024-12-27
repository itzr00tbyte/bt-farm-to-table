import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Users, Globe, MessageCircle, Leaf, Factory, Heart, Award, Shield, Truck } from "lucide-react";

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
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Welcome to BT Foods</h2>
              <p className="text-foreground leading-relaxed font-medium">
                At BT Foods, we are passionate about bringing the finest quality dehydrated products to your table. 
                Our journey began with a simple vision: to transform the way people experience preserved foods while 
                maintaining the highest standards of quality and nutrition. Today, we stand as a leading manufacturer 
                and exporter of premium dehydrated vegetables, fruits, and powders.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Heritage</h2>
              <p className="text-foreground leading-relaxed font-medium">
                Located in the fertile lands of Palnadu district, our journey begins in Edlapadu Mandalam, 
                Unnava Village. From this vibrant corner of Andhra Pradesh, we proudly distribute premium 
                dehydrated products to households and businesses worldwide. Our state-of-the-art facility 
                serves as the hub of innovation and quality, where every product is crafted with precision 
                and care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Products</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Vegetable Powders</h3>
                  </div>
                  <p className="text-foreground font-medium">
                    Premium quality vegetable powders perfect for soups, seasonings, and culinary innovations.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Fruit Powders</h3>
                  </div>
                  <p className="text-foreground font-medium">
                    Natural fruit powders ideal for smoothies, desserts, and healthy beverages.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Dehydrated Products</h3>
                  </div>
                  <p className="text-foreground font-medium">
                    Carefully preserved vegetables and fruits that retain their natural flavors and nutrients.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Why Choose Us</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Quality Assured</h3>
                  </div>
                  <p className="text-foreground font-medium">
                    ISO certified facility with stringent quality control measures.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Food Safety</h3>
                  </div>
                  <p className="text-foreground font-medium">
                    FSSAI certified with adherence to international food safety standards.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Global Reach</h3>
                  </div>
                  <p className="text-foreground font-medium">
                    Efficient distribution network serving customers worldwide.
                  </p>
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
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default AboutContact;
