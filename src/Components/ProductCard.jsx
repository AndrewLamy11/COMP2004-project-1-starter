// ProductCard.jsx
import React, { useState } from "react";
import QuantityCounter from "./QuantityCounter";

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="ProductsContainer">
      <img src={product.image} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>{product.brand}</p>
      <p>{product.quantity}</p>
      <p>{product.price}</p>
      <QuantityCounter quantity={quantity} setQuantity={setQuantity} min={0} />
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
