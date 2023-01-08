import React from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/card/cardItems";

const Cart = () => {
  const cart = useSelector((state) => state.carts);

  const getTotal = () => {
    let totalQty = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
      totalQty += item.quantity;
      totalPrice += item.price;
    });
    return { totalPrice, totalQty };
  };

  const quantity = <span>Total quantity : {getTotal().totalQty}</span>;

  const price = (
    <span>Total price : {getTotal().totalPrice * getTotal().totalQty}</span>
  );

  return (
    <div className="mt-24 flex justify-center w-full items-center">
      <div className="grid bg-white w-full max-w-4xl place-items-center gap-4">
        {cart?.map((_) => (
          <CartItems
            key={_.id}
            id={_.id}
            image={_.image}
            name={_.title}
            price={price}
            qty={quantity}
          />
        ))}

        {/* <div>
          <p>
            total ({getTotal().totalQty} items) :
            <strong>
              <span>₦</span>
              {}
            </strong>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
