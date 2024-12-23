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

    document.querySelector('.next-button')?.addEventListener('click', nextSlide);
    document.querySelector('.prev-button')?.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });

    const slideInterval = setInterval(nextSlide, 5000);

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
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-purple-300 via-pink-200 to-red-300" id="hero-carousel">
      <div className="flex h-full">
        {/* Left side - Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 z-10">
          <div className="space-y-6 text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-purple-900 leading-tight animate-fadeIn">
              Natural & Sustainable Food Products
            </h1>
            <p className="text-xl md:text-2xl text-purple-800 mb-8 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              From farm to table, we deliver quality ingredients with care
            </p>
            <div className="flex items-center space-x-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                Explore Products
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Image Carousel */}
        <div className="absolute md:relative w-full md:w-1/2 h-full">
          <div className="carousel-container relative h-full">
            <div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20"></div>
              <img src="./Images/Fruits Powders/banana powder.jpg" alt="Banana Powder" className="object-cover w-full h-full opacity-40" />
            </div>
            <div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20"></div>
              <img src="./Images/Veg Powders/beetroot.webp" alt="Beetroot Powder" className="object-cover w-full h-full opacity-40" />
            </div>
            <div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-0">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-500/20"></div>
              <img src="./Images/Dehydrated Veg/carrot dehydrated.avif" alt="Dehydrated Carrot" className="object-cover w-full h-full opacity-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        className="prev-button absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-900 p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-20"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      <button
        className="next-button absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-900 p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg z-20"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        <button
          className="slide-indicator w-3 h-3 rounded-full bg-white shadow-lg transition-all hover:scale-110"
          aria-label="Go to slide 1"
        ></button>
        <button
          className="slide-indicator w-3 h-3 rounded-full bg-white/50 shadow-lg transition-all hover:scale-110"
          aria-label="Go to slide 2"
        ></button>
        <button
          className="slide-indicator w-3 h-3 rounded-full bg-white/50 shadow-lg transition-all hover:scale-110"
          aria-label="Go to slide 3"
        ></button>
      </div>
    </div>
  );
};

export default Hero;