import { useState } from "react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useToast } from "@/components/ui/use-toast";

const Products = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(products.map((product) => product.category))];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const handleEnquiry = (productName: string) => {
    toast({
      title: "Enquiry Sent!",
      description: `Thank you for your interest in ${productName}. We'll get back to you soon.`,
    });
  };

  return (
    <section className="py-16 px-4 md:px-8" id="products">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Products
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {product.description}
                </p>
                <Button
                  onClick={() => handleEnquiry(product.title)}
                  className="w-full bg-accent-gold hover:bg-primary text-white mt-auto"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;