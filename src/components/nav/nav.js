import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Cart, Logo, Menu } from "../../assets";
import { MobileNav } from "./mobilenav";
import { NavLinks } from "./navlinks";

export const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  console.log(openNav);

  const triggerOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="bg-white fixed top-0 left-0 w-full shadow-md h-16 px-6 flex justify-between items-center">
      <div>
        <Link to="/">
          <Logo width={60} height={60} />
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <NavLinks open={openNav} />
        <Link to="/cart">
          <Cart />
        </Link>
        <button className="lg:hidden" onClick={() => triggerOpenNav()}>
          <Menu />
        </button>
      </div>
    </div>
  );
};
