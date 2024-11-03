// CartCard.jsx
import React from "react";
import QuantityCounter from "./QuantityCounter";

const CartCard = ({ item }) => {
  const { name, price, quantity } = item;
  const subTotal = price * quantity;

  return (
    <div className="counter-container">
      <p>{name}</p>
      <p>Price: ${price}</p>
      <p>Subtotal: ${subTotal}</p>
      <QuantityCounter
        quantity={quantity}
        setQuantity={(newQuantity) => {}}
        min={1}
      />
      <button className="RemoveButton">Remove Item</button>
    </div>
  );
};

export default CartCard;
