import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../app/slices/cart";

function Items({ id, title, price, image }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-md shadow-xl flex items-center justify-center flex-col gap-4">
      <img src={image} className="w-36 h-36" alt="item" />
      <p className="font-semibold text-center">{title}</p>
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
