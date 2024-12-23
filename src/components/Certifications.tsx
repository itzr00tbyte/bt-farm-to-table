const certifications = [
  {
    name: "FSSAI",
    image: "https://placehold.co/200x100/026633/FFFFFF?text=FSSAI+Logo",
    description: "Food Safety and Standards Authority of India"
  },
  {
    name: "APEDA",
    image: "https://placehold.co/200x100/4a2619/FFFFFF?text=APEDA+Logo",
    description: "Agricultural and Processed Food Products Export Development Authority"
  },
  {
    name: "GST",
    image: "https://placehold.co/200x100/cf9817/FFFFFF?text=GST+Logo",
    description: "Goods and Services Tax Registration"
  },
  {
    name: "IEC",
    image: "https://placehold.co/200x100/6e2b3e/FFFFFF?text=IEC+Logo",
    description: "Import Export Code"
  },
  {
    name: "UDHYAM",
    image: "https://placehold.co/200x100/026633/FFFFFF?text=UDHYAM+Logo",
    description: "MSME Registration Certificate"
  },
  {
    name: "INCORPORATION",
    image: "https://placehold.co/200x100/4a2619/FFFFFF?text=INCORPORATION+Logo",
    description: "Certificate of Incorporation"
  }
];

const Certifications = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Certifications
          </h2>
          <p className="text-lg md:text-xl text-accent-brown max-w-2xl mx-auto">
            Committed to Quality and Compliance with Indian Standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="h-20 w-auto mb-4 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <h3 className="text-lg font-semibold text-primary">{cert.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;