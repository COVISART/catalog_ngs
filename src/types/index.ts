export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  specifications: {
    [key: string]: string;
  };
  features: string[];
  applications: string[];
}

export type Language = 'en' | 'tr';

export interface ComparisonState {
  product1: string | null;
  product2: string | null;
  setProduct1: (id: string | null) => void;
  setProduct2: (id: string | null) => void;
  reset: () => void;
}
