// GroceriesAppContainer.jsx
import React, { useState } from "react";
import NavBar from "./NavBar";
import products from "../data/products";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";

const GroceriesAppContainer = () => {
  const [cart, setCart] = useState({});

  const addToCart = (product, quantity) => {
    if (quantity <= 0) {
      alert("Please add a quantity before adding to the cart.");
      return;
    }
    setCart((prevCart) => ({
      ...prevCart,
      [product.name]: (prevCart[product.name] || 0) + quantity,
    }));
  };

  const emptyCart = () => setCart({});

  return (
    <div className="">
      <NavBar cart={cart} />
      <div className="GroceriesApp-Container">
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer cart={cart} products={products} emptyCart={emptyCart} />
      </div>
    </div>
  );
};

export default GroceriesAppContainer;
