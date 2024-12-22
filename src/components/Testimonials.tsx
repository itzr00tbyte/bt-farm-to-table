import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Krishnan",
    role: "Restaurant Owner",
    content: "BT Foods' spices and dehydrated vegetables have truly enhanced our South Indian dishes. Their quality is exceptional, especially for our sambar and rasam preparations.",
    rating: 5
  },
  {
    name: "Lakshmi Venkatesh",
    role: "Food Distributor",
    content: "As a distributor in Chennai, I can vouch for BT Foods' commitment to quality. Their products meet the high standards demanded by South Indian cuisine.",
    rating: 5
  },
  {
    name: "Priya Sundaram",
    role: "Organic Store Owner",
    content: "Our customers particularly love their curry leaf powder and other authentic South Indian spice blends. The quality is consistently excellent.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Customer Testimonials
          </h2>
          <p className="text-lg md:text-xl text-accent-brown max-w-2xl mx-auto">
            Trusted by South Indian Businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent-gold fill-current"
                  />
                ))}
              </div>
              <p className="text-accent-brown mb-6">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-sm text-accent-brown">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;