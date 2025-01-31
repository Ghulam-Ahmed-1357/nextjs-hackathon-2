// context/CartContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { ProductData } from "@/types/data";

export interface CartItem extends ProductData {
    quantity: number;
  }

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductData, quantity:number) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductData, quantity:number) => {
    setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item._id === product._id);
        if (existingProduct) {
          // Update quantity if the product already exists
          return prevCart.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          // Add new product with quantity
          return [...prevCart, { ...product, quantity }];
        }
      });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
