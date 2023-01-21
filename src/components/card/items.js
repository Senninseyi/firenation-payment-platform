import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, updatePrice } from "../../app/slices/cart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Items({ id, title, price, image }) {
  const cart = useSelector((state) => state.cart.carts);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  const dispatchFiltered = () => {
    let itemPrice = parseFloat(price.replace(/[₦,]/g, ""));
    dispatch(
      addCart({
        id,
        title,
        image,
        itemPrice,
      })
    );

    dispatch(updatePrice(itemPrice));
  };

  return (
    <div className="bg-white shadow-xl flex items-center justify-center flex-col gap-4">
      {image ? (
        <LazyLoadImage
          effect="blur"
          src={image}
          className="object-cover w-full h-full"
          alt="item"
        />
      ) : (
        <img
          src={image}
          className="object-cover w-full h-full"
          alt="item"
        />
      )}
      <div className="flex items-start justify-between w-full p-4">
        <div className="flex flex-col">
          <p className="font-semibold tracking-[0.065em]">{title}</p>
          <p className="tracking-[0.065em]">{price}</p>
        </div>
        <button
          className="flex gap-x-2 tracking-[0.065em] lowercase bg-black text-white py-2 px-4 rounded-md hover:bg-secondary"
          onClick={() => dispatchFiltered()}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Items;
