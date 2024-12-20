import { Leaf, Shield, Users, Truck } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "All our products are naturally sourced and processed"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Rigorous quality control at every step"
  },
  {
    icon: Users,
    title: "Farmer Support",
    description: "Direct partnership with local farmers"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Nationwide delivery network"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-accent-brown max-w-2xl mx-auto">
            We're committed to delivering the highest quality natural food products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-accent-brown">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;