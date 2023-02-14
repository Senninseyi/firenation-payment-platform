import React from "react";
import { Nav } from "./nav/nav";
import { Footer } from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex items-center h-full flex-col justify-center">
      <div className="w-full max-w-[105rem]">
        <Nav />
        <main className="px-8 py-3 w-full h-full min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
