export interface Product {
  id: string;
  name: string;
  displayName: string;
  description: string;
  shortDescription: string;
  sizes: {
    [key: string]: number;
  };
  images: {
    hero: string;
    card: string;
    details: string[];
    translucent: string;
  };
  amazonUrl: string;
  slug: string;
  colorScheme: string;
  linkColorScheme: string;
  radiantColor: string;
  guidelines: string[];
  benefits: Array<{
    name: string;
    icon: string;
  }>;
  logo?: string;
}

export const whatsappNumber = "+919990033206";
//export const whatsappNumber = "9758532379";

export const products: Product[] = [
  {
    id: "1",
    name: "Himalayan Lavender Premium Herbal Tea",
    displayName: "Lavender",
    description: "A soothing blend to calm your senses. This aromatic tea combines the gentle notes of lavender with a hint of chamomile, creating a perfect harmony that helps you unwind after a long day.",
    shortDescription: "A soothing blend to calm your senses",
    sizes: {
      "40g": 349
      // "100g": 22.99,
      // "250g": 49.99
    },
    images: {
      hero: "/images/lavender/hero.jpg",
      card: "/images/lavender/card.jpg",
      details: [
        "/images/lavender/1.jpg",
        "/images/lavender/2.jpg",
        "/images/lavender/3.jpg",
        "/images/lavender/4.jpg",
        "/images/lavender/5.jpg",
        "/images/lavender/6.jpg",
      ],
      translucent: "/images/lavender/translucent.png"
    },
    logo: "/images/lavender/logo.svg",
    amazonUrl: "https://www.amazon.in/dp/B0DJDCR2Y7/",
    slug: "lavender",
    colorScheme: "#E6E6FA",
    linkColorScheme: "#61398E",
    radiantColor:"#D8BFFF",
    guidelines: [
      "Steep in hot water for 3-5 minutes",
      "Enjoy before bedtime for best results",
      "Can be served hot or iced"
    ],
    benefits: [
      { name: "Relax", icon: "🍃" },
      { name: "Sleep", icon: "🌙" }
    ]
  },
  {
    id: "2",
    name: "Himalayan Hibiscus Premium Herbal Tea",
    displayName: "Hibiscus",
    description: "A vibrant fusion of orange and lemon with a hint of ginger, this tea is perfect for a refreshing pick-me-up. Enjoy its invigorating flavor any time of the day.",
    shortDescription: "A vibrant fusion of orange and lemon",
    sizes: {
      "50g": 185
      // "100g": 19.99,
      // "250g": 42.99
    },
    images: {
      hero: "/images/hibiscus/hero.jpg",
      card: "/images/hibiscus/card.jpg",
      details: [
        "/images/hibiscus/1.jpg",
        "/images/hibiscus/2.jpg",
        "/images/hibiscus/3.jpg",
        "/images/hibiscus/4.jpg",
        "/images/hibiscus/5.jpg",
        "/images/hibiscus/6.jpg",
        "/images/hibiscus/7.jpg",
      ],
      translucent: "/images/hibiscus/translucent.png"
    },
    amazonUrl: "https://www.amazon.in/dp/B0DJDB118W",
    logo: "/images/hibiscus/logo.svg",
    slug: "hibiscus",
    colorScheme: "#f5dace",
    linkColorScheme: "#dc363d",
    radiantColor:"#F7B293",
    guidelines: [
      "Steep in hot water for 4-6 minutes",
      "Best served chilled with ice",
      "Add honey for extra sweetness"
    ],
    benefits: [
      { name: "Energize", icon: "⚡" },
      { name: "Immunity Boost", icon: "💪" }
    ]
  },
  {
    id: "3",
    name: "Himalayan Chamomile Premium Herbal Tea",
    displayName: "Chamomile",
    description: "Experience a refreshing burst of peppermint and spearmint in this revitalizing tea. Perfect for cooling down on a hot day or invigorating your senses.",
    shortDescription: "Refreshing burst of peppermint and spearmint",
    sizes: {
      "30g": 185
      // "100g": 20.99,
      // "250g": 45.99
    },
    images: {
      hero: "/images/chamomile/hero.jpg",
      card: "/images/chamomile/card.jpg",
      details: [
        "/images/chamomile/1.jpg",
        "/images/chamomile/2.jpg",
        "/images/chamomile/3.jpg",
        "/images/chamomile/4.jpg",
        "/images/chamomile/5.jpg",
        "/images/chamomile/6.jpg",
        "/images/chamomile/7.jpg",
      ],
      translucent: "/images/chamomile/translucent.png"
    },
    amazonUrl: "https://www.amazon.in/dp/B0DJD9XBHD",
    logo: "/images/chamomile/logo.svg",
    slug: "chamomile",
    colorScheme: "#fad264",
    linkColorScheme: "#a56928",
    radiantColor:"#FFC83D",
    guidelines: [
      "Steep in hot water for 5-7 minutes",
      "Can be enjoyed hot or cold",
      "Perfect after meals for digestion"
    ],
    benefits: [
      { name: "Refresh", icon: "💧" },
      { name: "Digestive Aid", icon: "🍵" }
    ]
  },
  {
    id: "4",
    name: "Butterfly Pea Flower Premium Herbal Tea",
    displayName: "Butterfly Pea Flower",
    description: "Indulge in the warm spices of cinnamon, cardamom, and cloves blended with black tea. This chai is perfect for those who enjoy a robust flavor profile.",
    shortDescription: "Warm spices blended with black tea",
    sizes: {
      "30g": 275
      // "100g": 24.99,
      // "250g": 52.99
    },
    images: {
      hero: "/images/butterfly/hero.jpg",
      card: "/images/butterfly/card.jpg",
      details: [
        "/images/butterfly/1.jpg",
        "/images/butterfly/2.jpg",
        "/images/butterfly/3.jpg",
        "/images/butterfly/4.jpg",
        "/images/butterfly/5.jpg",
        "/images/butterfly/6.jpg",
        "/images/butterfly/7.jpg",
        "/images/butterfly/8.jpg",
      ],
      translucent: "/images/butterfly/translucent.png"
    },
    amazonUrl: "https://www.amazon.in/dp/B0DJD92V93/",
    logo: "/images/butterfly/logo.svg",
    slug: "butterfly",
    colorScheme: "#c5d8ee",
    linkColorScheme: "#204e96",
    radiantColor:"#A3C7FF",
    guidelines: [
      "Steep in boiling water for 5 minutes",
      "Serve with milk for a creamy experience",
      "Add sugar or honey to taste"
    ],
    benefits: [
      { name: "Warmth", icon: "🔥" },
      { name: "Invigorate", icon: "🌶️" }
    ]
  },
  {
    id: "5",
    name: "Butterfly Pea Flower & Hibiscus Premium Herbal Tea",
    displayName: "Butterfly Pea Flower & Hibiscus",
    description: "A delightful blend of berries, including raspberry and blueberry, for a fruity and sweet experience. This tea is perfect for brightening your day.",
    shortDescription: "Fruity and sweet berry blend",
    sizes: {
      "80g": 399
      // "100g": 17.99,
      // "250g": 39.99
    },
    images: {
      hero: "/images/butterfly-hibiscus/hero.jpg",
      card: "/images/butterfly-hibiscus/card.jpg",
      details: [
        "/images/butterfly-hibiscus/1.jpg",
        "/images/butterfly-hibiscus/2.jpg",
        "/images/butterfly-hibiscus/3.jpg",
        "/images/butterfly-hibiscus/4.jpg",
        "/images/butterfly-hibiscus/5.jpg",
      ],
      translucent: "/images/berry-bliss-translucent.png"
    },
    amazonUrl: "https://www.amazon.in/dp/B0DJDCDJW4",
    slug: "butterfly-hibiscus",
    colorScheme: "#FF69B4",
    linkColorScheme: "#000000",
    radiantColor:"#ffffff",
    guidelines: [
      "Steep in hot water for 3-5 minutes",
      "Great served iced with a slice of lemon",
      "Perfect for kids and adults alike"
    ],
    benefits: [
      { name: "Refresh", icon: "🍓" },
      { name: "Antioxidants", icon: "🛡️" }
    ]
  },
  {
    id: "6",
    name: "Butterfly Pea Flower & Chamomile",
    displayName: "Butterfly Pea Flower & Chamomile",
    description: "A calming blend of green tea with jasmine and a hint of mint. This tea promotes relaxation and well-being, making it a perfect choice for mindfulness.",
    shortDescription: "Calming blend of green tea and jasmine",
    sizes: {
      "60g": 425
      // "100g": 26.99,
      // "250g": 54.99
    },
    images: {
      hero: "/images/butterfly-chamomile/hero.jpg",
      card: "/images/butterfly-chamomile/card.jpg",
      details: [
        "/images/butterfly-chamomile/1.jpg",
        "/images/butterfly-chamomile/2.jpg",
        "/images/butterfly-chamomile/3.jpg",
        "/images/butterfly-chamomile/4.jpg",
        "/images/butterfly-chamomile/5.jpg",
      ],
      translucent: "/images/butterfly-chamomile/translucent.png"
    },
    amazonUrl: "https://www.amazon.in/dp/B0DJDD74BG",
    slug: "butterfly-chamomile",
    colorScheme: "#8FBC8F",
    linkColorScheme: "#000000",
    radiantColor:"#ffffff",
    guidelines: [
      "Steep in water below boiling for 2-3 minutes",
      "Enjoy plain or with a splash of lemon",
      "Great for afternoon breaks"
    ],
    benefits: [
      { name: "Calm", icon: "🌿" },
      { name: "Focus", icon: "🧘" }
    ]
  }
];

// export const getProduct = async (slug: string): Promise<Product | undefined> => {
//   return products.find(product => product.slug === slug);
// };

export const getProduct = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getAllProducts = async (): Promise<Product[]> => {
  return products;
};

export async function getProducts(): Promise<Product[]> {
  // In a real application, this would fetch products from an API or database
  return products;
}