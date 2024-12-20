import { Package, Wheat, Carrot, Coffee, Apple, Leaf, Flower2, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const products = [
  // Fruit Powders
  {
    title: "Banana Powder",
    description: "100% natural banana powder perfect for smoothies and baking",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24",
    category: "fruit-powders"
  },
  {
    title: "Mango Powder",
    description: "Premium quality mango powder",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    category: "fruit-powders"
  },
  {
    title: "Chiku Powder",
    description: "Fresh and natural chiku powder",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b",
    category: "fruit-powders"
  },
  // Vegetable Powders
  {
    title: "Tomato Powder",
    description: "Concentrated tomato powder for cooking",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1546233190-2d738f6d1121",
    category: "vegetable-powders"
  },
  {
    title: "Spinach Powder",
    description: "Nutrient-rich spinach powder",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    category: "vegetable-powders"
  },
  {
    title: "Beetroot Powder",
    description: "Natural beetroot powder",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1593005510329-8a4035a7238f",
    category: "vegetable-powders"
  },
  {
    title: "Carrot Powder",
    description: "Vitamin-rich carrot powder",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979",
    category: "vegetable-powders"
  },
  {
    title: "Ginger Powder",
    description: "Aromatic ginger powder",
    icon: Package,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7",
    category: "vegetable-powders"
  },
  {
    title: "Garlic Powder",
    description: "Flavorful garlic powder",
    icon: Package,
    image: "https://images.unsplash.com/photo-1615485290398-1f59e49d0d99",
    category: "vegetable-powders"
  },
  {
    title: "White Onion Powder",
    description: "Premium white onion powder",
    icon: Package,
    image: "https://images.unsplash.com/photo-1508747703725-719777637510",
    category: "vegetable-powders"
  },
  {
    title: "Red Onion Powder",
    description: "Aromatic red onion powder",
    icon: Package,
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31",
    category: "vegetable-powders"
  },
  {
    title: "Moringa Powder",
    description: "Nutrient-dense moringa powder",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9",
    category: "vegetable-powders"
  },
  // Spices
  {
    title: "Chilli",
    description: "Fresh whole chilli",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87",
    category: "spices"
  },
  {
    title: "Chilli Powder",
    description: "Premium quality chilli powder",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
    category: "spices"
  },
  // Dehydrated Vegetables
  {
    title: "Dehydrated Tomato",
    description: "Sun-dried tomatoes",
    icon: Package,
    image: "https://images.unsplash.com/photo-1546233190-2d738f6d1121",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Beetroot",
    description: "Crispy dehydrated beetroot",
    icon: Package,
    image: "https://images.unsplash.com/photo-1593005510329-8a4035a7238f",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Carrot",
    description: "Crunchy dehydrated carrots",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1447175008436-054170c2e979",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Ginger",
    description: "Preserved ginger pieces",
    icon: Package,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Garlic",
    description: "Dehydrated garlic flakes",
    icon: Package,
    image: "https://images.unsplash.com/photo-1615485290398-1f59e49d0d99",
    category: "dehydrated"
  },
  {
    title: "Dehydrated White Onion",
    description: "Crispy white onion pieces",
    icon: Package,
    image: "https://images.unsplash.com/photo-1508747703725-719777637510",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Red Onion",
    description: "Crispy red onion pieces",
    icon: Package,
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31",
    category: "dehydrated"
  }
];

const categories = [
  { id: "fruit-powders", label: "Fruit Powders" },
  { id: "vegetable-powders", label: "Vegetable Powders" },
  { id: "spices", label: "Spices" },
  { id: "dehydrated", label: "Dehydrated Vegetables" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("powders");

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
