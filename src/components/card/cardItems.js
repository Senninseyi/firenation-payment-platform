import React from "react";
import { useDispatch } from "react-redux";
import { addQuantity, deleteCart, reduceQuantity } from "../../app/slices/cart";

const CardItems = ({ id, qty = 0, image, name, price }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{qty}</p>
      <img src={image} alt="itemsgraphic" />
      <div>
        <h2>{name}</h2>
        <p>
          <span>₦</span>
          {price}
        </p>
      </div>
      <div className="flex gap-3 w-full items-center">
        <button onClick={() => dispatch(addQuantity(id))}>+</button>
        <button onClick={() => dispatch(deleteCart(id))}>delete</button>
        <button onClick={() => dispatch(reduceQuantity(id))}>-</button>
      </div>
    </div>
  );
};

export default CardItems;
