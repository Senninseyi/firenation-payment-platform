import React from "react";
import { Link } from "react-router-dom";

export const NavLinks = ({ open }) => {
  const links = [
    {
      link: "/",
      label: "get directions",
    },
    {
      link: "/",
      label: "contact",
    },
  ];

  return (
    <ul
      className={
        open
          ? `flex flex-col gap-y-8 p-8 h-auto  absolute top-[4rem] bg-black w-full left-0 lg:hidden`
          : `lg:flex-row gap-4 lg:flex hidden`
      }
    >
      {links.map((l, index) => (
        <li className="text-white lg:text-black" key={index}>
          <Link to={l.link}>{l.label}</Link>
        </li>
      ))}
    </ul>
  );
};
