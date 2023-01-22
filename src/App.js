import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Cart from "./modules/cart";
import Home from "./modules/home";

import ReactGA from "react-ga";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-000000-01");
    ReactGA.pageview(window.location.pathname + window.location.search);

    TagManager.initialize({
      gtmId: "G-EQXPEWJR7D",
    })
  }, []);
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="cart" />
      </Routes>
    </Layout>
  );
}

export default App;
