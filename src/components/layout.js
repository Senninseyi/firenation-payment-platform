import React from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
