import React from "react";
import { useDispatch } from "react-redux";
import { addQuantity, deleteCart, reduceQuantity } from "../../app/slices/cart";
import { Add, Delete, Subtract } from "../../assets";

const CardItems = ({ id, qty, image, name, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <img width={800} height={800} src={image} alt="itemsgraphic" />
      <div className="flex w-full bg-secondary rounded-b-md justify-around">
        <div className="flex flex-col p-4 gap-y-2">
          <h2 className="font-semibold text-white tracking-[0.065em]">
            Ticket Name : {name}
          </h2>
          <p className="tracking-[0.065em] text-white">{qty}</p>
          <p className="tracking-[0.065em] text-white">{price}</p>
        </div>
        <div className="flex mt-4 gap-3 items-start">
          <button
            className="flex gap-3 items-center py-2 px-3 bg-primary text-white rounded-md"
            onClick={() => dispatch(addQuantity(id))}
          >
            <Add /> add
          </button>
          <button
            className="flex gap-3 items-center py-2 px-3 bg-primary text-secondary hover:text-white rounded-md"
            onClick={() => dispatch(deleteCart(id))}
          >
            <Delete /> delete
          </button>
          <button
            className="flex gap-3 items-center py-2 px-3 bg-primary text-secondary hover:text-white rounded-md"
            onClick={() => dispatch(reduceQuantity(id))}
          >
            <Subtract /> subtract
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
