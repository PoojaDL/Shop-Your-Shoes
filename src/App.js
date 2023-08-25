import { useState } from "react";
import "./App.css";
import UserForm from "./Components/GetUsers/UserForm";
import DisplayItems from "./Components/ShowUsers/DisplayItems";
import React from "react";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);

  const itemsList = (item) => {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
  };

  const changed = (canLoad) => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
    setLoad(canLoad);
  };

  // eslint-disable-next-line
  load;

  return (
    <CartProvider>
      <UserForm onAdd={itemsList} />
      <DisplayItems onchange={changed} items={items} />
      <Cart />
    </CartProvider>
  );
}

export default App;
