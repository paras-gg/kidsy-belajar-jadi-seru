export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  category: 'ebook' | 'worksheet' | 'bundle';
  ageRange: string;
  pageCount: number;
  image: string;
  benefits: string[];
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  text: string;
  productName?: string;
  childAge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
