import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const onAdding = (item) => {
    const isOld = cart.findIndex((curitem) => {
      return curitem.id === item.id;
    });
    if (isOld) {
    } else {
      setCart((prevState) => [...prevState, item]);
    }
  };

  const onUpdating = (sizes) => {
    console.log(sizes);
    console.log();
  };

  const cartItem = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: onAdding,
    updateItem: onUpdating,
  };

  return (
    <CartContext.Provider value={cartItem}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
