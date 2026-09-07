export type Category =
  | "cases-covers"
  | "tempered-glass"
  | "chargers-adapters"
  | "cables"
  | "tws-audio"
  | "power-banks"
  | "smartwatches"
  | "car-holders"
  | "repair-spares";

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  category: Category;
  brand: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  compatibleWith: string[];
  colors: string[];
  inStock: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
  description: string;
  specs: { label: string; value: string }[];
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface OrderAddress {
  fullName: string;
  phone: string;
  pincode: string;
  addressLine: string;
  city: string;
  state: string;
}
