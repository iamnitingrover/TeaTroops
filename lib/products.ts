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

export const whatsappNumber = "1234567890";

export const products: Product[] = [
  {
    id: "1",
    name: "Lavender Serenity",
    description: "A soothing blend to calm your senses. This aromatic tea combines the gentle notes of lavender with a hint of chamomile, creating a perfect harmony that helps you unwind after a long day.",
    shortDescription: "A soothing blend to calm your senses",
    sizes: {
      "50g": 12.99,
      "100g": 22.99,
      "250g": 49.99
    },
    images: {
      hero: "/images/lavender-serenity-hero.jpg",
      card: "/images/lavender-serenity-card.jpg",
      details: [
        "/images/lavender-serenity-1.jpg",
        "/images/lavender-serenity-2.jpg",
        "/images/lavender-serenity-3.jpg",
      ],
      translucent: "/images/lavender-serenity-translucent.png"
    },
    amazonUrl: "https://www.amazon.com/your-product-url",
    slug: "lavender-serenity",
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
  // Add more products here...
];

export const getProduct = async (slug: string): Promise<Product | undefined> => {
  return products.find(product => product.slug === slug);
};

export const getAllProducts = async (): Promise<Product[]> => {
  return products;
};