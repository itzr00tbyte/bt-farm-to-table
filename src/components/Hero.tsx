import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1920&h=1080&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&h=1080&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1920&h=1080&fit=crop&auto=format"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Natural & Sustainable Food Products
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            From farm to table, we deliver quality ingredients with care
          </p>
          <button className="bg-accent-gold hover:bg-primary text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Explore Products
          </button>
        </div>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentImage ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;