import React from "react";

const NavBar = ({ cart }) => {
  const isCartFull = Object.keys(cart).length > 0;

  return (
    <nav className="NavBar">
      <span className="NavUser">Hello, User!</span>
      <h1 className="NavTitle">Grocery Store</h1>
      <div className="NavCart">
        {
          <img
            src={
              isCartFull ? "srcassetscart-full.png" : "srcassetscart-empty.png"
            }
            alt={isCartFull ? "Cart Full" : "Empty Cart"}
          />
        }
      </div>
    </nav>
  );
};

export default NavBar;
