import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const AboutContact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          message: formData.get('message'),
          to_email: 'weinboxtales@gmail.com'
        },
        'YOUR_PUBLIC_KEY'
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        {/* About Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">About Us</h1>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-accent-burgundy mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                BT Foods has been at the forefront of sustainable food production since our inception. 
                We believe in bringing the freshest, highest-quality products from farm to table, 
                while supporting local farmers and maintaining environmentally conscious practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-accent-burgundy mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide exceptional food products while promoting sustainable 
                agriculture and supporting local farming communities. We strive to maintain the 
                highest standards of quality while ensuring environmental responsibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-accent-burgundy mb-4">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">Quality</h3>
                  <p className="text-gray-700">We never compromise on the quality of our products.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">Sustainability</h3>
                  <p className="text-gray-700">Environmental responsibility is at our core.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary">Community</h3>
                  <p className="text-gray-700">Supporting local farmers and communities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-accent-burgundy mb-4">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Your message"
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-accent-burgundy mb-4">Our Location</h2>
                <Map />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutContact;