const Hero = () => {
  return `
    <div class="relative h-screen w-full overflow-hidden" id="hero-carousel">
      <div class="carousel-container relative h-full">
        <div class="absolute inset-0 transition-opacity duration-1000 opacity-100">
          <img src="/custom-image-1.jpg" alt="Slide 1" class="object-cover w-full h-full" />
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div class="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img src="/custom-image-2.jpg" alt="Slide 2" class="object-cover w-full h-full" />
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div class="absolute inset-0 transition-opacity duration-1000 opacity-0">
          <img src="/custom-image-3.jpg" alt="Slide 3" class="object-cover w-full h-full" />
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      </div>

      <div class="absolute inset-0 flex items-center justify-center text-center">
        <div class="max-w-4xl px-4 animate-fadeIn">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Natural & Sustainable Food Products
          </h1>
          <p class="text-xl md:text-2xl text-white mb-8">
            From farm to table, we deliver quality ingredients with care
          </p>
          <button class="bg-accent-gold hover:bg-primary text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Explore Products
          </button>
        </div>
      </div>

      <button
        onclick="prevSlide()"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>

      <button
        onclick="nextSlide()"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-colors"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>

      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          onclick="goToSlide(0)"
          class="w-2 h-2 rounded-full bg-white/50 transition-colors"
          aria-label="Go to slide 1"
        ></button>
        <button
          onclick="goToSlide(1)"
          class="w-2 h-2 rounded-full bg-white/50 transition-colors"
          aria-label="Go to slide 2"
        ></button>
        <button
          onclick="goToSlide(2)"
          class="w-2 h-2 rounded-full bg-white/50 transition-colors"
          aria-label="Go to slide 3"
        ></button>
      </div>
    </div>

    <script>
      let currentSlide = 0;
      const slides = document.querySelectorAll('.carousel-container > div');
      const indicators = document.querySelectorAll('.bottom-4 button');
      let slideInterval;

      function updateSlides() {
        slides.forEach((slide, index) => {
          slide.classList.toggle('opacity-0', index !== currentSlide);
          slide.classList.toggle('opacity-100', index === currentSlide);
        });
        
        indicators.forEach((indicator, index) => {
          indicator.classList.toggle('bg-white', index === currentSlide);
          indicator.classList.toggle('bg-white/50', index !== currentSlide);
        });
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
      }

      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlides();
      }

      function goToSlide(index) {
        currentSlide = index;
        updateSlides();
        resetInterval();
      }

      function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
      }

      // Initialize the carousel
      document.addEventListener('DOMContentLoaded', () => {
        updateSlides();
        resetInterval();
      });
    </script>
  `;
};

export default Hero;