import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../components/card/cardItems";
import { Modal } from "../components/modal/modal";
import { showModal, hideModal } from "../app/slices/modal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const modal = useSelector((state) => state.modal.modals);
  const cart = useSelector((state) => state.cart.carts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // console.log(cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const triggerModal = () => {
    dispatch(showModal());
  };

  let nairaCurrency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "symbol",
  });

  if (cart.length === 0) {
    return (
      <div className="mt-24">
        <p className="tracking-[0.065em]">No Cart</p>
        <button onClick={() => navigate("/")}>Go buy your tickets</button>
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
                <span>Total Price : {nairaCurrency.format(totalPrice)}</span>
              </>
            }
            qty={
              <>
                <span>Total quantity : {_.quantity}</span>
              </>
            }
          />
        ))}
        <button
          onClick={() => triggerModal()}
          className="bg-primary text-white w-fit mb-6 px-4 py-2 tracking-[0.065em] rounded-md"
        >
          Proceed to checkout
        </button>
      </div>

      {modal && <Modal open={modal} close={() => dispatch(hideModal())} />}
    </div>
  );
};

export default Cart;
