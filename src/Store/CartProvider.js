import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const onAdding = (item) => {
    const idx = cart.findIndex((elem) => elem.id === item.id);
    let existingItem = cart[idx];
    if (existingItem) {
      let updatedItem = {
        ...existingItem,
        buttonClick: [...existingItem.buttonClick, ...item.buttonClick],
      };
      cart[idx] = updatedItem;
    } else {
      setCart((prevItems) => {
        return [...prevItems, item];
      });
    }
  };

  const cartItem = {
    items: cart,
    totalAmount: cart.totalAmount,
    addItem: onAdding,
  };

  return (
    <CartContext.Provider value={cartItem}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
