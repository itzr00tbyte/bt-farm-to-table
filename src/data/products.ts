import { Apple, Package, Wheat, Carrot, Leaf } from "lucide-react";

export const products = [
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

export const categories = [
  { id: "fruit-powders", label: "Fruit Powders" },
  { id: "vegetable-powders", label: "Vegetable Powders" },
  { id: "spices", label: "Spices" },
  { id: "dehydrated", label: "Dehydrated Vegetables" },
];