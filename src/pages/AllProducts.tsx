import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { products, categories } from "@/data/products";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter(
    (product) => selectedCategory === "all" || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              All Products
            </h2>
            <p className="text-lg md:text-xl text-accent-brown max-w-2xl mx-auto">
              Explore our complete collection of premium quality ingredients
            </p>
          </div>

          <div className="flex justify-center mb-12 space-x-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-accent-brown hover:bg-gray-200"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-accent-brown hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.title}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <div className="p-1.5 rounded-full bg-primary/10">
                      <product.icon className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="ml-2 text-lg font-semibold text-primary">
                      {product.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllProducts;