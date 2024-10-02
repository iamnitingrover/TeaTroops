export interface Product {
  id: string;
  name: string;
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
  guidelines: string[];
  benefits: Array<{
    name: string;
    icon: string;
  }>;
}

//export const whatsappNumber = "9990033206";
export const whatsappNumber = "9758532379";

export const products: Product[] = [
  {
    id: "1",
    name: "Himalayan Lavender Premium Herbal Tea",
    description: "A soothing blend to calm your senses. This aromatic tea combines the gentle notes of lavender with a hint of chamomile, creating a perfect harmony that helps you unwind after a long day.",
    shortDescription: "A soothing blend to calm your senses",
    sizes: {
      "50g": 12.99,
      "100g": 22.99,
      "250g": 49.99
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
    amazonUrl: "https://www.amazon.com/your-product-url",
    slug: "lavender",
    colorScheme: "#E6E6FA",
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
    description: "A vibrant fusion of orange and lemon with a hint of ginger, this tea is perfect for a refreshing pick-me-up. Enjoy its invigorating flavor any time of the day.",
    shortDescription: "A vibrant fusion of orange and lemon",
    sizes: {
      "50g": 10.99,
      "100g": 19.99,
      "250g": 42.99
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
    amazonUrl: "https://www.amazon.com/your-product-url",
    slug: "hibiscus",
    colorScheme: "#B6316C",
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
    description: "Experience a refreshing burst of peppermint and spearmint in this revitalizing tea. Perfect for cooling down on a hot day or invigorating your senses.",
    shortDescription: "Refreshing burst of peppermint and spearmint",
    sizes: {
      "50g": 11.99,
      "100g": 20.99,
      "250g": 45.99
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
    amazonUrl: "https://www.amazon.com/your-product-url",
    slug: "chamomile",
    colorScheme: "#E9DBC4",
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
    description: "Indulge in the warm spices of cinnamon, cardamom, and cloves blended with black tea. This chai is perfect for those who enjoy a robust flavor profile.",
    shortDescription: "Warm spices blended with black tea",
    sizes: {
      "50g": 13.99,
      "100g": 24.99,
      "250g": 52.99
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
    amazonUrl: "https://www.amazon.com/your-product-url",
    slug: "butterfly",
    colorScheme: "#4142b8",
    guidelines: [
      "Steep in boiling water for 5 minutes",
      "Serve with milk for a creamy experience",
      "Add sugar or honey to taste"
    ],
    benefits: [
      { name: "Warmth", icon: "🔥" },
      { name: "Invigorate", icon: "🌶️" }
    ]
  }
  /*{
    id: "5",
    name: "Berry Bliss",
    description: "A delightful blend of berries, including raspberry and blueberry, for a fruity and sweet experience. This tea is perfect for brightening your day.",
    shortDescription: "Fruity and sweet berry blend",
    sizes: {
      "50g": 9.99,
      "100g": 17.99,
      "250g": 39.99
    },
    images: {
      hero: "/images/berry-bliss-hero.jpg",
      card: "/images/berry-bliss-card.jpg",
      details: [
        "/images/berry-bliss-1.jpg",
        "/images/berry-bliss-2.jpg",
        "/images/berry-bliss-3.jpg",
      ],
      translucent: "/images/berry-bliss-translucent.png"
    },
    amazonUrl: "https://www.amazon.com/your-product-url",
    slug: "berry-bliss",
    colorScheme: "#FF69B4",
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
    name: "Green Harmony",
    description: "A calming blend of green tea with jasmine and a hint of mint. This tea promotes relaxation and well-being, making it a perfect choice for mindfulness.",
    shortDescription: "Calming blend of green tea and jasmine",
    sizes: {
      "50g": 14.99,
      "100g": 26.99,
      "250g": 54.99
    },
    images: {
      hero: "/images/green-harmony-hero.jpg",
      card: "/images/green-harmony-card.jpg",
      details: [
        "/images/green-harmony-1.jpg",
        "/images/green-harmony-2.jpg",
        "/images/green-harmony-3.jpg",
      ],
      translucent: "/images/green-harmony-translucent.png"
    },
    amazonUrl: "https://www.amazon.com/your-product-url",
    slug: "green-harmony",
    colorScheme: "#8FBC8F",
    guidelines: [
      "Steep in water below boiling for 2-3 minutes",
      "Enjoy plain or with a splash of lemon",
      "Great for afternoon breaks"
    ],
    benefits: [
      { name: "Calm", icon: "🌿" },
      { name: "Focus", icon: "🧘" }
    ]
  }*/
];

export const getProduct = async (slug: string): Promise<Product | undefined> => {
  return products.find(product => product.slug === slug);
};

export const getAllProducts = async (): Promise<Product[]> => {
  return products;
};