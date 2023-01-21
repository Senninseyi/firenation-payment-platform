import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../components/card/cardItems";
import { showModal, hideModal } from "../app/slices/modal";
import { useNavigate } from "react-router-dom";

import { PaymentForm } from "../components/form/form";
import { Logo } from "../assets";
import { CloseCircleOutlined } from "@ant-design/icons";

const Cart = () => {
  const modal = useSelector((state) => state.modal.modals);
  const cart = useSelector((state) => state.cart.carts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

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
      <div className="mt-24 flex justify-center items-center flex-col gap-8">
        <p className="tracking-[0.065em]">No Cart</p>
        <button
          className="tracking-[0.065em] bg-secondary px-5 py-3 rounded-md
         shadow-md font-medium text-white"
          onClick={() => navigate("/")}
        >
          Go buy your tickets
        </button>
      </div>
    );
  }

  return (
    <div className="mt-24 flex justify-center flex-col gap-4 w-full items-center">
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
          className="bg-primary text-white w-fit px-4 py-2 tracking-[0.065em] rounded-md"
        >
          Proceed to checkout
        </button>
      </div>

      {modal && (
        <div
          className={
            modal
              ? "bg-black border-2 rounded-md shadow w-full max-w-3xl grid place-items-center"
              : ""
          }
        >
          <div className="flex w-full justify-center flex-col p-6 items-center gap-4">
            <div className=" flex w-full justify-between  items-center">
              <div className="bg-opacity-60 rounded-full">
                <Logo width={50} />
              </div>
              <button
                className="text-black text-2xl rounded-full leading-none p-1 flex items-center bg-secondary"
                onClick={() => dispatch(hideModal())}
              >
                <CloseCircleOutlined width={36} height={36} />
              </button>
            </div>
            <PaymentForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
