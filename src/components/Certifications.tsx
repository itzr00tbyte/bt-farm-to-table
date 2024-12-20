const certifications = [
  {
    name: "USDA Organic",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843",
  },
  {
    name: "Non-GMO Project",
    image: "https://images.unsplash.com/photo-1607000975985-760647ed2c7f",
  },
  {
    name: "Fair Trade Certified",
    image: "https://images.unsplash.com/photo-1607000975937-3dd036e9b3d3",
  },
  {
    name: "ISO 22000",
    image: "https://images.unsplash.com/photo-1607000975874-cab61699e56b",
  }
];

const Certifications = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Certified By
          </h2>
          <p className="text-lg md:text-xl text-accent-brown max-w-2xl mx-auto">
            Our commitment to quality is recognized by leading certification bodies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;