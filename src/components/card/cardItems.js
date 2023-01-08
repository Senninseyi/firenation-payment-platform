import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, deleteCart, reduceQuantity } from "../../app/slices/cart";
import { Add, Delete, Subtract } from "../../assets";

const CardItems = ({ id, qty, image, name, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4">
      <img className="w-60" src={image} alt="itemsgraphic" />
      <div className="flex w-full flex-col items-start gap-y-2">
        <h2 className="font-semibold">Ticket Name : {name}</h2>
        <p>{qty}</p>
        <p>
         {price}
        </p>
        <div className="flex mt-4 gap-3 w-full items-center">
          <button onClick={() => dispatch(addQuantity(id))}>
            <Add />
          </button>
          <button onClick={() => dispatch(deleteCart(id))}>
            <Delete />
          </button>
          <button onClick={() => dispatch(reduceQuantity(id))}>
            <Subtract />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
