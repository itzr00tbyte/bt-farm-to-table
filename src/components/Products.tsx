import { Package, Wheat, Carrot } from "lucide-react";

const products = [
  {
    title: "Fruit Powders",
    description: "100% natural fruit powders perfect for smoothies and baking",
    icon: Package,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  },
  {
    title: "Dehydrated Vegetables",
    description: "Preserved vegetables that maintain their nutritional value",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
  },
  {
    title: "Spices",
    description: "Premium quality spices sourced directly from farmers",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

const Products = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Products
          </h2>
          <p className="text-lg text-accent-brown max-w-2xl mx-auto">
            Discover our range of natural and sustainable food products, carefully sourced
            and processed to maintain their nutritional value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <product.icon className="h-6 w-6 text-accent-gold" />
                  <h3 className="ml-2 text-xl font-semibold text-primary">
                    {product.title}
                  </h3>
                </div>
                <p className="text-accent-brown">{product.description}</p>
                <button className="mt-4 text-accent-gold hover:text-primary font-semibold transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;