import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import CartItems from "../components/card/cardItems";

const Cart = () => {
  const cart = useSelector((state) => state.carts);

  const getTotal = () => {
    let totalQty = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
      totalQty += item.quantity;
      totalPrice += item.price.props.value;
    });

    return { totalPrice, totalQty };
  };

  const quantity = <span>Total quantity : {getTotal().totalQty}</span>;

  const price = getTotal().totalPrice * getTotal().totalQty;

  if (cart.length === 0) {
    return (
      <div className="mt-24">
        <p className="tracking-[0.065em]">No Cart</p>
      </div>
    );
  }

  return (
    <div className="mt-24 flex justify-center gap-4 w-full items-center">
      <div className="grid w-full max-w-4xl bg-white place-items-center gap-4">
        {cart?.map((_) => (
          <CartItems
            key={_.id}
            id={_.id}
            image={_.image}
            name={_.title}
            price={
              <>
                <span>
                  Price is{" "}
                  <CurrencyFormat
                    value={price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                  />
                </span>
              </>
            }
            qty={quantity}
          />
        ))}
        <button className="bg-primary text-white w-fit mb-6 px-4 py-2 tracking-[0.065em] rounded-md">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
