export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    sizes: string[];
    images: string[];
    amazonUrl: string;
    whatsappNumber: string;
  }
  
  export const getProduct = async (slug: string): Promise<Product | null> => {
    // In a real application, this would fetch data from an API or database
    const products: Record<string, Product> = {
      "hibiscus": {
        id: "1",
        name: "Hibiscus",
        description: "A soothing blend to calm your senses. This aromatic tea combines the gentle notes of lavender with a hint of chamomile, creating a perfect harmony that helps you unwind after a long day.",
        price: "INR 500",
        sizes: ["50g", "100g", "250g"],
        images: [
          "/images/hibiscus-1.jpg",
          "/images/hibiscus-2.jpg",
          "/images/hibiscus-3.jpg",
        ],
        amazonUrl: "https://www.amazon.com/your-product-url",
        whatsappNumber: "9758532379"
      },
      // Add more products here
    };
  
    return products[slug] || null;
  };