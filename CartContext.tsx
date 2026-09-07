"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartItem, Product } from "@/lib/types";
import { getAllProducts } from "@/lib/products";

interface CartContextValue {
  items: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  cartProducts: { product: Product; quantity: number }[];
  lastAdded: string | null;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "bharat-mobile-hub-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  // Load cart from localStorage on first mount (client only)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  // Persist cart whenever it changes
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage might be unavailable (private browsing, quota, etc.)
    }
  }, [items, hydrated]);

  const addToCart = (productId: string, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { productId, quantity }];
    });
    setLastAdded(productId);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) => prev.map((i) => (i.productId === productId ? { ...i, quantity } : i)));
  };

  const clearCart = () => setItems([]);

  const allProducts = useMemo(() => getAllProducts(), []);

  const cartProducts = useMemo(
    () =>
      items
        .map((i) => {
          const product = allProducts.find((p) => p.id === i.productId);
          return product ? { product, quantity: i.quantity } : null;
        })
        .filter((v): v is { product: Product; quantity: number } => v !== null),
    [items, allProducts]
  );

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cartProducts.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        cartProducts,
        lastAdded
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
