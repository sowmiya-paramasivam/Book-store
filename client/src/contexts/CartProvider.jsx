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

  // Add or increment quantity
  const addToCart = (book) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item._id === book._id);
      if (existing) {
        return prevCart.map((item) =>
          item._id === book._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  // Decrement quantity or remove if 0
  const decrement = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Increment quantity
  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Remove item entirely
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
    <CartContext.Provider
      value={{cart, addToCart,removeFromCart,increment,decrement,clearCart,orders,placeOrder,}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
