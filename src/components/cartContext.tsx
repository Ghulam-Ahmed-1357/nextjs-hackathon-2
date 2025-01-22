"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { ProductData } from "@/types/data";

interface CartContextType {
  cart: ProductData[];
  setCart: React.Dispatch<React.SetStateAction<ProductData[]>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductData[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
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