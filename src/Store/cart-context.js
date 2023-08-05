import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  updateItem: (size) => {},
});

export default CartContext;
