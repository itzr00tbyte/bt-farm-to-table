import { Apple, Package, Wheat, Carrot, Leaf } from "lucide-react";

export const products = [
  // Fruit Powders
  {
    title: "Banana Powder",
    description: "100% natural banana powder perfect for smoothies and baking",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800&auto=format&fit=crop",
    category: "fruit-powders"
  },
  {
    title: "Mango Powder",
    description: "Premium quality mango powder",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800&auto=format&fit=crop",
    category: "fruit-powders"
  },
  {
    title: "Chiku Powder",
    description: "Fresh and natural chiku powder",
    icon: Apple,
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&auto=format&fit=crop",
    category: "fruit-powders"
  },

  // Vegetable Powders
  {
    title: "Tomato Powder",
    description: "Concentrated tomato powder for cooking",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },
  {
    title: "Spinach Powder",
    description: "Nutrient-rich spinach powder",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },
  {
    title: "Beetroot Powder",
    description: "Natural beetroot powder",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1593005510329-8a4035a7238f?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },
  {
    title: "Carrot Powder",
    description: "Vitamin-rich carrot powder",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },
  {
    title: "Ginger Powder",
    description: "Aromatic ginger powder",
    icon: Package,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },
  {
    title: "Garlic Powder",
    description: "Flavorful garlic powder",
    icon: Package,
    image: "https://images.unsplash.com/photo-1615485290398-1f59e49d0d99?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },
  {
    title: "White Onion Powder",
    description: "Premium white onion powder",
    icon: Package,
    image: "https://images.unsplash.com/photo-1587049332298-1c42e83937a7?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },
  {
    title: "Red Onion Powder",
    description: "Aromatic red onion powder",
    icon: Package,
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },
  {
    title: "Moringa Powder",
    description: "Nutrient-dense moringa powder",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1515364229687-331ee7cf6d48?w=800&auto=format&fit=crop",
    category: "vegetable-powders"
  },

  // Spices
  {
    title: "Chilli",
    description: "Fresh whole chilli",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=800&auto=format&fit=crop",
    category: "spices"
  },
  {
    title: "Chilli Powder",
    description: "Premium quality chilli powder",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop",
    category: "spices"
  },

  // Dehydrated Vegetables
  {
    title: "Dehydrated Tomato",
    description: "Sun-dried tomatoes",
    icon: Package,
    image: "https://images.unsplash.com/photo-1562629595-ba1c2b7e1c71?w=800&auto=format&fit=crop",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Beetroot",
    description: "Crispy dehydrated beetroot",
    icon: Package,
    image: "https://images.unsplash.com/photo-1593005510329-8a4035a7238f?w=800&auto=format&fit=crop",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Carrot",
    description: "Crunchy dehydrated carrots",
    icon: Carrot,
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445?w=800&auto=format&fit=crop",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Ginger",
    description: "Preserved ginger pieces",
    icon: Package,
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&auto=format&fit=crop",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Garlic",
    description: "Dehydrated garlic flakes",
    icon: Package,
    image: "https://images.unsplash.com/photo-1615485290398-1f59e49d0d99?w=800&auto=format&fit=crop",
    category: "dehydrated"
  },
  {
    title: "Dehydrated White Onion",
    description: "Crispy white onion pieces",
    icon: Package,
    image: "https://images.unsplash.com/photo-1587049332298-1c42e83937a7?w=800&auto=format&fit=crop",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Red Onion",
    description: "Crispy red onion pieces",
    icon: Package,
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=800&auto=format&fit=crop",
    category: "dehydrated"
  }
];

export const categories = [
  { id: "fruit-powders", label: "Fruit Powders" },
  { id: "vegetable-powders", label: "Vegetable Powders" },
  { id: "spices", label: "Spices" },
  { id: "dehydrated", label: "Dehydrated Vegetables" },
];