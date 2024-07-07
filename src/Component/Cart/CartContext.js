
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartElements, setCartElements] = useState([]);

  useEffect(() => {
    const storedCartData = localStorage.getItem('cartData');
    if (storedCartData) {
      setCartElements(JSON.parse(storedCartData));
    }

  }, []);
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartElements));
  }, [cartElements]);


  const addToCart = (product) => {
    const existingCartItemIndex = cartElements.findIndex((item) => item.title === product.title);

    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cartElements];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCartElements(updatedCart);
    } else {
      setCartElements([...cartElements, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = cartElements.filter((_, i) => i !== index);
    setCartElements(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartElements, addToCart, removeFromCart, setCartElements }}>
      {children}
    </CartContext.Provider>
  );
}
