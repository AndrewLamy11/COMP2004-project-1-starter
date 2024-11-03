// CartContainer.jsx
import React from "react";
import CartCard from "./CartCard";

const CartContainer = ({ cart, products, emptyCart }) => {
  const cartItems = Object.keys(cart).map((name) => {
    const product = products.find((p) => p.name === name);
    return { ...product, quantity: cart[name] };
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="CartCard">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartCard key={index} item={item} />
          ))}
          <p>Total: ${totalPrice}</p>
          <button onClick={emptyCart}>Empty Cart</button>
          <button className="BuyButton">Buy (${totalPrice})</button>
        </>
      )}
    </div>
  );
};

export default CartContainer;
