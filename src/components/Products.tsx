import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";
import { products, categories } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("fruit-powders");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Products
          </h2>
          <p className="text-lg md:text-xl text-accent-brown max-w-2xl mx-auto">
            From farm to table, we deliver premium quality ingredients that preserve nature's goodness
          </p>
        </div>

        <div className="flex justify-center mb-12 space-x-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col items-center justify-around"
            >
              <div className="relative h-40 overflow-hidden w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 w-full flex flex-col items-center justify-around">
                <div className="flex items-center justify-center">
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <product.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="ml-2 text-lg font-semibold text-primary">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/all-products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;