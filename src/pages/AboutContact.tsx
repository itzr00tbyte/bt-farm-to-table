import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Users, Globe, MessageCircle, Leaf, Factory, Heart } from "lucide-react";

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
                Welcome to our world of nutritious and versatile products that seamlessly blend into your daily life. 
                Whether you're looking to add a burst of flavor, garnish your favorite dishes, or enhance the nutrition 
                of smoothies, juices, baked goods, and more, we've got you covered. With our range of high-quality 
                dehydrated offerings, there's no need to compromise on taste or health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Location</h2>
              <p className="text-foreground leading-relaxed font-medium">
                Located in the lush and fertile lands of Palnadu district, our journey begins in Edlapadu Mandalam, 
                Unnava Village. From this vibrant corner of Andhra Pradesh, we proudly distribute premium dehydrated 
                products to households and businesses alike. Our registered office serves as the hub of innovation 
                and quality, where every product is crafted with care and precision.
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
                  <p className="text-foreground font-medium">Convenient, long-lasting, and nutrient-packed, perfect for soups, sauces, and seasonings.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Fruit Powders</h3>
                  </div>
                  <p className="text-foreground font-medium">A natural boost for your smoothies, desserts, and breakfast bowls.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Factory className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">Dehydrated Products</h3>
                  </div>
                  <p className="text-foreground font-medium">Enjoy the taste of freshness any time, ideal for snacks, meal preps, and gourmet creations.</p>
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