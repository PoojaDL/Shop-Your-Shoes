import { useState } from "react";
import "./App.css";
import UserForm from "./Components/GetUsers/UserForm";
import DisplayItems from "./Components/ShowUsers/DisplayItems";
import React from "react";
// import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [items, setItems] = useState([]);

  const itemsList = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  return (
    <CartProvider>
      <UserForm onAdd={itemsList} />
      <DisplayItems items={items} />
      {/* <Cart /> */}
    </CartProvider>
  );
}

export default App;
