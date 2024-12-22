import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { products, categories } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "all" 
    ? products.slice(0, 8) 
    : products.filter(product => product.category === selectedCategory).slice(0, 8);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-accent-brown max-w-2xl mx-auto mb-8">
            From farm to table, we deliver premium quality ingredients that preserve nature's goodness
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className={`min-w-[120px] ${
                selectedCategory === "all"
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "border-primary text-primary hover:bg-primary/10"
              }`}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`min-w-[120px] ${
                  selectedCategory === category.id
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "border-primary text-primary hover:bg-primary/10"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <product.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="ml-3 text-lg font-semibold text-primary">
                    {product.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/all-products">
            <Button variant="outline" size="lg" className="hover:bg-primary hover:text-white transition-colors">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;