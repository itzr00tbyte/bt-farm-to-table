import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.slide-indicator');

    const updateSlides = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle('opacity-0', index !== currentSlide);
        slide.classList.toggle('opacity-100', index === currentSlide);
      });
      
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('bg-white', index === currentSlide);
        indicator.classList.toggle('bg-white/50', index !== currentSlide);
      });
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
    };

    const goToSlide = (index: number) => {
      currentSlide = index;
      updateSlides();
    };

    // Add event listeners
    document.querySelector('.next-button')?.addEventListener('click', nextSlide);
    document.querySelector('.prev-button')?.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });

    // Start automatic slideshow
    const slideInterval = setInterval(nextSlide, 5000);

    // Cleanup
    return () => {
      clearInterval(slideInterval);
      document.querySelector('.next-button')?.removeEventListener('click', nextSlide);
      document.querySelector('.prev-button')?.removeEventListener('click', prevSlide);
      indicators.forEach((indicator, index) => {
        indicator.removeEventListener('click', () => goToSlide(index));
      });
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden" id="hero-carousel">
      <div className="carousel-container relative h-full">
        <div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-100">
          <img src="Images/Fruits Powders/banana powder.jpg" alt="Banana Powder" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img src="Images/Veg Powders/beetroot.webp" alt="Beetroot Powder" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img src="Images/Dehydrated Veg/carrot dehydrated.avif" alt="Dehydrated Carrot" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </div>

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
        className="prev-button absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      <button
        className="next-button absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          className="slide-indicator w-2 h-2 rounded-full bg-white transition-colors"
          aria-label="Go to slide 1"
        ></button>
        <button
          className="slide-indicator w-2 h-2 rounded-full bg-white/50 transition-colors"
          aria-label="Go to slide 2"
        ></button>
        <button
          className="slide-indicator w-2 h-2 rounded-full bg-white/50 transition-colors"
          aria-label="Go to slide 3"
        ></button>
      </div>
    </div>
  );
};

export default Hero;
