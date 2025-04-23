import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState(() => {
    return JSON.parse(localStorage.getItem("orders")) || [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };
  
  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (items) => {
    const newOrder = {
      id: Date.now().toString(), 
      items,
      createdAt: new Date().toISOString(),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]);
    return newOrder; 
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, orders, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; 
