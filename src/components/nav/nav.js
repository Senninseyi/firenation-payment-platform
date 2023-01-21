import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cart, Logo, Menu } from "../../assets";
import { NavLinks } from "./navlinks";

export const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const cart = useSelector((state) => state.cart.carts);

  const getTotalCart = () => {
    let total = 0;
    cart.forEach((item) => {
      total = item.quantity;
    });
    return total;
  };

  const triggerOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="flex items-center bg-white fixed z-10 top-0 left-0 justify-center w-full">
      <div className="max-w-[105rem] w-full shadow-md h-16 px-6 flex justify-between items-center">
        <div>
          <Link to="/">
            <Logo width={60} height={60} />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <NavLinks open={openNav} />
          <Link to="/cart">
            <div className="relative inline-block">
              <Cart />
              <span
                className="absolute top-0 right-0 inline-flex items-center
             justify-center px-2 py-1 text-xs font-bold leading-none text-red-100
              transform translate-x-1/2 -translate-y-1/2 bg-secondary rounded-full"
              >
                {getTotalCart() || 0}
              </span>
              {/* <p></p> */}
            </div>
          </Link>
          <button className="lg:hidden" onClick={() => triggerOpenNav()}>
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
};
