import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>I am the CheckOut page</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span>➖</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>➕</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
