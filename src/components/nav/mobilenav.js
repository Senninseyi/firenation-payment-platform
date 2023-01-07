import React from "react";
import { NavLinks } from "./navlinks";

export const MobileNav = ({ open }) => {
  return (
    <ul
      
    >
      <div className="flex flex-col p-5 gap-4 w-full">
        <NavLinks />
      </div>
    </ul>
  );
};
