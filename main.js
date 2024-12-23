// Mobile Navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Hero Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicators .indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
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

prevBtn?.addEventListener('click', prevSlide);
nextBtn?.addEventListener('click', nextSlide);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateSlides();
    });
});

// Auto-advance slides
setInterval(nextSlide, 5000);

// Products
const products = [
    {
        title: "Banana Powder",
        description: "100% natural banana powder perfect for smoothies and baking",
        image: "/Images/Fruits Powders/banana powder.jpg",
        category: "fruit-powders"
    },
    // Add more products here...
];

const productsGrid = document.querySelector('.products-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

function renderProducts(category = 'all') {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
            </div>
        </div>
    `).join('');
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
});

// Initial render
renderProducts();

// Certifications
const certifications = [
    {
        name: "FSSAI",
        image: "/Images/Certifications/fssai-logo.png",
        description: "Food Safety and Standards Authority of India"
    },
    // Add more certifications here...
];

const certificationsGrid = document.querySelector('.certifications-grid');

function renderCertifications() {
    certificationsGrid.innerHTML = certifications.map(cert => `
        <div class="certification-card">
            <img src="${cert.image}" alt="${cert.name}">
            <h3>${cert.name}</h3>
            <p>${cert.description}</p>
        </div>
    `).join('');
}

// Initial render
renderCertifications();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});