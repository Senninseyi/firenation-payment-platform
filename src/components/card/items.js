import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../app/slices/cart";

function Items({ id, title, price, image }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 flex flex-col gap-4">
      <img src={image} className="w-36 h-36" alt="item" />
      <p>{title}</p>
      <p>
        <span>₦</span>
        {price}
      </p>
      <button
        onClick={() =>
          dispatch(
            addCart({
              id,
              title,
              image,
              price,
            })
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Items;
