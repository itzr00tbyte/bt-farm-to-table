// Navigation
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hero Carousel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

// Products Filter
const products = [
    {
        title: "Banana Powder",
        category: "fruit-powders",
        image: "/Images/Fruits Powders/banana powder.jpg",
        description: "100% natural banana powder perfect for smoothies and baking"
    },
    // ... Add more products here
];

const filterBtns = document.querySelectorAll('.filter-btn');
const productGrid = document.querySelector('.product-grid');

function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    renderProducts(filteredProducts);
}

function renderProducts(products) {
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
        </div>
    `).join('');
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProducts(btn.dataset.filter);
    });
});

// Initialize products
filterProducts('all');

// Testimonials
const testimonials = [
    {
        name: "Rajesh Krishnan",
        role: "Restaurant Owner",
        content: "BT Foods' spices and dehydrated vegetables have truly enhanced our South Indian dishes."
    },
    // ... Add more testimonials
];

const testimonialsGrid = document.querySelector('.testimonials-grid');

function renderTestimonials() {
    testimonialsGrid.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <p>${testimonial.content}</p>
            <h4>${testimonial.name}</h4>
            <span>${testimonial.role}</span>
        </div>
    `).join('');
}

// Initialize testimonials
renderTestimonials();

// Certifications
const certifications = [
    {
        name: "FSSAI",
        image: "/Images/Certifications/fssai-logo.png",
        description: "Food Safety and Standards Authority of India"
    },
    // ... Add more certifications
];

const certificationsGrid = document.querySelector('.certifications-grid');

function renderCertifications() {
    certificationsGrid.innerHTML = certifications.map(cert => `
        <div class="certification-card">
            <img src="${cert.image}" alt="${cert.name}">
            <h4>${cert.name}</h4>
            <p>${cert.description}</p>
        </div>
    `).join('');
}

// Initialize certifications
renderCertifications();