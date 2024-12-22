import { Apple, Package, Wheat, Carrot, Leaf } from "lucide-react";

export const products = [
  // Fruit Powders
  {
    id: "banana-powder",
    title: "Banana Powder",
    description: "100% natural banana powder perfect for smoothies and baking",
    icon: Apple,
    image: "/Images/Fruits Powders/banana powder.jpg",
    category: "fruit-powders"
  },
  {
    id: "mango-powder",
    title: "Mango Powder",
    description: "Premium quality mango powder",
    icon: Apple,
    image: "/Images/Fruits Powders/mango powder.jpg",
    category: "fruit-powders"
  },
  {
    id: "chiku-powder",
    title: "Chiku Powder",
    description: "Fresh and natural chiku powder",
    icon: Apple,
    image: "/Images/Fruits Powders/chiku powder.webp",
    category: "fruit-powders"
  },
  // Vegetable Powders
  {
    id: "tomato-powder",
    title: "Tomato Powder",
    description: "Concentrated tomato powder for cooking",
    icon: Carrot,
    image: "/Images/Veg Powders/tomato.jpg",
    category: "vegetable-powders"
  },
  {
    id: "spinach-powder",
    title: "Spinach Powder",
    description: "Nutrient-rich spinach powder",
    icon: Leaf,
    image: "/Images/Veg Powders/spinach.webp",
    category: "vegetable-powders"
  },
  {
    id: "beetroot-powder",
    title: "Beetroot Powder",
    description: "Natural beetroot powder",
    icon: Carrot,
    image: "/Images/Veg Powders/beetroot.webp",
    category: "vegetable-powders"
  },
  {
    id: "carrot-powder",
    title: "Carrot Powder",
    description: "Vitamin-rich carrot powder",
    icon: Carrot,
    image: "/Images/Veg Powders/carrot.jpg",
    category: "vegetable-powders"
  },
  {
    id: "ginger-powder",
    title: "Ginger Powder",
    description: "Aromatic ginger powder",
    icon: Package,
    image: "/Images/Veg Powders/ginger.jpg",
    category: "vegetable-powders"
  },
  {
    id: "garlic-powder",
    title: "Garlic Powder",
    description: "Flavorful garlic powder",
    icon: Package,
    image: "/Images/Veg Powders/garlic.avif",
    category: "vegetable-powders"
  },
  {
    id: "white-onion-powder",
    title: "White Onion Powder",
    description: "Premium white onion powder",
    icon: Package,
    image: "/Images/Veg Powders/white onion.jpg",
    category: "vegetable-powders"
  },
  {
    id: "red-onion-powder",
    title: "Red Onion Powder",
    description: "Aromatic red onion powder",
    icon: Package,
    image: "/Images/Veg Powders/red onion.avif",
    category: "vegetable-powders"
  },
  {
    id: "moringa-powder",
    title: "Moringa Powder",
    description: "Nutrient-dense moringa powder",
    icon: Leaf,
    image: "/Images/Veg Powders/moringa.webp",
    category: "vegetable-powders"
  },
  // Spices
  {
    id: "chilli",
    title: "Chilli",
    description: "Fresh whole chilli",
    icon: Wheat,
    image: "/Images/Spices/chilli.jpg",
    category: "spices"
  },
  {
    id: "chilli-powder",
    title: "Chilli Powder",
    description: "Premium quality chilli powder",
    icon: Wheat,
    image: "/Images/Spices/chillipowder.jpg",
    category: "spices"
  },
  // Dehydrated Vegetables
  {
    id: "dehydrated-tomato",
    title: "Dehydrated Tomato",
    description: "Sun-dried tomatoes",
    icon: Package,
    image: "/Images/Dehydrated Veg/tomato dehydrated.avif",
    category: "dehydrated"
  },
  {
    id: "dehydrated-beetroot",
    title: "Dehydrated Beetroot",
    description: "Crispy dehydrated beetroot",
    icon: Package,
    image: "/Images/Dehydrated Veg/beetroot dehydrated.jpg",
    category: "dehydrated"
  },
  {
    id: "dehydrated-carrot",
    title: "Dehydrated Carrot",
    description: "Crunchy dehydrated carrots",
    icon: Carrot,
    image: "/Images/Dehydrated Veg/carrot dehydrated.avif",
    category: "dehydrated"
  },
  {
    id: "dehydrated-ginger",
    title: "Dehydrated Ginger",
    description: "Preserved ginger pieces",
    icon: Package,
    image: "/Images/Dehydrated Veg/ginger dehydrated.avif",
    category: "dehydrated"
  },
  {
    id: "dehydrated-garlic",
    title: "Dehydrated Garlic",
    description: "Dehydrated garlic flakes",
    icon: Package,
    image: "/Images/Dehydrated Veg/garlic dehydrated.jpeg",
    category: "dehydrated"
  },
  {
    id: "dehydrated-white-onion",
    title: "Dehydrated White Onion",
    description: "Crispy white onion pieces",
    icon: Package,
    image: "/Images/Dehydrated Veg/onion dehydrated.webp",
    category: "dehydrated"
  },
  {
    id: "dehydrated-red-onion",
    title: "Dehydrated Red Onion",
    description: "Crispy red onion pieces",
    icon: Package,
    image: "/Images/Dehydrated Veg/redonion dehydrated.webp",
    category: "dehydrated"
  }
];

export const categories = [
  { id: "fruit-powders", label: "Fruit Powders" },
  { id: "vegetable-powders", label: "Vegetable Powders" },
  { id: "spices", label: "Spices" },
  { id: "dehydrated", label: "Dehydrated Vegetables" },
];