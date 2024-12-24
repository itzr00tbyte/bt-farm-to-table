import { Apple, Package, Wheat, Carrot, Leaf } from "lucide-react";

export const products = [
  // Fruit Powders
  {
    title: "Banana Powder",
    description: "100% natural banana powder perfect for smoothies and baking",
    icon: Apple,
    image: "/src/Images/Fruits Powders/banana powder.jpg",
    category: "fruit-powders"
  },
  {
    title: "Mango Powder",
    description: "Premium quality mango powder",
    icon: Apple,
    image: "/src/Images/Fruits Powders/mango powder.jpg",
    category: "fruit-powders"
  },
  {
    title: "Chiku Powder",
    description: "Fresh and natural chiku powder",
    icon: Apple,
    image: "/src/Images/Fruits Powders/chiku powder.webp",
    category: "fruit-powders"
  },
  // Vegetable Powders
  {
    title: "Tomato Powder",
    description: "Concentrated tomato powder for cooking",
    icon: Carrot,
    image: "/src/Images/Veg Powders/tomato.jpg",
    category: "vegetable-powders"
  },
  {
    title: "Spinach Powder",
    description: "Nutrient-rich spinach powder",
    icon: Leaf,
    image: "/src/Images/Veg Powders/spinach.webp",
    category: "vegetable-powders"
  },
  {
    title: "Beetroot Powder",
    description: "Natural beetroot powder",
    icon: Carrot,
    image: "/src/Images/Veg Powders/beetroot.webp",
    category: "vegetable-powders"
  },
  {
    title: "Carrot Powder",
    description: "Vitamin-rich carrot powder",
    icon: Carrot,
    image: "/src/Images/Veg Powders/carrot.jpg",
    category: "vegetable-powders"
  },
  {
    title: "Ginger Powder",
    description: "Aromatic ginger powder",
    icon: Package,
    image: "/src/Images/Veg Powders/ginger.jpg",
    category: "vegetable-powders"
  },
  {
    title: "Garlic Powder",
    description: "Flavorful garlic powder",
    icon: Package,
    image: "/src/Images/Veg Powders/garlic.avif",
    category: "vegetable-powders"
  },
  {
    title: "White Onion Powder",
    description: "Premium white onion powder",
    icon: Package,
    image: "/src/Images/Veg Powders/white onion.jpg",
    category: "vegetable-powders"
  },
  {
    title: "Red Onion Powder",
    description: "Aromatic red onion powder",
    icon: Package,
    image: "/src/Images/Veg Powders/red onion.avif",
    category: "vegetable-powders"
  },
  {
    title: "Moringa Powder",
    description: "Nutrient-dense moringa powder",
    icon: Leaf,
    image: "/src/Images/Veg Powders/moringa.webp",
    category: "vegetable-powders"
  },
  // Spices
  {
    title: "Chilli",
    description: "Fresh whole chilli",
    icon: Wheat,
    image: "/src/Images/Spices/chilli.jpg",
    category: "spices"
  },
  {
    title: "Chilli Powder",
    description: "Premium quality chilli powder",
    icon: Wheat,
    image: "/src/Images/Spices/chillipowder.jpg",
    category: "spices"
  },
  // Dehydrated Vegetables
  {
    title: "Dehydrated Tomato",
    description: "Sun-dried tomatoes",
    icon: Package,
    image: "/src/Images/Dehydrated Veg/tomato dehydrated.avif",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Beetroot",
    description: "Crispy dehydrated beetroot",
    icon: Package,
    image: "/src/Images/Dehydrated Veg/beetroot dehydrated.jpg",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Carrot",
    description: "Crunchy dehydrated carrots",
    icon: Carrot,
    image: "/src/Images/Dehydrated Veg/carrot dehydrated.avif",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Ginger",
    description: "Preserved ginger pieces",
    icon: Package,
    image: "/src/Images/Dehydrated Veg/ginger dehydrated.avif",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Garlic",
    description: "Dehydrated garlic flakes",
    icon: Package,
    image: "/src/Images/Dehydrated Veg/garlic dehydrated.jpeg",
    category: "dehydrated"
  },
  {
    title: "Dehydrated White Onion",
    description: "Crispy white onion pieces",
    icon: Package,
    image: "/src/Images/Dehydrated Veg/onion dehydrated.webp",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Red Onion",
    description: "Crispy red onion pieces",
    icon: Package,
    image: "/src/Images/Dehydrated Veg/redonion dehydrated.webp",
    category: "dehydrated"
  }
];

export const categories = [
  { id: "fruit-powders", label: "Fruit Powders" },
  { id: "vegetable-powders", label: "Vegetable Powders" },
  { id: "spices", label: "Spices" },
  { id: "dehydrated", label: "Dehydrated Vegetables" },
];
