// QuantityCounter.jsx
import React from "react";

const QuantityCounter = ({ quantity, setQuantity, min }) => {
  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(Math.max(min, quantity - 1));

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default QuantityCounter;
