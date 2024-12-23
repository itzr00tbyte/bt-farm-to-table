import { Apple, Package, Wheat, Carrot, Leaf } from "lucide-react";

export const products = [
  // Fruit Powders
  {
    title: "Banana Powder",
    description: "100% natural banana powder perfect for smoothies and baking",
    icon: Apple,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Fruits%20Powders/banana%20powder.jpg",
    category: "fruit-powders"
  },
  {
    title: "Mango Powder",
    description: "Premium quality mango powder",
    icon: Apple,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Fruits%20Powders/mango%20powder.jpg",
    category: "fruit-powders"
  },
  {
    title: "Chiku Powder",
    description: "Fresh and natural chiku powder",
    icon: Apple,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Fruits%20Powders/chiku%20powder.webp",
    category: "fruit-powders"
  },

  // Vegetable Powders
  {
    title: "Tomato Powder",
    description: "Concentrated tomato powder for cooking",
    icon: Carrot,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/tomato.jpg",
    category: "vegetable-powders"
  },
  {
    title: "Spinach Powder",
    description: "Nutrient-rich spinach powder",
    icon: Leaf,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/spinach.webp",
    category: "vegetable-powders"
  },
  {
    title: "Beetroot Powder",
    description: "Natural beetroot powder",
    icon: Carrot,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/beetroot.webp",
    category: "vegetable-powders"
  },
  {
    title: "Carrot Powder",
    description: "Vitamin-rich carrot powder",
    icon: Carrot,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/carrot.jpg",
    category: "vegetable-powders"
  },
  {
    title: "Ginger Powder",
    description: "Aromatic ginger powder",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/ginger.jpg",
    category: "vegetable-powders"
  },
  {
    title: "Garlic Powder",
    description: "Flavorful garlic powder",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/garlic.avif",
    category: "vegetable-powders"
  },
  {
    title: "White Onion Powder",
    description: "Premium white onion powder",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/white%20onion.jpg",
    category: "vegetable-powders"
  },
  {
    title: "Red Onion Powder",
    description: "Aromatic red onion powder",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/red%20onion.avif",
    category: "vegetable-powders"
  },
  {
    title: "Moringa Powder",
    description: "Nutrient-dense moringa powder",
    icon: Leaf,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Veg%20Powders/moringa.webp",
    category: "vegetable-powders"
  },

  // Spices
  {
    title: "Chilli",
    description: "Fresh whole chilli",
    icon: Wheat,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Spices/chilli.jpg",
    category: "spices"
  },
  {
    title: "Chilli Powder",
    description: "Premium quality chilli powder",
    icon: Wheat,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Spices/chillipowder.jpg",
    category: "spices"
  },

  // Dehydrated Vegetables
  {
    title: "Dehydrated Tomato",
    description: "Sun-dried tomatoes",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Dehydrated%20Veg/tomato%20dehydrated.avif",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Beetroot",
    description: "Crispy dehydrated beetroot",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Dehydrated%20Veg/beetroot%20dehydrated.jpg",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Carrot",
    description: "Crunchy dehydrated carrots",
    icon: Carrot,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Dehydrated%20Veg/carrot%20dehydrated.avif",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Ginger",
    description: "Preserved ginger pieces",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Dehydrated%20Veg/ginger%20dehydrated.avif",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Garlic",
    description: "Dehydrated garlic flakes",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Dehydrated%20Veg/garlic%20dehydrated.jpeg",
    category: "dehydrated"
  },
  {
    title: "Dehydrated White Onion",
    description: "Crispy white onion pieces",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Dehydrated%20Veg/onion%20dehydrated.webp",
    category: "dehydrated"
  },
  {
    title: "Dehydrated Red Onion",
    description: "Crispy red onion pieces",
    icon: Package,
    image: "https://raw.githubusercontent.com/yourusername/your-repo/main/Images/Dehydrated%20Veg/redonion%20dehydrated.webp",
    category: "dehydrated"
  }
];

export const categories = [
  { id: "fruit-powders", label: "Fruit Powders" },
  { id: "vegetable-powders", label: "Vegetable Powders" },
  { id: "spices", label: "Spices" },
  { id: "dehydrated", label: "Dehydrated Vegetables" },
];