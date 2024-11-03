// ProductsContainer.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ products, addToCart }) => {
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductsContainer;
