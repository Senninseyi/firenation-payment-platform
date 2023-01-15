import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, selectedItem } from "../../app/slices/cart";

function Items({ id, title, price, image }) {
  const cart = useSelector((state) => state.carts);

  console.log(cart);

  const dispatch = useDispatch();

  // const cartData = cart && cart.length ? cart[0] : [];

  const dispatchFiltered = () => {
    if (cart?.length > 0 && cart?.length < 1) {
      console.log("Select cart");
    } else {
      // alert("You have already selected a cart");
      dispatch(
        addCart({
          id,
          title,
          image,
          price,
        })
      );
    }
  };

  return (
    <div className="bg-white shadow-xl flex items-center justify-center flex-col gap-4">
      <img src={image} className="object-cover w-full h-full" alt="item" />
      <div className="flex items-start justify-between w-full p-4">
        <div className="flex flex-col">
          <p className="font-semibold tracking-[0.065em]">{title}</p>
          <p className="tracking-[0.065em]">
            {price}
          </p>
        </div>
        <button
          className="flex gap-x-2 lowercase bg-black text-white py-2 px-4 rounded-md hover:bg-secondary"
          onClick={() => dispatchFiltered()}
        >
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default Items;
