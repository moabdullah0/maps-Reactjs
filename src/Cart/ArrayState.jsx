import React, { useState } from "react";
import CarditemsCounter from "./CarditemsCounter";
import Cart from "./Cart";

const ArrayState = () => {
  const [cartItem, setCartItem] = useState([
    "prodcut 1",
    "prodcut 2",
    "prodcut 3",
  ]);
  const handleAdd = () => {
    setCartItem([...cartItem, "Product 4"]);
  };
  return (
    <div>
      <CarditemsCounter cartCount={cartItem.length} />
      <Cart cartItems={cartItem} />
      <button onClick={() => setCartItem([])}>Clear</button>
      <button onClick={handleAdd}>Add Item</button>
    </div>
  );
};

export default ArrayState;
