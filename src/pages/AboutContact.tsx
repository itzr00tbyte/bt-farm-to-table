import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const AboutContact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        {/* About Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-[#085126] mb-8 text-center">About Us</h1>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-[#6e2b3e] mb-4">Our Story</h2>
              <p className="text-[#222222] leading-relaxed">
                BT Foods has been at the forefront of sustainable food production since our inception. 
                We believe in bringing the freshest, highest-quality products from farm to table, 
                while supporting local farmers and maintaining environmentally conscious practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-[#6e2b3e] mb-4">Our Mission</h2>
              <p className="text-[#222222] leading-relaxed">
                Our mission is to provide exceptional food products while promoting sustainable 
                agriculture and supporting local farming communities. We strive to maintain the 
                highest standards of quality while ensuring environmental responsibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-[#6e2b3e] mb-4">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#085126]">Quality</h3>
                  <p className="text-[#222222]">We never compromise on the quality of our products.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#085126]">Sustainability</h3>
                  <p className="text-[#222222]">Environmental responsibility is at our core.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#085126]">Community</h3>
                  <p className="text-[#222222]">Supporting local farmers and communities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-4xl font-bold text-[#085126] mb-8 text-center">Contact Us</h2>
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